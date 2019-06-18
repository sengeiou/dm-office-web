webpackJsonp([76],{bcAT:function(e,t){},mPjx:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("3Xzz"),n=a("Ie7z"),s=a("P9l9"),o={name:"store-view-group-info",components:{navCrumb:r.a,vueSelectStore:n.a},data:function(){return{departInfo:{name:"",parentName:"",parentId:""},rules:{name:[{required:!0,message:"请输入部门名称",trigger:"blur"},{min:1,max:20,message:"长度在 1 到 20 个字符",trigger:"blur"}],parentId:[{required:!0,message:"请选择父级部门",trigger:"change"}]},disabled:!0,treeSet:{isSelectPerson:!1,dialogVisible:!1,isSingle:!0,groupId:""},defaultList:[]}},methods:{delGroup:function(){var e=this;e.$confirm(" 是否确认删除分组 ？","提示",{type:"warning"}).then(function(){Object(s.a)("/haoban-manage-web/dept/del",{groupId:e.$route.query.groupId}).then(function(t){1==t.data.errorCode?(e.$message.success({message:t.data.message}),window.history.go(-1)):e.$message.error({message:t.data.message})}).catch(function(t){e.$message.error({message:t.message})})}).catch(function(e){})},handleSelectedList:function(e){var t=e[0];this.departInfo.parentId=t?t.id:"",this.departInfo.parentName=t?t.chainName:""},callGroupSelector:function(){this.treeSet.dialogVisible=!0},saveEdit:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.$refs.departForm.validate(function(a){if(!a)return!1;var r=e,n={parentId:r.departInfo.parentId,name:r.departInfo.name},o="";r.isAddNew?o="/haoban-manage-web/dept/insert":(o="/haoban-manage-web/dept/update",n.groupId=r.$route.query.groupId,n.isStoreGroup=1),Object(s.a)(o,n).then(function(e){1==e.data.errorCode?(r.$message.success({duration:1e3,message:"操作成功！"}),"continue"==t?r.departInfo={name:"",parentName:"",parentId:" "}:window.history.go(-1)):r.$message.error({duration:1e3,message:e.data.message})}).catch(function(e){r.$message.error({duration:1e3,message:e.message})})})},cancel:function(){this.$confirm(" 是否确认取消，取消后当前页面信息将丢失 ？","提示",{type:"warning"}).then(function(){window.history.go(-1)}).catch(function(e){})},getGroupInfo:function(){var e=this,t={groupId:e.$route.query.groupId};Object(s.a)("/haoban-manage-web/dept/findDeptById",t).then(function(t){1==t.data.errorCode?(e.departInfo={name:t.data.result.name,parentName:t.data.result.chainName,parentId:t.data.result.parentId},e.defaultList=[{id:t.data.result.parentId,label:t.data.result.parentGroupName}]):e.$message.error({message:t.data.message})}).catch(function(t){e.$message.error({message:t.message})})}},computed:{isAddNew:function(){return!(1!=this.$route.query.addnew)},forbidenList:function(){return this.isAddNew?[]:[this.$route.query.groupId]},navpath:function(){return[{name:"首页",path:"/index"},{name:"企业通讯录",path:"/administrativeFrame"},{name:"门店架构",path:"/storeFrame"},{name:"group"==this.$route.query.type?"编辑分组":this.isAddNew?"添加子分组":"品牌编辑",path:""}]}},beforeMount:function(){this.treeSet.groupId=this.$route.query.firstLevelId,this.isAddNew||this.getGroupInfo()},mounted:function(){this.disabled=!1},watch:{treeData:function(){this.disabled=!1}}},i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"common-set-wrap"},[a("nav-crumb",{attrs:{navpath:e.navpath}}),e._v(" "),a("div",{staticClass:"right-content"},[a("div",{staticClass:"right-box"},[a("div",{staticClass:"add-department-container"},[a("div",{staticClass:"setting-cell"},[a("el-form",{ref:"departForm",staticClass:"department-info-form",attrs:{"label-position":"right",rules:e.rules,model:e.departInfo,"label-width":"120px"}},[a("el-form-item",{attrs:{label:"brand"==e.$route.query.type?"品牌名称":"部门名称",prop:"name"}},[a("el-input",{model:{value:e.departInfo.name,callback:function(t){e.$set(e.departInfo,"name",t)},expression:"departInfo.name"}})],1),e._v(" "),"group"==e.$route.query.type||e.isAddNew?a("el-form-item",{attrs:{label:"部门排序调整",prop:"parentId"}},[a("el-input",{attrs:{disabled:e.disabled,"suffix-icon":"el-icon-arrow-down"},on:{focus:e.callGroupSelector},model:{value:e.departInfo.parentName,callback:function(t){e.$set(e.departInfo,"parentName",t)},expression:"departInfo.parentName"}})],1):e._e()],1)],1),e._v(" "),a("div",{staticClass:"setting-cell"},[a("div",{staticClass:"btn-area"},[a("el-button",{attrs:{type:"primary"},on:{click:e.saveEdit}},[e._v("保存")]),e._v(" "),e.isAddNew?a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.saveEdit("continue")}}},[e._v("保存并继续添加")]):a("el-button",{attrs:{type:"danger"},on:{click:e.delGroup}},[e._v("删除")]),e._v(" "),a("el-button",{on:{click:e.cancel}},[e._v("取消")])],1)]),e._v(" "),a("vue-select-store",{ref:"storeSelector",attrs:{defaultList:e.defaultList,treeSet:e.treeSet,selectType:"group",forbidenList:e.forbidenList},on:{handleSelectedList:e.handleSelectedList}})],1)])])],1)},staticRenderFns:[]};var d=a("VU/8")(o,i,!1,function(e){a("bcAT")},null,null);t.default=d.exports}});