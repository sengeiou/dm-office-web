webpackJsonp([67],{XzAK:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("2eFk"),n=a("Ke24"),i=a("PI0u"),o=a("Ch4/"),r=a("3E4D"),c=a("P9l9"),d={name:"reviewed",props:{brandId:{type:String,default:function(){return""}}},data:function(){return{activeTab:"1",activeBrand:this.brandId,topMenuData:[{id:"1",name:"不良评价回访设置"}],activeId:"1",setObj:{taskType:0,overDayJudge:"",distributeTypeJudge:"",giveUpJudge:""}}},computed:{},methods:{saveSet:Object(i.a)(function(){this.postSave()},500),postSave:function(){var t=this,e={brandId:t.activeBrand,taskType:0,overDayJudge:t.setObj.overDayJudge,giveUpJudge:t.setObj.giveUpJudge,distributeTypeJudge:t.setObj.distributeTypeJudge};Object(c.e)("/haoban-app-tel-task-web/setting/save-task-setting",e).then(function(t){var e=t.data;1!=e.errorCode?o.a.errorMsg(e):r.a.showmsg("保存成功","success")}).catch(function(e){t.$message.error({duration:1e3,message:e.message})})},getData:function(){var t=this,e={brandId:t.activeBrand,taskType:0};Object(c.e)("/haoban-app-tel-task-web/setting/find-task-setting",e).then(function(e){var a=e.data;1!=a.errorCode?o.a.errorMsg(a):t.setObj=a.result}).catch(function(e){t.$message.error({duration:1e3,message:e.message})})}},watch:{brandId:function(t,e){t&&(this.activeBrand=t,this.getData())}},mounted:function(){document.documentElement.style.backgroundColor="#f0f2f5",this.$emit("showTab","3"),this.brandId&&this.getData()},destroyed:function(){document.documentElement.style.backgroundColor="#fff"},components:{appDetail:s.a,commonDetailTop:n.a}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-detail-wrap"},[a("common-detail-top",{attrs:{topMenuData:t.topMenuData,activeId:t.activeId}}),t._v(" "),a("div",{staticClass:"task-set-content boder-box"},[a("div",{staticClass:"task-set-cell"},[a("div",{staticClass:"font-16 color-606266 m-b-20 font-w-500"},[t._v("不良评价回访任务逾期时间设置")]),t._v(" "),a("div",{staticClass:"set-line-item"},[a("span",{staticClass:"set-line-item_title font-14 color-606266"},[t._v("不良评价回访下发后")]),t._v(" "),a("el-input",{staticClass:"w-55",attrs:{placeholder:"请输入内容"},model:{value:t.setObj.overDayJudge,callback:function(e){t.$set(t.setObj,"overDayJudge",e)},expression:"setObj.overDayJudge"}}),a("span",{staticClass:"font-14 color-606266 p-l-10"},[t._v("天")]),t._v(" "),a("span",{staticClass:"font-14 color-909399 p-l-15"},[t._v("注：0天即为当天下发，当天完成，1天即为当天下发，次日24：00之前完成")])],1),t._v(" "),a("div",{staticClass:"set-line-item"},[a("span",{staticClass:"set-line-item_title font-14 color-606266"},[t._v("不良评价放弃前提")]),t._v(" "),a("el-input",{staticClass:"w-55",attrs:{placeholder:"请输入内容"},model:{value:t.setObj.giveUpJudge,callback:function(e){t.$set(t.setObj,"giveUpJudge",e)},expression:"setObj.giveUpJudge"}}),a("span",{staticClass:"font-14 color-606266 p-l-10"},[t._v("次")]),t._v(" "),a("span",{staticClass:"font-14 color-606266"},[t._v("呼叫后无响应")])],1)]),t._v(" "),a("div",{staticClass:"task-set-save m-t-30"},[a("el-button",{attrs:{type:"primary"},on:{click:t.saveSet}},[t._v("保 存")])],1)])],1)},staticRenderFns:[]};var u=a("VU/8")(d,l,!1,function(t){a("ZFsH")},"data-v-202e60e0",null);e.default=u.exports},ZFsH:function(t,e){}});