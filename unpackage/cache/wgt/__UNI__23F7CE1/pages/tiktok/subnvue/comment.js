!function(t){var e={};function o(r){if(e[r])return e[r].exports;var n=e[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=e,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=84)}({0:function(t,e,o){"use strict";function r(t,e,o,r,n,i,a,s,l,f){var c,d="function"==typeof t?t.options:t;if(l){d.components||(d.components={});var p=Object.prototype.hasOwnProperty;for(var u in l)p.call(l,u)&&!p.call(d.components,u)&&(d.components[u]=l[u])}if(f&&((f.beforeCreate||(f.beforeCreate=[])).unshift((function(){this[f.__module]=this})),(d.mixins||(d.mixins=[])).push(f)),e&&(d.render=e,d.staticRenderFns=o,d._compiled=!0),r&&(d.functional=!0),i&&(d._scopeId="data-v-"+i),a?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},d._ssrRegister=c):n&&(c=s?function(){n.call(this,this.$root.$options.shadowRoot)}:n),c)if(d.functional){d._injectStyles=c;var g=d.render;d.render=function(t,e){return c.call(e),g(t,e)}}else{var h=d.beforeCreate;d.beforeCreate=h?[].concat(h,c):[c]}return{exports:t,options:d}}o.d(e,"a",(function(){return r}))},1:function(t,e){t.exports={"aui-content":{width:100,height:100,backgroundColor:"#EFEFEF",overflowY:"scroll",paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0,boxSizing:"border-box",position:"relative"},"row-before":{position:"relative","content:before":"''","width:before":100,"height:before":"1","backgroundColor:before":"rgba(100,100,100,0.3)","MsTransform:before":"scaleY(.3)","WebkitTransform:before":"scaleY(.3)","transform:before":"scaleY(.3)","position:before":"absolute","top:before":0,"right:before":0,"zIndex:before":1},"row-after":{position:"relative","content:after":"''","width:after":100,"height:after":"1","backgroundColor:after":"rgba(100,100,100,0.3)","MsTransform:after":"scaleY(.3)","WebkitTransform:after":"scaleY(.3)","transform:after":"scaleY(.3)","position:after":"absolute","bottom:after":0,"right:after":0,"zIndex:after":1},"col-before":{position:"relative","content:before":"''","width:before":"1","height:before":100,"backgroundColor:before":"rgba(100,100,100,0.3)","MsTransform:before":"scaleX(.3)","WebkitTransform:before":"scaleX(.3)","transform:before":"scaleX(.3)","position:before":"absolute","top:before":0,"left:before":0,"zIndex:before":1},"col-after":{position:"relative","content:after":"''","width:after":"1","height:after":100,"backgroundColor:after":"rgba(100,100,100,0.3)","MsTransform:after":"scaleX(.3)","WebkitTransform:after":"scaleX(.3)","transform:after":"scaleX(.3)","position:after":"absolute","top:after":0,"right:after":0,"zIndex:after":1},border:{position:"relative","content:after":"''","borderRadius:after":"3","borderWidth:after":"1","borderStyle:after":"solid","borderColor:after":"rgba(100,100,100,0.3)","position:after":"absolute","left:after":-50,"top:after":-50,"MsTransform:after":"scale(.5, .5)","WebkitTransform:after":"scale(.5, .5)","transform:after":"scale(.5, .5)","zIndex:after":1},"aui-lists":{width:100},"aui-list":{width:100,height:"55",fontSize:0,paddingTop:0,paddingRight:"15",paddingBottom:0,paddingLeft:"15",backgroundColor:"#FFFFFF",boxSizing:"border-box",position:"relative",zIndex:1,"content:after":"''","width:after":100,"height:after":"1","backgroundColor:after":"rgba(100,100,100,0.3)","MsTransform:after":"scaleY(.3)","WebkitTransform:after":"scaleY(.3)","transform:after":"scaleY(.3)","position:after":"absolute","bottom:after":0,"left:after":0,"display:last-child:after":"none"},"aui-list-title":{width:100,height:"44",lineHeight:"44",fontSize:"14",paddingTop:0,paddingRight:"15",paddingBottom:0,paddingLeft:"15",boxSizing:"border-box",color:"#999999",display:"inline-block"},"aui-list-left":{height:100,lineHeight:"55",fontSize:"15",color:"#333333",display:"inline-block",verticalAlign:"top"},"aui-list-right":{height:100,display:"inline-block",verticalAlign:"top",float:"right"},"aui-btn":{height:"50",lineHeight:"50",textAlign:"center",borderWidth:0,borderStyle:"solid",color:"#333333",fontSize:"15",borderRadius:"5",marginTop:0,marginRight:"15",marginBottom:"15",marginLeft:"15",paddingTop:0,paddingRight:"10",paddingBottom:0,paddingLeft:"10",transitionProperty:"backgroundColor",transitionDuration:200,boxSizing:"border-box",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",position:"relative"},"aui-btn-blue":{backgroundColor:"#197DE0",color:"#FFFFFF"},"aui-mask":{width:100,height:100,backgroundColor:"rgba(0,0,0,0.6)",MsAnimation:"aui-fade-in .2s ease-out forwards",WebkitAnimation:"aui-fade-in .2s ease-out forwards",animation:"aui-fade-in .2s ease-out forwards",position:"fixed",top:"0",left:"0",zIndex:998},"sticky-left":{position:"sticky",left:0,backgroundColor:"#FFFFFF"},"sticky-right":{position:"sticky",right:0,backgroundColor:"#FFFFFF"},tabbar:{left:0,right:0,bottom:0,display:"flex",height:"110rpx",backgroundColor:"#FFFFff"},"@VERSION":2}},2:function(t,e,o){"use strict";function r(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}function n(){return"string"==typeof __channelId__&&__channelId__}function i(t,e){switch(r(e)){case"Function":return"function() { [native code] }";default:return e}}Object.defineProperty(e,"__esModule",{value:!0}),e.log=function(t){for(var e=arguments.length,o=new Array(e>1?e-1:0),r=1;r<e;r++)o[r-1]=arguments[r];console[t].apply(console,o)},e.default=function(){for(var t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];var a=e.shift();if(n())return e.push(e.pop().replace("at ","uni-app:///")),console[a].apply(console,e);var s=e.map((function(t){var e=Object.prototype.toString.call(t).toLowerCase();if("[object object]"===e||"[object array]"===e)try{t="---BEGIN:JSON---"+JSON.stringify(t,i)+"---END:JSON---"}catch(o){t=e}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var o=r(t).toUpperCase();t="NUMBER"===o||"BOOLEAN"===o?"---BEGIN:"+o+"---"+t+"---END:"+o+"---":String(t)}return t})),l="";if(s.length>1){var f=s.pop();l=s.join("---COMMA---"),0===f.indexOf(" at ")?l+=f:l+="---COMMA---"+f}else l=s[0];console[a](l)}},28:function(t,e,o){"use strict";var r=o(64),n=o(38),i=o(0);var a=Object(i.a)(n.default,r.b,r.c,!1,null,"5db8766a","f7908710",!1,r.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(o(74).default,this.options.style):Object.assign(this.options.style,o(74).default)}).call(a),e.default=a.exports},3:function(t,e,o){Vue.prototype.__$appStyle__={},Vue.prototype.__merge_style&&Vue.prototype.__merge_style(o(4).default,Vue.prototype.__$appStyle__)},38:function(t,e,o){"use strict";var r=o(39),n=o.n(r);e.default=n.a},39:function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=weex.requireModule("animation"),r=(weex.requireModule("modal"),{data:function(){return{flag:!0,canHide:!1,message:"",placeholder:"\u6765\u804a\u804a\u5929\u628a",reply:"",dataList:[{name:"\u5f20\u4e09",time:"04-03",message:"\u4e0b\u8f7d\u6765\u8bd5\u8bd5\u5580\u5580\u5580\u5580\u5580\u5580\u5580\u5580\u5580\u9177\u9177\u9177\u9177\u9177\u9177\u9177\u9177",reply:"\u6625\u96f7"},{name:"\u5f20\u4e09",time:"04-03",message:"\u4e0b\u8f7d\u6765\u8bd5\u8bd5",reply:"\u6625\u96f7"}]}},beforeCreate:function(){weex.requireModule("dom").addRule("fontFace",{fontFamily:"iconfont",src:"url('../../../static/subnvue/iconfont.ttf')"})},created:function(){uni.$on("showComment",this.showComment),uni.$on("sendComment",this.sendComment)},destroyed:function(){uni.$off("showComment"),uni.$off("sendComment")},methods:{replyName:function(t){this.reply=t,this.placeholder="\u56de\u590d ".concat(t," :")},sendComment:function(e){t("log",e," at pages/tiktok/subnvue/comment.nvue:97"),this.dataList.push({name:"\u6625\u96f7",time:"04-03",message:e,reply:this.reply}),this.reply=""},showComment:function(t){var e=this;this.flag=!0,this.canHide=!1;var r=this.$refs.content;o.transition(r,{styles:{transform:"translate(0px, 0px)"},duration:200,timingFunction:"ease-in-out",delay:0},(function(){e.canHide=!0}))},hide:function(){if(this.canHide){var t=this.$refs.content;o.transition(t,{styles:{transform:"translate(0px, 1000rpx)"},duration:200,timingFunction:"ease-in-out",delay:0},(function(){uni.getSubNVueById("comment").hide()}))}},showInput:function(){var t=this;uni.getSubNVueById("input-box").show("none",0,(function(){t.flag=!1,uni.$emit("showInput")}))}}});e.default=r}).call(this,o(2).default)},4:function(t,e,o){"use strict";o.r(e);var r=o(1),n=o.n(r);for(var i in r)"default"!==i&&function(t){o.d(e,t,(function(){return r[t]}))}(i);e.default=n.a},40:function(t,e){t.exports={iconfont:{fontFamily:"iconfont",fontSize:"16"},"color-gray":{color:"#515352",fontSize:"14"},"color-grey":{color:"#A8ACAF",fontSize:"12"},"color-bule":{color:"#55ADDF"},"margin-right":{marginRight:"20rpx"},subnvue:{flexDirection:"column",flex:1,backgroundColor:"rgba(0,0,0,0)",position:"relative"},mask:{flexDirection:"column",backgroundColor:"#000000",opacity:.4,flex:1},content:{position:"absolute",backgroundColor:"#ffffff",width:"750rpx",bottom:0,height:"1000rpx",transform:"translateY(1000rpx)",flexDirection:"column",justifyContent:"space-between",borderTopLeftRadius:"30rpx",borderTopRightRadius:"30rpx"},top:{paddingTop:"20rpx",paddingRight:"20rpx",paddingBottom:"20rpx",paddingLeft:"20rpx",flexDirection:"row",justifyContent:"space-between"},"size-14":{fontSize:"14"},title:{flex:1,alignItems:"center"},hideBtn:{paddingTop:"10rpx",paddingRight:"10rpx",paddingBottom:"10rpx",paddingLeft:"10rpx",justifyContent:"center",alignItems:"center"},bottom:{alignItems:"center",flexDirection:"row",backgroundColor:"#FF0000",justifyContent:"space-between"},input:{boxShadow:"0 -1px 4px 1px rgba(0, 0, 0, 0.1)",fontSize:"16",flexDirection:"row",alignItems:"center",flex:1,height:"100rpx",paddingTop:"30rpx",paddingRight:"30rpx",paddingBottom:"30rpx",paddingLeft:"30rpx",backgroundColor:"#ffffff"},bottomBtn:{paddingTop:"5rpx",paddingRight:"15rpx",paddingBottom:"5rpx",paddingLeft:"15rpx",borderRadius:"10rpx",marginLeft:"30rpx"},"bottom-text":{color:"#ffffff"},"srcoll-view":{flex:1},card:{position:"relative",flexDirection:"row",justifyContent:"space-between",paddingTop:"30rpx",paddingRight:"30rpx",paddingBottom:"30rpx",paddingLeft:"30rpx"},"card-left":{flexDirection:"row"},"card-content":{flex:1},"card-image":{height:"70rpx",width:"70rpx",borderRadius:50,marginRight:"35rpx"},"card-top":{height:"80rpx",justifyContent:"space-between"},"card-message":{paddingTop:"20rpx",paddingRight:0,paddingBottom:"20rpx",paddingLeft:0,flexDirection:"row",width:"600rpx"},"card-text":{flex:1},"card-right":{position:"absolute",right:"30rpx",top:"30rpx",flexDirection:"row"},"card-icon":{marginLeft:"40rpx",marginRight:"20rpx"},"@VERSION":2}},64:function(t,e,o){"use strict";o.d(e,"b",(function(){return r})),o.d(e,"c",(function(){return n})),o.d(e,"a",(function(){}));var r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:["subnvue","flex"],on:{click:function(t){}}},[o("div",{staticClass:["mask"],on:{click:function(e){t.hide()}}}),o("div",{ref:"content",staticClass:["content","flex"]},[o("div",{staticClass:["top","flex"]},[t._m(0),o("div",{staticClass:["hideBtn","flex"],on:{click:function(e){t.hide()}}},[o("u-text",{staticClass:["iconfont"],appendAsTree:!0,attrs:{append:"tree"}},[t._v("\ue628")])])]),o("scroll-view",{staticClass:["srcoll-view"],attrs:{scrollY:!0}},t._l(t.dataList,(function(e,r){return o("div",{key:r,staticClass:["card"]},[o("div",{staticClass:["card-left"]},[o("u-image",{staticClass:["card-image"],attrs:{src:"../../static/logo.png"}}),o("div",{staticClass:["card-content"]},[o("div",{staticClass:["card-top"]},[o("u-text",{staticClass:["card-name","size-14"],appendAsTree:!0,attrs:{append:"tree"},on:{click:function(o){t.replyName(e.name)}}},[t._v(t._s(e.name))]),o("u-text",{staticClass:["color-grey"],appendAsTree:!0,attrs:{append:"tree"}},[t._v(t._s(e.time))])]),o("div",{staticClass:["card-message"]},[e.reply?o("u-text",{staticClass:["margin-right","size-14"],appendAsTree:!0,attrs:{append:"tree"}},[t._v("\u56de\u590d")]):t._e(),e.reply?o("u-text",{staticClass:["color-bule","margin-right","size-14"],appendAsTree:!0,attrs:{append:"tree"},on:{click:function(o){t.replyName(e.reply)}}},[t._v(t._s(e.reply)+":")]):t._e(),o("u-text",{staticClass:["card-text","size-14"],style:{height:30*Math.ceil(e.message.length/15)+"upx"},appendAsTree:!0,attrs:{append:"tree"}},[t._v(t._s(e.message))])])])],1),o("div",{staticClass:["card-right"]},[o("u-text",{staticClass:["iconfont","card-icon","color-gray"],appendAsTree:!0,attrs:{append:"tree"}},[t._v("\ue603")]),o("u-text",{staticClass:["color-gray"],appendAsTree:!0,attrs:{append:"tree"}},[t._v("\u8d5e")]),o("u-text",{staticClass:["iconfont","card-icon","color-gray"],appendAsTree:!0,attrs:{append:"tree"}},[t._v("\ue67f")]),o("u-text",{staticClass:["color-gray"],appendAsTree:!0,attrs:{append:"tree"}},[t._v("\u8e29")])])])})),0),o("div",{staticClass:["bottom","flex"],on:{click:t.showInput}},[t.flag?o("div",{staticClass:["input"]},[o("u-text",{staticClass:["color-gray"],staticStyle:{color:"#9C9C9C"},appendAsTree:!0,attrs:{append:"tree"}},[t._v(t._s(t.placeholder))])]):t._e()])],1)])},n=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:["title"]},[e("u-text",[this._v("\u8bc4\u8bba")])])}]},74:function(t,e,o){"use strict";o.r(e);var r=o(40),n=o.n(r);for(var i in r)"default"!==i&&function(t){o.d(e,t,(function(){return r[t]}))}(i);e.default=n.a},84:function(t,e,o){"use strict";o.r(e);o(3);var r=o(28);"undefined"==typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then((function(o){return e.resolve(t()).then((function(){return o}))}),(function(o){return e.resolve(t()).then((function(){throw o}))}))}),r.default.mpType="page",r.default.route="pages/tiktok/subnvue/comment",r.default.el="#root",new Vue(r.default)}});