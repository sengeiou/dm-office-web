webpackJsonp([65],{"68Un":function(e,t){},kCy7:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a("Ke24"),n=a("Ie7z"),i=a("P9l9"),s=a("PI0u"),r=a("Ch4/"),c={name:"noticeList",props:{brandId:{type:String,default:function(){return""}},activeGroupId:{type:String,default:function(){return""}}},data:function(){var e=this;return{topMenuData:[{id:"1",name:"签到记录"}],activeId:"1",activeBrand:this.brandId,activeGroup:this.activeGroupId,conditionObj:{keyword:"",storeGroup:[],signStatus:"",choiceDate:[]},signStatusOptions:[{value:"",label:"所有状态"},{value:"0",label:"签到"},{value:"1",label:"签退"}],choiceDateCopy:[],pickerOptions:{onPick:function(t){var a=t.maxDate,o=t.minDate;e.choiceDateCopy=[o.getTime()],a&&(e.choiceDateCopy=[])},disabledDate:function(t){if(e.choiceDateCopy.length){var a=e.choiceDateCopy[0]-2592e6,o=e.choiceDateCopy[0]+2592e6;return t.getTime()<a||t.getTime()>o||t.getTime()>Date.now()-864e4}return t.getTime()>Date.now()-864e4}},tableData:[],pageSize:20,currentPage:1,totalCount:0,appScene:2,defaultStoreList:[],storeTreeSet:{isSelectPerson:!1,dialogVisible:!1,isSingle:!1}}},filters:{formatTimeYMD:function(e){var t=new Date(e),a=t.getMonth()+1,o=t.getDate()<10?"0"+t.getDate():t.getDate(),n=a<10?"0"+a:a;return t.getFullYear()+"-"+n+"-"+o},formatTimeHMS:function(e){var t=new Date(e);return(t.getHours()<10?"0"+t.getHours():t.getHours())+":"+(t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes())}},watch:{brandId:function(e,t){e&&(this.activeBrand=e,this.getTableList())},activeGroupId:function(e,t){e&&(this.activeGroup=e)}},mounted:function(){var e=this;e.activeBrand=this.brandId;var t=new Date,a=t.getTime()-2592e6,o=t.getFullYear(),n=t.getMonth()+1,i=t.getDate()<10?"0"+t.getDate():t.getDate(),s=n<10?"0"+n:n,r=new Date(a),c=r.getFullYear(),l=r.getMonth()+1,u=r.getDate()<10?"0"+r.getDate():r.getDate(),d=l<10?"0"+l:l;e.conditionObj.choiceDate=[c+"-"+d+"-"+u,o+"-"+s+"-"+i],e.brandId&&e.$nextTick(function(t){e.getTableList()})},methods:{showDialogLayer:function(e,t){this.selectType=e,this.changed=e,this.defaultStoreList=t,this.storeTreeSet={dialogVisible:!0,isSingle:!1,isSelectPerson:!1}},handleSelectedList:function(e){this.conditionObj.storeGroup=e,this.getTableList()},delDepart:function(e,t){t.splice(e,1),this.currentPage=1,this.getTableList()},getTableList:function(){var e=this;e.loading=!0;var t=[],a=[],o=["星期天","星期一","星期二","星期三","星期四","星期五","星期六"];e.conditionObj.storeGroup.forEach(function(e){2==e.type&&t.push(e.groupId),3==e.type&&a.push(e.storeId)});var n={haobanEnterpriseId:localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")).enterpriseId:"",search:e.conditionObj.keyword||"",haobanBrandId:e.activeBrand,storeIds:a.join(",")||"",groupIds:t.join(",")||"",signType:e.conditionObj.signStatus||"",startDate:e.conditionObj&&e.conditionObj.choiceDate[0]?e.conditionObj.choiceDate[0]:"",endDate:e.conditionObj&&e.conditionObj.choiceDate[1]?e.conditionObj.choiceDate[1]:"",pageNum:e.currentPage,pageSize:e.pageSize};Object(i.a)("/haoban-app-sign-web/sign/sign-list",n).then(function(t){var a=t.data;if(e.loading=!1,1==a.errorCode)return a.result.list.forEach(function(e){e.week=o[new Date(e.signDay).getDay()]}),e.tableData=a.result.list||[],e.totalCount=a.result.pageInfo.total,!1;r.a.errorMsg(a)}).catch(function(t){e.loading=!1,e.$message.error({duration:1e3,message:t.message})})},changeDate:function(e){e||(this.choiceDateCopy=[],this.conditionObj.choiceDate=[]),this.currentPage=1,this.getTableList()},searchPeople:Object(s.a)(function(e){this.currentPage,this.getTableList()},500),clearInput:function(){this.currentPage=1,this.getTableList()},changeSelect:function(){this.currentPage=1,this.getTableList()},handleSizeChange:function(e){this.pageSize=e,this.getTableList()},handleCurrentChange:function(e){this.currentPage=e,this.getTableList()},exportData:function(){if(!this.conditionObj.choiceDate||!this.conditionObj.choiceDate[0]||!this.conditionObj.choiceDate[1])return this.$message.error({duration:1e3,message:"请选择日期区间"}),!1;this.postExportData()},postExportData:function(){var e=this,t=[],a=[];e.conditionObj.storeGroup.forEach(function(e){2==e.type&&t.push(e.groupId),3==e.type&&a.push(e.storeId)});var o={haobanEnterpriseId:localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")).enterpriseId:"",search:e.conditionObj.keyword||"",storeIds:a.join(",")||"",groupIds:t.join(",")||"",signType:e.conditionObj.signStatus||"",startDate:e.conditionObj.choiceDate[0]?e.conditionObj.choiceDate[0]:"",endDate:e.conditionObj.choiceDate[1]?e.conditionObj.choiceDate[1]:"",haobanBrandId:e.activeBrand};Object(i.b)("/haoban-app-sign-web/sign/export-sign-list",o).then(function(e){if(!e.data)return r.a.errorMsg("暂无数据"),!1;var t=new Blob([e.data],{type:"application/vnd.ms-excel"}),a=o.startDate.replace(/-/g,"")+"-"+o.endDate.replace(/-/g,"")+"签到报表.xlsx",n=document.createElement("a");n.download=a,n.style.display="none",n.href=URL.createObjectURL(t),document.body.appendChild(n),n.click(),URL.revokeObjectURL(n.href),document.body.removeChild(n)}).catch(function(t){e.$message.error({duration:1e3,message:t.message})})}},components:{vueSelectStore:n.a,commonDetailTop:o.a}},l={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"notice-list-wrap"},[a("div",{staticClass:"notice-list"},[a("common-detail-top",{attrs:{topMenuData:e.topMenuData,activeId:e.activeId}}),e._v(" "),a("div",{staticClass:"notice-list-table"},[a("div",{staticClass:"search-wrap"},[a("el-input",{staticClass:"search-input",attrs:{clearable:"",placeholder:"请输入姓名/员工代码","prefix-icon":"el-icon-search"},on:{clear:e.clearInput},nativeOn:{keyup:function(t){return a=t,e.searchPeople(a);var a}},model:{value:e.conditionObj.keyword,callback:function(t){e.$set(e.conditionObj,"keyword",t)},expression:"conditionObj.keyword"}}),e._v(" "),a("div",{staticClass:"flex-column item-cell-select inline-block m-l-10"},[a("div",{staticClass:"depart-item-wrap"},[a("div",{staticClass:"el-select el-select--large depart-item-content",staticStyle:{width:"213px"},on:{click:function(t){e.showDialogLayer("store",e.conditionObj.storeGroup)}}},[e.conditionObj.storeGroup.length?e._e():a("span",{staticClass:"font-14 color-c0c4cc"},[e._v("请选择门店分组")]),e._v(" "),a("div",{staticClass:"el-select__tags",staticStyle:{"max-width":"181px"}},[a("span",[e._l(e.conditionObj.storeGroup,function(t,o){return[a("span",{key:o,staticClass:"el-tag el-tag--info el-tag--small"},[a("span",{staticClass:"el-select__tags-text"},[e._v(e._s(t.name||t.storeName))]),a("i",{staticClass:"el-tag__close el-icon-close",on:{click:function(t){t.stopPropagation(),e.delDepart(o,e.conditionObj.storeGroup)}}})])]})],2)])])])]),e._v(" "),a("el-select",{staticClass:"w-112 m-l-10",attrs:{placeholder:"请选择"},on:{change:e.changeSelect},model:{value:e.conditionObj.signStatus,callback:function(t){e.$set(e.conditionObj,"signStatus",t)},expression:"conditionObj.signStatus"}},e._l(e.signStatusOptions,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),e._v(" "),a("el-date-picker",{staticClass:"search-date",attrs:{format:"yyyy-MM-dd","value-format":"yyyy-MM-dd",editable:!1,"picker-options":e.pickerOptions,type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},on:{change:e.changeDate},model:{value:e.conditionObj.choiceDate,callback:function(t){e.$set(e.conditionObj,"choiceDate",t)},expression:"conditionObj.choiceDate"}}),e._v(" "),a("el-button",{staticClass:"fr",attrs:{type:"primary"},on:{click:e.exportData}},[a("i",{staticClass:"iconfont icon-icon_yunxiazai p-r-6"}),e._v("导出")])],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:e.tableData}},[a("el-table-column",{attrs:{prop:"storeName",label:"门店名称","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{label:"姓名","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n            "+e._s(t.row.clerkName)+"\n          ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"员工代码","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n            "+e._s(t.row.clerkCode)+"\n          ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"状态","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n            "+e._s(1==t.row.signType?"签退":"签到")+"\n          ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"时间","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.signDay?a("div",{staticClass:"time-wrap"},[a("p",{class:["星期六"==t.row.week||"星期天"==t.row.week?"color-f56c6c":""]},[e._v(e._s(e._f("formatTimeYMD")(t.row.signDay))+" "+e._s(t.row.week))]),e._v(" "),a("p",[e._v(e._s(e._f("formatTimeHMS")(t.row.signTime)))])]):a("div",[e._v("--")])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"打卡坐标","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n            "+e._s(t.row.signLongitude||"-")+" "),t.row.signLatitude?a("span",[e._v(",")]):e._e(),e._v(" "+e._s(t.row.signLatitude||"-")+"\n          ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"门店坐标","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n            "+e._s(t.row.storeLongitude||"-")+" "),t.row.storeLatitude?a("span",[e._v(",")]):e._e(),e._v(" "+e._s(t.row.storeLatitude||"-")+"\n          ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"距离","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n            "+e._s(t.row.distance||"--")+"\n          ")]}}])})],1),e._v(" "),e.totalCount?a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{background:"","page-sizes":[20,40,60,80],"page-size":e.pageSize,"current-page":e.currentPage,layout:"total, sizes, prev, pager, next",total:e.totalCount},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1):e._e()],1)],1),e._v(" "),a("vue-select-store",{ref:"storeSelector",attrs:{currentBrand:e.activeGroup,appScene:e.appScene,treeSet:e.storeTreeSet,selectType:"group-store",defaultList:e.defaultStoreList},on:{handleSelectedList:e.handleSelectedList}})],1)},staticRenderFns:[]};var u=a("VU/8")(c,l,!1,function(e){a("68Un")},"data-v-2b0af876",null);t.default=u.exports}});