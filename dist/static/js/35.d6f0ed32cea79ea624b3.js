webpackJsonp([35],{Thti:function(t,e){},t0b0:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={name:"select-com",props:{childItem:{type:[Object,Array],default:function(){return{}}}},methods:{getZhLen:function(t){for(var e=0,i=0;i<t.length;i++){null!=t.charAt(i).match(/[^\x00-\xff]/gi)?e+=1:e+=.5}return Math.ceil(e)}}},r={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{class:["opencard-item-title",t.getZhLen(t.childItem.title)>=6?"title-pre-wrap":""]},[t._v(t._s(t.childItem.title))]),t._v(" "),i("div",{staticClass:"draged-item-show"},[i("span",{staticClass:"show-warm-text show-warm-text-flag select-flag"},[t._v(t._s(t.childItem.placeholder)+" "+t._s(t.childItem.isMust?"（必填）":"")+" "),i("i",{staticClass:"el-icon-arrow-right"})])])])},staticRenderFns:[]};var s=i("VU/8")(a,r,!1,function(t){i("Thti")},"data-v-bb9f953c",null);e.default=s.exports}});