(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-3a5a","chunk-749f"],{"1Sol":function(e,t,r){"use strict";r.r(t);var o=r("ZAAW"),n={name:"attributeExpand",props:{modelId:{type:Number,required:!0},attribute:{type:Object,require:!0},isAdd:{type:Boolean,required:!1}},created:function(){this.attribute&&(this.form=this.attribute,this.oldName=this.attribute.name)},data:function(){return{loading:!1,mQuery:!1,oldName:"",form:{type:"",name:"",model_name:"",model_id:null,comments:"",required:!0,default:""},options:[{name:"String"},{name:"Int"},{name:"Float"},{name:"Bool"},{name:"Array"},{name:"Object"}],optionsArray:[{name:"String",id:-1},{name:"Int",id:-2},{name:"Float",id:-3},{name:"Bool",id:-4}],options1:[{name:"是",id:!0},{name:"否",id:!1}],list:this.optionsArray,rules:{name:[{required:!0,message:"请输入属性名称",trigger:"blur"},{pattern:/^[A-Z][A-Za-z0-9_]+$/,message:"首字母大写的英文字母名字",trigger:"blur"}],properType:[{required:!0,message:"必须选择属性类型",trigger:"blur"}],comments:[{required:!0,message:"必须填写属性注释",trigger:"blur"}]}}},methods:{selectorChanged:function(e){"Object"===e||"Array"===e?this.mQuery=!0:(this.mQuery=!1,this.form.model_id=null,this.list=[])},cancelAction:function(){this.$emit("closeExpand")},doSubmit:function(){var e=this,t={id:this.modelId,attributes:[this.form]};if(this.oldName){var r={name:this.oldName};t.drop_attributes=[r]}Object(o.b)(t).then(function(){e.$notify({title:"添加成功",type:"success",duration:1500}),e.$emit("refreshData"),e.resetForm()})},resetForm:function(){this.form={type:"String",name:"",model_name:"",model_id:null,comments:"",required:!0,default:""}},selectionModelChanged:function(e){switch(e){case-1:this.form.model_name="String";break;case-2:this.form.model_name="Int";break;case-3:this.form.model_name="Float";break;case-4:this.form.model_name="Bool"}},queryModelList:function(e){var t=this;if(0!=e.length){var r={name:e,exc:this.modelId};Object(o.g)(r).then(function(e){"Array"===t.form.type?t.list=e.list.concat(t.optionsArray):t.list=e.list})}}}},a=(r("Nl08"),r("KHd+")),l=Object(a.a)(n,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-form",{attrs:{model:e.form,size:"small","label-width":"90px",rules:e.rules}},[r("el-form-item",{attrs:{label:"属性名称",prop:"name"}},[r("el-input",{attrs:{placeholder:e.isAdd?"请输入属性名称":"请输入要修改的名称"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"类型",prop:"properType"}},[r("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"选择类型",clearable:""},on:{change:e.selectorChanged},model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},e._l(e.options,function(e){return r("el-option",{key:e.name,attrs:{label:e.name,value:e.name}})}))],1),e._v(" "),r("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.mQuery,expression:"mQuery"}],attrs:{label:"选择模型",prop:"properType"}},[r("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"输入模型关键字搜索",remote:"",clearable:"",filterable:"","remote-method":e.queryModelList},on:{change:e.selectionModelChanged},model:{value:e.form.model_id,callback:function(t){e.$set(e.form,"model_id",t)},expression:"form.model_id"}},e._l(e.list,function(e){return r("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))],1),e._v(" "),r("el-form-item",{attrs:{label:"注释",prop:"comments"}},[r("el-input",{model:{value:e.form.comments,callback:function(t){e.$set(e.form,"comments",t)},expression:"form.comments"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"默认值",prop:"default"}},[r("el-input",{model:{value:e.form.default,callback:function(t){e.$set(e.form,"default",t)},expression:"form.default"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"必须",prop:"required"}},[r("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"选择是否必须"},model:{value:e.form.required,callback:function(t){e.$set(e.form,"required",t)},expression:"form.required"}},e._l(e.options1,function(e){return r("el-option",{key:e.name,attrs:{label:e.name,value:e.id}})}))],1),e._v(" "),r("el-form-item",{attrs:{align:"right"}},[r("el-button",{attrs:{type:"text"},on:{click:e.cancelAction}},[e._v("取消")]),e._v(" "),r("el-button",{attrs:{loading:e.loading,type:"primary"},on:{click:e.doSubmit}},[e._v("确认")])],1)],1)],1)},[],!1,null,"d5d54d2c",null);l.options.__file="attributeExpand.vue";t.default=l.exports},"9QE9":function(e,t,r){"use strict";var o=r("ec/J");r.n(o).a},Nl08:function(e,t,r){"use strict";var o=r("ykKj");r.n(o).a},ZAAW:function(e,t,r){"use strict";r.d(t,"d",function(){return n}),r.d(t,"g",function(){return a}),r.d(t,"c",function(){return l}),r.d(t,"b",function(){return i}),r.d(t,"e",function(){return s}),r.d(t,"f",function(){return m}),r.d(t,"h",function(){return u}),r.d(t,"a",function(){return d});var o=r("bNJ/");function n(e){return Object(o.a)({url:"/tools/model?id="+e,method:"get"})}function a(e){return Object(o.a)({url:"/tools/model/list",method:"get",params:e})}function l(e){return Object(o.a)({url:"/tools/model",method:"put",data:e})}function i(e){return Object(o.a)({url:"/tools/model/attribute",method:"put",data:e})}function s(e){return Object(o.a)({url:"/tools/model_apps",method:"get",params:e})}function m(e){return Object(o.a)({url:"/tools/model_app/version",method:"put",data:e})}function u(e){return Object(o.a)({url:"/tools/model_app",method:"Delete",data:e})}function d(e){return Object(o.a)({url:"/tools/model_app",method:"POST",data:e})}},"ec/J":function(e,t,r){},npVg:function(e,t,r){"use strict";r.r(t);var o={name:"attributeForm",components:{eExpand:r("1Sol").default},props:{modelId:{type:Number,require:!0}},data:function(){return{dialog:!1}},methods:{refreshData:function(){this.dialog=!1,this.$emit("refreshData")}}},n=(r("9QE9"),r("KHd+")),a=Object(n.a)(o,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-dialog",{attrs:{loading:"loading","append-to-body":!0,visible:e.dialog,title:"添加属性",width:"400px"},on:{"update:visible":function(t){e.dialog=t}}},[r("e-expand",{attrs:{modelId:e.modelId,"is-add":!0},on:{refreshData:e.refreshData}})],1)},[],!1,null,"2e100378",null);a.options.__file="attributeForm.vue";t.default=a.exports},ykKj:function(e,t,r){}}]);