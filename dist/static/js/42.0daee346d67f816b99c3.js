webpackJsonp([42],{"3sUs":function(t,a){},cuIN:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e("2eFk"),c=e("fvdr"),o=e("Qie6"),s={name:"reviewed",data:function(){return{appName:"我的顾客",appIcon:"",activeTab:"1",tabListData:[{tabId:"1",tabName:"会员搜索设置",icon:"icon-sousuoshezhi"},{tabId:"2",tabName:"在线沟通设置",icon:"icon-zaixiangoutong"}],activeBrand:"1"}},computed:{},methods:{selectBrandId:function(t){this.activeBrand=t},setSelectTab:function(t){this.activeTab=t.tabId}},watch:{activeBrand:function(t,a){this.activeBrand=t}},mounted:function(){var t=this.$route.query.appIcon;t&&(this.appIcon=window.unescape(t)),document.documentElement.style.backgroundColor="#f0f2f5"},destroyed:function(){document.documentElement.style.backgroundColor="#fff"},components:{appDetail:n.a,commonAppTop:c.a,commonDetailLeft:o.a}},i={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"my-customer-wrap common-set-wrap"},[e("div",{staticClass:"right-content"},[e("common-app-top",{attrs:{appName:t.appName,appIcon:t.appIcon},on:{selectBrandId:t.selectBrandId}}),t._v(" "),e("div",{staticClass:"right-box"},[e("div",{staticClass:"apps-content flex"},[e("div",{staticClass:"apps-content-left w-157"},[e("common-detail-left",{attrs:{tabListData:t.tabListData},on:{setSelectTab:t.setSelectTab}})],1),t._v(" "),e("div",{staticClass:"apps-content-right"},[e("app-detail",{attrs:{brandId:t.activeBrand,tabType:t.activeTab}})],1)])])],1),t._v(" "),e("vue-gic-footer")],1)},staticRenderFns:[]};var d=e("VU/8")(s,i,!1,function(t){e("3sUs")},"data-v-84a5f074",null);a.default=d.exports}});