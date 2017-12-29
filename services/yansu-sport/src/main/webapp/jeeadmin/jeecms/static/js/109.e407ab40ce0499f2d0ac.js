webpackJsonp([109],{"Rf+L":function(e,n,a){"use strict";function l(e){a("mbDN")}Object.defineProperty(n,"__esModule",{value:!0});var t=a("5HJ5"),r=a("2sCs"),s=a.n(r),o={mixins:[t.a],data:function(){return{params:{queryUsername:"",queryEmail:"",queryGroupId:"",queryStatu:"",queryRealName:"",queryDepartId:"",queryAllChannel:"",queryAllControlChannel:"",queryRoleId:"",pageNo:"",pageSize:"",https:""},roles:[],groups:[]}},methods:{getQueryParams:function(){var e=this,n=this.$api;s.a.all([s.a.post(n.roleList),s.a.post(n.groupList)]).then(s.a.spread(function(n,a){e.roles=n.body,e.groups=a.body,e.loading=!1})).catch(function(n){e.loading=!1})}},created:function(){this.initTableData(this.$api.adminGlocalList,this.params),this.getQueryParams()}},i=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("section",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"cms-body"},[a("div",{staticClass:"cms-list-header"},[a("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/adminGlocal/add",expression:"'/adminGlocal/add'"}],attrs:{type:"primary",icon:"el-icon-plus"},on:{click:function(n){e.routerLink("/adminGlocal/add","save",0)}}},[e._v("添加")]),e._v(" "),a("cms-input",{attrs:{label:"用户名"},model:{value:e.params.queryUsername,callback:function(n){e.$set(e.params,"queryUsername",n)},expression:"params.queryUsername"}}),e._v(" "),a("cms-input",{attrs:{label:"真实姓名"},model:{value:e.params.queryRealName,callback:function(n){e.$set(e.params,"queryRealName",n)},expression:"params.queryRealName"}}),e._v(" "),a("cms-input",{attrs:{label:"电子邮箱"},model:{value:e.params.queryEmail,callback:function(n){e.$set(e.params,"queryEmail",n)},expression:"params.queryEmail"}}),e._v(" "),a("el-checkbox",{attrs:{"true-label":"1","false-label":""},model:{value:e.params.queryStatu,callback:function(n){e.$set(e.params,"queryStatu",n)},expression:"params.queryStatu"}},[e._v("禁用")])],1),e._v(" "),a("div",{staticClass:"cms-list-header"},[a("label",{staticClass:"cms-label"},[e._v("所有栏目内容权限")]),e._v(" "),a("el-select",{on:{change:e.query},model:{value:e.params.queryAllChannel,callback:function(n){e.$set(e.params,"queryAllChannel",n)},expression:"params.queryAllChannel"}},[a("el-option",{attrs:{label:"所有",value:""}}),e._v(" "),a("el-option",{attrs:{label:"是",value:"true"}}),e._v(" "),a("el-option",{attrs:{label:"否",value:"false"}})],1),e._v(" "),a("label",{staticClass:"cms-label"},[e._v("所有栏目控制权限")]),e._v(" "),a("el-select",{on:{change:e.query},model:{value:e.params.queryAllControlChannel,callback:function(n){e.$set(e.params,"queryAllControlChannel",n)},expression:"params.queryAllControlChannel"}},[a("el-option",{attrs:{label:"所有",value:""}}),e._v(" "),a("el-option",{attrs:{label:"是",value:"true"}}),e._v(" "),a("el-option",{attrs:{label:"否",value:"false"}})],1),e._v(" "),a("el-select",{on:{change:e.query},model:{value:e.params.queryGroupId,callback:function(n){e.$set(e.params,"queryGroupId",n)},expression:"params.queryGroupId"}},[a("el-option",{attrs:{label:"所有用户组",value:""}}),e._v(" "),e._l(e.groups,function(e,n){return a("el-option",{key:n,attrs:{label:e.name,value:e.id}})})],2),e._v(" "),a("el-select",{on:{change:e.query},model:{value:e.params.queryRoleId,callback:function(n){e.$set(e.params,"queryRoleId",n)},expression:"params.queryRoleId"}},[a("el-option",{attrs:{label:"所有角色",value:""}}),e._v(" "),e._l(e.roles,function(e,n){return a("el-option",{key:n,attrs:{label:e.name,value:e.id}})})],2),e._v(" "),a("el-button",{on:{click:e.query}},[e._v("查询")])],1),e._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,stripe:""},on:{"selection-change":e.checkIds}},[a("el-table-column",{attrs:{type:"selection",width:"65",align:"right"}}),e._v(" "),a("el-table-column",{attrs:{prop:"id",label:"ID",width:"50",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"username",label:"用户名",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"站点",align:"center","show-overflow-tooltip":!0},scopedSlots:e._u([{key:"default",fn:function(n){return a("div",{staticClass:"text-overflow"},e._l(n.row.sites,function(l,t){return a("span",{key:t},[e._v(e._s(l.name)),t!=n.row.sites.length-1?a("i",[e._v(",")]):e._e()])}))}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"departmentName",label:"部门",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"rank",label:"等级",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"lastLoginTime",label:"最后登录时间",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"disabled",label:"禁用",align:"center"},scopedSlots:e._u([{key:"default",fn:function(n){return a("div",{},[n.row.disabled?a("span",[e._v("是")]):a("span",[e._v("否")])])}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"loginCount",label:"登录次数",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(n){return a("div",{},[a("cms-button",{directives:[{name:"perms",rawName:"v-perms",value:"/adminGlocal/edit",expression:"'/adminGlocal/edit'"}],attrs:{type:"edit"},nativeOn:{click:function(a){e.routerLink("/adminGlocal/edit",n.row.rank,n.row.id)}}}),e._v(" "),a("cms-button",{directives:[{name:"perms",rawName:"v-perms",value:"/adminGlocal/delete",expression:"'/adminGlocal/delete'"}],attrs:{type:"delete"},nativeOn:{click:function(a){e.deleteBatch(e.$api.adminGlocalDelete,n.row.id)}}})],1)}}])})],1),e._v(" "),a("div",{staticClass:"cms-list-footer"},[a("div",{staticClass:"cms-left"},[a("el-button",{directives:[{name:"perms",rawName:"v-perms",value:"/adminGlocal/delete",expression:"'/adminGlocal/delete'"}],attrs:{disabled:e.disabled},on:{click:function(n){e.deleteBatch(e.$api.adminGlocalDelete,e.ids)}}},[e._v("批量删除")])],1),e._v(" "),a("cms-pagination",{attrs:{total:e.total},on:{change:e.getPages}})],1)],1)},u=[],c={render:i,staticRenderFns:u},p=c,m=a("Mw9A"),d=l,v=m(o,p,!1,d,null,null);n.default=v.exports},mbDN:function(e,n,a){var l=a("oUZu");"string"==typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals);a("8bSs")("39d1020d",l,!0)},oUZu:function(e,n,a){n=e.exports=a("BkJT")(!1),n.push([e.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])}});