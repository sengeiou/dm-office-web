webpackJsonp([48],{VS9i:function(e,t){},VqB7:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("3Xzz"),o=a("3E4D"),n=a("Ch4/"),r=a("P9l9"),l={name:"setChildAdmin",data:function(){return{windowH:window.screen.availHeight-180-15+"px",tableH:window.screen.availHeight-440-180,navpath:[{name:"首页",path:"/index"},{name:"设置",path:"/companyAddress"},{name:"设置子管理员",path:""}],boxHeight:window.screen.availHeight-20+"px",isAddAdmin:"",activeId:"",activeBrandId:"",roleListData:[],roleRightObj:{roleName:"超级管理员",tip:"企业的创建者，拥有企业的所有权限，只会有一个",roleCode:"",isEdit:0},tableData:[],currentPage:1,pageSize:20,total:0}},computed:{},methods:{changeRoute:function(e){this.$router.push(e)},toRoleDetail:function(e){this.changeRoute("/addAdminRole?roleId="+this.activeId+"&type="+e+"&brandId="+this.activeBrandId)},toDelRole:function(){var e=this;e.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.postToDelRole()}).catch(function(){})},postToDelRole:function(){var e=this,t={roleId:e.activeId,brandId:e.activeBrandId};Object(r.e)("/haoban-manage-web/del-role",t).then(function(t){var a=t.data;if(1==a.errorCode)return o.a.showmsg("删除成功","success"),void e.getRoles();n.a.errorMsg(a)}).catch(function(t){e.$message.error({duration:1e3,message:t.message})})},selectRole:function(e,t){this.activeId=e.roleId,this.activeBrandId=t,this.roleRightObj=e,this.getRoleUsers()},toAddRole:function(e){this.changeRoute("/addAdmin?roleId="+this.activeId+"&roleCode="+e+"&brandId="+this.activeBrandId)},handleDel:function(e,t){var a=this;a.$alert("确定要删除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消"}).then(function(i){i.value;a.postDelUser(t.userId,e)}).catch(function(){})},postDelUser:function(e,t){var a=this,i={roleId:a.activeId,userId:e,brandId:a.activeBrandId};Object(r.e)("/haoban-manage-web/del-role-user",i).then(function(e){var i=e.data;if(1==i.errorCode)return o.a.showmsg("删除成功","success"),void a.tableData.splice(t,1);n.a.errorMsg(i)}).catch(function(e){a.$message.error({duration:1e3,message:e.message})})},handleShow:function(e,t,a){this.changeRoute("/addAdmin?roleId="+this.activeId+"&roleCode="+a+"&userId="+t.userId+"&brandId="+this.activeBrandId)},handleSizeChange:function(e){this.pageSize=e,this.getRoleUsers()},handleCurrentChange:function(e){this.currentPage=e,this.getRoleUsers()},getRoleUsers:function(){var e=this,t={roleId:e.activeId,brandId:e.activeBrandId,pageSize:e.pageSize,pageNum:e.currentPage};Object(r.e)("/haoban-manage-web/role-user-list",t).then(function(t){var a=t.data;if(1==a.errorCode)return a.result&&a.result.result?(e.tableData=a.result.result,void(e.total=a.result.totalCount)):(e.tableData=[],!1);n.a.errorMsg(a)}).catch(function(t){e.$message.error({duration:1e3,message:t.message})})},getRoles:function(){var e=this;Object(r.e)("/haoban-manage-web/role-list",{}).then(function(t){var a=t.data;if(1==a.errorCode)return e.isAddAdmin=a.result.isAddAdmin,e.roleListData=a.result.roleList||[],void(a.result&&a.result.roleList.length&&(e.activeId=e.roleListData[0].roleList[0].roleId,e.activeBrandId=e.roleListData[0].brandId,e.roleRightObj=e.roleListData[0].roleList[0],e.getRoleUsers()));n.a.errorMsg(a)}).catch(function(t){e.$message.error({duration:1e3,message:t.message})})}},mounted:function(){this.boxHeight=window.screen.availHeight-430+"px",this.getRoles()},components:{navCrumb:i.a}},s={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"setChildAdmin-wrap common-set-wrap",style:{height:e.windowH}},[a("nav-crumb",{attrs:{navpath:e.navpath}}),e._v(" "),a("div",{staticClass:"right-content"},[a("div",{staticClass:"right-box"},[a("div",{staticClass:"setChildAdmin-wrap-body flex"},[a("div",{staticClass:"setChildAdmin-wrap-left w-260",style:{height:e.boxHeight}},e._l(e.roleListData,function(t,i){return a("div",{key:i,staticClass:"m-t-20"},[a("div",{staticClass:"role-cell-head flex"},[a("div",{staticClass:"flex-1 max-half role-cell-head_name"},[e._v(e._s(t.brandName))]),e._v(" "),t.canAddRole?a("div",{staticClass:"text-right flex-1 "},[a("el-button",{attrs:{size:"mini"},on:{click:function(a){e.changeRoute("/addAdminRole?brandId="+t.brandId)}}},[e._v("新增角色")])],1):e._e()]),e._v(" "),a("ul",e._l(t.roleList,function(i,o){return a("li",{key:o,class:["role-cell border-bottom-1",t.brandId==e.activeBrandId&&i.roleId==e.activeId?"role-active":""],on:{click:function(a){a.stopPropagation(),e.selectRole(i,t.brandId)}}},[a("i",{staticClass:"iconfont icon-lizhi p-r-6"}),e._v("\n                "+e._s(i.roleName)+"\n              ")])}))])})),e._v(" "),a("div",{staticClass:"setChildAdmin-wrap-right box-sizing"},[a("div",{staticClass:"role-title flex flex-between m-b-25"},[a("span",{staticClass:"font-20 color-303133"},[e._v(" "+e._s(e.roleRightObj.roleName)+" ")]),"child_admin"!=e.roleRightObj.roleCode?a("span",{staticClass:"font-14 color-1890ff pinter",on:{click:function(t){e.toRoleDetail("show")}}},[e._v(" 查看权限 ")]):e._e(),"child_admin"==e.roleRightObj.roleCode?a("span",[e.tableData.length?e._e():a("span",{staticClass:"font-14 color-1890ff pinter p-r-6",on:{click:e.toDelRole}},[e._v(" 删除角色 ")]),a("span",{staticClass:"font-14 color-1890ff pinter",on:{click:function(t){e.toRoleDetail("edit")}}},[e._v("\n                编辑权限\n              ")])]):e._e()]),e._v(" "),"master_admin"===e.roleRightObj.roleCode||"admin"===e.roleRightObj.roleCode?a("div",{staticClass:"role-tip  "},[a("el-alert",{attrs:{title:"master_admin"===e.roleRightObj.roleCode?"企业的创建者，拥有企业的所有权限，只会有一个":"admin"===e.roleRightObj.roleCode?"企业管理员，拥有企业的所有权限，不能创建企业管理员，可以有多个":"",type:"info",closable:!1,"show-icon":""}})],1):e._e(),e._v(" "),e.roleRightObj.isEdit?a("div",{staticClass:"role-add m-t-27"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.toAddRole(e.roleRightObj.roleCode)}}},[e._v("添加成员")])],1):e._e(),e._v(" "),a("div",{class:["role-table",e.roleRightObj.isEdit?"":"m-t-27"]},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData}},[a("el-table-column",{attrs:{prop:"clerkName",label:"姓名"}}),e._v(" "),a("el-table-column",{attrs:{prop:"clerkPhone",label:"手机号"}}),e._v(" "),a("el-table-column",{attrs:{prop:"groupName",label:"部门"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return 1==t.row.canEdit?[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){e.handleShow(t.$index,t.row,e.roleRightObj.roleCode)}}},[e._v("编辑")]),e._v(" "),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){e.handleDel(t.$index,t.row)}}},[e._v("删除")])]:void 0}}])})],1),e._v(" "),0!=e.tableData.length?a("div",{staticClass:"block common-wrap__page text-right"},[a("el-pagination",{attrs:{background:"","current-page":e.currentPage,"page-sizes":[10,20,30,40],"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1):e._e()],1)])])])]),e._v(" "),a("vue-gic-footer")],1)},staticRenderFns:[]};var d=a("VU/8")(l,s,!1,function(e){a("VS9i")},"data-v-5fd01b31",null);t.default=d.exports}});