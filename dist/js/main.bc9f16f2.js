(function(t){function e(e){for(var r,i,u=e[0],s=e[1],c=e[2],d=0,f=[];d<u.length;d++)i=u[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);l&&l(e);while(f.length)f.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,u=1;u<n.length;u++){var s=n[u];0!==a[s]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={main:0},o=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=e,u=u.slice();for(var c=0;c<u.length;c++)e(u[c]);var l=s;o.push(["e35a","chunk-vendors"]),n()})({"8ee5":function(t,e,n){},a9cd:function(t,e,n){},b5fe:function(t,e,n){"use strict";var r=n("8ee5"),a=n.n(r);a.a},d677:function(t,e,n){},d678:function(t,e,n){"use strict";var r=n("a9cd"),a=n.n(r);a.a},e187:function(t,e,n){"use strict";var r=n("d677"),a=n.n(r);a.a},e35a:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("MessageTemplateCreator",{attrs:{"tag-list":t.tagList},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1)},o=[],i=(n("b0c0"),n("2fa7")),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"msgTplCtor",staticClass:"msg-tpl-ctor"},[n("div",{staticClass:"left"},[n("div",{ref:"msgTplCtorContent",staticClass:"msg-tpl-ctor-input",attrs:{id:t.contentId},on:{input:t.handleInput}}),n("div",{staticClass:"msg-tpl-ctor-view"},[t._v(" "+t._s(t.viewContent)+" ")])]),n("div",{staticClass:"right"},[n("div",{staticClass:"msg-tpl-ctor-tools"},t._l(t.tagList,(function(e){return n("button",{key:e,staticClass:"btn",on:{click:function(n){return t.addTag(e)}}},[t._v(t._s(e))])})),0)])])},s=[];n("0d03"),n("d3b7"),n("ac1f"),n("25f0"),n("5319");function c(t){return t.replace(/\<input([^\>]+)\>/g,(function(t){var e=document.createElement("div");return e.innerHTML=t,"[".concat(e.firstChild.value,"]")}))}function l(){return Math.random().toString(36).substr(2)}var d={name:"MessageTemplateCreator",props:{value:{type:String,default:""},tagList:{type:Array,default:function(){return[]}},tagInputCls:{type:String,default:""}},data:function(){return{currentText:this.value,contentId:"content".concat(l()),savedRange:{}}},computed:{viewContent:function(){return c(this.value)}},mounted:function(){this.currentText&&(this.$refs.msgTplCtorContent.innerHTML=this.currentText),document.addEventListener("selectionchange",this.handleSelect)},beforeDestroy:function(){document.removeEventListener("selectionchange",this.handleSelect)},methods:{addTag:function(t){var e=document.createElement("input");e.setAttribute("type","button"),e.setAttribute("class",this.tagInputCls?"tag-input ".concat(this.tagInputCls):"tag-input"),e.setAttribute("readonly",!0),e.setAttribute("value",t),this.insertNode(e)},insertNode:function(t){this.savedRange.deleteContents(),this.savedRange.insertNode(t);var e=this.$refs.msgTplCtorContent;this.updateData(e.innerHTML),this.currentText=e.innerText},updateData:function(t){this.$emit("input",t)},handleSelect:function(){var t=window.getSelection(),e=t.rangeCount>0?t.getRangeAt(0):null;e&&e.commonAncestorContainer.ownerDocument.activeElement.id===this.contentId&&(this.savedRange=e)},handleInput:function(t){this.updateData(t.target.innerHTML),this.currentText=t.target.innerText}}},f=d,p=(n("e187"),n("b5fe"),n("2877")),v=Object(p["a"])(f,u,s,!1,null,"3643b0d8",null),g=v.exports,h=function t(e){t.installed||(t.installed=!0,e.component(g.name,g))};"undefined"!==typeof window&&window.Vue&&h(window.Vue);var m=g,b={name:"app",components:Object(i["a"])({},m.MessageTemplateCreator.name,m.MessageTemplateCreator),data:function(){return{value:"这是一条信息模板",tagList:["button--one","button--two","button--three","button--four","button--five","button--six","button--seven"]}}},C=b,y=(n("d678"),Object(p["a"])(C,a,o,!1,null,null,null)),w=y.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(w)}}).$mount("#app")}});
//# sourceMappingURL=main.bc9f16f2.js.map