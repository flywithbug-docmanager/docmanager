(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-e1de"],{IUuP:function(t,e,o){"use strict";o.r(e);var i=o("ZAAW"),n=o("XV9m"),r=o("tWJv"),a={name:"app",props:{dataModel:{type:Object,require:!0}},data:function(){return{loading:!1,modelId:0,list:[],options:[],currentAppId:0,dialog:!1,simpleAppList:[],form:{startVersion:"",endVersion:"",appId:null}}},created:function(){this.modelId=this.dataModel.id,this.getModelApps(),this.getSimpleAppList()},watch:{dataModel:function(){this.modelId=this.dataModel.id,this.getModelApps()}},methods:{confirmAction:function(t,e){this.modifyVersion(t,e)},getModelApps:function(){var t=this,e={modelId:this.modelId};Object(i.d)(e).then(function(e){t.list=e.list})},queryAppVersion:function(t){var e=this;if(0!=this.currentAppId){var o={app_id:this.currentAppId,version:t,size:5};Object(n.e)(o).then(function(t){e.options=t.list})}},rowClicked:function(t,e){"BUTTON"!=e.target.nodeName&&this.$refs.refTable.toggleRowExpansion(t)},setCurrentAppId:function(t){this.currentAppId=t},deleteAppModel:function(t){var e=this,o={id:t.model.id};Object(i.g)(o).then(function(t){e.$notify({title:"删除成功",type:"success",duration:1500}),e.getModelApps()})},addAction:function(){var t=this;this.currentAppId=0,this.dialog=!0;var e=function(e){var o=t.simpleAppList[e];t.list.forEach(function(t){o.id===t.app.id&&(o.disabled=!0)})};for(var o in this.simpleAppList)e(o)},doSubmit:function(){var t=this,e={app_id:this.form.appId,model_id:this.modelId};console.log(this.mod),this.form.startVersion&&(e.start_Version=this.form.startVersion),this.form.endVersion&&(e.end_Version=this.form.endVersion),Object(i.a)(e).then(function(e){t.$notify({title:"添加成功",type:"success",duration:1500}),t.getModelApps()}),this.dialog=!1},selectorChanged:function(){this.currentAppId=this.form.appId,this.options=[]},getSimpleAppList:function(){var t=this;Object(r.c)().then(function(e){e.list&&(t.simpleAppList=e.list)})},modifyVersion:function(t,e){var o=this;""===t.option&&(t.option="-");var n={id:t.model.id};1===e&&(n.start_version=t.option),2===e&&(n.end_version=t.option),Object(i.e)(n).then(function(){o.$notify({title:"修改成功",type:"success",duration:1500}),1===e&&(t.model.start_version=t.option),2===e&&(t.model.end_version=t.option),t.option=""})}}},s=(o("q1/2"),o("KHd+")),l=Object(s.a)(a,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"app-container"},[o("div",{staticStyle:{"margin-bottom":"10px","margin-top":"-5px"},attrs:{align:"center"}},[o("el-tag",{attrs:{size:"mini"}},[t._v("请配置App，否则可能会导致无法拉取到代码!")])],1),t._v(" "),o("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"refTable",staticStyle:{width:"100%"},attrs:{data:t.list,size:"small",border:""},on:{"row-click":t.rowClicked}},[o("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("div",{staticStyle:{"margin-right":"-50px",height:"40px",display:"flex"}},[o("div",{staticStyle:{width:"34%"}},[t._v("\n            修改版本号\n            "),o("el-select",{staticStyle:{"margin-top":"5px"},attrs:{"remote-method":t.queryAppVersion,loading:t.loading,remote:"",clearable:"",filterable:"",placeholder:"请输入版本号关键字"},on:{focus:function(o){t.setCurrentAppId(e.row.app.id)}},model:{value:e.row.option,callback:function(o){t.$set(e.row,"option",o)},expression:"props.row.option"}},t._l(t.options,function(t){return o("el-option",{key:t.version,attrs:{label:t.version,value:t.version}})}))],1),t._v(" "),o("div",{staticClass:"contentDiv"},[o("el-popover",{directives:[{name:"show",rawName:"v-show",value:""===e.row.option&&"-"!=e.row.model.start_version&&""!=e.row.model.start_version,expression:"props.row.option === '' && props.row.model.start_version != '-' && props.row.model.start_version != ''"}],attrs:{placement:"top",width:"160"},model:{value:e.row.visible,callback:function(o){t.$set(e.row,"visible",o)},expression:"props.row.visible"}},[o("p",[t._v("确定要删除起始版本号么？")]),t._v(" "),o("div",{staticStyle:{"text-align":"right",margin:"0"}},[o("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(t){e.row.visible=!1}}},[t._v("取消")]),t._v(" "),o("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(o){t.confirmAction(e.row,1)}}},[t._v("确定")])],1),t._v(" "),o("el-button",{attrs:{slot:"reference",type:"danger",size:"mini",round:""},slot:"reference"},[t._v("删除开始版本")])],1),t._v(" "),o("el-button",{directives:[{name:"show",rawName:"v-show",value:""!==e.row.option,expression:"props.row.option !== '' "}],staticStyle:{"margin-left":"10px"},attrs:{type:"primary",plain:"",round:"",size:"mini",icon:"el-icon-check"},on:{click:function(o){t.modifyVersion(e.row,1)}}},[t._v("\n              "+t._s("修改起始版本")+"\n            ")])],1),t._v(" "),o("div",{staticClass:"contentDiv"},[o("el-popover",{directives:[{name:"show",rawName:"v-show",value:""===e.row.option&&"-"!=e.row.model.end_version&&""!=e.row.model.end_version,expression:"props.row.option === ''&& props.row.model.end_version != '-' && props.row.model.end_version != ''"}],attrs:{placement:"top",width:"160"},model:{value:e.row.visible1,callback:function(o){t.$set(e.row,"visible1",o)},expression:"props.row.visible1"}},[o("p",[t._v("确定要删除结束版本号么？")]),t._v(" "),o("div",{staticStyle:{"text-align":"right",margin:"0"}},[o("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(t){e.row.visible1=!1}}},[t._v("取消")]),t._v(" "),o("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(o){t.confirmAction(e.row,2)}}},[t._v("确定")])],1),t._v(" "),o("el-button",{attrs:{slot:"reference",type:"danger",size:"mini",round:""},slot:"reference"},[t._v("删除结束版本")])],1),t._v(" "),o("el-button",{directives:[{name:"show",rawName:"v-show",value:""!==e.row.option,expression:"props.row.option !== ''"}],staticStyle:{"margin-left":"10px"},attrs:{type:"primary",plain:"",round:"",size:"mini",icon:""===e.row.option?"el-icon-delete":"el-icon-check"},on:{click:function(o){t.modifyVersion(e.row,2)}}},[t._v("\n              "+t._s("修改结束版本")+"\n            ")])],1)])]}}])}),t._v(" "),o("el-table-column",{attrs:{prop:"app.name",label:"应用名"}}),t._v(" "),o("el-table-column",{attrs:{prop:"model.start_version",label:"起始版本"}}),t._v(" "),o("el-table-column",{attrs:{prop:"model.end_version",label:"结束版本"}}),t._v(" "),o("el-table-column",{attrs:{label:"操作",width:"120px"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("el-popover",{attrs:{placement:"top",width:"160"},model:{value:e.row.visible2,callback:function(o){t.$set(e.row,"visible2",o)},expression:"props.row.visible2"}},[o("p",[t._v("确定要删除所属应用么？")]),t._v(" "),o("div",{staticStyle:{"text-align":"right",margin:"0"}},[o("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(t){e.row.visible2=!1}}},[t._v("取消")]),t._v(" "),o("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(o){t.deleteAppModel(e.row)}}},[t._v("确定")])],1),t._v(" "),o("el-button",{attrs:{slot:"reference",type:"danger",size:"mini",icon:"el-icon-delete",round:""},slot:"reference"},[t._v("删除")])],1)]}}])})],1),t._v(" "),o("div",{staticStyle:{"margin-top":"20px"},attrs:{align:"center"}},[o("el-button",{attrs:{type:"primary",plain:"",size:"mini",icon:"el-icon-plus",round:""},on:{click:t.addAction}},[t._v("\n      "+t._s("所属App")+"\n    ")])],1),t._v(" "),o("el-dialog",{attrs:{"append-to-body":!0,visible:t.dialog,title:"添加应用",width:"400px"},on:{"update:visible":function(e){t.dialog=e}}},[o("el-form",{attrs:{model:t.form,"label-width":"90px"}},[o("el-form-item",{attrs:{label:"应用名称",prop:"name"}},[o("el-select",{staticClass:"filter-item",attrs:{filterable:"",clearable:"",placeholder:"选择应用"},on:{change:t.selectorChanged},model:{value:t.form.appId,callback:function(e){t.$set(t.form,"appId",e)},expression:"form.appId"}},t._l(t.simpleAppList,function(t){return o("el-option",{key:t.key,attrs:{label:t.name,disabled:t.disabled,value:t.id}})}))],1),t._v(" "),o("el-form-item",{attrs:{label:"起始版本"}},[o("el-select",{staticStyle:{"margin-top":"5px"},attrs:{"remote-method":t.queryAppVersion,loading:t.loading,remote:"",disabled:null===t.form.appId,clearable:"",filterable:"",placeholder:"请输入版本号关键字"},model:{value:t.form.startVersion,callback:function(e){t.$set(t.form,"startVersion",e)},expression:"form.startVersion"}},t._l(t.options,function(t){return o("el-option",{key:t.version,attrs:{label:t.version,value:t.version}})}))],1),t._v(" "),o("el-form-item",{attrs:{label:"结束版本"}},[o("el-select",{staticStyle:{"margin-top":"5px"},attrs:{"remote-method":t.queryAppVersion,loading:t.loading,remote:"",disabled:null===t.form.appId,clearable:"",filterable:"",placeholder:"请输入版本号关键字"},model:{value:t.form.endVersion,callback:function(e){t.$set(t.form,"endVersion",e)},expression:"form.endVersion"}},t._l(t.options,function(t){return o("el-option",{key:t.version,attrs:{label:t.version,value:t.version}})}))],1)],1),t._v(" "),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{attrs:{type:"text"},on:{click:function(e){t.dialog=!1}}},[t._v("取消")]),t._v(" "),o("el-button",{attrs:{loading:t.loading,type:"primary"},on:{click:t.doSubmit}},[t._v("确认")])],1)],1)],1)},[],!1,null,"d2c9e93c",null);l.options.__file="app.vue";e.default=l.exports},Wl6R:function(t,e,o){},XV9m:function(t,e,o){"use strict";o.d(e,"e",function(){return n}),o.d(e,"a",function(){return r}),o.d(e,"c",function(){return a}),o.d(e,"b",function(){return s}),o.d(e,"d",function(){return l});var i=o("bNJ/");function n(t){return Object(i.a)({url:"/app/version/list",method:"get",params:t})}function r(t,e,o,n,r,a,s){var l={app_id:t,version:e,parent_version:o,platform:n,approval_time:r,lock_time:a,gray_time:s};return Object(i.a)({url:"/app/version",method:"post",data:l})}function a(t){return Object(i.a)({url:"/app/version",method:"put",data:t})}function s(t){var e={id:t};return Object(i.a)({url:"/app/version",method:"delete",data:e})}function l(t,e){var o={id:t,status:e};return console.log("editStatus",o),Object(i.a)({url:"/app/version",method:"put",data:o})}},ZAAW:function(t,e,o){"use strict";o.d(e,"c",function(){return n}),o.d(e,"f",function(){return r}),o.d(e,"b",function(){return a}),o.d(e,"d",function(){return s}),o.d(e,"e",function(){return l}),o.d(e,"g",function(){return p}),o.d(e,"a",function(){return d});var i=o("bNJ/");function n(t){return Object(i.a)({url:"/tools/model?id="+t,method:"get"})}function r(t){return Object(i.a)({url:"/tools/model/list",method:"get",params:t})}function a(t){return Object(i.a)({url:"/tools/model",method:"put",data:t})}function s(t){return Object(i.a)({url:"/tools/model_apps",method:"get",params:t})}function l(t){return Object(i.a)({url:"/tools/model_app/version",method:"put",data:t})}function p(t){return Object(i.a)({url:"/tools/model_app",method:"Delete",data:t})}function d(t){return Object(i.a)({url:"/tools/model_app",method:"POST",data:t})}},"q1/2":function(t,e,o){"use strict";var i=o("Wl6R");o.n(i).a},tWJv:function(t,e,o){"use strict";o.d(e,"a",function(){return n}),o.d(e,"b",function(){return r}),o.d(e,"c",function(){return a});var i=o("bNJ/");function n(t){var e={bundle_id:t.bundle_id,icon:t.icon,name:t.name,desc:t.desc,managers:t.managers};return Object(i.a)({url:"/app",method:"post",data:e})}function r(t){var e={icon:t.icon,name:t.name,desc:t.desc,id:t.id,managers:t.managers,owner_id:t.owner_id};return Object(i.a)({url:"/app",method:"put",data:e})}function a(){return Object(i.a)({url:"/app/list/simple",method:"get"})}}}]);