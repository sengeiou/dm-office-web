webpackJsonp([31],{"4m/B":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a("fZjL"),n=a.n(o),l=a("2eFk"),i=a("Ke24"),s=a("LRn8"),r=a("fPyK"),c=a("P9l9"),d=a("Ch4/"),u=a("3E4D"),f={name:"reviewed",props:{brandId:{type:String,default:function(){return""}}},filters:{formatTimeYMD:function(e){return e&&"- -"!=e?e.split(" ")[0]:"--"},formatTimeHMS:function(e){return e&&"- -"!=e?e.split(" ")[1]:"--"}},data:function(){return{tableH:window.screen.availHeight-464-126,activeId:"2",activeBrand:this.brandId,topMenuData:[{id:"1",name:"不良评价回访记录",path:"/badEvaluateRecord"},{id:"2",name:"记录详情",path:""}],selectRadio:0,showDialog:!1,conditionObj:{completed:"",overdue:""},completedOptions:[{label:"已完成",value:"1"},{label:"未完成",value:"0"}],overOptions:[{label:"已逾期",value:"1"},{label:"未逾期",value:"0"}],tableData:[],multipleSelection:[],dialogVisible:!1,currentPage:1,pageSize:20,total:0}},computed:{},methods:{handleCommand:function(e){this.selectRadio=e},selectBrandId:function(e){this.activeBrand=e},setSelectTab:function(e){this.activeTab=e.tabId},changeSelect:function(){this.currentPage=1,this.getTableList()},handleSelectionChange:function(e){this.multipleSelection=e},multDel:function(){if(!this.multipleSelection.length)return this.$message.error({duration:1e3,message:"请选择删除项"}),!1;this.showDialog=!0},hideDialog:function(e){if(this.showDialog=!1,!n()(e).length)return!1;this.postMultDel(e)},postMultDel:function(e){var t=this,a={taskType:0,storeId:t.conditionObj.storeId,taskIds:t.multipleSelection.map(function(e){return e.taskIds})||"",isOverTime:t.conditionObj.overdue||"",isCompleted:t.conditionObj.completed||"",reason:e.reason,brandId:t.activeBrand,isAll:t.selectRadio};Object(c.e)("/haoban-app-tel-task-web/task/batch-del-clerk-task-list",a).then(function(e){var a=e.data;if(1==a.errorCode)return u.a.showmsg("删除成功","success"),void t.getTableList();d.a.errorMsg(a)}).catch(function(e){t.$message.error({duration:1e3,message:e.message})})},handleSizeChange:function(e){this.pageSize=e,this.getTableList()},handleCurrentChange:function(e){this.currentPage=e,this.getTableList()},handleDel:function(e,t){var a=this;a.$confirm("确认要删除吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){a.postDel(e,t)}).catch(function(){})},postDel:function(e,t){var a=this,o={taskId:t.taskId,brandId:a.activeBrand};Object(c.a)("/haoban-app-tel-task-web/task/del-one",o).then(function(t){var o=t.data;if(1==o.errorCode)return u.a.showmsg("删除成功","success"),void a.tableData.splice(e,1);d.a.errorMsg(o)}).catch(function(e){a.$message.error({duration:1e3,message:e.message})})},handlePreview:function(e,t){this.postPreview(e,t)},postPreview:function(e,t){var a=""+t.taskId;this.$refs.qrcodePreview.qrcode(a,"daily-detail"),this.dialogVisible=!0},getTableList:function(e){var t=this,a={storeId:t.conditionObj.storeId||"",isOverTime:t.conditionObj.overdue||"",isCompleted:t.conditionObj.completed||"",pageNum:t.currentPage,pageSize:t.pageSize,brandId:t.activeBrand,taskType:0};Object(c.a)("/haoban-app-tel-task-web/task/clerk-task-list",a).then(function(e){var a=e.data;if(1==a.errorCode)return t.tableData=a.result.list||[],void(t.total=a.result.pageInfo.total);d.a.errorMsg(a)}).catch(function(e){t.$message.error({duration:1e3,message:e.message})})}},watch:{brandId:function(e,t){e&&(this.activeBrand=e,this.getTableList())}},mounted:function(){document.documentElement.style.backgroundColor="#f0f2f5",this.$emit("showTab","1"),this.activeBrand=this.brandId,this.conditionObj.storeId=this.$route.query.storeId,this.brandId&&this.getTableList()},destroyed:function(){document.documentElement.style.backgroundColor="#fff"},components:{appDetail:l.a,commonDetailTop:i.a,multipleDel:s.a,qrcodeDialog:r.a}},p={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"my-customer-wrap common-set-wrap"},[a("common-detail-top",{attrs:{topMenuData:e.topMenuData,activeId:e.activeId}}),e._v(" "),a("div",{staticClass:"daily-set-content boder-box"},[a("div",{staticClass:"table-condition flex flex-space-between m-b-23"},[a("div",{staticClass:"table-condition-left"},[a("el-select",{staticClass:"w-105",attrs:{placeholder:"请选择"},on:{change:e.changeSelect},model:{value:e.conditionObj.completed,callback:function(t){e.$set(e.conditionObj,"completed",t)},expression:"conditionObj.completed"}},e._l(e.completedOptions,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),a("el-select",{staticClass:"w-105 m-l-10",attrs:{placeholder:"请选择"},on:{change:e.changeSelect},model:{value:e.conditionObj.overdue,callback:function(t){e.$set(e.conditionObj,"overdue",t)},expression:"conditionObj.overdue"}},e._l(e.overOptions,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),a("div",{staticClass:"table-condition-right"},[a("el-button",{attrs:{type:"danger"},on:{click:e.multDel}},[e._v("批量删除")])],1)]),e._v(" "),a("el-table",{ref:"multipleTable",staticClass:"select-table",staticStyle:{width:"100%"},attrs:{data:e.tableData,"tooltip-effect":"dark",height:e.tableH},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"35"}}),e._v(" "),a("el-table-column",{attrs:{width:"25"},scopedSlots:e._u([{key:"header",fn:function(t){return[a("el-dropdown",{staticStyle:{"line-height":"10px",padding:"0","margin-left":"-15px",transform:"translateY(4px)","-webkit-transform":"translateY(4px)"},attrs:{placement:"bottom-start"},on:{command:e.handleCommand}},[a("span",{staticClass:"el-dropdown-link"},[a("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),e._v(" "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{attrs:{command:"0"}},[a("span",{style:{color:0==e.selectRadio?"#1890ff":"#606266"}},[e._v("选择当页")])]),e._v(" "),a("el-dropdown-item",{attrs:{command:"1"}},[a("span",{style:{color:1==e.selectRadio?"#1890ff":"#606266"}},[e._v("选择全部")])])],1)],1)]}},{key:"default",fn:function(e){}}])}),e._v(" "),a("el-table-column",{attrs:{label:"指派对象"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticClass:"flex flex-pack-center flex-start"},[a("div",{class:["image-wrap flex flex-align-center flex-pack-center",t.row.headImgUrl?"bg-eceaeb":"bg-82c5ff"]},[t.row.headImgUrl?a("img",{attrs:{src:t.row.headImgUrl,alt:""}}):a("i",{staticClass:"iconfont icon-yewuduanmorentouxian"})]),e._v(" "),a("div",{staticClass:"clerk-info flex flex-column flex-space-between m-l-16"},[a("p",{staticClass:"font-14 color-303133"},[e._v(e._s(t.row.clerkName))]),e._v(" "),a("p",{staticClass:"font-14 color-909399"},[e._v(e._s(t.row.clerkPhone))])])])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"创建时间"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",[e._v(e._s(e._f("formatTimeYMD")(t.row.createTime)))]),e._v(" "),a("div",[e._v(e._s(e._f("formatTimeHMS")(t.row.createTime)))])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"",label:"完成期限","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",[e._v(e._s(e._f("formatTimeYMD")(t.row.lastTime)))]),e._v(" "),a("div",[e._v(e._s(e._f("formatTimeHMS")(t.row.lastTime)))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"逾期情况"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.isOverTime))]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"完成情况"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.isCompleted))]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"完成时间"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",[e._v(e._s(e._f("formatTimeYMD")(t.row.finishTime)))]),e._v(" "),a("div",[e._v(e._s(e._f("formatTimeHMS")(t.row.finishTime)))])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"left"},scopedSlots:e._u([{key:"header",fn:function(t){return[a("span",[e._v(e._s(t.row?"完成备注":"放弃备注"))])]}},{key:"default",fn:function(e){return[a("el-popover",{attrs:{placement:"top-start",title:"",width:"200",trigger:"hover",content:e.row.reason}},[a("i",{staticClass:"iconfont icon-beizhu"})])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"完成备注"},scopedSlots:e._u([{key:"default",fn:function(t){return["已完成"==t.row.isCompleted?a("el-popover",{attrs:{placement:"top-start",title:"",width:"200",trigger:"hover",content:"已完成"==t.row.isCompleted?t.row.reason:""}},[a("i",{staticClass:"iconfont icon-beizhu",staticStyle:{"font-size":"40px"},attrs:{slot:"reference"},slot:"reference"})]):e._e()]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"放弃备注"},scopedSlots:e._u([{key:"default",fn:function(t){return["未完成"==t.row.isCompleted?a("el-popover",{attrs:{placement:"top-start",title:"",width:"200",trigger:"hover",content:"已完成"==t.row.isCompleted?"":t.row.reason}},[a("i",{staticClass:"iconfont icon-beizhu",staticStyle:{"font-size":"40px"},attrs:{slot:"reference"},slot:"reference"})]):e._e()]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){e.handleDel(t.$index,t.row)}}},[e._v("删除")]),e._v(" "),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){e.handlePreview(t.$index,t.row)}}},[e._v("预览")])]}}])})],1),e._v(" "),0!=e.tableData.length?a("div",{staticClass:"block common-wrap__page text-right m-t-24"},[a("el-pagination",{attrs:{background:"","current-page":e.currentPage,"page-sizes":[20,40,60,80],"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1):e._e()],1),e._v(" "),a("multiple-del",{attrs:{showDialog:e.showDialog,detailFlag:!0},on:{hideDialog:e.hideDialog}}),e._v(" "),a("qrcode-dialog",{ref:"qrcodePreview",model:{value:e.dialogVisible,callback:function(t){e.dialogVisible=t},expression:"dialogVisible"}})],1)},staticRenderFns:[]};var m=a("VU/8")(f,p,!1,function(e){a("nS6C")},"data-v-e86f2af2",null);t.default=m.exports},nS6C:function(e,t){}});