webpackJsonp([19],{RmsW:function(e,t){},SxZy:function(e,t){},Xwfy:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r("woOf"),s=r.n(a),l=r("mvHQ"),i=r.n(l),o=r("gBtx"),n=r.n(o),c=r("3Xzz"),d=r("fZjL"),u=r.n(d),h={name:"set-permiss-data",components:{},props:{value:{type:[Object,Array],default:function(){return[]}},title:{type:String}},data:function(){return{defaultSelection:this.value||[]}},methods:{delCurrent:function(e,t){t.splice(e,1)},updateList:function(e){this.$emit("input",e)},handleSelectedList:function(e){},showSelector:function(){this.$emit("showSelect")}},watch:{value:function(e,t){this.defaultSelection=e}},mounted:function(){this.defaultSelection=this.value}},m={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"select-area"},[r("div",{staticClass:"setting-name",staticStyle:{"font-size":"14px",color:"#606266"}},[e._v("\n    "+e._s(e.title)+"\n  ")]),e._v(" "),r("ul",{staticClass:"particular-list"},[e._l(e.defaultSelection,function(t,a){return[1==t.type?r("li",{key:a+"_"+t.employeeClerkId,staticClass:"item person-item"},[r("div",{class:["img-wrap","flex","flex-align-center","flex-pack-center",t.headPic?"":"img-wrap-bg"]},[t.headPic?r("img",{attrs:{src:t.headPic,alt:"headPic"}}):r("i",{staticClass:"iconfont icon-yewuduanmorentouxian"}),e._v(" "),r("i",{staticClass:"el-icon-circle-close",on:{click:function(t){e.delCurrent(a,e.defaultSelection)}}})]),e._v(" "),r("p",{staticClass:"name"},[e._v(e._s(t.name||t.label))])]):e._e(),e._v(" "),2==t.type||3==t.type?r("li",{key:a+"_"+t.groupId,staticClass:"item group-item"},[e._v("\n        "+e._s(t.name||t.label)+"\n        "),r("i",{staticClass:"el-icon-circle-close",on:{click:function(t){e.delCurrent(a,e.defaultSelection)}}})]):e._e()]}),e._v(" "),r("li",{staticClass:"item J_add-btn flex flex-align-center flex-pack-center",on:{click:e.showSelector}},[r("i",{staticClass:"el-icon-plus"})])],2)])},staticRenderFns:[]};var f=r("VU/8")(h,m,!1,function(e){r("gvjp")},null,null).exports,p=r("c4uw"),v=r("Ie7z"),g=r("3E4D"),b=r("Ch4/"),S=r("PI0u"),C=r("P9l9"),k={name:"",props:{authData:{type:[Object,Array],default:function(){return{}}},permType:{type:[Number,String]}},data:function(){return{projectName:"",ruleForm:{radio:1,visibleAll:[],visibleStoreAll:[]},treeSet:{isSelectPerson:!0,dialogVisible:!1,isSingle:!1},treeData:{},defaultSelection:[],onlyPerson:!1,changed:"",defaultStoreList:[],storeTreeSet:{isSelectPerson:!1,dialogVisible:!1,isSingle:!1}}},beforeMount:function(){var e=window.location.origin;"-1"!=e.indexOf("localhost")?this.baseUrl="http://www.gicdev.com":this.baseUrl=e},methods:{changeRadio:function(e){this.ruleForm.visibleAll=[],this.ruleForm.visibleStoreAll=[]},submitForm:Object(S.a)(function(e){var t=this;t.$refs[e].validate(function(e){if(!e)return!1;var r={allowCherkIds:[],allowDepartIds:[],allowStoreIds:[],brandId:t.ruleForm.brandId,groupId:t.ruleForm.groupId,radio:t.ruleForm.radio};3!=t.ruleForm.radio||t.ruleForm.visibleAll.length||t.ruleForm.visibleStoreAll.length?(3==t.ruleForm.radio&&(t.ruleForm.visibleAll.forEach(function(e,t){e.hasOwnProperty("employeeClerkId")?r.allowCherkIds.push(e.employeeClerkId):e.hasOwnProperty("groupId")?r.allowDepartIds.push(e.groupId):1===n()(e.type)?r.allowCherkIds.push(e.id):2===n()(e.type)&&r.allowDepartIds.push(e.id)}),t.ruleForm.visibleStoreAll.forEach(function(e,t){e.hasOwnProperty("employeeClerkId")?r.allowCherkIds.push(e.employeeClerkId):e.hasOwnProperty("groupId")?r.allowDepartIds.push(e.groupId):e.hasOwnProperty("storeId")?r.allowStoreIds.push(e.storeId):1===n()(e.type)?r.allowCherkIds.push(e.id):2===n()(e.type)?r.allowDepartIds.push(e.id):3===n()(e.type)&&r.allowStoreIds.push(e.id)})),t.setStoreAuth(r,t.permType)):t.$message.error({duration:1e3,message:"请选择指定部门/人员"})})},400),setStoreAuth:function(e,t){var r=this,a={type:t,brandId:e.brandId,groupId:e.groupId,storeEmployeeAuth:e.radio,storeManagerAuth:e.radio,allowCherkIds:e.allowCherkIds.join(","),allowDepartIds:e.allowDepartIds.join(","),allowStoreIds:e.allowStoreIds.join(",")};Object(C.e)("/haoban-manage-web/brand/saveStoreAuth",a).then(function(e){var r=e.data;if(1==r.errorCode)return 2==t&&g.a.showmsg("保存成功","success"),!1;b.a.errorMsg(r)}).catch(function(e){r.$message.error({duration:1e3,message:e.message})})},handleAuthData:function(e){var t=this;u()(e).length&&(t.ruleForm.brandId=e.brandId,t.ruleForm.groupId=e.groupId,1===n()(t.permType)&&(t.ruleForm.radio=e.brandDTO.storeEmployeeAuth||1,e.employeeAuthList.length&&e.employeeAuthList.forEach(function(e,t){2===n()(e.type)&&(e.groupId=e.id),e.label=e.name}),t.ruleForm.visibleAll=[],t.ruleForm.visibleStoreAll=[],e.employeeAuthList.forEach(function(e,r){e.isStore?t.ruleForm.visibleStoreAll.push(e):t.ruleForm.visibleAll.push(e)}),t.defaultSelection=t.ruleForm.visibleAll,t.defaultStoreList=t.ruleForm.visibleStoreAll),2===n()(t.permType)&&(t.ruleForm.radio=e.brandDTO.storeManagerAuth||1,e.managerAuthList.length&&e.managerAuthList.forEach(function(e,t){2===n()(e.type)&&(e.groupId=e.id),e.label=e.name}),t.ruleForm.visibleAll=[],t.ruleForm.visibleStoreAll=[],e.managerAuthList.forEach(function(e,r){e.isStore?t.ruleForm.visibleStoreAll.push(e):t.ruleForm.visibleAll.push(e)}),t.defaultSelection=t.ruleForm.visibleAll,t.defaultStoreList=t.ruleForm.visibleStoreAll))},showSelect:function(e){if("store"===e)return this.defaultStoreList=this.ruleForm.visibleStoreAll,void(this.storeTreeSet={dialogVisible:!0,isSingle:!1,isSelectPerson:!0});this.treeSet={dialogVisible:!0,isSingle:!1,isSelectPerson:!0},this.defaultSelection=this.ruleForm.visibleAll},handleSelectedList:function(e){this.defaultSelection=e,this.ruleForm.visibleAll=e},handleSelectedStoreList:function(e){this.defaultStoreList=e,this.ruleForm.visibleStoreAll=e},getDepartData:function(e){var t=this;Object(C.e)("/haoban-manage-web/dept/deptListForCompany",{}).then(function(e){var r=e.data;if(1!=r.errorCode)b.a.errorMsg(r);else if(r.result){var a=[],s=[];1==e.data.errorCode&&(a=e.data.result.departmentList||[],s=e.data.result.searchList||[]),t.treeData={treeData:a,personData:s},t.$forceUpdate()}else t.$message.error({duration:1e3,message:"暂无数据"})}).catch(function(e){t.$message.error({duration:1e3,message:e.message})})}},watch:{authData:function(e,t){this.handleAuthData(e)}},mounted:function(){this.handleAuthData(this.authData),this.getDepartData()},components:{setPermissData:f,vueSelectEmployee:p.a,vueSelectStore:v.a}},w={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"permiss-wrap"},[r("el-form",{ref:"ruleForm",attrs:{"label-width":"110px",model:e.ruleForm}},[r("el-radio-group",{on:{change:e.changeRadio},model:{value:e.ruleForm.radio,callback:function(t){e.$set(e.ruleForm,"radio",t)},expression:"ruleForm.radio"}},[r("el-form-item",{attrs:{label:1==e.permType?"店员可见权限":"店长可见权限"}},[r("el-radio",{attrs:{label:1}},[e._v("可见所有品牌门店架构和行政架构")])],1),e._v(" "),r("el-form-item",{attrs:{label:" "}},[r("el-radio",{attrs:{label:2}},[e._v("门店仅可见自己门店")])],1),e._v(" "),r("el-form-item",{attrs:{label:" "}},[r("el-radio",{attrs:{label:3}},[e._v("自定义可见权限")])],1),e._v(" "),3==e.ruleForm.radio?r("div",{staticClass:"permiss-child-cell"},[r("setPermissData",{attrs:{title:"允许行政架构可见"},on:{showSelect:function(t){e.showSelect("depart")}},model:{value:e.ruleForm.visibleAll,callback:function(t){e.$set(e.ruleForm,"visibleAll",t)},expression:"ruleForm.visibleAll"}}),e._v(" "),r("setPermissData",{attrs:{title:"允许门店架构可见"},on:{showSelect:function(t){e.showSelect("store")}},model:{value:e.ruleForm.visibleStoreAll,callback:function(t){e.$set(e.ruleForm,"visibleStoreAll",t)},expression:"ruleForm.visibleStoreAll"}})],1):e._e()],1)],1),e._v(" "),r("vue-select-employee",{attrs:{defaultSelection:e.defaultSelection,treeSet:e.treeSet,onlyPerson:e.onlyPerson,changed:e.changed},on:{handleSelectedList:e.handleSelectedList}}),e._v(" "),r("vue-select-store",{ref:"storeSelector",attrs:{treeSet:e.storeTreeSet,selectType:"all",defaultList:e.defaultStoreList},on:{handleSelectedList:e.handleSelectedStoreList}})],1)},staticRenderFns:[]};var I=r("VU/8")(k,w,!1,function(e){r("SxZy")},"data-v-194844d0",null).exports,y={name:"storePermission",data:function(){return{navpath:[{name:"首页",path:"/index"},{name:"设置",path:"/companyAddress"},{name:"通讯录信息",path:"/staffDetails"},{name:"门店权限设置",path:""}],activeName:"",brandList:[],switchList:{addName:"新增门店成员",addStoreClerkCheck:!1,delName:"删除门店成员",deleteStoreClerkCheck:!1,modName:"门店信息变更",storeInformationChangeCheck:!1}}},computed:{},methods:{handleClick:function(e,t){this.getStoreAuth(e.name,n()(e.index)),this.activeName=e.name},saveSwitch:Object(S.a)(function(){var e=JSON.parse(i()(this.switchList));e.addStoreClerkCheck=1==e.addStoreClerkCheck?1:0,e.deleteStoreClerkCheck=1==e.deleteStoreClerkCheck?1:0,e.storeInformationChangeCheck=1==e.storeInformationChangeCheck?1:0,this.setStoreAuth(e)},600),saveAll:Object(S.a)(function(){var e=this;if(3==e.$refs.clerkPermiss.ruleForm.radio&&!e.$refs.clerkPermiss.ruleForm.visibleAll.length&&!e.$refs.clerkPermiss.ruleForm.visibleStoreAll.length)return e.$message.error({duration:1e3,message:"请选择指定部门/人员"}),!1;if(3==e.$refs.clerkManagePermiss.ruleForm.radio&&!e.$refs.clerkManagePermiss.ruleForm.visibleAll.length&&!e.$refs.clerkManagePermiss.ruleForm.visibleStoreAll.length)return e.$message.error({duration:1e3,message:"请选择指定部门/人员"}),!1;e.$refs.clerkPermiss.submitForm("ruleForm");var t=setTimeout(function(){e.$refs.clerkManagePermiss.submitForm("ruleForm"),clearTimeout(t)},500)},500),setStoreAuth:function(e){var t=this,r={brandId:e.brandId,groupId:t.activeName,addStoreClerkCheck:e.addStoreClerkCheck,deleteStoreClerkCheck:e.deleteStoreClerkCheck,storeInformationChangeCheck:e.storeInformationChangeCheck};Object(C.e)("/haoban-manage-web/brand/saveStoreAuth",r).then(function(e){var t=e.data;1!=t.errorCode?b.a.errorMsg(t):g.a.showmsg("保存成功","success")}).catch(function(e){t.$message.error({duration:1e3,message:e.message})})},getStoreAuth:function(e,t){var r=this,a={groupId:e};Object(C.e)("/haoban-manage-web/brand/storeAuth",a).then(function(e){var t=e.data;if(1!=t.errorCode)b.a.errorMsg(t);else if(t.result){r.brandList.clerkData=t.result,r.brandList.managerData=t.result;var a=t.result.brandDTO;a.addStoreClerkCheck=1==a.addStoreClerkCheck,a.deleteStoreClerkCheck=1==a.deleteStoreClerkCheck,a.storeInformationChangeCheck=1==a.storeInformationChangeCheck,r.switchList=s()(r.switchList,a),r.$forceUpdate()}}).catch(function(e){r.$message.error({duration:1e3,message:e.message})})},getBrandData:function(){var e=this;Object(C.e)("/haoban-manage-web/brand/list",{}).then(function(t){var r=t.data;1!=r.errorCode?b.a.errorMsg(r):r.result&&r.result.length&&(e.brandList=r.result,e.activeName=r.result[0].groupId,e.getStoreAuth(r.result[0].groupId,0))}).catch(function(t){e.$message.error({duration:1e3,message:t.message})})}},mounted:function(){this.getBrandData()},components:{navCrumb:c.a,setPermiss:I}},A={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"storePermission-wrap common-set-wrap"},[r("nav-crumb",{attrs:{navpath:e.navpath}}),e._v(" "),r("div",{staticClass:"right-content"},[r("div",{staticClass:"right-box",staticStyle:{background:"unset",padding:"0"}},[r("el-tabs",{on:{"tab-click":e.handleClick},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[e._l(e.brandList,function(e,t){return[r("el-tab-pane",{key:"name"+t,attrs:{label:e.name,name:e.groupId}})]})],2),e._v(" "),r("div",{staticClass:"storePermission-title font-w-500"},[e._v("\n        门店成员通讯录可见权限\n      ")]),e._v(" "),e.brandList.length?r("div",{staticClass:"bg-fff permiss-contain"},[r("set-permiss",{ref:"clerkPermiss",attrs:{permType:1,authData:e.brandList.clerkData}}),e._v(" "),r("div",{staticClass:"b-l"}),e._v(" "),r("set-permiss",{ref:"clerkManagePermiss",attrs:{permType:2,authData:e.brandList.managerData}}),e._v(" "),r("div",{staticClass:"switch-cell p-l-110 m-t-15"},[r("el-button",{attrs:{type:"primary"},on:{click:e.saveAll}},[e._v("保 存")])],1)],1):e._e(),e._v(" "),e.brandList.length?r("div",{staticClass:"storePermission-wrap-switch m-t-24"},[r("div",{staticClass:"storePermission-switch-title font-w-500"},[e._v("\n          门店信息变更是否需要审核\n        ")]),e._v(" "),r("div",{staticClass:"storePermission-switch-body"},[r("div",{staticClass:"switch-cell"},[r("el-switch",{attrs:{"inactive-text":e.switchList.addName},model:{value:e.switchList.addStoreClerkCheck,callback:function(t){e.$set(e.switchList,"addStoreClerkCheck",t)},expression:"switchList.addStoreClerkCheck"}})],1),e._v(" "),r("div",{staticClass:"switch-cell"},[r("el-switch",{attrs:{"inactive-text":e.switchList.delName},model:{value:e.switchList.deleteStoreClerkCheck,callback:function(t){e.$set(e.switchList,"deleteStoreClerkCheck",t)},expression:"switchList.deleteStoreClerkCheck"}})],1),e._v(" "),r("div",{staticClass:"switch-cell"},[r("el-switch",{attrs:{"inactive-text":e.switchList.modName},model:{value:e.switchList.storeInformationChangeCheck,callback:function(t){e.$set(e.switchList,"storeInformationChangeCheck",t)},expression:"switchList.storeInformationChangeCheck"}})],1),e._v(" "),r("div",{staticClass:"switch-cell p-l-94"},[r("el-button",{attrs:{type:"primary"},on:{click:e.saveSwitch}},[e._v("保 存")])],1)])]):e._e()],1)]),e._v(" "),r("vue-gic-footer")],1)},staticRenderFns:[]};var F=r("VU/8")(y,A,!1,function(e){r("RmsW")},"data-v-a3d5f8a8",null);t.default=F.exports},gvjp:function(e,t){}});