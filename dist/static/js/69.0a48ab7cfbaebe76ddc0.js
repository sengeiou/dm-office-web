webpackJsonp([69],{cDku:function(t,e){},xk7v:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("mvHQ"),r=a.n(n),s=a("Gu7T"),i=a.n(s),c=a("Xxa5"),o=a.n(c),u=a("exGp"),d=a.n(u),p=a("2eFk"),h=a("Ke24"),l=a("PI0u"),f=a("Ch4/"),m=a("3E4D"),y=a("P9l9"),v={name:"reviewed",props:{brandId:{type:String,default:function(){return""}}},data:function(){return{activeTab:"1",brandName:"",activeBrand:this.brandId,yearMonth:"",topMenuData:[{id:"1",name:"指标管理",path:"/monthList?appIcon="+this.$route.query.appIcon},{id:"2",name:"月指标",path:"/monthList?appIcon="+this.$route.query.appIcon},{id:"3",name:"商户统一日权重",path:""}],activeId:"3",myObject:{hasEmptyGrid:!1,empytGrids:[],days:[],hasLastEmptyGrid:!1,lastEmpytGrids:[],beginDate:"",endDate:""},performanceWeightSettingList:[],settingStatus:1,settingAble:1}},computed:{},methods:{is_leap:function(t){return t%400==0||t%4==0&&t%100!=0},m_days:function(t){return[31,28+this.is_leap(t),31,30,31,30,31,31,30,31,30,31]},addZero:function(t){return t<10?"0"+parseInt(t):t},getThisMonthDays:function(t,e){return new Date(t,e,0).getDate()},getFirstDayOfWeek:function(t,e){return new Date(Date.UTC(t,e-1,1)).getDay()},getLastDayOfWeek:function(t,e){return new Date(Date.UTC(t,e-1,this.getThisMonthDays(t,e))).getDay()},getYearMonthDayWeek:function(t,e,a){return new Date(t,e-1,a).getDay()},isOverMonth:function(t,e){return t.split("-")[1]==e.split("-")[1]},calculateEmptyGrids:function(t,e){var a=this;return d()(o.a.mark(function n(){var r,s,i;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.getFirstDayOfWeek(t,e);case 2:if(r=n.sent,s=[],r>0)for(i=0;i<r;i++)s.push(i);return n.abrupt("return",s);case 6:case"end":return n.stop()}},n,a)}))()},calDayEmptyGrids:function(t,e,a){var n=this;return d()(o.a.mark(function r(){var s,i,c;return o.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,n.getYearMonthDayWeek(t,e,a);case 2:if(s=r.sent,i=[],s>0)for(c=0;c<s;c++)i.push(c);return r.abrupt("return",i);case 6:case"end":return r.stop()}},r,n)}))()},calculateLastEmptyGrids:function(t,e){var a=this;return d()(o.a.mark(function n(){var r,s,i;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.getLastDayOfWeek(t,e);case 2:if(r=n.sent,s=[],r>=0)for(i=0;i<6-r;i++)s.push(i);return n.abrupt("return",s);case 6:case"end":return n.stop()}},n,a)}))()},calLastEmptyGrids:function(t,e,a){var n=this;return d()(o.a.mark(function r(){var s,i,c;return o.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,n.getYearMonthDayWeek(t,e,a);case 2:if(s=r.sent,i=[],s>=0)for(c=0;c<6-s;c++)i.push(c);return r.abrupt("return",i);case 6:case"end":return r.stop()}},r,n)}))()},calculateDays:function(t,e,a,n){var r=this;return d()(o.a.mark(function s(){var c,u,d,p,h,l,f,m,y,v;return o.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return c=r,(u={}).beginDate=a,u.endDate=n,u.year=t,s.next=7,c.addZero(e);case 7:return u.month=s.sent,d=a.split("-"),p=n.split("-"),s.next=12,c.isOverMonth(a,n);case 12:return h=s.sent,s.next=15,c.calDayEmptyGrids(d[0],d[1],d[2]);case 15:return(l=s.sent).length>0?(u.hasEmptyGrid=!0,u.empytGrids=l):(u.hasEmptyGrid=!1,u.empytGrids=[]),s.next=19,c.calLastEmptyGrids(p[0],p[1],p[2]);case 19:if((f=s.sent).length>0?(u.hasLastEmptyGrid=!0,u.lastEmpytGrids=f):(u.hasLastEmptyGrid=!1,u.lastEmpytGrids=[]),!h){s.next=27;break}return s.next=24,c.setCurrentMonth(d[0],d[1],d[2],p[2]);case 24:u.days=s.sent,s.next=37;break;case 27:return s.next=29,c.getThisMonthDays(d[0],d[1]);case 29:return m=s.sent,s.next=32,c.setCurrentMonth(d[0],d[1],d[2],m);case 32:return y=s.sent,s.next=35,c.setCurrentMonth(p[0],p[1],1,p[2]);case 35:v=s.sent,u.days=[].concat(i()(y),i()(v));case 37:return c.myObject=u,s.abrupt("return",u);case 39:case"end":return s.stop()}},s,r)}))()},setCurrentMonth:function(t,e,a,n){for(var r=this,s=[],i=function(a){var n={};if(r.performanceWeightSettingList.length)r.performanceWeightSettingList.forEach(function(t,e){parseInt(t.date.split("-")[2])==a&&(n.weightValue=Number(t.weightValue).toFixed(2))});else{var i=r.getYearMonthDayWeek(t,e,a);n.weightValue=5==i?Number(1.8).toFixed(2):6==i||0==i?Number(2).toFixed(2):Number(1).toFixed(2)}n.performanceDay=r.addZero(a),n.date=t+"-"+r.addZero(e)+"-"+r.addZero(a),n.month=r.addZero(e),s.push(n)},c=a;c<=n;c++)i(c);return s},resetData:function(){this.performanceWeightSettingList=[];var t=this.yearMonth.split("-");this.calculateDays(t[0],t[1],this.myObject.beginDate,this.myObject.endDate)},saveSet:Object(l.a)(function(){var t=this,e=!0;if(t.myObject.days.forEach(function(t){(!t.weightValue||t.weightValue<=0||!Number(t.weightValue))&&(e=!1)}),!e)return this.$confirm("每日的权重不能为空,必须为数字,且不小于 0 ?","提示",{confirmButtonText:"确定",showCancelButton:!1,type:"warning"}).then(function(){}),!1;t.$confirm(0==t.settingStatus?"点击即下发门店月指标任务，请确认是否提交？":"此次提交只影响日指标值，不会触发月指标任务，请确认是否提交？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.postSave(t.myObject.days)}).catch(function(){})},500),postSave:function(t){var e=this,a={brandId:e.activeBrand,yearMonth:e.yearMonth,performanceWeightSettingList:r()(t)};Object(y.e)("/haoban-app-performance-web/performance/save-performance-weight-setting",a).then(function(t){var a=t.data;if(1==a.errorCode)return m.a.showmsg("保存成功","success"),void e.getData();f.a.errorMsg(a)}).catch(function(t){e.$message.error({duration:1e3,message:t.message})})},getData:function(){var t=this,e={brandId:t.activeBrand,yearMonth:t.yearMonth};Object(y.e)("/haoban-app-performance-web/performance/query-performance-weight-setting",e).then(function(e){var a=e.data,n=t.yearMonth.split("-");if(1==a.errorCode)return t.performanceWeightSettingList=a.result.performanceWeightSettingList||[],t.settingStatus=a.result.settingStatus,t.settingAble=a.result.settingAble,t.brandName=a.result.brandName,t.myObject.beginDate=a.result.beginDate,t.myObject.endDate=a.result.endDate,void t.calculateDays(n[0],n[1],a.result.beginDate,a.result.endDate);f.a.errorMsg(a),t.settingAble=0}).catch(function(e){t.$message.error({duration:1e3,message:e.message})})}},watch:{brandId:function(t,e){t&&(this.activeBrand=t,this.yearMonth=this.$route.query.yearMonth,this.getData())}},mounted:function(){document.documentElement.style.backgroundColor="#f0f2f5",this.$emit("showTab","11"),this.brandId&&(this.yearMonth=this.$route.query.yearMonth,this.getData())},destroyed:function(){document.documentElement.style.backgroundColor="#fff"},components:{appDetail:p.a,commonDetailTop:h.a}},g={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-detail-wrap common-right-wrap"},[a("common-detail-top",{attrs:{topMenuData:t.topMenuData,activeId:t.activeId}}),t._v(" "),a("div",{staticClass:"day-set-content boder-box"},[a("div",{staticClass:"day-set-title m-b-20"},[a("span",{staticClass:"font-18 color-303133"},[t._v(t._s(t.yearMonth))]),a("span",{staticClass:"font-14 color-606266 p-l-18"},[t._v(t._s(t.brandName)+"商户统一日权重")]),t._v(" "),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",placement:"right"}},[a("div",{attrs:{slot:"content"},slot:"content"},[t._v("首次设置提交即下发门店月指标任务；"),a("br"),t._v("门店月指标将依照日权重自动分配，日指标=当月月指标*（日权重/∑当月日权重）；")]),t._v(" "),a("i",{staticClass:"el-icon-info font-8 color-c0c4cc p-l-8"})])],1),t._v(" "),a("section",[t._m(0),t._v(" "),a("div",{staticClass:"week week-body"},[t.myObject.hasEmptyGrid?t._l(t.myObject.empytGrids,function(t,e){return a("div",{key:e+"empytGrids",staticClass:"day grid white-color"})}):t._e(),t._v(" "),t._l(t.myObject.days,function(e,n){return a("div",{key:n,staticClass:"day w-p-14 selectable",class:0==e?"hide":""},[a("div",{staticClass:"w-120 font-14 color-909399 day-performance"},[t._v(t._s(e.month+"-"+e.performanceDay))]),t._v(" "),a("div",{staticClass:"target-value "},[a("el-input",{staticClass:"w-120",attrs:{placeholder:"请输入权重值",disabled:0==t.settingAble},model:{value:e.weightValue,callback:function(a){t.$set(e,"weightValue",a)},expression:"day.weightValue"}})],1)])}),t._v(" "),t.myObject.hasLastEmptyGrid?t._l(t.myObject.lastEmpytGrids,function(t,e){return a("div",{key:e+"lastEmpytGrids",staticClass:"day grid white-color"})}):t._e()],2)]),t._v(" "),1==t.settingAble?a("div",{staticClass:"day-set-btn m-t-24 text-center"},[a("el-button",{attrs:{type:"primary",plain:""},on:{click:t.resetData}},[t._v("重置")]),a("el-button",{attrs:{type:"primary"},on:{click:t.saveSet}},[t._v("提交")])],1):t._e()])],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"week"},[a("div",{staticClass:"week-head day w-p-14"},[t._v("周日")]),t._v(" "),a("div",{staticClass:"week-head day w-p-14"},[t._v("周一")]),t._v(" "),a("div",{staticClass:"week-head day w-p-14"},[t._v("周二")]),t._v(" "),a("div",{staticClass:"week-head day w-p-14"},[t._v("周三")]),t._v(" "),a("div",{staticClass:"week-head day w-p-14"},[t._v("周四")]),t._v(" "),a("div",{staticClass:"week-head day w-p-14"},[t._v("周五")]),t._v(" "),a("div",{staticClass:"week-head day w-p-14"},[t._v("周六")])])}]};var b=a("VU/8")(v,g,!1,function(t){a("cDku")},"data-v-1e510fb2",null);e.default=b.exports}});