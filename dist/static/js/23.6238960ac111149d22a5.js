webpackJsonp([23],{"3dLr":function(t,e){},Z46G:function(t,e){},Zyzf:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("//Fk"),s=a.n(i),o=a("gBtx"),n=a.n(o),l=a("3Xzz"),c=a("PI0u"),r=a("P9l9"),d=a("3E4D"),f=a("Ch4/"),u={name:"staff-detail-field",props:{showCustomDialog:{type:Boolean,default:!1},detailData:{type:Array,default:function(){return[]}},dataType:{type:Number,default:1}},data:function(){return{repProjectName:"gic-web",customDialog:!1,fixData:["clerkName","clerkPhone","groupName","positionName"],fixDataStore:["clerkName","clerkPhone","groupName","positionName","clerkCode"],customData:[],checkList:[],setList:[],baseUrl:""}},beforeMount:function(){var t=window.location.origin;"-1"!=t.indexOf("localhost")?this.baseUrl="http://gicdev.demogic.com":this.baseUrl=t},computed:{},methods:{handleCardClose:function(){this.customCancel()},customCancel:function(){this.customDialog=!1,this.$emit("customHandleConfirm","hide")},customConfirm:Object(c.a)(function(){this.checkList=this.customData.map(function(t){return t.checkList}).flat(),this.saveFields(this.dataType)},500),customChange:function(t){},saveFields:function(t){var e=this,a={fields:e.checkList,type:t};Object(r.e)("/haoban-manage-web/record/employee-show-field-save.json",a).then(function(t){var a=t.data;if(1==a.errorCode)return d.a.showmsg("添加成功","success"),void e.$emit("customHandleConfirm");f.a.errorMsg(a)}).catch(function(t){console.log(t),e.$message.error({duration:1e3,message:t.message})})},treeData:function(t){var e=t.filter(function(e){var a=t.filter(function(t){return e.fieldCode==t.parentCode});return a.length>0&&(e.children=a),0==e.parentCode});return e.sort(function(t,e){return t.sort-e.sort}),e.forEach(function(t,e){t.children.sort(function(t,e){return t.sort-e.sort})}),e},getInfo:function(){var t=this;t.setList=[],Object(r.e)("/haoban-manage-web/record/employee-find-template.json",{}).then(function(e){var a=e.data;1!=a.errorCode?f.a.errorMsg(a):a.result&&a.result.length&&a.result.forEach(function(e){0!=e.parentCode&&t.setList.push(e.fieldCode)})}).catch(function(e){t.$message.error({duration:1e3,message:e.message})})},getAllFields:function(){var t=this;Object(r.e)("/haoban-manage-web/record/employee-find-system-template.json",{}).then(function(e){var a=e.data;1!=a.errorCode?f.a.errorMsg(a):t.handleAllFields(a.result)}).catch(function(e){t.$message.error({duration:1e3,message:e.message})})},handleAllFields:function(t){var e=this.treeData(t);e.forEach(function(t,e){t.checkList=[]}),this.customData=e},handleDetailData:function(){var t=this;t.customData.forEach(function(e,a){e.checkList=[],e.children.forEach(function(a,i){t.checkList.includes(a.fieldCode)&&e.checkList.push(a.fieldCode),a.disable=1==t.dataType?t.fixData.includes(a.fieldCode):t.fixDataStore.includes(a.fieldCode),t.setList.includes(a.fieldCode)||(a.disable=!0)})})}},watch:{showCustomDialog:function(t,e){this.customDialog=t},detailData:function(t,e){this.checkList=t&&t.length?t:[],this.handleDetailData()}},mounted:function(){var t=this;t.customDialog=t.showCustomDialog,s.a.all([t.getInfo()]).then(function(){t.getAllFields()})}},m={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"custom-dialog-wrap"},[a("el-dialog",{attrs:{title:"员工个人详情页展示字段设置",visible:t.customDialog,width:"761px","before-close":t.handleCardClose},on:{"update:visible":function(e){t.customDialog=e}}},[a("div",{staticClass:"custom-dialog__title"},[a("p",{staticClass:"custom-dialog__p"},[t._v("tips：添加后的字段将在员工个人详情页展示出来，个人敏感信息不建议添加")])]),t._v(" "),a("div",{staticClass:"custom-dialog-body"},[t._l(t.customData,function(e,i){return[a("div",{key:i,staticClass:"detail-field-cell flex"},[a("div",{staticClass:"detail-field-left"},[t._v(t._s(e.fieldName))]),t._v(" "),a("div",{staticClass:"detail-field-right flex"},[a("el-checkbox-group",{staticClass:"flex flex-wrap",on:{change:t.customChange},model:{value:e.checkList,callback:function(a){t.$set(e,"checkList",a)},expression:"item.checkList"}},t._l(e.children,function(e,i){return a("el-checkbox",{key:e.fieldCode+i,attrs:{label:e.fieldCode,disabled:e.disable,name:"type"}},[t._v("\n                "+t._s(e.fieldName)+"\n              ")])}))],1)])]})],2),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:t.customCancel}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.customConfirm}},[t._v("确 定")])],1)])],1)},staticRenderFns:[]};var h=a("VU/8")(u,m,!1,function(t){a("3dLr")},"data-v-a87ee7f0",null).exports,g={name:"staffDetails",data:function(){return{navpath:[{name:"首页",path:"/index"},{name:"设置",path:"/companyAddress"},{name:"通讯录信息",path:"/staffDetails"},{name:"员工详细字段",path:""}],fixData:["clerkName","clerkPhone","groupName","positionName"],fixDataStore:["clerkName","clerkPhone","groupName","positionName","clerkCode"],adminStruct:{name:"行政架构通讯录员工详情字段",fixedList:[],defineList:[]},storeStruct:{name:"门店架构通讯录员工详情字段",fixedList:[],defineList:[]},showCustomDialog:!1,detailData:[],dataType:null}},computed:{},methods:{showDialogLayer:function(t){this.showCustomDialog=!0,this.dataType=t,this.detailData=1===t?this.adminStruct.fixedList.map(function(t){return t.fields}).concat(this.adminStruct.defineList.map(function(t){return t.fields})):this.storeStruct.fixedList.map(function(t){return t.fields}).concat(this.storeStruct.defineList.map(function(t){return t.fields}))},customHandleConfirm:function(t){if(this.showCustomDialog=!1,t)return!1;this.getSaveFields(this.dataType)},delField:function(t,e,a,i){var s=this;s.$alert("确定要删除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消"}).then(function(o){o.value;s.postDlField(e.fields,i,a,t)}).catch(function(){})},postDlField:function(t,e,a,i){var s=this,o={fields:t,type:e};Object(r.e)("/haoban-manage-web/record/employee-show-field-delete.json",o).then(function(t){var e=t.data;if(1==e.errorCode)return d.a.showmsg("删除成功","success"),void a.splice(i,1);f.a.errorMsg(e)}).catch(function(t){s.$message.error({duration:1e3,message:t.message})})},getSaveFields:function(t){var e=this;1===t?(e.adminStruct.fixedList=[],e.adminStruct.defineList=[]):(e.storeStruct.fixedList=[],e.storeStruct.defineList=[]);var a={type:t};Object(r.e)("/haoban-manage-web/record/employee-show-field-detail.json",a).then(function(a){var i=a.data;1!=i.errorCode?f.a.errorMsg(i):i.result.forEach(function(a,i){1===n()(t)?e.fixData.includes(a.fields)?e.adminStruct.fixedList.push(a):e.adminStruct.defineList.push(a):e.fixDataStore.includes(a.fields)?e.storeStruct.fixedList.push(a):e.storeStruct.defineList.push(a)})}).catch(function(t){e.$message.error({duration:1e3,message:t.message})})}},mounted:function(){s.a.all([this.getSaveFields(1),this.getSaveFields(2)])},components:{navCrumb:l.a,staffDetailField:h}},p={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"staffDetails-wrap common-set-wrap"},[a("nav-crumb",{attrs:{navpath:t.navpath}}),t._v(" "),a("div",{staticClass:"right-content"},[a("div",{staticClass:"right-box",style:{height:t.$store.state.bgHeight,"overflow-y":"auto"}},[a("div",{staticClass:"staffDetails-cell"},[a("h2",{staticClass:"m-b-25 font-w-500"},[t._v(t._s(t.adminStruct.name))]),t._v(" "),a("div",{staticClass:"staffDetails-cell-fixed"},[t._l(t.adminStruct.fixedList,function(e,i){return[a("el-button",{key:"btn1"+i,staticClass:"staffDetails-cell-btn",attrs:{disabled:""}},[t._v(t._s(e.fieldName))])]})],2),t._v(" "),a("div",{staticClass:"staffDetails-cell-add font-0"},[t._l(t.adminStruct.defineList,function(e,i){return[a("el-tag",{key:"tag1"+i,staticClass:"staffDetails-cell-btn"},[t._v(t._s(e.fieldName)+" "),a("i",{staticClass:"el-icon-circle-close",on:{click:function(a){a.stopPropagation(),t.delField(i,e,t.adminStruct.defineList,1)}}})])]}),t._v(" "),a("el-button",{staticClass:"el-tag m-l-8 staffDetails-cell-btn",on:{click:function(e){e.stopPropagation(),t.showDialogLayer(1)}}},[a("i",{staticClass:"el-icon-plus"}),t._v("添加字段")])],2)]),t._v(" "),a("div",{staticClass:"staffDetails-cell"},[a("h2",{staticClass:"m-b-25 font-w-500"},[t._v(t._s(t.storeStruct.name))]),t._v(" "),a("div",{staticClass:"staffDetails-cell-fixed"},[t._l(t.storeStruct.fixedList,function(e,i){return[a("el-button",{key:"btn"+i,staticClass:"staffDetails-cell-btn",attrs:{disabled:""}},[t._v(t._s(e.fieldName))])]})],2),t._v(" "),a("div",{staticClass:"staffDetails-cell-add font-0"},[t._l(t.storeStruct.defineList,function(e,i){return[a("el-tag",{key:"tag"+i,staticClass:"staffDetails-cell-btn"},[t._v(t._s(e.fieldName)+" "),a("i",{staticClass:"el-icon-circle-close",on:{click:function(a){a.stopPropagation(),t.delField(i,e,t.storeStruct.defineList,2)}}})])]}),t._v(" "),a("el-button",{staticClass:"el-tag m-l-8 staffDetails-cell-btn",on:{click:function(e){e.stopPropagation(),t.showDialogLayer(2)}}},[a("i",{staticClass:"el-icon-plus"}),t._v("添加字段")])],2)])])]),t._v(" "),a("vue-gic-footer"),t._v(" "),a("staff-detail-field",{attrs:{detailData:t.detailData,showCustomDialog:t.showCustomDialog,dataType:t.dataType},on:{customHandleConfirm:t.customHandleConfirm}})],1)},staticRenderFns:[]};var v=a("VU/8")(g,p,!1,function(t){a("Z46G")},"data-v-575a9b1d",null);e.default=v.exports}});