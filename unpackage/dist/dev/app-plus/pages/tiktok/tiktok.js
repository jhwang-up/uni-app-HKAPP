"use weex:vue";
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!************************************************************************************************************!*\
  !*** /Users/wangjunhao/Documents/HBuilderProjects/uni-app-demo/main.js?{"page":"pages%2Ftiktok%2Ftiktok"} ***!
  \************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uni-app-style */ 1);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_tiktok_tiktok_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/tiktok/tiktok.nvue?mpType=page */ 4);\n\n        \n        \n        \n        if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {\n          Promise.prototype.finally = function(callback) {\n            var promise = this.constructor\n            return this.then(function(value) {\n              return promise.resolve(callback()).then(function() {\n                return value\n              })\n            }, function(reason) {\n              return promise.resolve(callback()).then(function() {\n                throw reason\n              })\n            })\n          }\n        }\n        _pages_tiktok_tiktok_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mpType = 'page'\n        _pages_tiktok_tiktok_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].route = 'pages/tiktok/tiktok'\n        _pages_tiktok_tiktok_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].el = '#root'\n        new Vue(_pages_tiktok_tiktok_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n        //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLFFBQThCO0FBQzlCLFFBQWdFO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZixhQUFhO0FBQ2I7QUFDQTtBQUNBLGVBQWU7QUFDZixhQUFhO0FBQ2I7QUFDQTtBQUNBLFFBQVEsNkVBQUc7QUFDWCxRQUFRLDZFQUFHO0FBQ1gsUUFBUSw2RUFBRztBQUNYLGdCQUFnQiw2RUFBRyIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgIFxuICAgICAgICBpbXBvcnQgJ3VuaS1hcHAtc3R5bGUnXG4gICAgICAgIGltcG9ydCBBcHAgZnJvbSAnLi9wYWdlcy90aWt0b2svdGlrdG9rLm52dWU/bXBUeXBlPXBhZ2UnXG4gICAgICAgIGlmICh0eXBlb2YgUHJvbWlzZSAhPT0gJ3VuZGVmaW5lZCcgJiYgIVByb21pc2UucHJvdG90eXBlLmZpbmFsbHkpIHtcbiAgICAgICAgICBQcm9taXNlLnByb3RvdHlwZS5maW5hbGx5ID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHZhciBwcm9taXNlID0gdGhpcy5jb25zdHJ1Y3RvclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZS5yZXNvbHZlKGNhbGxiYWNrKCkpLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LCBmdW5jdGlvbihyZWFzb24pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2UucmVzb2x2ZShjYWxsYmFjaygpKS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHRocm93IHJlYXNvblxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgQXBwLm1wVHlwZSA9ICdwYWdlJ1xuICAgICAgICBBcHAucm91dGUgPSAncGFnZXMvdGlrdG9rL3Rpa3RvaydcbiAgICAgICAgQXBwLmVsID0gJyNyb290J1xuICAgICAgICBuZXcgVnVlKEFwcClcbiAgICAgICAgIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!*********************************************************************************************!*\
  !*** /Users/wangjunhao/Documents/HBuilderProjects/uni-app-demo/main.js?{"type":"appStyle"} ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("Vue.prototype.__$appStyle__ = {}\nVue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=scss */ 2).default,Vue.prototype.__$appStyle__)\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsMkRBQTJELG1CQUFPLENBQUMsbURBQTRDIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18gPSB7fVxuVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzXCIpLmRlZmF1bHQsVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!**********************************************************************************************************!*\
  !*** /Users/wangjunhao/Documents/HBuilderProjects/uni-app-demo/App.vue?vue&type=style&index=0&lang=scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--9-oneOf-0-2!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-0-3!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-4!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=scss */ 3);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 3 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/wangjunhao/Documents/HBuilderProjects/uni-app-demo/App.vue?vue&type=style&index=0&lang=scss ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "sticky-left": {
    "position": "sticky",
    "left": 0,
    "backgroundColor": "#FFFFFF"
  },
  "sticky-right": {
    "position": "sticky",
    "right": 0,
    "backgroundColor": "#FFFFFF"
  },
  "tabbar": {
    "left": 0,
    "right": 0,
    "bottom": 0,
    "display": "flex",
    "height": "110rpx",
    "backgroundColor": "#FFFFff"
  },
  "@VERSION": 2
}

/***/ }),
/* 4 */
/*!******************************************************************************************************!*\
  !*** /Users/wangjunhao/Documents/HBuilderProjects/uni-app-demo/pages/tiktok/tiktok.nvue?mpType=page ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tiktok_nvue_vue_type_template_id_2180c6b0_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tiktok.nvue?vue&type=template&id=2180c6b0&scoped=true&mpType=page */ 5);\n/* harmony import */ var _tiktok_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tiktok.nvue?vue&type=script&lang=js&mpType=page */ 39);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _tiktok_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _tiktok_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 19);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./tiktok.nvue?vue&type=style&index=0&id=2180c6b0&lang=scss&scoped=true&mpType=page */ 49).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./tiktok.nvue?vue&type=style&index=0&id=2180c6b0&lang=scss&scoped=true&mpType=page */ 49).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _tiktok_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _tiktok_nvue_vue_type_template_id_2180c6b0_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _tiktok_nvue_vue_type_template_id_2180c6b0_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"2180c6b0\",\n  \"19782352\",\n  false,\n  _tiktok_nvue_vue_type_template_id_2180c6b0_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/tiktok/tiktok.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMkk7QUFDM0k7QUFDc0U7QUFDTDtBQUNqRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLDRGQUFvRjtBQUN4SSxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsNEZBQW9GO0FBQzdJOztBQUVBOztBQUVBO0FBQ2dOO0FBQ2hOLGdCQUFnQixpTkFBVTtBQUMxQixFQUFFLHdGQUFNO0FBQ1IsRUFBRSx5R0FBTTtBQUNSLEVBQUUsa0hBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsNkdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiI0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi90aWt0b2subnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yMTgwYzZiMCZzY29wZWQ9dHJ1ZSZtcFR5cGU9cGFnZVwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vdGlrdG9rLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vdGlrdG9rLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL3Rpa3Rvay5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjE4MGM2YjAmbGFuZz1zY3NzJnNjb3BlZD10cnVlJm1wVHlwZT1wYWdlXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL3Rpa3Rvay5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjE4MGM2YjAmbGFuZz1zY3NzJnNjb3BlZD10cnVlJm1wVHlwZT1wYWdlXCIpLmRlZmF1bHQpXG4gICAgICAgICAgICB9XG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMjE4MGM2YjBcIixcbiAgXCIxOTc4MjM1MlwiLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy90aWt0b2svdGlrdG9rLm52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/*!************************************************************************************************************************************************!*\
  !*** /Users/wangjunhao/Documents/HBuilderProjects/uni-app-demo/pages/tiktok/tiktok.nvue?vue&type=template&id=2180c6b0&scoped=true&mpType=page ***!
  \************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tiktok_nvue_vue_type_template_id_2180c6b0_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./tiktok.nvue?vue&type=template&id=2180c6b0&scoped=true&mpType=page */ 6);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tiktok_nvue_vue_type_template_id_2180c6b0_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tiktok_nvue_vue_type_template_id_2180c6b0_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tiktok_nvue_vue_type_template_id_2180c6b0_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tiktok_nvue_vue_type_template_id_2180c6b0_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 6 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/wangjunhao/Documents/HBuilderProjects/uni-app-demo/pages/tiktok/tiktok.nvue?vue&type=template&id=2180c6b0&scoped=true&mpType=page ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    chunleiVideo: __webpack_require__(/*! @/components/chunlei-video/chunlei-video.nvue */ 7)
      .default
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "scroll-view",
    {
      staticStyle: { flexDirection: "column" },
      attrs: {
        scrollY: true,
        showScrollbar: true,
        enableBackToTop: true,
        bubble: "true"
      }
    },
    [
      _c("div", [
        _c("div", { staticClass: ["page"] }, [
          _vm.distanceX == 0
            ? _c("div", { staticClass: ["cover-view-center"] }, [
                _c(
                  "div",
                  {
                    ref: "touch",
                    style: {
                      height: _vm.sysheight - 60 + "px",
                      width: _vm.width
                    },
                    on: {
                      click: function($event) {
                        _vm.clickVideo(_vm.index)
                      },
                      touchstart: _vm.ListTouchStart,
                      touchmove: _vm.ListTouchMove
                    }
                  },
                  [
                    _vm.distanceX == 0
                      ? _c(
                          "div",
                          { staticClass: ["cover-view-right"] },
                          [
                            _c("u-image", {
                              staticClass: ["img"],
                              on: { click: _vm.tapAvatar }
                            }),
                            _c("u-text", {
                              staticClass: ["right-text"],
                              appendAsTree: true,
                              attrs: { append: "tree" }
                            }),
                            _c("u-image", {
                              staticClass: ["img"],
                              on: { click: _vm.tapLove }
                            }),
                            _c("u-text", {
                              staticClass: ["right-text"],
                              appendAsTree: true,
                              attrs: { append: "tree" }
                            }),
                            _c("u-image", {
                              staticClass: ["img"],
                              on: { click: _vm.tapMsg }
                            }),
                            _c("u-text", {
                              staticClass: ["right-text"],
                              appendAsTree: true,
                              attrs: { append: "tree" }
                            }),
                            _c("u-image", {
                              staticClass: ["img"],
                              on: { click: _vm.tapShare }
                            }),
                            _c("u-text", {
                              staticClass: ["right-text"],
                              appendAsTree: true,
                              attrs: { append: "tree" }
                            })
                          ],
                          1
                        )
                      : _vm._e()
                  ]
                )
              ])
            : _vm._e(),
          _vm.isShowVideos
            ? _c(
                "div",
                { ref: "swiper", staticClass: ["swiper"] },
                _vm._l(_vm.videoList, function(item, idx) {
                  return _c("block", { key: idx }, [
                    _c(
                      "div",
                      {
                        staticClass: ["video-box"],
                        style: { height: _vm.height }
                      },
                      [
                        Math.abs(_vm.index - idx) <= 1
                          ? _c(
                              "block",
                              [
                                _c("chunlei-video", {
                                  staticClass: ["video"],
                                  attrs: {
                                    src: item.src,
                                    height: _vm.height,
                                    width: _vm.width,
                                    play: item.flag,
                                    gDuration: item.duration,
                                    objectFit: item.objectFit,
                                    initialTime: item.initialTime,
                                    rotateImg: "//static/img/disc.jpg",
                                    danmuList: _vm.danmuList
                                  },
                                  on: {
                                    pause: _vm.pauseVideo,
                                    playEvent: _vm.playEvent
                                  }
                                }),
                                _c(
                                  "cover-view",
                                  { staticClass: ["cover-view-left"] },
                                  [
                                    _c(
                                      "u-text",
                                      {
                                        staticClass: ["left-text"],
                                        appendAsTree: true,
                                        attrs: { append: "tree" }
                                      },
                                      [_vm._v("@" + _vm._s(item.at))]
                                    ),
                                    _c(
                                      "u-text",
                                      {
                                        staticClass: ["left-text"],
                                        appendAsTree: true,
                                        attrs: { append: "tree" }
                                      },
                                      [_vm._v(_vm._s(item.content))]
                                    ),
                                    _c(
                                      "div",
                                      { staticClass: ["tag-box"] },
                                      _vm._l(item.tag, function(a) {
                                        return _c(
                                          "u-text",
                                          {
                                            staticClass: ["tag"],
                                            appendAsTree: true,
                                            attrs: { append: "tree" }
                                          },
                                          [_vm._v(_vm._s(a))]
                                        )
                                      }),
                                      0
                                    )
                                  ]
                                ),
                                _c(
                                  "cover-view",
                                  { staticClass: ["cover-view-right"] },
                                  [
                                    _c("cover-image", {
                                      staticClass: ["avatar", "img"],
                                      attrs: { src: item.avatar },
                                      on: {
                                        click: function($event) {
                                          _vm.tapAvatar()
                                        }
                                      }
                                    }),
                                    !item.attention
                                      ? _c(
                                          "u-text",
                                          {
                                            staticClass: ["right-text-avatar"],
                                            appendAsTree: true,
                                            attrs: { append: "tree" }
                                          },
                                          [_vm._v("+")]
                                        )
                                      : _vm._e(),
                                    _c("u-text", {
                                      staticClass: ["right-text"],
                                      appendAsTree: true,
                                      attrs: { append: "tree" }
                                    }),
                                    _c("cover-image", {
                                      staticClass: ["img"],
                                      attrs: {
                                        src: item.check
                                          ? "../../static/aixinRed.png"
                                          : "../../static/aixin.png"
                                      },
                                      on: {
                                        click: function($event) {
                                          _vm.tapLove()
                                        }
                                      }
                                    }),
                                    _c(
                                      "u-text",
                                      {
                                        staticClass: ["right-text"],
                                        appendAsTree: true,
                                        attrs: { append: "tree" }
                                      },
                                      [_vm._v(_vm._s(item.like))]
                                    )
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          : _vm._e()
                      ],
                      1
                    )
                  ])
                }),
                1
              )
            : _vm._e(),
          _c(
            "div",
            {
              ref: "left",
              staticClass: ["left-div"],
              style: {
                height: _vm.height,
                width: _vm.width,
                left: -parseInt(_vm.width) + "px"
              },
              on: {
                touchstart: _vm.ListTouchStart,
                touchmove: _vm.ListTouchMove
              }
            },
            [
              _c(
                "u-text",
                {
                  staticClass: ["title-text"],
                  appendAsTree: true,
                  attrs: { append: "tree" },
                  on: { click: _vm.clickbt }
                },
                [_vm._v(_vm._s(_vm.videoList[_vm.index].at))]
              )
            ]
          ),
          _c(
            "div",
            {
              ref: "right",
              staticClass: ["right-div"],
              style: {
                height: _vm.height,
                width: _vm.width,
                right: -parseInt(_vm.width) + "px"
              },
              on: {
                touchstart: _vm.ListTouchStart,
                touchmove: _vm.ListTouchMove
              }
            },
            [
              _c(
                "u-text",
                {
                  staticClass: ["title-text"],
                  appendAsTree: true,
                  attrs: { append: "tree" }
                },
                [_vm._v(_vm._s(_vm.videoList[_vm.index].content))]
              )
            ]
          )
        ]),
        _c("div", { staticClass: ["cover-view-top"] }, [
          _c(
            "div",
            { staticClass: ["search-box"], on: { click: _vm.toSearch } },
            [
              _c("u-image", {
                staticClass: ["search-img"],
                attrs: { src: "../../static/img/tiktok/search.png", mode: "" }
              })
            ],
            1
          )
        ]),
        _c("div", { staticClass: ["cover-view-bottom"] }, [
          _c(
            "div",
            {
              staticStyle: { display: "flex", justifyContent: "flex-end" },
              style: { height: _vm.sysheight + "px", width: _vm.width }
            },
            [
              _c(
                "div",
                { staticClass: ["tab-box"], staticStyle: { width: "750rpx" } },
                [
                  _c(
                    "view",
                    { staticClass: ["tab"] },
                    [
                      _c(
                        "navigator",
                        {
                          staticClass: ["tab-box"],
                          attrs: {
                            openType: "switchTab",
                            url: "/pages/index/index"
                          }
                        },
                        [
                          _c(
                            "u-text",
                            {
                              staticClass: ["text"],
                              appendAsTree: true,
                              attrs: { append: "tree" }
                            },
                            [_vm._v("首页")]
                          )
                        ]
                      ),
                      _c(
                        "navigator",
                        {
                          staticClass: ["tab-box"],
                          attrs: {
                            openType: "switchTab",
                            url: "/pages/follow/follow"
                          }
                        },
                        [
                          _c(
                            "u-text",
                            {
                              staticClass: ["text"],
                              appendAsTree: true,
                              attrs: { append: "tree" }
                            },
                            [_vm._v("关注")]
                          )
                        ]
                      ),
                      _c(
                        "view",
                        {
                          staticClass: ["tab-box"],
                          on: {
                            click: function($event) {
                              _vm.addShoot()
                            }
                          }
                        },
                        [
                          _c(
                            "view",
                            {},
                            [
                              _c("u-image", {
                                staticClass: ["add-img"],
                                attrs: {
                                  src: "../../static/img/tiktok/add.png",
                                  mode: ""
                                }
                              })
                            ],
                            1
                          )
                        ]
                      ),
                      _c(
                        "navigator",
                        {
                          staticClass: ["tab-box"],
                          attrs: {
                            openType: "switchTab",
                            url: "/pages/news/news"
                          }
                        },
                        [
                          _c(
                            "u-text",
                            {
                              staticClass: ["text"],
                              appendAsTree: true,
                              attrs: { append: "tree" }
                            },
                            [_vm._v("消息")]
                          )
                        ]
                      ),
                      _c(
                        "view",
                        {
                          staticClass: ["tab-box"],
                          on: {
                            click: function($event) {
                              _vm.toWhere("mine")
                            }
                          }
                        },
                        [
                          _c(
                            "u-text",
                            {
                              staticClass: ["text"],
                              appendAsTree: true,
                              attrs: { append: "tree" }
                            },
                            [_vm._v("我")]
                          )
                        ]
                      )
                    ],
                    1
                  )
                ]
              )
            ]
          )
        ])
      ])
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 7 */
/*!*************************************************************************************************************!*\
  !*** /Users/wangjunhao/Documents/HBuilderProjects/uni-app-demo/components/chunlei-video/chunlei-video.nvue ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _chunlei_video_nvue_vue_type_template_id_bc70e9d0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chunlei-video.nvue?vue&type=template&id=bc70e9d0&scoped=true& */ 8);\n/* harmony import */ var _chunlei_video_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chunlei-video.nvue?vue&type=script&lang=js& */ 10);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _chunlei_video_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _chunlei_video_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 19);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./chunlei-video.nvue?vue&type=style&index=0&id=bc70e9d0&scoped=true&lang=css& */ 37).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./chunlei-video.nvue?vue&type=style&index=0&id=bc70e9d0&scoped=true&lang=css& */ 37).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _chunlei_video_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _chunlei_video_nvue_vue_type_template_id_bc70e9d0_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _chunlei_video_nvue_vue_type_template_id_bc70e9d0_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"bc70e9d0\",\n  \"3cd7dda4\",\n  false,\n  _chunlei_video_nvue_vue_type_template_id_bc70e9d0_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"components/chunlei-video/chunlei-video.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdUk7QUFDdkk7QUFDa0U7QUFDTDtBQUM3RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLHVGQUErRTtBQUNuSSxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsdUZBQStFO0FBQ3hJOztBQUVBOztBQUVBO0FBQ2dOO0FBQ2hOLGdCQUFnQixpTkFBVTtBQUMxQixFQUFFLG9GQUFNO0FBQ1IsRUFBRSxxR0FBTTtBQUNSLEVBQUUsOEdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUseUdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiI3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9jaHVubGVpLXZpZGVvLm52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YmM3MGU5ZDAmc2NvcGVkPXRydWUmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9jaHVubGVpLXZpZGVvLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2NodW5sZWktdmlkZW8ubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL2NodW5sZWktdmlkZW8ubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWJjNzBlOWQwJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiKS5kZWZhdWx0LCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucy5zdHlsZSxyZXF1aXJlKFwiLi9jaHVubGVpLXZpZGVvLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1iYzcwZTlkMCZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIikuZGVmYXVsdClcbiAgICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCJiYzcwZTlkMFwiLFxuICBcIjNjZDdkZGE0XCIsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5pbmplY3RTdHlsZXMuY2FsbChjb21wb25lbnQpXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvY2h1bmxlaS12aWRlby9jaHVubGVpLXZpZGVvLm52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */
/*!********************************************************************************************************************************************************!*\
  !*** /Users/wangjunhao/Documents/HBuilderProjects/uni-app-demo/components/chunlei-video/chunlei-video.nvue?vue&type=template&id=bc70e9d0&scoped=true& ***!
  \********************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunlei_video_nvue_vue_type_template_id_bc70e9d0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./chunlei-video.nvue?vue&type=template&id=bc70e9d0&scoped=true& */ 9);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunlei_video_nvue_vue_type_template_id_bc70e9d0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunlei_video_nvue_vue_type_template_id_bc70e9d0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunlei_video_nvue_vue_type_template_id_bc70e9d0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunlei_video_nvue_vue_type_template_id_bc70e9d0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 9 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/wangjunhao/Documents/HBuilderProjects/uni-app-demo/components/chunlei-video/chunlei-video.nvue?vue&type=template&id=bc70e9d0&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: ["video"] },
    [
      _c("u-video", {
        ref: "`video_${src}`",
        staticClass: ["video"],
        style: { height: _vm.height },
        attrs: {
          src: _vm.src,
          controls: _vm.controls,
          showPlayBtn: false,
          muted: !_vm.load || !_vm.play,
          loop: true,
          enableProgressGesture: false,
          objectFit: _vm.objectFit,
          initialTime: _vm.startTime,
          id: "video_" + _vm.src
        },
        on: {
          play: _vm.continuePlay,
          ended: _vm.playEnd,
          timeupdate: _vm.timeupdate
        }
      }),
      !_vm.play && !_vm.playFirst
        ? _c("cover-view", { staticClass: ["icon-view"] }, [
            _c(
              "u-text",
              {
                staticClass: ["icon"],
                staticStyle: { color: "#FFF" },
                appendAsTree: true,
                attrs: { append: "tree" }
              },
              [_vm._v("")]
            )
          ])
        : _vm._e(),
      _vm.poster != "" && _vm.playFirst
        ? _c("cover-image", {
            staticClass: ["img"],
            style: { height: _vm.height },
            attrs: { src: _vm.poster }
          })
        : _vm._e(),
      _c("cover-view", { staticClass: ["top"] }),
      _c("cover-view", { staticClass: ["bottom"] }),
      _c(
        "cover-view",
        { staticClass: ["danmu-view"] },
        [
          _c("chunLei-danmu", {
            ref: "danmu",
            attrs: { danmuList: _vm.danmuList, width: 750, current: _vm.time }
          })
        ],
        1
      ),
      _c(
        "cover-view",
        { staticClass: ["slider-view"] },
        [
          _c("chunLei-slider", {
            style: { width: 380 + "px" },
            attrs: {
              max: _vm.duration,
              value: _vm.time,
              screenLeft: 120,
              width: 380
            },
            on: { change: _vm.changeCurrent }
          })
        ],
        1
      ),
      _c("cover-image", {
        staticClass: ["rotate-img"],
        style: { transform: "rotate(" + _vm.time * 20 + "deg)" },
        attrs: { src: _vm.rotateImg }
      })
    ],
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 10 */
/*!**************************************************************************************************************************************!*\
  !*** /Users/wangjunhao/Documents/HBuilderProjects/uni-app-demo/components/chunlei-video/chunlei-video.nvue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunlei_video_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./chunlei-video.nvue?vue&type=script&lang=js& */ 11);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunlei_video_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunlei_video_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunlei_video_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunlei_video_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunlei_video_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW9qQixDQUFnQiw4akJBQUcsRUFBQyIsImZpbGUiOiIxMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jaHVubGVpLXZpZGVvLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jaHVubGVpLXZpZGVvLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///10\n");

/***/ }),
/* 11 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/wangjunhao/Documents/HBuilderProjects/uni-app-demo/components/chunlei-video/chunlei-video.nvue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _myMusic = _interopRequireDefault(__webpack_require__(/*! ../my-components/my-music.vue */ 12));\nvar _chunLeiSlider = _interopRequireDefault(__webpack_require__(/*! ./chunLei-slider/chunLei-slider.nvue */ 20));\n\nvar _chunLeiDanmu = _interopRequireDefault(__webpack_require__(/*! ./chunLei-danmu/chunLei-danmu.nvue */ 28));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default = { components: { myMusic: _myMusic.default, chunLeiSlider: _chunLeiSlider.default, chunLeiDanmu: _chunLeiDanmu.default }, props: { controls: { type: Boolean, default: false }, src: { type: String, default: '' }, rotateImg: { type: String, default: '' }, play: { type: Boolean, default: false }, height: { type: String, default: '' }, width: {\n      type: String,\n      default: '' },\n\n    initialTime: {\n      type: Number,\n      default: 0 },\n\n    gDuration: {\n      type: Number,\n      default: 999 },\n    //大概时长使进度条更准确\n    objectFit: {\n      type: String,\n      default: 'contain' },\n\n    poster: { //视频封面的图片\n      type: String,\n      default: '' },\n\n    danmuList: {\n      type: Array,\n      default: [] } },\n\n\n  data: function data() {\n    return {\n      time: 0,\n      duration: 0,\n      playFirst: true,\n      load: false,\n      timer: null };\n\n  },\n  beforeCreate: function beforeCreate() {\n\n    var domModule = weex.requireModule('dom');\n    domModule.addRule('fontFace', {\n      'fontFamily': \"texticons\",\n      'src': \"url('//static/chunlei-video/text-icon.ttf')\" });\n\n\n  },\n  mounted: function mounted() {var _this = this;\n    this.videoCtx = uni.createVideoContext(\"video_\".concat(this.src), this);\n\n    setTimeout(function () {_this.videoCtx.play();}, 200);\n\n  },\n  methods: {\n    continuePlay: function continuePlay() {var _this2 = this;\n      if (!this.load) {\n        setTimeout(function () {\n          _this2.load = true;\n          _this2.videoPlay();\n        }, 1000);\n\n      }\n    },\n    //拖动滑块\n    changeCurrent: function changeCurrent(e) {\n      this.time = e.detail.value;\n      this.videoCtx.seek(this.time);\n    },\n    playEnd: function playEnd() {\n      this.$emit('playEnd');\n    },\n    timeupdate: function timeupdate(event) {\n      this.duration = event.detail.duration;\n      if (this.time >= event.detail.duration) this.time = 0;\n      this.time = event.detail.currentTime;\n      this.$emit('timeupdate', this.time);\n    },\n    videoPlay: function videoPlay() {var _this3 = this;\n      this.$emit('playEvent', this.time);\n      if (this.timer) clearTimeout(this.timer);\n      this.timer = setTimeout(function () {\n        if (_this3.play) {\n          // console.log('播放啦！！！！！！！！！！！！');\n          _this3.videoCtx.play();\n          _this3.playFirst = false;\n        } else {\n          // console.log('暂停啦！！！！！！！！！！！！');\n          _this3.videoCtx.pause();\n          _this3.$emit('pause', _this3.time);\n        }\n      });\n\n    } },\n\n  watch: {\n    //防抖 防止视频播放暂停太快\n    play: function play(newVal, oldVal) {if (this.load) this.videoPlay();},\n    startTime: {\n      immediate: true,\n      handler: function handler(newVal, oldVal) {\n\n        this.time = newVal;\n      } },\n\n    gDuration: {\n      immediate: true,\n      handler: function handler(newVal, oldVal) {\n\n        this.duration = newVal;\n      } } },\n\n\n  computed: {\n    barWidth: function barWidth() {\n\n      var width = this.time / this.duration * parseInt(this.width);\n\n      return \"\".concat(width, \"px\");\n    },\n    startTime: function startTime() {\n      return this.initialTime;\n    } } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy9jaHVubGVpLXZpZGVvL2NodW5sZWktdmlkZW8ubnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdDQTtBQUNBOztBQUVBLDhHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2VBRUEsRUFDQSxjQUNBLHlCQURBLEVBRUEscUNBRkEsRUFJQSxtQ0FKQSxFQURBLEVBUUEsU0FDQSxZQUNBLGFBREEsRUFFQSxjQUZBLEVBREEsRUFLQSxPQUNBLFlBREEsRUFFQSxXQUZBLEVBTEEsRUFTQSxhQUNBLFlBREEsRUFFQSxXQUZBLEVBVEEsRUFhQSxRQUNBLGFBREEsRUFFQSxjQUZBLEVBYkEsRUFpQkEsVUFDQSxZQURBLEVBRUEsV0FGQSxFQWpCQSxFQXFCQTtBQUNBLGtCQURBO0FBRUEsaUJBRkEsRUFyQkE7O0FBeUJBO0FBQ0Esa0JBREE7QUFFQSxnQkFGQSxFQXpCQTs7QUE2QkE7QUFDQSxrQkFEQTtBQUVBLGtCQUZBLEVBN0JBO0FBZ0NBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBLHdCQUZBLEVBakNBOztBQXFDQTtBQUNBLGtCQURBO0FBRUEsaUJBRkEsRUFyQ0E7O0FBeUNBO0FBQ0EsaUJBREE7QUFFQSxpQkFGQSxFQXpDQSxFQVJBOzs7QUFzREEsTUF0REEsa0JBc0RBO0FBQ0E7QUFDQSxhQURBO0FBRUEsaUJBRkE7QUFHQSxxQkFIQTtBQUlBLGlCQUpBO0FBS0EsaUJBTEE7O0FBT0EsR0E5REE7QUErREEsY0EvREEsMEJBK0RBOztBQUVBO0FBQ0E7QUFDQSwrQkFEQTtBQUVBLDBEQUZBOzs7QUFLQSxHQXZFQTtBQXdFQSxTQXhFQSxxQkF3RUE7QUFDQTs7QUFFQTs7QUFFQSxHQTdFQTtBQThFQTtBQUNBLGdCQURBLDBCQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUhBLEVBR0EsSUFIQTs7QUFLQTtBQUNBLEtBVEE7QUFVQTtBQUNBLGlCQVhBLHlCQVdBLENBWEEsRUFXQTtBQUNBO0FBQ0E7QUFDQSxLQWRBO0FBZUEsV0FmQSxxQkFlQTtBQUNBO0FBQ0EsS0FqQkE7QUFrQkEsY0FsQkEsc0JBa0JBLEtBbEJBLEVBa0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQXZCQTtBQXdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FKQSxNQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQVZBOztBQVlBLEtBdkNBLEVBOUVBOztBQXVIQTtBQUNBO0FBQ0EsMEVBRkE7QUFHQTtBQUNBLHFCQURBO0FBRUEsYUFGQSxtQkFFQSxNQUZBLEVBRUEsTUFGQSxFQUVBOztBQUVBO0FBQ0EsT0FMQSxFQUhBOztBQVVBO0FBQ0EscUJBREE7QUFFQSxhQUZBLG1CQUVBLE1BRkEsRUFFQSxNQUZBLEVBRUE7O0FBRUE7QUFDQSxPQUxBLEVBVkEsRUF2SEE7OztBQXlJQTtBQUNBLFlBREEsc0JBQ0E7O0FBRUE7O0FBRUE7QUFDQSxLQU5BO0FBT0EsYUFQQSx1QkFPQTtBQUNBO0FBQ0EsS0FUQSxFQXpJQSxFIiwiZmlsZSI6IjExLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuXHQ8dmlldyBjbGFzcz1cInZpZGVvXCI+XG5cdFx0PHZpZGVvIDpzcmM9XCJzcmNcIiA6Y29udHJvbHM9XCJjb250cm9sc1wiIDpzaG93LXBsYXktYnRuPVwiZmFsc2VcIiA6bXV0ZWQ9XCIhbG9hZHx8IXBsYXlcIlxuXHRcdFx0OnN0eWxlPVwieyBoZWlnaHQ6IGhlaWdodCB9XCIgOmxvb3A9XCJ0cnVlXCIgQHBsYXk9XCJjb250aW51ZVBsYXlcIlxuXHRcdFx0OmVuYWJsZS1wcm9ncmVzcy1nZXN0dXJlPVwiZmFsc2VcIiA6b2JqZWN0Rml0PVwib2JqZWN0Rml0XCIgQGVuZGVkPVwicGxheUVuZFwiIDppbml0aWFsLXRpbWU9XCJzdGFydFRpbWVcIlxuXHRcdFx0OmlkPVwiYHZpZGVvXyR7c3JjfWBcIiByZWY9XCJgdmlkZW9fJHtzcmN9YFwiIGNsYXNzPVwidmlkZW9cIiBAdGltZXVwZGF0ZT1cInRpbWV1cGRhdGVcIj5cblx0XHQ8L3ZpZGVvPlxuXHRcdDxjb3Zlci12aWV3IGNsYXNzPVwiaWNvbi12aWV3XCIgdi1pZj1cIiFwbGF5JiYhcGxheUZpcnN0XCI+PHRleHQgY2xhc3M9XCJpY29uXCIgc3R5bGU9XCJjb2xvcjojRkZGXCI+JiN4ZTg5Njs8L3RleHQ+PC9jb3Zlci12aWV3PlxuXHRcdDxjb3Zlci1pbWFnZSBjbGFzcz1cImltZ1wiIDpzdHlsZT1cInsgaGVpZ2h0OiBoZWlnaHQgfVwiIDpzcmM9XCJwb3N0ZXJcIiB2LWlmPVwicG9zdGVyIT0nJyYmcGxheUZpcnN0XCI+PC9jb3Zlci1pbWFnZT5cblx0XHQ8Y292ZXItdmlldyBjbGFzcz1cInRvcFwiPjwvY292ZXItdmlldz5cblx0XHQ8Y292ZXItdmlldyBjbGFzcz1cImJvdHRvbVwiPjwvY292ZXItdmlldz5cblx0XHQ8IS0tICNpZmRlZiBBUFAtUExVUyAtLT5cblx0XHQ8Y292ZXItdmlldyBjbGFzcz1cImRhbm11LXZpZXdcIj5cblx0XHRcdDxjaHVuTGVpLWRhbm11IDpkYW5tdUxpc3Q9XCJkYW5tdUxpc3RcIiA6d2lkdGg9XCI3NTBcIiAgOmN1cnJlbnQ9XCJ0aW1lXCIgcmVmPVwiZGFubXVcIj48L2NodW5MZWktZGFubXU+XG5cdFx0PC9jb3Zlci12aWV3PlxuXHRcdDwhLS0gI2VuZGlmIC0tPlxuXHRcdDwhLS0gI2lmbmRlZiBNUC1XRUlYSU4gLS0+XG5cdFx0PGNvdmVyLXZpZXcgY2xhc3M9XCJzbGlkZXItdmlld1wiPlxuXHRcdFx0PGNodW5MZWktc2xpZGVyIDptYXg9XCJkdXJhdGlvblwiIDp2YWx1ZT1cInRpbWVcIiA6c3R5bGU9XCJ7d2lkdGg6YCR7MzgwfXB4YH1cIiA6c2NyZWVuTGVmdD1cIjEyMFwiIDp3aWR0aD1cIjM4MFwiIEBjaGFuZ2U9XCJjaGFuZ2VDdXJyZW50XCI+PC9jaHVuTGVpLXNsaWRlcj5cblx0XHQ8L2NvdmVyLXZpZXc+XG5cdFx0PGNvdmVyLWltYWdlIDpzcmM9XCJyb3RhdGVJbWdcIiBjbGFzcz1cInJvdGF0ZS1pbWdcIiA6c3R5bGU9XCJ7dHJhbnNmb3JtOmByb3RhdGUoJHt0aW1lKjIwfWRlZylgfVwiPjwvY292ZXItaW1hZ2U+XG5cdFx0PCEtLSA8Y292ZXItdmlldz5cblx0XHRcdDxteU11c2ljPjwvbXlNdXNpYz5cblx0XHQ8L2NvdmVyLXZpZXc+IC0tPlxuXHRcdDwhLS0gI2VuZGlmIC0tPlxuXHRcdDwhLS0gI2lmZGVmIE1QLVdFSVhJTiAtLT5cblx0XHQ8Y292ZXItdmlldyBjbGFzcz1cInByb2dyZXNzQmFyXCIgOnN0eWxlPVwieyB3aWR0aDogYmFyV2lkdGggfVwiPjwvY292ZXItdmlldz5cblx0XHQ8IS0tICNlbmRpZiAtLT5cblx0PC92aWV3PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblx0aW1wb3J0IG15TXVzaWMgZnJvbSAnLi4vbXktY29tcG9uZW50cy9teS1tdXNpYy52dWUnO1xuXHRpbXBvcnQgY2h1bkxlaVNsaWRlciBmcm9tICcuL2NodW5MZWktc2xpZGVyL2NodW5MZWktc2xpZGVyLm52dWUnO1xuXHQvLyNpZmRlZiBBUFAtTlZVRVxuXHRpbXBvcnQgY2h1bkxlaURhbm11IGZyb20gJy4vY2h1bkxlaS1kYW5tdS9jaHVuTGVpLWRhbm11Lm52dWUnO1xuXHQvLyNlbmRpZlxuXHRleHBvcnQgZGVmYXVsdHsgXG5cdFx0Y29tcG9uZW50czp7XG5cdFx0XHRteU11c2ljLFxuXHRcdFx0Y2h1bkxlaVNsaWRlcixcblx0XHRcdC8vI2lmZGVmIEFQUC1OVlVFXG5cdFx0XHRjaHVuTGVpRGFubXVcblx0XHRcdC8vI2VuZGlmXG5cdFx0fSxcblx0XHRwcm9wczp7XG5cdFx0XHRjb250cm9sczp7XG5cdFx0XHRcdHR5cGU6Qm9vbGVhbixcblx0XHRcdFx0ZGVmYXVsdDpmYWxzZVxuXHRcdFx0fSxcblx0XHRcdHNyYzp7XG5cdFx0XHRcdHR5cGU6U3RyaW5nLFxuXHRcdFx0XHRkZWZhdWx0OicnXG5cdFx0XHR9LFxuXHRcdFx0cm90YXRlSW1nOntcblx0XHRcdFx0dHlwZTpTdHJpbmcsXG5cdFx0XHRcdGRlZmF1bHQ6Jydcblx0XHRcdH0sXG5cdFx0XHRwbGF5Ontcblx0XHRcdFx0dHlwZTpCb29sZWFuLFxuXHRcdFx0XHRkZWZhdWx0OmZhbHNlXG5cdFx0XHR9LFxuXHRcdFx0aGVpZ2h0Ontcblx0XHRcdFx0dHlwZTpTdHJpbmcsXG5cdFx0XHRcdGRlZmF1bHQ6Jydcblx0XHRcdH0sXG5cdFx0XHR3aWR0aDp7XG5cdFx0XHRcdHR5cGU6U3RyaW5nLFxuXHRcdFx0XHRkZWZhdWx0OicnXG5cdFx0XHR9LFxuXHRcdFx0aW5pdGlhbFRpbWU6e1xuXHRcdFx0XHR0eXBlOk51bWJlcixcblx0XHRcdFx0ZGVmYXVsdDowXG5cdFx0XHR9LFxuXHRcdFx0Z0R1cmF0aW9uOntcblx0XHRcdFx0dHlwZTpOdW1iZXIsXG5cdFx0XHRcdGRlZmF1bHQ6OTk5XG5cdFx0XHR9LCAvL+Wkp+amguaXtumVv+S9v+i/m+W6puadoeabtOWHhuehrlxuXHRcdFx0b2JqZWN0Rml0Ontcblx0XHRcdFx0dHlwZTpTdHJpbmcsXG5cdFx0XHRcdGRlZmF1bHQ6J2NvbnRhaW4nXG5cdFx0XHR9LFxuXHRcdFx0cG9zdGVyOnsgLy/op4bpopHlsIHpnaLnmoTlm77niYdcblx0XHRcdFx0dHlwZTpTdHJpbmcsXG5cdFx0XHRcdGRlZmF1bHQ6Jydcblx0XHRcdH0sXG5cdFx0XHRkYW5tdUxpc3Q6e1xuXHRcdFx0XHR0eXBlOkFycmF5LFxuXHRcdFx0XHRkZWZhdWx0OltdXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRkYXRhKCl7XG5cdFx0XHRyZXR1cm57XG5cdFx0XHRcdHRpbWU6MCxcblx0XHRcdFx0ZHVyYXRpb246MCxcblx0XHRcdFx0cGxheUZpcnN0OnRydWUsXG5cdFx0XHRcdGxvYWQ6ZmFsc2UsXG5cdFx0XHRcdHRpbWVyOm51bGxcblx0XHRcdH1cblx0XHR9LFxuXHRcdGJlZm9yZUNyZWF0ZSgpIHtcblx0XHRcdC8vICNpZmRlZiBBUFAtTlZVRVxuXHRcdFx0dmFyIGRvbU1vZHVsZSA9IHdlZXgucmVxdWlyZU1vZHVsZSgnZG9tJyk7XG5cdFx0XHRkb21Nb2R1bGUuYWRkUnVsZSgnZm9udEZhY2UnLCB7XG5cdFx0XHRcdCdmb250RmFtaWx5JzogXCJ0ZXh0aWNvbnNcIixcblx0XHRcdFx0J3NyYyc6IFwidXJsKCcvL3N0YXRpYy9jaHVubGVpLXZpZGVvL3RleHQtaWNvbi50dGYnKVwiXG5cdFx0XHR9KTtcblx0XHRcdC8vICNlbmRpZlxuXHRcdH0sXG5cdFx0bW91bnRlZCgpIHtcblx0XHRcdHRoaXMudmlkZW9DdHggPSB1bmkuY3JlYXRlVmlkZW9Db250ZXh0KGB2aWRlb18ke3RoaXMuc3JjfWAsdGhpcylcclxuXHRcdFx0Ly8jaWZuZGVmIE1QLVdFSVhJTlxuXHRcdFx0c2V0VGltZW91dCgoKT0+e3RoaXMudmlkZW9DdHgucGxheSgpO30sMjAwKVxyXG5cdFx0XHQvLyAjZW5kaWZcblx0XHR9LFxuXHRcdG1ldGhvZHM6e1xuXHRcdFx0Y29udGludWVQbGF5KCl7XG5cdFx0XHRcdGlmKCF0aGlzLmxvYWQpe1xuXHRcdFx0XHRcdHNldFRpbWVvdXQoKCk9Pntcblx0XHRcdFx0XHRcdHRoaXMubG9hZCA9IHRydWVcblx0XHRcdFx0XHRcdHRoaXMudmlkZW9QbGF5KClcblx0XHRcdFx0XHR9LDEwMDApXG5cdFx0XHRcdFx0XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHQvL+aLluWKqOa7keWdl1xuXHRcdFx0Y2hhbmdlQ3VycmVudChlKXtcblx0XHRcdFx0dGhpcy50aW1lID0gZS5kZXRhaWwudmFsdWVcblx0XHRcdFx0dGhpcy52aWRlb0N0eC5zZWVrKHRoaXMudGltZSlcblx0XHRcdH0sXG5cdFx0XHRwbGF5RW5kKCl7XG5cdFx0XHRcdHRoaXMuJGVtaXQoJ3BsYXlFbmQnKVxuXHRcdFx0fSxcblx0XHRcdHRpbWV1cGRhdGUoZXZlbnQpe1xuXHRcdFx0XHR0aGlzLmR1cmF0aW9uID0gZXZlbnQuZGV0YWlsLmR1cmF0aW9uXG5cdFx0XHRcdGlmKHRoaXMudGltZT49ZXZlbnQuZGV0YWlsLmR1cmF0aW9uKSB0aGlzLnRpbWU9MFxuXHRcdFx0XHR0aGlzLnRpbWUgPSBldmVudC5kZXRhaWwuY3VycmVudFRpbWVcblx0XHRcdFx0dGhpcy4kZW1pdCgndGltZXVwZGF0ZScsdGhpcy50aW1lKVxuXHRcdFx0fSxcblx0XHRcdHZpZGVvUGxheTpmdW5jdGlvbigpe1xuXHRcdFx0XHR0aGlzLiRlbWl0KCdwbGF5RXZlbnQnLHRoaXMudGltZSlcblx0XHRcdFx0aWYodGhpcy50aW1lcikgY2xlYXJUaW1lb3V0KHRoaXMudGltZXIpXG5cdFx0XHRcdHRoaXMudGltZXIgPSBzZXRUaW1lb3V0KCgpPT57XG5cdFx0XHRcdFx0aWYodGhpcy5wbGF5KXtcblx0XHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKCfmkq3mlL7llabvvIHvvIHvvIHvvIHvvIHvvIHvvIHvvIHvvIHvvIHvvIHvvIEnKTtcblx0XHRcdFx0XHRcdHRoaXMudmlkZW9DdHgucGxheSgpO1xuXHRcdFx0XHRcdFx0dGhpcy5wbGF5Rmlyc3QgPSBmYWxzZVxuXHRcdFx0XHRcdH1lbHNle1xuXHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ+aaguWBnOWVpu+8ge+8ge+8ge+8ge+8ge+8ge+8ge+8ge+8ge+8ge+8ge+8gScpO1xuXHRcdFx0XHRcdFx0dGhpcy52aWRlb0N0eC5wYXVzZSgpO1xuXHRcdFx0XHRcdFx0dGhpcy4kZW1pdCgncGF1c2UnLHRoaXMudGltZSlcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pXG5cdFx0XHRcdFxuXHRcdFx0fSxcblx0XHR9LFxuXHRcdHdhdGNoOntcblx0XHRcdC8v6Ziy5oqWIOmYsuatouinhumikeaSreaUvuaaguWBnOWkquW/q1xuXHRcdFx0cGxheTogZnVuY3Rpb24gKG5ld1ZhbCxvbGRWYWwpe2lmKHRoaXMubG9hZCkgdGhpcy52aWRlb1BsYXkoKX0sXG5cdFx0XHRzdGFydFRpbWU6e1xuXHRcdFx0XHRpbW1lZGlhdGU6IHRydWUsXG5cdFx0XHRcdGhhbmRsZXIobmV3VmFsLG9sZFZhbCl7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0dGhpcy50aW1lID0gbmV3VmFsXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRnRHVyYXRpb246e1xuXHRcdFx0XHRpbW1lZGlhdGU6IHRydWUsXG5cdFx0XHRcdGhhbmRsZXIobmV3VmFsLG9sZFZhbCl7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0dGhpcy5kdXJhdGlvbiA9IG5ld1ZhbFxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRjb21wdXRlZDp7XG5cdFx0XHRiYXJXaWR0aCgpe1xuXHRcdFx0XHRcblx0XHRcdFx0bGV0IHdpZHRoID0gdGhpcy50aW1lL3RoaXMuZHVyYXRpb24qcGFyc2VJbnQodGhpcy53aWR0aClcblx0XHRcdFx0XG5cdFx0XHRcdHJldHVybiBgJHt3aWR0aH1weGBcblx0XHRcdH0sXG5cdFx0XHRzdGFydFRpbWUoKXtcblx0XHRcdFx0cmV0dXJuIHRoaXMuaW5pdGlhbFRpbWVcblx0XHRcdH1cblx0XHR9XG5cdH1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuXHQvKiAjaWZuZGVmIEFQUC1QTFVTLU5WVUUgKi9cblx0LyogQGZvbnQtZmFjZSB7XG5cdFx0Zm9udC1mYW1pbHk6IFwidGV4dGljb25zXCI7XG5cdFx0c3JjOiB1cmwoJ35AL3N0YXRpYy9jaHVubGVpLXZpZGVvL3RleHQtaWNvbi50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XG5cdH0gKi9cblx0LyogI2VuZGlmKi9cblx0LnZpZGVve1xuXHRcdC8qICNpZm5kZWYgQVBQLU5WVUUgKi9cblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdC8qICNlbmRpZiAqL1xuXHRcdHdpZHRoOiA3NTBycHg7XG5cdFx0XG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0fVxuXHQuaW1ne1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcblx0XHR3aWR0aDogNzUwcnB4O1xuXHR9XG5cdC5pY29uLXZpZXd7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHR9XG5cdC50b3B7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdHRvcDowO1xuXHRcdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AgLCByZ2JhKDAsMCwwLDApICwgcmdiYSgwLDAsMCwwLjcpKTtcblx0XHR3aWR0aDogNzUwcnB4O1xuXHRcdGhlaWdodDogMzAwcnB4O1xuXHR9XG5cdC5pY29ue1xuXHRcdG9wYWNpdHk6IDAuNjtcblx0XHRmb250LXNpemU6IDQycHg7XG5cdFx0Y29sb3I6ICNmZmY7XG5cdFx0LyogI2lmbmRlZiBBUFAtUExVUy1OVlVFICovXG5cdFx0Zm9udC1mYW1pbHk6IFwidGV4dGljb25zXCI7XG5cdFx0LyogI2VuZGlmKi9cblx0XHRmb250LWZhbWlseTogdGV4dGljb25zO1xuXHR9XG5cdC5ib3R0b217XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdGJvdHRvbTogMDtcblx0XHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wICwgcmdiYSgwLDAsMCwwLjcpICwgcmdiYSgwLDAsMCwwKSk7XG5cdFx0d2lkdGg6IDc1MHJweDtcblx0XHRoZWlnaHQ6IDMwMHJweDtcblx0fVxuXHQuc2xpZGVyLXZpZXd7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdGxlZnQ6IDA7XG5cdFx0Ym90dG9tOiA1MHB4O1xuXHRcdHdpZHRoOiA3NTBycHg7XG5cdH1cblx0LnByb2dyZXNzQmFye1xuXHRcdGJvcmRlci1yYWRpdXM6IDJ1cHg7XG5cdFx0aGVpZ2h0OiA0dXB4O1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG5cdFx0ei1pbmRleDogOTk5OTk5O1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRsZWZ0OiAwO1xuXHRcdGJvdHRvbTogMzBweDtcblx0XHQvLyNpZm5kZWYgQVBQLVBMVVMtTlZVRVxuXHRcdGFuaW1hdGlvbjogZmxpY2tlciA0cyBsaW5lYXIgaW5maW5pdGU7XG5cdFx0YW5pbWF0aW9uLWRpcmVjdGlvbjphbHRlcm5hdGU7XG5cdFx0Ly8jZW5kaWZcblx0fVxuXHQvLyNpZm5kZWYgQVBQLVBMVVMtTlZVRVxuXHRAa2V5ZnJhbWVzIGZsaWNrZXIge1xuXHRcdDAlIHsgYm94LXNoYWRvdzowIDAgMCAjRkZGRkZGOyB9XG5cdCAgICAgLyoqIOaaguWBnOaViOaenCAqL1xuXHRcdDEwJSB7IGJveC1zaGFkb3c6MCAwIDJ1cHggI0ZGRkZGRjsgfVxuXHQgICAgNTAlIHsgYm94LXNoYWRvdzowIDAgMTB1cHggI0ZGRkZGRjsgfVxuXHQgICAgNjAlIHsgYm94LXNoYWRvdzowIDAgMTJ1cHggI0ZGRkZGRjsgfVxuXHQgICAgOTAlIHsgYm94LXNoYWRvdzowIDAgMTh1cHggI0ZGRkZGRjsgfVxuXHQgICAgMTAwJSB7IGJveC1zaGFkb3c6MCAwIDIwdXB4ICNGRkZGRkY7IH1cblx0XG5cdH1cblx0Ly8jZW5kaWZcblx0LmRhbm11LXZpZXd7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdHRvcDowO1xuXHRcdGhlaWdodDogMTYwcHg7XG5cdH1cblx0LnJvdGF0ZS1pbWd7XG5cdFx0d2lkdGg6IDkwcnB4O1xuXHRcdGhlaWdodDogOTBycHg7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdGJvdHRvbTogMTgwcnB4O1xuXHRcdHJpZ2h0OiAyMHJweDtcblx0XHRib3JkZXItcmFkaXVzOiA0NXJweDtcblx0fVxuPC9zdHlsZT4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///11\n");

/***/ }),
/* 12 */
/*!*******************************************************************************************************!*\
  !*** /Users/wangjunhao/Documents/HBuilderProjects/uni-app-demo/components/my-components/my-music.vue ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _my_music_vue_vue_type_template_id_05827e12___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-music.vue?vue&type=template&id=05827e12& */ 13);\n/* harmony import */ var _my_music_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-music.vue?vue&type=script&lang=js& */ 15);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _my_music_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _my_music_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 19);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./my-music.vue?vue&type=style&index=0&lang=scss& */ 17).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./my-music.vue?vue&type=style&index=0&lang=scss& */ 17).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _my_music_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _my_music_vue_vue_type_template_id_05827e12___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _my_music_vue_vue_type_template_id_05827e12___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"1a170f8d\",\n  false,\n  _my_music_vue_vue_type_template_id_05827e12___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"components/my-components/my-music.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBcUg7QUFDckg7QUFDNEQ7QUFDTDtBQUN2RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLDBEQUFrRDtBQUN0RyxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsMERBQWtEO0FBQzNHOztBQUVBOztBQUVBO0FBQ2dOO0FBQ2hOLGdCQUFnQixpTkFBVTtBQUMxQixFQUFFLDhFQUFNO0FBQ1IsRUFBRSxtRkFBTTtBQUNSLEVBQUUsNEZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsdUZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiIxMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vbXktbXVzaWMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA1ODI3ZTEyJlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vbXktbXVzaWMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9teS1tdXNpYy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUpe1xuICAgICAgICAgICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9teS1tdXNpYy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL215LW11c2ljLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIikuZGVmYXVsdClcbiAgICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgXCIxYTE3MGY4ZFwiLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL215LWNvbXBvbmVudHMvbXktbXVzaWMudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///12\n");

/***/ }),
/* 13 */
/*!**************************************************************************************************************************************!*\
  !*** /Users/wangjunhao/Documents/HBuilderProjects/uni-app-demo/components/my-components/my-music.vue?vue&type=template&id=05827e12& ***!
  \**************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_my_music_vue_vue_type_template_id_05827e12___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./my-music.vue?vue&type=template&id=05827e12& */ 14);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_my_music_vue_vue_type_template_id_05827e12___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_my_music_vue_vue_type_template_id_05827e12___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_my_music_vue_vue_type_template_id_05827e12___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_my_music_vue_vue_type_template_id_05827e12___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 14 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/wangjunhao/Documents/HBuilderProjects/uni-app-demo/components/my-components/my-music.vue?vue&type=template&id=05827e12& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var recyclableRender = false
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: ["zwyMusic"] }, [
      _c(
        "view",
        {
          staticClass: ["bubble", "zwyRotate"],
          staticStyle: { animationDuration: "10s" }
        },
        [_c("u-text", [_vm._v("气泡")])]
      ),
      _c("view", { staticClass: ["after"] }, [
        _c("u-text", { appendAsTree: true, attrs: { append: "tree" } }, [
          _vm._v("♩")
        ])
      ]),
      _c("view", { staticClass: ["before"] }, [
        _c("u-text", { appendAsTree: true, attrs: { append: "tree" } }, [
          _vm._v("♫")
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),
/* 15 */
/*!********************************************************************************************************************************!*\
  !*** /Users/wangjunhao/Documents/HBuilderProjects/uni-app-demo/components/my-components/my-music.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_my_music_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./my-music.vue?vue&type=script&lang=js& */ 16);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_my_music_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_my_music_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_my_music_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_my_music_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_my_music_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQThpQixDQUFnQix3akJBQUcsRUFBQyIsImZpbGUiOiIxNS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9teS1tdXNpYy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9teS1tdXNpYy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///15\n");

/***/ }),
/* 16 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/wangjunhao/Documents/HBuilderProjects/uni-app-demo/components/my-components/my-music.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n////# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIxNi5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///16\n");

/***/ }),
/* 17 */
/*!*****************************************************************************************************************************************!*\
  !*** /Users/wangjunhao/Documents/HBuilderProjects/uni-app-demo/components/my-components/my-music.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_my_music_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--9-oneOf-0-2!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-0-3!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-4!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./my-music.vue?vue&type=style&index=0&lang=scss& */ 18);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_my_music_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_my_music_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_my_music_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_my_music_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_my_music_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 18 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/wangjunhao/Documents/HBuilderProjects/uni-app-demo/components/my-components/my-music.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "zwyMusic": {
    "width": "99rpx",
    "height": "99rpx",
    "backgroundColor": "#FF0000",
    "position": "relative",
    "zIndex": 9999,
    "left": "100"
  },
  "before": {
    "position": "absolute",
    "left": -10,
    "bottom": -30,
    "color": "#ffffff",
    "zIndex": 9998,
    "opacity": 0,
    "transform": "translateY(0) translateX(0) scale(0)"
  },
  "after": {
    "position": "absolute",
    "left": -10,
    "bottom": -30,
    "color": "#ffffff",
    "zIndex": 9998,
    "opacity": 0,
    "transform": "translateY(0) translateX(0) scale(0)"
  },
  "@VERSION": 2
}

/***/ }),
/* 19 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 20 */
/*!*****************************************************************************************************************************!*\
  !*** /Users/wangjunhao/Documents/HBuilderProjects/uni-app-demo/components/chunlei-video/chunLei-slider/chunLei-slider.nvue ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _chunLei_slider_nvue_vue_type_template_id_5a6b26ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chunLei-slider.nvue?vue&type=template&id=5a6b26ee&scoped=true& */ 21);\n/* harmony import */ var _chunLei_slider_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chunLei-slider.nvue?vue&type=script&lang=js& */ 23);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _chunLei_slider_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _chunLei_slider_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 19);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./chunLei-slider.nvue?vue&type=style&index=0&id=5a6b26ee&lang=scss&scoped=true& */ 26).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./chunLei-slider.nvue?vue&type=style&index=0&id=5a6b26ee&lang=scss&scoped=true& */ 26).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _chunLei_slider_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _chunLei_slider_nvue_vue_type_template_id_5a6b26ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _chunLei_slider_nvue_vue_type_template_id_5a6b26ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"5a6b26ee\",\n  \"5937f2c2\",\n  false,\n  _chunLei_slider_nvue_vue_type_template_id_5a6b26ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"components/chunlei-video/chunLei-slider/chunLei-slider.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBd0k7QUFDeEk7QUFDbUU7QUFDTDtBQUM5RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLHlGQUFpRjtBQUNySSxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMseUZBQWlGO0FBQzFJOztBQUVBOztBQUVBO0FBQ21OO0FBQ25OLGdCQUFnQixpTkFBVTtBQUMxQixFQUFFLHFGQUFNO0FBQ1IsRUFBRSxzR0FBTTtBQUNSLEVBQUUsK0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMEdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiIyMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vY2h1bkxlaS1zbGlkZXIubnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01YTZiMjZlZSZzY29wZWQ9dHJ1ZSZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2NodW5MZWktc2xpZGVyLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2NodW5MZWktc2xpZGVyLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUpe1xuICAgICAgICAgICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9jaHVuTGVpLXNsaWRlci5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NWE2YjI2ZWUmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKS5kZWZhdWx0LCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucy5zdHlsZSxyZXF1aXJlKFwiLi9jaHVuTGVpLXNsaWRlci5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NWE2YjI2ZWUmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKS5kZWZhdWx0KVxuICAgICAgICAgICAgfVxuXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjVhNmIyNmVlXCIsXG4gIFwiNTkzN2YyYzJcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9jaHVubGVpLXZpZGVvL2NodW5MZWktc2xpZGVyL2NodW5MZWktc2xpZGVyLm52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///20\n");

/***/ }),
/* 21 */
/*!************************************************************************************************************************************************************************!*\
  !*** /Users/wangjunhao/Documents/HBuilderProjects/uni-app-demo/components/chunlei-video/chunLei-slider/chunLei-slider.nvue?vue&type=template&id=5a6b26ee&scoped=true& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_slider_nvue_vue_type_template_id_5a6b26ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./chunLei-slider.nvue?vue&type=template&id=5a6b26ee&scoped=true& */ 22);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_slider_nvue_vue_type_template_id_5a6b26ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_slider_nvue_vue_type_template_id_5a6b26ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_slider_nvue_vue_type_template_id_5a6b26ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_slider_nvue_vue_type_template_id_5a6b26ee_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 22 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/wangjunhao/Documents/HBuilderProjects/uni-app-demo/components/chunlei-video/chunLei-slider/chunLei-slider.nvue?vue&type=template&id=5a6b26ee&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      ref: "slider",
      staticClass: ["slider", "flex"],
      style: { width: _vm.width + "px" },
      attrs: { id: "slider" }
    },
    [
      _c(
        "div",
        {
          staticClass: ["slider-left", "flex"],
          style: { width: _vm.leftWidth + "px" },
          on: { touchend: _vm.sliderTouch }
        },
        [
          _c("div", {
            staticClass: ["left"],
            style: { backgroundColor: _vm.backgroundColor }
          })
        ]
      ),
      _c(
        "div",
        {
          staticClass: ["slider-right", "flex"],
          style: { width: _vm.currentWidth - _vm.leftWidth + "px" },
          on: { touchend: _vm.sliderTouch }
        },
        [_c("div", { staticClass: ["right"] })]
      ),
      _c(
        "div",
        {
          staticClass: ["block", "flex"],
          style: {
            backgroundColor: _vm.touch ? _vm.blockOuterColor : "rgba(0,0,0,0)",
            left: _vm.leftWidth + "px"
          },
          on: { click: function($event) {} }
        },
        [
          _c(
            "div",
            {
              staticClass: ["block-inner", "flex"],
              style: { backgroundColor: _vm.blockBackgroundColor },
              on: {
                touchmove: _vm.blockTouchMove,
                touchend: _vm.blockTouchEnd,
                touchstart: _vm.blockTouchStart
              }
            },
            [
              _c("div", {
                staticClass: ["block-inner-inner"],
                style: { backgroundColor: _vm.blockColor }
              })
            ]
          )
        ]
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 23 */
/*!******************************************************************************************************************************************************!*\
  !*** /Users/wangjunhao/Documents/HBuilderProjects/uni-app-demo/components/chunlei-video/chunLei-slider/chunLei-slider.nvue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_slider_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./chunLei-slider.nvue?vue&type=script&lang=js& */ 24);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_slider_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_slider_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_slider_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_slider_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_slider_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQThqQixDQUFnQiwrakJBQUcsRUFBQyIsImZpbGUiOiIyMy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jaHVuTGVpLXNsaWRlci5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY2h1bkxlaS1zbGlkZXIubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///23\n");

/***/ }),
/* 24 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/wangjunhao/Documents/HBuilderProjects/uni-app-demo/components/chunlei-video/chunLei-slider/chunLei-slider.nvue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default =\n{\n  props: {\n    min: {\n      type: Number,\n      default: 0 },\n\n    max: {\n      type: Number,\n      default: 0 },\n\n    value: {\n      type: Number,\n      default: 0 },\n\n    width: {\n      type: Number,\n      default: 0 },\n\n    ratio: {\n      type: Number,\n      default: 1 },\n\n    direction: {\n      type: String,\n      default: 'screenX' },\n\n    backgroundColor: { //滑块右侧背景条的颜色\n      type: String,\n      default: '#e9e9e9' },\n\n    blockColor: { //滑块颜色\n      type: String,\n      default: '#ffffff' },\n\n    screenLeft: { //slider距离左边距离\n      type: Number,\n      default: 0 },\n\n    iosDirection: {\n      type: Number,\n      default: 1 } },\n\n\n  data: function data() {\n    return {\n      oldToucesX: 0,\n      leftWidth: 0,\n      oldLeftWidth: 0,\n      touch: false };\n\n  },\n  mounted: function mounted() {\n\n\n  },\n  methods: {\n    sliderTouch: function sliderTouch(e) {\n      __f__(\"log\", e, \" at components/chunlei-video/chunLei-slider/chunLei-slider.nvue:78\");\n      var touches = e.changedTouches[0];\n      this.leftWidth = (touches[this.direction] || touches['clientX']) * this.ratio - this.screenLeft;\n      this.leftWidth = this.leftWidth > this.currentWidth ? this.currentWidth : this.leftWidth;\n      this.leftWidth = this.leftWidth < 0 ? 0 : this.leftWidth;\n      this.blockTouchEnd();\n\n    },\n    // 触摸开始\n    blockTouchStart: function blockTouchStart(e) {\n      this.touch = true;\n      this.oldLeftWidth = this.leftWidth;\n      this.oldToucesX = e.changedTouches[0][this.direction] || e.changedTouches[0]['clientX'];\n    },\n    // 计算方向\n    blockTouchMove: function blockTouchMove(e) {\n      var newToucesX;\n\n      newToucesX = e.changedTouches[0][this.direction] || e.changedTouches[0]['clientX'];\n\n      this.leftWidth = this.iosDirection * (newToucesX - this.oldToucesX) * this.ratio + this.oldLeftWidth;\n      this.leftWidth = this.leftWidth > this.currentWidth ? this.currentWidth : this.leftWidth;\n      this.leftWidth = this.leftWidth < 0 ? 0 : this.leftWidth;\n\n    },\n    // 结束触摸\n    blockTouchEnd: function blockTouchEnd(e) {\n      var current = this.leftWidth / this.currentWidth * this.max;\n      var event = { detail: { value: current } };\n      this.$emit('change', event);\n      this.touch = false;\n    },\n    colorRgb: function colorRgb(string, opacity) {\n      var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;\n      var sColor = string.toLowerCase();\n      if (sColor && reg.test(sColor)) {\n        if (sColor.length === 4) {\n          var sColorNew = \"#\";\n          for (var i = 1; i < 4; i += 1) {\n            sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));\n          }\n          sColor = sColorNew;\n        }\n        //处理六位的颜色值\n        var sColorChange = [];\n        for (var i = 1; i < 7; i += 2) {\n          sColorChange.push(parseInt(\"0x\" + sColor.slice(i, i + 2)));\n        }\n        return \"rgba(\" + sColorChange.join(\",\") + \",\".concat(opacity) + \")\";\n      } else {\n        return sColor;\n      }\n    } },\n\n  computed: {\n    blockOuterColor: function blockOuterColor() {\n      return this.colorRgb(this.blockColor, 0.4);\n    },\n    blockBackgroundColor: function blockBackgroundColor() {\n      return this.colorRgb(this.blockColor, 0.5);\n    },\n    currentWidth: function currentWidth() {\n      return this.width - 40;\n    } },\n\n  watch: {\n    value: {\n      immediate: true,\n      handler: function handler(newVal, oldVal) {\n        if (this.touch) return;\n\n        this.leftWidth = newVal / this.max * this.currentWidth;\n        this.leftWidth = this.leftWidth > this.currentWidth ? this.currentWidth : this.leftWidth;\n      } } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 25)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy9jaHVubGVpLXZpZGVvL2NodW5MZWktc2xpZGVyL2NodW5MZWktc2xpZGVyLm52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7QUFDQTtBQUNBO0FBQ0Esa0JBREE7QUFFQSxnQkFGQSxFQURBOztBQUtBO0FBQ0Esa0JBREE7QUFFQSxnQkFGQSxFQUxBOztBQVNBO0FBQ0Esa0JBREE7QUFFQSxnQkFGQSxFQVRBOztBQWFBO0FBQ0Esa0JBREE7QUFFQSxnQkFGQSxFQWJBOztBQWlCQTtBQUNBLGtCQURBO0FBRUEsZ0JBRkEsRUFqQkE7O0FBcUJBO0FBQ0Esa0JBREE7QUFFQSx3QkFGQSxFQXJCQTs7QUF5QkE7QUFDQSxrQkFEQTtBQUVBLHdCQUZBLEVBekJBOztBQTZCQTtBQUNBLGtCQURBO0FBRUEsd0JBRkEsRUE3QkE7O0FBaUNBO0FBQ0Esa0JBREE7QUFFQSxnQkFGQSxFQWpDQTs7QUFxQ0E7QUFDQSxrQkFEQTtBQUVBLGdCQUZBLEVBckNBLEVBREE7OztBQTJDQSxNQTNDQSxrQkEyQ0E7QUFDQTtBQUNBLG1CQURBO0FBRUEsa0JBRkE7QUFHQSxxQkFIQTtBQUlBLGtCQUpBOztBQU1BLEdBbERBO0FBbURBLFNBbkRBLHFCQW1EQTs7O0FBR0EsR0F0REE7QUF1REE7QUFDQSxlQURBLHVCQUNBLENBREEsRUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQVRBO0FBVUE7QUFDQSxtQkFYQSwyQkFXQSxDQVhBLEVBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQWZBO0FBZ0JBO0FBQ0Esa0JBakJBLDBCQWlCQSxDQWpCQSxFQWlCQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxLQTFCQTtBQTJCQTtBQUNBLGlCQTVCQSx5QkE0QkEsQ0E1QkEsRUE0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBakNBO0FBa0NBLFlBbENBLG9CQWtDQSxNQWxDQSxFQWtDQSxPQWxDQSxFQWtDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FkQSxNQWNBO0FBQ0E7QUFDQTtBQUNBLEtBdERBLEVBdkRBOztBQStHQTtBQUNBLG1CQURBLDZCQUNBO0FBQ0E7QUFDQSxLQUhBO0FBSUEsd0JBSkEsa0NBSUE7QUFDQTtBQUNBLEtBTkE7QUFPQSxnQkFQQSwwQkFPQTtBQUNBO0FBQ0EsS0FUQSxFQS9HQTs7QUEwSEE7QUFDQTtBQUNBLHFCQURBO0FBRUEsYUFGQSxtQkFFQSxNQUZBLEVBRUEsTUFGQSxFQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BUEEsRUFEQSxFQTFIQSxFIiwiZmlsZSI6IjI0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG5cdDxkaXYgY2xhc3M9XCJzbGlkZXIgZmxleFwiIGlkPVwic2xpZGVyXCIgOnN0eWxlPVwieyB3aWR0aDogYCR7d2lkdGh9cHhgIH1cIiByZWY9XCJzbGlkZXJcIj5cclxuXHRcdDxkaXYgY2xhc3M9XCJzbGlkZXItbGVmdCBmbGV4XCIgOnN0eWxlPVwieyB3aWR0aDogYCR7bGVmdFdpZHRofXB4YCB9XCIgQHRvdWNoZW5kLnN0b3A9XCJzbGlkZXJUb3VjaFwiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwibGVmdFwiIDpzdHlsZT1cIntiYWNrZ3JvdW5kQ29sb3I6YmFja2dyb3VuZENvbG9yfVwiPjwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0XHQ8ZGl2IGNsYXNzPVwic2xpZGVyLXJpZ2h0IGZsZXhcIiBAdG91Y2hlbmQuc3RvcD1cInNsaWRlclRvdWNoXCIgOnN0eWxlPVwieyB3aWR0aDogYCR7Y3VycmVudFdpZHRoLWxlZnRXaWR0aH1weGAgfVwiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwicmlnaHRcIj48L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdFx0PGRpdiBjbGFzcz1cImJsb2NrIGZsZXhcIiA6c3R5bGU9XCJ7YmFja2dyb3VuZENvbG9yOnRvdWNoP2Jsb2NrT3V0ZXJDb2xvcjoncmdiYSgwLDAsMCwwKScsIGxlZnQ6IGAke2xlZnRXaWR0aH1weGB9XCJcclxuXHRcdFx0QGNsaWNrLnN0b3A9XCJcIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImJsb2NrLWlubmVyIGZsZXhcIiA6c3R5bGU9XCJ7YmFja2dyb3VuZENvbG9yOmJsb2NrQmFja2dyb3VuZENvbG9yfVwiICBAdG91Y2htb3ZlLnN0b3AucHJldmVudD1cImJsb2NrVG91Y2hNb3ZlXCIgQHRvdWNoZW5kPVwiYmxvY2tUb3VjaEVuZFwiIEB0b3VjaHN0YXJ0PVwiYmxvY2tUb3VjaFN0YXJ0XCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cImJsb2NrLWlubmVyLWlubmVyXCIgOnN0eWxlPVwie2JhY2tncm91bmRDb2xvcjpibG9ja0NvbG9yfVwiPlxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0PC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGV4cG9ydCBkZWZhdWx0e1xyXG5cdFx0cHJvcHM6e1xyXG5cdFx0XHRtaW46e1xyXG5cdFx0XHRcdHR5cGU6TnVtYmVyLFxyXG5cdFx0XHRcdGRlZmF1bHQ6MFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRtYXg6e1xyXG5cdFx0XHRcdHR5cGU6TnVtYmVyLFxyXG5cdFx0XHRcdGRlZmF1bHQ6MFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR2YWx1ZTp7XHJcblx0XHRcdFx0dHlwZTpOdW1iZXIsXHJcblx0XHRcdFx0ZGVmYXVsdDowXHJcblx0XHRcdH0sXHJcblx0XHRcdHdpZHRoOntcclxuXHRcdFx0XHR0eXBlOk51bWJlcixcclxuXHRcdFx0XHRkZWZhdWx0OjBcclxuXHRcdFx0fSxcclxuXHRcdFx0cmF0aW86e1xyXG5cdFx0XHRcdHR5cGU6TnVtYmVyLFxyXG5cdFx0XHRcdGRlZmF1bHQ6MVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRkaXJlY3Rpb246e1xyXG5cdFx0XHRcdHR5cGU6U3RyaW5nLFxyXG5cdFx0XHRcdGRlZmF1bHQ6J3NjcmVlblgnXHJcblx0XHRcdH0sXHJcblx0XHRcdGJhY2tncm91bmRDb2xvcjp7IC8v5ruR5Z2X5Y+z5L6n6IOM5pmv5p2h55qE6aKc6ImyXHJcblx0XHRcdFx0dHlwZTpTdHJpbmcsXHJcblx0XHRcdFx0ZGVmYXVsdDonI2U5ZTllOSdcclxuXHRcdFx0fSxcclxuXHRcdFx0YmxvY2tDb2xvcjp7IC8v5ruR5Z2X6aKc6ImyXHJcblx0XHRcdFx0dHlwZTpTdHJpbmcsXHJcblx0XHRcdFx0ZGVmYXVsdDonI2ZmZmZmZidcclxuXHRcdFx0fSxcclxuXHRcdFx0c2NyZWVuTGVmdDp7IC8vc2xpZGVy6Led56a75bem6L656Led56a7XHJcblx0XHRcdFx0dHlwZTpOdW1iZXIsXHJcblx0XHRcdFx0ZGVmYXVsdDowXHJcblx0XHRcdH0sXHJcblx0XHRcdGlvc0RpcmVjdGlvbjp7XHJcblx0XHRcdFx0dHlwZTpOdW1iZXIsXHJcblx0XHRcdFx0ZGVmYXVsdDoxXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRkYXRhKCl7XHJcblx0XHRcdHJldHVybntcclxuXHRcdFx0XHRvbGRUb3VjZXNYOjAsXHJcblx0XHRcdFx0bGVmdFdpZHRoOjAsXHJcblx0XHRcdFx0b2xkTGVmdFdpZHRoOjAsXHJcblx0XHRcdFx0dG91Y2g6ZmFsc2VcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG1vdW50ZWQoKSB7XHJcblx0XHRcdFxyXG5cdFx0XHRcclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOntcclxuXHRcdFx0c2xpZGVyVG91Y2goZSl7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coZSlcclxuXHRcdFx0XHRsZXQgdG91Y2hlcyA9IGUuY2hhbmdlZFRvdWNoZXNbMF1cclxuXHRcdFx0XHR0aGlzLmxlZnRXaWR0aCA9ICh0b3VjaGVzW3RoaXMuZGlyZWN0aW9uXXx8dG91Y2hlc1snY2xpZW50WCddKSp0aGlzLnJhdGlvLXRoaXMuc2NyZWVuTGVmdFxyXG5cdFx0XHRcdHRoaXMubGVmdFdpZHRoID0gdGhpcy5sZWZ0V2lkdGggPiB0aGlzLmN1cnJlbnRXaWR0aD8gdGhpcy5jdXJyZW50V2lkdGggOiB0aGlzLmxlZnRXaWR0aFxyXG5cdFx0XHRcdHRoaXMubGVmdFdpZHRoID0gdGhpcy5sZWZ0V2lkdGggPCAwPyAwIDogdGhpcy5sZWZ0V2lkdGhcclxuXHRcdFx0XHR0aGlzLmJsb2NrVG91Y2hFbmQoKVxyXG5cdFx0XHRcdFxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDop6bmkbjlvIDlp4tcclxuXHRcdFx0YmxvY2tUb3VjaFN0YXJ0KGUpIHtcclxuXHRcdFx0XHR0aGlzLnRvdWNoID0gdHJ1ZVxyXG5cdFx0XHRcdHRoaXMub2xkTGVmdFdpZHRoID0gdGhpcy5sZWZ0V2lkdGhcclxuXHRcdFx0XHR0aGlzLm9sZFRvdWNlc1ggPSBlLmNoYW5nZWRUb3VjaGVzWzBdW3RoaXMuZGlyZWN0aW9uXXx8ZS5jaGFuZ2VkVG91Y2hlc1swXVsnY2xpZW50WCddO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDorqHnrpfmlrnlkJFcclxuXHRcdFx0YmxvY2tUb3VjaE1vdmUoZSkge1xyXG5cdFx0XHRcdGxldCBuZXdUb3VjZXNYXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0bmV3VG91Y2VzWD0gZS5jaGFuZ2VkVG91Y2hlc1swXVt0aGlzLmRpcmVjdGlvbl18fGUuY2hhbmdlZFRvdWNoZXNbMF1bJ2NsaWVudFgnXTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHR0aGlzLmxlZnRXaWR0aCA9IHRoaXMuaW9zRGlyZWN0aW9uKihuZXdUb3VjZXNYIC0gdGhpcy5vbGRUb3VjZXNYKSp0aGlzLnJhdGlvKyB0aGlzLm9sZExlZnRXaWR0aFxyXG5cdFx0XHRcdHRoaXMubGVmdFdpZHRoID0gdGhpcy5sZWZ0V2lkdGggPiB0aGlzLmN1cnJlbnRXaWR0aD8gdGhpcy5jdXJyZW50V2lkdGggOiB0aGlzLmxlZnRXaWR0aFxyXG5cdFx0XHRcdHRoaXMubGVmdFdpZHRoID0gdGhpcy5sZWZ0V2lkdGggPCAwPyAwIDogdGhpcy5sZWZ0V2lkdGhcclxuXHRcdFx0XHRcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g57uT5p2f6Kem5pG4XHJcblx0XHRcdGJsb2NrVG91Y2hFbmQoZSkge1xyXG5cdFx0XHRcdGxldCBjdXJyZW50ID0gdGhpcy5sZWZ0V2lkdGggLyB0aGlzLmN1cnJlbnRXaWR0aCAqdGhpcy5tYXhcclxuXHRcdFx0XHRjb25zdCBldmVudCA9IHtkZXRhaWw6e3ZhbHVlOmN1cnJlbnR9fVxyXG5cdFx0XHRcdHRoaXMuJGVtaXQoJ2NoYW5nZScsZXZlbnQpXHJcblx0XHRcdFx0dGhpcy50b3VjaCA9IGZhbHNlXHJcblx0XHRcdH0sXHJcblx0XHRcdGNvbG9yUmdiKHN0cmluZyxvcGFjaXR5KXtcclxuXHRcdFx0XHR2YXIgcmVnID0gL14jKFswLTlhLWZBLWZdezN9fFswLTlhLWZBLWZdezZ9KSQvO1xyXG5cdFx0XHRcdHZhciBzQ29sb3IgPSBzdHJpbmcudG9Mb3dlckNhc2UoKTtcclxuXHRcdFx0XHRpZihzQ29sb3IgJiYgcmVnLnRlc3Qoc0NvbG9yKSl7XHJcblx0XHRcdFx0ICAgIGlmKHNDb2xvci5sZW5ndGggPT09IDQpe1xyXG5cdFx0XHRcdCAgICAgICAgdmFyIHNDb2xvck5ldyA9IFwiI1wiO1xyXG5cdFx0XHRcdCAgICAgICAgZm9yKHZhciBpPTE7IGk8NDsgaSs9MSl7XHJcblx0XHRcdFx0ICAgICAgICAgICAgc0NvbG9yTmV3ICs9IHNDb2xvci5zbGljZShpLGkrMSkuY29uY2F0KHNDb2xvci5zbGljZShpLGkrMSkpOyAgIFxyXG5cdFx0XHRcdCAgICAgICAgfVxyXG5cdFx0XHRcdCAgICAgICAgc0NvbG9yID0gc0NvbG9yTmV3O1xyXG5cdFx0XHRcdCAgICB9XHJcblx0XHRcdFx0ICAgIC8v5aSE55CG5YWt5L2N55qE6aKc6Imy5YC8XHJcblx0XHRcdFx0ICAgIHZhciBzQ29sb3JDaGFuZ2UgPSBbXTtcclxuXHRcdFx0XHQgICAgZm9yKHZhciBpPTE7IGk8NzsgaSs9Mil7XHJcblx0XHRcdFx0ICAgICAgICBzQ29sb3JDaGFuZ2UucHVzaChwYXJzZUludChcIjB4XCIrc0NvbG9yLnNsaWNlKGksaSsyKSkpOyAgXHJcblx0XHRcdFx0ICAgIH1cclxuXHRcdFx0XHQgICAgcmV0dXJuIFwicmdiYShcIiArIHNDb2xvckNoYW5nZS5qb2luKFwiLFwiKSArYCwke29wYWNpdHl9YCtcIilcIjtcclxuXHRcdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHQgICAgcmV0dXJuIHNDb2xvcjsgIFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGNvbXB1dGVkOntcclxuXHRcdFx0YmxvY2tPdXRlckNvbG9yKCl7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuY29sb3JSZ2IodGhpcy5ibG9ja0NvbG9yLDAuNClcclxuXHRcdFx0fSxcclxuXHRcdFx0YmxvY2tCYWNrZ3JvdW5kQ29sb3IoKXtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5jb2xvclJnYih0aGlzLmJsb2NrQ29sb3IsMC41KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRjdXJyZW50V2lkdGgoKXtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy53aWR0aCAtIDQwXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHR3YXRjaDp7XHJcblx0XHRcdHZhbHVlOntcclxuXHRcdFx0XHRpbW1lZGlhdGU6dHJ1ZSxcclxuXHRcdFx0XHRoYW5kbGVyKG5ld1ZhbCxvbGRWYWwpe1xyXG5cdFx0XHRcdFx0aWYodGhpcy50b3VjaCkgcmV0dXJuXHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdHRoaXMubGVmdFdpZHRoID0gbmV3VmFsL3RoaXMubWF4ICogdGhpcy5jdXJyZW50V2lkdGhcclxuXHRcdFx0XHRcdHRoaXMubGVmdFdpZHRoID0gdGhpcy5sZWZ0V2lkdGggPiB0aGlzLmN1cnJlbnRXaWR0aD8gdGhpcy5jdXJyZW50V2lkdGggOiB0aGlzLmxlZnRXaWR0aFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG5cdC5mbGV4e1xyXG5cdFx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdC8qICNlbmRpZiAqL1xyXG5cdFx0XHJcblx0fVxyXG5cdC5zbGlkZXJ7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFx0aGVpZ2h0OiA0MHB4O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFxyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0fVxyXG5cdC5zbGlkZXItbGVmdHtcclxuXHRcdGhlaWdodDogNDBweDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuXHQubGVmdHtcclxuXHRcdGZsZXg6IDE7XHJcblx0XHRoZWlnaHQ6IDNweDtcclxuXHR9XHJcblx0LnNsaWRlci1yaWdodHtcclxuXHRcdGhlaWdodDogNDBweDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuXHQucmlnaHR7XHJcblx0XHRoZWlnaHQ6IDNweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4zKTtcclxuXHRcdGZsZXg6IDE7XHJcblx0fVxyXG5cdC5ibG9ja3tcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdGhlaWdodDogNDBweDtcclxuXHRcdHdpZHRoOiA0MHB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMjBweDtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdHotaW5kZXg6IDk5OTk5OTtcclxuXHR9XHJcblx0LmJsb2NrLWlubmVye1xyXG5cdFx0aGVpZ2h0OiAyMHB4O1xyXG5cdFx0d2lkdGg6IDIwcHg7XHJcblx0XHRib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuXHQuYmxvY2staW5uZXItaW5uZXJ7XHJcblx0XHRoZWlnaHQ6IDEwcHg7XHJcblx0XHR3aWR0aDogMTBweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHRcdFxyXG5cdH1cclxuPC9zdHlsZT5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///24\n");

/***/ }),
/* 25 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.log = log;exports.default = formatLog;function typof(v) {
  var s = Object.prototype.toString.call(v);
  return s.substring(8, s.length - 1);
}

function isDebugMode() {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__;
}

function jsonStringifyReplacer(k, p) {
  switch (typof(p)) {
    case 'Function':
      return 'function() { [native code] }';
    default:
      return p;}

}

function log(type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  console[type].apply(console, args);
}

function formatLog() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var type = args.shift();
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'));
    return console[type].apply(console, args);
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase();

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v, jsonStringifyReplacer) + '---END:JSON---';
      } catch (e) {
        v = type;
      }
    } else {
      if (v === null) {
        v = '---NULL---';
      } else if (v === undefined) {
        v = '---UNDEFINED---';
      } else {
        var vType = typof(v).toUpperCase();

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---';
        } else {
          v = String(v);
        }
      }
    }

    return v;
  });
  var msg = '';

  if (msgs.length > 1) {
    var lastMsg = msgs.pop();
    msg = msgs.join('---COMMA---');

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg;
    } else {
      msg += '---COMMA---' + lastMsg;
    }
  } else {
    msg = msgs[0];
  }

  console[type](msg);
}

/***/ }),
/* 26 */
/*!***************************************************************************************************************************************************************************************!*\
  !*** /Users/wangjunhao/Documents/HBuilderProjects/uni-app-demo/components/chunlei-video/chunLei-slider/chunLei-slider.nvue?vue&type=style&index=0&id=5a6b26ee&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_slider_nvue_vue_type_style_index_0_id_5a6b26ee_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--9-oneOf-0-2!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-0-3!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-4!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./chunLei-slider.nvue?vue&type=style&index=0&id=5a6b26ee&lang=scss&scoped=true& */ 27);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_slider_nvue_vue_type_style_index_0_id_5a6b26ee_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_slider_nvue_vue_type_style_index_0_id_5a6b26ee_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_slider_nvue_vue_type_style_index_0_id_5a6b26ee_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_slider_nvue_vue_type_style_index_0_id_5a6b26ee_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_slider_nvue_vue_type_style_index_0_id_5a6b26ee_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 27 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/wangjunhao/Documents/HBuilderProjects/uni-app-demo/components/chunlei-video/chunLei-slider/chunLei-slider.nvue?vue&type=style&index=0&id=5a6b26ee&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "slider": {
    "position": "relative",
    "flexDirection": "row",
    "height": "40",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "slider-left": {
    "height": "40",
    "flexDirection": "row",
    "alignItems": "center"
  },
  "left": {
    "flex": 1,
    "height": "3"
  },
  "slider-right": {
    "height": "40",
    "flexDirection": "row",
    "alignItems": "center"
  },
  "right": {
    "height": "3",
    "backgroundColor": "rgba(0,0,0,0.3)",
    "flex": 1
  },
  "block": {
    "position": "absolute",
    "height": "40",
    "width": "40",
    "borderRadius": "20",
    "justifyContent": "center",
    "alignItems": "center",
    "zIndex": 999999
  },
  "block-inner": {
    "height": "20",
    "width": "20",
    "borderRadius": "10",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "block-inner-inner": {
    "height": "10",
    "width": "10",
    "borderRadius": "5"
  },
  "@VERSION": 2
}

/***/ }),
/* 28 */
/*!***************************************************************************************************************************!*\
  !*** /Users/wangjunhao/Documents/HBuilderProjects/uni-app-demo/components/chunlei-video/chunLei-danmu/chunLei-danmu.nvue ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _chunLei_danmu_nvue_vue_type_template_id_1d0230cb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chunLei-danmu.nvue?vue&type=template&id=1d0230cb& */ 29);\n/* harmony import */ var _chunLei_danmu_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chunLei-danmu.nvue?vue&type=script&lang=js& */ 31);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _chunLei_danmu_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _chunLei_danmu_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 19);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./chunLei-danmu.nvue?vue&type=style&index=0&lang=css& */ 35).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./chunLei-danmu.nvue?vue&type=style&index=0&lang=css& */ 35).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _chunLei_danmu_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _chunLei_danmu_nvue_vue_type_template_id_1d0230cb___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _chunLei_danmu_nvue_vue_type_template_id_1d0230cb___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"5a475861\",\n  false,\n  _chunLei_danmu_nvue_vue_type_template_id_1d0230cb___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"components/chunlei-video/chunLei-danmu/chunLei-danmu.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMkg7QUFDM0g7QUFDa0U7QUFDTDtBQUM3RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLCtEQUF1RDtBQUMzRyxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsK0RBQXVEO0FBQ2hIOztBQUVBOztBQUVBO0FBQ21OO0FBQ25OLGdCQUFnQixpTkFBVTtBQUMxQixFQUFFLG9GQUFNO0FBQ1IsRUFBRSx5RkFBTTtBQUNSLEVBQUUsa0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsNkZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiIyOC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vY2h1bkxlaS1kYW5tdS5udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFkMDIzMGNiJlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vY2h1bkxlaS1kYW5tdS5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9jaHVuTGVpLWRhbm11Lm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUpe1xuICAgICAgICAgICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9jaHVuTGVpLWRhbm11Lm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIikuZGVmYXVsdCwgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMuc3R5bGUscmVxdWlyZShcIi4vY2h1bkxlaS1kYW5tdS5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIpLmRlZmF1bHQpXG4gICAgICAgICAgICB9XG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIFwiNWE0NzU4NjFcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9jaHVubGVpLXZpZGVvL2NodW5MZWktZGFubXUvY2h1bkxlaS1kYW5tdS5udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///28\n");

/***/ }),
/* 29 */
/*!**********************************************************************************************************************************************************!*\
  !*** /Users/wangjunhao/Documents/HBuilderProjects/uni-app-demo/components/chunlei-video/chunLei-danmu/chunLei-danmu.nvue?vue&type=template&id=1d0230cb& ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_danmu_nvue_vue_type_template_id_1d0230cb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./chunLei-danmu.nvue?vue&type=template&id=1d0230cb& */ 30);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_danmu_nvue_vue_type_template_id_1d0230cb___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_danmu_nvue_vue_type_template_id_1d0230cb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_danmu_nvue_vue_type_template_id_1d0230cb___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_danmu_nvue_vue_type_template_id_1d0230cb___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 30 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/wangjunhao/Documents/HBuilderProjects/uni-app-demo/components/chunlei-video/chunLei-danmu/chunLei-danmu.nvue?vue&type=template&id=1d0230cb& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: ["danmu"], style: { width: _vm.width + "px" } },
    [
      _c(
        "div",
        { staticClass: ["danmu-row"], style: { width: _vm.width + "px" } },
        _vm._l(_vm.danmuList1, function(item) {
          return _c(
            "div",
            {
              key: item._id,
              ref: "move",
              refInFor: true,
              staticClass: ["moveDiv"],
              style: { left: _vm.width + "px" },
              attrs: { id: item._id }
            },
            [
              item.avatar
                ? _c("u-image", {
                    staticClass: ["img"],
                    attrs: { src: item.avatar }
                  })
                : _vm._e(),
              _c(
                "u-text",
                {
                  class: _vm.platform + "-title",
                  style: { color: item.color ? item.color : "#fff" },
                  appendAsTree: true,
                  attrs: { append: "tree" }
                },
                [_vm._v(_vm._s(item.text))]
              )
            ],
            1
          )
        }),
        0
      ),
      _c(
        "div",
        { staticClass: ["danmu-row"], style: { width: _vm.width + "px" } },
        _vm._l(_vm.danmuList2, function(item) {
          return _c(
            "div",
            {
              key: item._id,
              ref: "move",
              refInFor: true,
              staticClass: ["moveDiv"],
              style: { left: _vm.width + "px" },
              attrs: { id: item._id }
            },
            [
              item.avatar
                ? _c("u-image", {
                    staticClass: ["img"],
                    attrs: { src: item.avatar }
                  })
                : _vm._e(),
              _c(
                "u-text",
                {
                  class: _vm.platform + "-title",
                  style: { color: item.color ? item.color : "#fff" },
                  appendAsTree: true,
                  attrs: { append: "tree" }
                },
                [_vm._v(_vm._s(item.text))]
              )
            ],
            1
          )
        }),
        0
      ),
      _c(
        "div",
        { staticClass: ["danmu-row"], style: { width: _vm.width + "px" } },
        _vm._l(_vm.danmuList3, function(item) {
          return _c(
            "div",
            {
              key: item._id,
              ref: "move",
              refInFor: true,
              staticClass: ["moveDiv"],
              style: { left: _vm.width + "px" },
              attrs: { id: item._id }
            },
            [
              item.avatar
                ? _c("u-image", {
                    staticClass: ["img"],
                    attrs: { src: item.avatar }
                  })
                : _vm._e(),
              _c(
                "u-text",
                {
                  class: _vm.platform + "-title",
                  style: { color: item.color ? item.color : "#fff" },
                  appendAsTree: true,
                  attrs: { append: "tree" }
                },
                [_vm._v(_vm._s(item.text))]
              )
            ],
            1
          )
        }),
        0
      ),
      _c(
        "div",
        { staticClass: ["danmu-row"], style: { width: _vm.width + "px" } },
        _vm._l(_vm.danmuList4, function(item) {
          return _c(
            "div",
            {
              key: item._id,
              ref: "move",
              refInFor: true,
              staticClass: ["moveDiv"],
              style: { left: _vm.width + "px" },
              attrs: { id: item._id }
            },
            [
              item.avatar
                ? _c("u-image", {
                    staticClass: ["img"],
                    attrs: { src: item.avatar }
                  })
                : _vm._e(),
              _c(
                "u-text",
                {
                  class: _vm.platform + "-title",
                  style: { color: item.color ? item.color : "#fff" },
                  appendAsTree: true,
                  attrs: { append: "tree" }
                },
                [_vm._v(_vm._s(item.text))]
              )
            ],
            1
          )
        }),
        0
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 31 */
/*!****************************************************************************************************************************************************!*\
  !*** /Users/wangjunhao/Documents/HBuilderProjects/uni-app-demo/components/chunlei-video/chunLei-danmu/chunLei-danmu.nvue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_danmu_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./chunLei-danmu.nvue?vue&type=script&lang=js& */ 32);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_danmu_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_danmu_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_danmu_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_danmu_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_danmu_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTZqQixDQUFnQiw4akJBQUcsRUFBQyIsImZpbGUiOiIzMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jaHVuTGVpLWRhbm11Lm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jaHVuTGVpLWRhbm11Lm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///31\n");

/***/ }),
/* 32 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/wangjunhao/Documents/HBuilderProjects/uni-app-demo/components/chunlei-video/chunLei-danmu/chunLei-danmu.nvue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 33));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);}_next(undefined);});};}function _createForOfIteratorHelper(o, allowArrayLike) {var it;if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) {if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") {if (it) o = it;var i = 0;var F = function F() {};return { s: F, n: function n() {if (i >= o.length) return { done: true };return { done: false, value: o[i++] };}, e: function e(_e) {throw _e;}, f: F };}throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");}var normalCompletion = true,didErr = false,err;return { s: function s() {it = o[Symbol.iterator]();}, n: function n() {var step = it.next();normalCompletion = step.done;return step;}, e: function e(_e2) {didErr = true;err = _e2;}, f: function f() {try {if (!normalCompletion && it.return != null) it.return();} finally {if (didErr) throw err;}} };}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === \"Object\" && o.constructor) n = o.constructor.name;if (n === \"Map\" || n === \"Set\") return Array.from(o);if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;} //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\nvar animation = weex.requireModule('animation');\nvar modal = weex.requireModule('modal');var _default2 =\n{\n  props: {\n    width: {\n      type: Number,\n      default: 0 },\n\n    danmuList: { //弹幕\n      type: [Array],\n      default: function _default() {return [];} },\n\n    platform: {\n      type: String,\n      default: 'android' },\n\n    current: {\n      type: Number,\n      default: 0 } },\n\n\n  data: function data() {\n    return {\n      danmuList1: [],\n      danmuList2: [],\n      danmuList3: [],\n      danmuList4: [] };\n\n  },\n  methods: {\n    promise: function promise() {\n      var promise = new Promise(function (resolve, reject) {\n        setTimeout(function () {\n          resolve();\n        }, 100);\n      });\n      return promise;\n    },\n    cleanDanmu: function cleanDanmu() {\n      this.danmuList1 = [];\n      this.danmuList2 = [];\n      this.danmuList3 = [];\n      this.danmuList4 = [];\n    },\n    randomRange: function randomRange(min, max) {// min最小值，max最大值\n      return Math.floor(Math.random() * (max - min)) + min;\n    },\n    animationText: function animationText(id, distance, fn) {\n      var el;\n      var elList = this.$refs.move;var _iterator = _createForOfIteratorHelper(\n      elList),_step;try {for (_iterator.s(); !(_step = _iterator.n()).done;) {var item = _step.value;\n          if (item.attr.id == id) {\n            el = item;\n          }\n\n        }} catch (err) {_iterator.e(err);} finally {_iterator.f();}\n      animation.transition(el, {\n        styles: {\n          transform: \"translate( \".concat(distance, \"px, 0px)\") },\n\n        duration: 20000, //ms\n        timingFunction: 'ease',\n        delay: 0 //ms\n      }, function () {\n        fn();\n      });\n\n    } },\n\n  watch: {\n    danmuList: {\n      immediate: true,\n      handler: function handler(newVal, oldVal) {\n        for (var key in newVal) {\n          newVal[key]._id = key;\n        }\n      } },\n\n    current: {\n      handler: function () {var _handler = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(newVal, oldVal) {var _this = this;var _iterator2, _step2, _loop;return _regenerator.default.wrap(function _callee$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:if (!(\n\n\n                  Math.abs(newVal - oldVal) >= 0.24)) {_context2.next = 17;break;}_iterator2 = _createForOfIteratorHelper(\n                  this.danmuList);_context2.prev = 2;_loop = /*#__PURE__*/_regenerator.default.mark(function _loop() {var item, num;return _regenerator.default.wrap(function _loop$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:item = _step2.value;if (!(\n                            item.time > Math.floor(newVal * 1) && item.time <= Math.floor(newVal * 1 + 0.25))) {_context.next = 7;break;}\n                            num = _this.randomRange(1, 5);\n                            _this[\"danmuList\".concat(num)].push(item);_context.next = 6;return (\n                              _this.promise());case 6:\n\n                            //开始动画\n                            _this.animationText(item._id, -_this.width * 2, function () {\n                              var index;\n                              //删除动画后的text\n                              for (var key in _this[\"danmuList\".concat(num)]) {\n                                if (_this[\"danmuList\".concat(num)][key]._id == item._id) {\n                                  index = key;\n                                }\n                              }\n                              _this[\"danmuList\".concat(num)].splice(index, 1);\n                            });case 7:case \"end\":return _context.stop();}}}, _loop);});_iterator2.s();case 5:if ((_step2 = _iterator2.n()).done) {_context2.next = 9;break;}return _context2.delegateYield(_loop(), \"t0\", 7);case 7:_context2.next = 5;break;case 9:_context2.next = 14;break;case 11:_context2.prev = 11;_context2.t1 = _context2[\"catch\"](2);_iterator2.e(_context2.t1);case 14:_context2.prev = 14;_iterator2.f();return _context2.finish(14);case 17:case \"end\":return _context2.stop();}}}, _callee, this, [[2, 11, 14, 17]]);}));function handler(_x, _x2) {return _handler.apply(this, arguments);}return handler;}() } } };exports.default = _default2;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy9jaHVubGVpLXZpZGVvL2NodW5MZWktZGFubXUvY2h1bkxlaS1kYW5tdS5udnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQThCQTtBQUNBLHdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBREE7QUFFQSxnQkFGQSxFQURBOztBQUtBO0FBQ0EsbUJBREE7QUFFQSwrQ0FGQSxFQUxBOztBQVNBO0FBQ0Esa0JBREE7QUFFQSx3QkFGQSxFQVRBOztBQWFBO0FBQ0Esa0JBREE7QUFFQSxnQkFGQSxFQWJBLEVBREE7OztBQW1CQSxNQW5CQSxrQkFtQkE7QUFDQTtBQUNBLG9CQURBO0FBRUEsb0JBRkE7QUFHQSxvQkFIQTtBQUlBLG9CQUpBOztBQU1BLEdBMUJBO0FBMkJBO0FBQ0EsV0FEQSxxQkFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBRkEsRUFFQSxHQUZBO0FBR0EsT0FKQTtBQUtBO0FBQ0EsS0FSQTtBQVNBLGNBVEEsd0JBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBZEE7QUFlQSxlQWZBLHVCQWVBLEdBZkEsRUFlQSxHQWZBLEVBZUE7QUFDQTtBQUNBLEtBakJBO0FBa0JBLGlCQWxCQSx5QkFrQkEsRUFsQkEsRUFrQkEsUUFsQkEsRUFrQkEsRUFsQkEsRUFrQkE7QUFDQTtBQUNBLG1DQUZBO0FBR0EsWUFIQSxhQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBUkE7QUFTQTtBQUNBO0FBQ0EsK0RBREEsRUFEQTs7QUFJQSx1QkFKQSxFQUlBO0FBQ0EsOEJBTEE7QUFNQSxnQkFOQSxDQU1BO0FBTkEsU0FPQTtBQUNBO0FBQ0EsT0FUQTs7QUFXQSxLQXRDQSxFQTNCQTs7QUFtRUE7QUFDQTtBQUNBLHFCQURBO0FBRUEsYUFGQSxtQkFFQSxNQUZBLEVBRUEsTUFGQSxFQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FOQSxFQURBOztBQVNBO0FBQ0E7OztBQUdBLG1EQUhBO0FBSUEsZ0NBSkEsME5BSUEsSUFKQTtBQUtBLDRHQUxBO0FBTUEsK0JBTkEsR0FNQSx1QkFOQTtBQU9BLHNFQVBBO0FBUUEsNkNBUkE7O0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFUQSxFQVhBLDZrQkFEQSxFQVRBLEVBbkVBLEUiLCJmaWxlIjoiMzIuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcblx0PGRpdiBjbGFzcz1cImRhbm11XCIgOnN0eWxlPVwieyB3aWR0aDogYCR7d2lkdGh9cHhgIH1cIj5cclxuXHRcdDxkaXYgY2xhc3M9XCJkYW5tdS1yb3dcIiA6c3R5bGU9XCJ7IHdpZHRoOiBgJHt3aWR0aH1weGAgfVwiPlxyXG5cdFx0XHQ8ZGl2IDpzdHlsZT1cInsgbGVmdDpgJHt3aWR0aH1weGB9XCIgcmVmPVwibW92ZVwiIDppZD1cIml0ZW0uX2lkXCIgdi1mb3I9XCJpdGVtIGluIGRhbm11TGlzdDFcIiA6a2V5PVwiaXRlbS5faWRcIiBjbGFzcz1cIm1vdmVEaXZcIj5cclxuXHRcdFx0XHQ8aW1hZ2UgOnNyYz1cIml0ZW0uYXZhdGFyXCIgY2xhc3M9XCJpbWdcIiB2LWlmPVwiaXRlbS5hdmF0YXJcIj48L2ltYWdlPlxyXG5cdFx0XHRcdDx0ZXh0IDpjbGFzcz1cImAke3BsYXRmb3JtfS10aXRsZWBcIiA6c3R5bGU9XCJ7IGNvbG9yOml0ZW0uY29sb3I/aXRlbS5jb2xvcjonI2ZmZicgfVwiPnt7aXRlbS50ZXh0fX08L3RleHQ+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0XHQ8ZGl2IGNsYXNzPVwiZGFubXUtcm93XCIgOnN0eWxlPVwieyB3aWR0aDogYCR7d2lkdGh9cHhgIH1cIj5cclxuXHRcdFx0PGRpdiA6c3R5bGU9XCJ7IGxlZnQ6YCR7d2lkdGh9cHhgfVwiIHJlZj1cIm1vdmVcIiA6aWQ9XCJpdGVtLl9pZFwiIHYtZm9yPVwiaXRlbSBpbiBkYW5tdUxpc3QyXCIgOmtleT1cIml0ZW0uX2lkXCIgY2xhc3M9XCJtb3ZlRGl2XCI+XHJcblx0XHRcdFx0PGltYWdlIDpzcmM9XCJpdGVtLmF2YXRhclwiIGNsYXNzPVwiaW1nXCIgdi1pZj1cIml0ZW0uYXZhdGFyXCI+PC9pbWFnZT5cclxuXHRcdFx0XHQ8dGV4dCA6Y2xhc3M9XCJgJHtwbGF0Zm9ybX0tdGl0bGVgXCIgOnN0eWxlPVwieyBjb2xvcjppdGVtLmNvbG9yP2l0ZW0uY29sb3I6JyNmZmYnIH1cIj57e2l0ZW0udGV4dH19PC90ZXh0PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdFx0PGRpdiBjbGFzcz1cImRhbm11LXJvd1wiIDpzdHlsZT1cInsgd2lkdGg6IGAke3dpZHRofXB4YCB9XCI+XHJcblx0XHRcdDxkaXYgOnN0eWxlPVwieyBsZWZ0OmAke3dpZHRofXB4YH1cIiByZWY9XCJtb3ZlXCIgOmlkPVwiaXRlbS5faWRcIiB2LWZvcj1cIml0ZW0gaW4gZGFubXVMaXN0M1wiIDprZXk9XCJpdGVtLl9pZFwiIGNsYXNzPVwibW92ZURpdlwiPlxyXG5cdFx0XHRcdDxpbWFnZSA6c3JjPVwiaXRlbS5hdmF0YXJcIiBjbGFzcz1cImltZ1wiIHYtaWY9XCJpdGVtLmF2YXRhclwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0PHRleHQgOmNsYXNzPVwiYCR7cGxhdGZvcm19LXRpdGxlYFwiIDpzdHlsZT1cInsgY29sb3I6aXRlbS5jb2xvcj9pdGVtLmNvbG9yOicjZmZmJyB9XCI+e3tpdGVtLnRleHR9fTwvdGV4dD5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHRcdDxkaXYgY2xhc3M9XCJkYW5tdS1yb3dcIiA6c3R5bGU9XCJ7IHdpZHRoOiBgJHt3aWR0aH1weGAgfVwiPlxyXG5cdFx0XHQ8ZGl2IDpzdHlsZT1cInsgbGVmdDpgJHt3aWR0aH1weGB9XCIgcmVmPVwibW92ZVwiIDppZD1cIml0ZW0uX2lkXCIgdi1mb3I9XCJpdGVtIGluIGRhbm11TGlzdDRcIiA6a2V5PVwiaXRlbS5faWRcIiBjbGFzcz1cIm1vdmVEaXZcIj5cclxuXHRcdFx0XHQ8aW1hZ2UgOnNyYz1cIml0ZW0uYXZhdGFyXCIgY2xhc3M9XCJpbWdcIiB2LWlmPVwiaXRlbS5hdmF0YXJcIj48L2ltYWdlPlxyXG5cdFx0XHRcdDx0ZXh0IDpjbGFzcz1cImAke3BsYXRmb3JtfS10aXRsZWBcIiA6c3R5bGU9XCJ7IGNvbG9yOml0ZW0uY29sb3I/aXRlbS5jb2xvcjonI2ZmZicgfVwiPnt7aXRlbS50ZXh0fX08L3RleHQ+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0PC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGNvbnN0IGFuaW1hdGlvbiA9IHdlZXgucmVxdWlyZU1vZHVsZSgnYW5pbWF0aW9uJyk7XHJcblx0Y29uc3QgbW9kYWwgPSB3ZWV4LnJlcXVpcmVNb2R1bGUoJ21vZGFsJyk7XHJcblx0ZXhwb3J0IGRlZmF1bHR7XHJcblx0XHRwcm9wczp7XHJcblx0XHRcdHdpZHRoOntcclxuXHRcdFx0XHR0eXBlOk51bWJlcixcclxuXHRcdFx0XHRkZWZhdWx0OjBcclxuXHRcdFx0fSxcclxuXHRcdFx0ZGFubXVMaXN0OnsgLy/lvLnluZVcclxuXHRcdFx0XHR0eXBlOltBcnJheV0sXHJcblx0XHRcdFx0ZGVmYXVsdDooKT0+W11cclxuXHRcdFx0fSxcclxuXHRcdFx0cGxhdGZvcm06e1xyXG5cdFx0XHRcdHR5cGU6U3RyaW5nLFxyXG5cdFx0XHRcdGRlZmF1bHQ6J2FuZHJvaWQnXHJcblx0XHRcdH0sXHJcblx0XHRcdGN1cnJlbnQ6e1xyXG5cdFx0XHRcdHR5cGU6TnVtYmVyLFxyXG5cdFx0XHRcdGRlZmF1bHQ6MFxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0ZGF0YSgpe1xyXG5cdFx0XHRyZXR1cm57XHJcblx0XHRcdFx0ZGFubXVMaXN0MTpbXSxcclxuXHRcdFx0XHRkYW5tdUxpc3QyOltdLFxyXG5cdFx0XHRcdGRhbm11TGlzdDM6W10sXHJcblx0XHRcdFx0ZGFubXVMaXN0NDpbXSxcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6e1xyXG5cdFx0XHRwcm9taXNlKCl7XHJcblx0XHRcdFx0bGV0IHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpPT57XHJcblx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpPT57XHJcblx0XHRcdFx0XHRcdHJlc29sdmUoKVxyXG5cdFx0XHRcdFx0fSwxMDApXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHRyZXR1cm4gcHJvbWlzZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRjbGVhbkRhbm11KCl7XHJcblx0XHRcdFx0dGhpcy5kYW5tdUxpc3QxID0gW11cclxuXHRcdFx0XHR0aGlzLmRhbm11TGlzdDIgPSBbXVxyXG5cdFx0XHRcdHRoaXMuZGFubXVMaXN0MyA9IFtdXHJcblx0XHRcdFx0dGhpcy5kYW5tdUxpc3Q0ID0gW11cclxuXHRcdFx0fSxcclxuXHRcdFx0cmFuZG9tUmFuZ2UobWluLCBtYXgpIHsgLy8gbWlu5pyA5bCP5YC877yMbWF45pyA5aSn5YC8XHJcblx0XHRcdCAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikpICsgbWluO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRhbmltYXRpb25UZXh0KGlkLGRpc3RhbmNlLGZuKXtcclxuXHRcdFx0XHRsZXQgZWxcclxuXHRcdFx0XHRsZXQgZWxMaXN0ID0gdGhpcy4kcmVmcy5tb3ZlXHJcblx0XHRcdFx0Zm9yIChsZXQgaXRlbSBvZiBlbExpc3QpIHtcclxuXHRcdFx0XHRcdGlmKGl0ZW0uYXR0ci5pZCA9PSBpZCl7XHJcblx0XHRcdFx0XHRcdGVsID0gaXRlbVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGFuaW1hdGlvbi50cmFuc2l0aW9uKGVsLCB7XHJcblx0XHRcdFx0XHRzdHlsZXM6IHtcclxuXHRcdFx0XHRcdFx0dHJhbnNmb3JtOiBgdHJhbnNsYXRlKCAke2Rpc3RhbmNlfXB4LCAwcHgpYCxcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRkdXJhdGlvbjogMjAwMDAsIC8vbXNcclxuXHRcdFx0XHRcdHRpbWluZ0Z1bmN0aW9uOiAnZWFzZScsXHJcblx0XHRcdFx0XHRkZWxheTogMCAvL21zXHJcblx0XHRcdFx0XHR9LCAoKSA9PiB7XHJcblx0XHRcdFx0XHRcdGZuKClcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHQpXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHR3YXRjaDp7XHJcblx0XHRcdGRhbm11TGlzdDp7XHJcblx0XHRcdFx0aW1tZWRpYXRlOnRydWUsXHJcblx0XHRcdFx0aGFuZGxlcihuZXdWYWwsb2xkVmFsKXtcclxuXHRcdFx0XHRcdGZvciAobGV0IGtleSBpbiBuZXdWYWwpIHtcclxuXHRcdFx0XHRcdFx0bmV3VmFsW2tleV0uX2lkID0ga2V5XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRjdXJyZW50OntcclxuXHRcdFx0XHRoYW5kbGVyOmFzeW5jIGZ1bmN0aW9uKG5ld1ZhbCxvbGRWYWwpe1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQvL+mXtOmalDAuMjVcclxuXHRcdFx0XHRcdGlmKE1hdGguYWJzKG5ld1ZhbC1vbGRWYWwpPj0wLjI0KXtcclxuXHRcdFx0XHRcdFx0Zm9yIChsZXQgaXRlbSBvZiB0aGlzLmRhbm11TGlzdCkge1xyXG5cdFx0XHRcdFx0XHRcdGlmKCBpdGVtLnRpbWUgPiBNYXRoLmZsb29yKG5ld1ZhbCoxKSAmJiBpdGVtLnRpbWUgPD0gTWF0aC5mbG9vcihuZXdWYWwqMSsgMC4yNSkgKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRsZXQgbnVtID0gdGhpcy5yYW5kb21SYW5nZSgxLDUpXHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzW2BkYW5tdUxpc3Qke251bX1gXS5wdXNoKGl0ZW0pXHJcblx0XHRcdFx0XHRcdFx0XHRhd2FpdCB0aGlzLnByb21pc2UoKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHQvL+W8gOWni+WKqOeUu1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5hbmltYXRpb25UZXh0KGl0ZW0uX2lkLC10aGlzLndpZHRoKjIsKCk9PntcclxuXHRcdFx0XHRcdFx0XHRcdFx0bGV0IGluZGV4XHJcblx0XHRcdFx0XHRcdFx0XHRcdC8v5Yig6Zmk5Yqo55S75ZCO55qEdGV4dFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRmb3IgKGxldCBrZXkgaW4gdGhpc1tgZGFubXVMaXN0JHtudW19YF0pIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZih0aGlzW2BkYW5tdUxpc3Qke251bX1gXVtrZXldLl9pZD09aXRlbS5faWQpe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aW5kZXggPSBrZXlcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0dGhpc1tgZGFubXVMaXN0JHtudW19YF0uc3BsaWNlKGluZGV4LDEpXHJcblx0XHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcbi5kYW5tdXtcclxuXHRoZWlnaHQ6IDE2MHB4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHJcbn1cclxuLmRhbm11LXJvd3tcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0aGVpZ2h0OiA0MHB4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHJcbn1cclxuLm1vdmVEaXZ7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLmFuZHJvaWQtdGl0bGV7XHJcblx0Zm9udC1zaXplOiAyNHB4O1xyXG59XHJcbi5pbWd7XHJcblx0d2lkdGg6IDMwcHg7XHJcblx0aGVpZ2h0OiAzMHB4O1xyXG5cdG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbn1cclxuLmlvcy10aXRsZXtcclxuXHRmb250LXNpemU6IDI0cHg7XHJcbn1cclxuPC9zdHlsZT5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///32\n");

/***/ }),
/* 33 */
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ 34);

/***/ }),
/* 34 */
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true });

    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
  NativeIteratorPrototype !== Op &&
  hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
  Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
  GeneratorFunctionPrototype,
  toStringTagSymbol,
  "GeneratorFunction");


  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ?
    ctor === GeneratorFunction ||
    // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" :
    false;
  };

  exports.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function (arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
        typeof value === "object" &&
        hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function (error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
      // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(
      callInvokeWithMethodAndArg,
      // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) :
      callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
    wrap(innerFn, outerFn, self, tryLocsList),
    PromiseImpl);


    return exports.isGeneratorFunction(outerFn) ?
    iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ?
          GenStateCompleted :
          GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done };


        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
        "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function () {
    return this;
  };

  Gp.toString = function () {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function (object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function reset(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
          hasOwn.call(this, name) &&
          !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function stop() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function dispatchException(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
        hasOwn.call(entry, "finallyLoc") &&
        this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (
      type === "break" ||
      type === "continue") &&
      finallyEntry.tryLoc <= arg &&
      arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function complete(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
      record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc };


      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    } };


  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
// If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
 true ? module.exports : undefined);


try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}

/***/ }),
/* 35 */
/*!************************************************************************************************************************************************************!*\
  !*** /Users/wangjunhao/Documents/HBuilderProjects/uni-app-demo/components/chunlei-video/chunLei-danmu/chunLei-danmu.nvue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_danmu_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-0-2!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./chunLei-danmu.nvue?vue&type=style&index=0&lang=css& */ 36);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_danmu_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_danmu_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_danmu_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_danmu_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunLei_danmu_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 36 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/wangjunhao/Documents/HBuilderProjects/uni-app-demo/components/chunlei-video/chunLei-danmu/chunLei-danmu.nvue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "danmu": {
    "height": "160",
    "flexDirection": "column"
  },
  "danmu-row": {
    "position": "relative",
    "height": "40",
    "flexDirection": "row"
  },
  "moveDiv": {
    "position": "absolute",
    "flexDirection": "row",
    "justifyContent": "center"
  },
  "android-title": {
    "fontSize": "24"
  },
  "img": {
    "width": "30",
    "height": "30",
    "marginLeft": "10",
    "borderRadius": "15"
  },
  "ios-title": {
    "fontSize": "24"
  },
  "@VERSION": 2
}

/***/ }),
/* 37 */
/*!**********************************************************************************************************************************************************************!*\
  !*** /Users/wangjunhao/Documents/HBuilderProjects/uni-app-demo/components/chunlei-video/chunlei-video.nvue?vue&type=style&index=0&id=bc70e9d0&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunlei_video_nvue_vue_type_style_index_0_id_bc70e9d0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-0-2!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./chunlei-video.nvue?vue&type=style&index=0&id=bc70e9d0&scoped=true&lang=css& */ 38);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunlei_video_nvue_vue_type_style_index_0_id_bc70e9d0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunlei_video_nvue_vue_type_style_index_0_id_bc70e9d0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunlei_video_nvue_vue_type_style_index_0_id_bc70e9d0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunlei_video_nvue_vue_type_style_index_0_id_bc70e9d0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_chunlei_video_nvue_vue_type_style_index_0_id_bc70e9d0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 38 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/wangjunhao/Documents/HBuilderProjects/uni-app-demo/components/chunlei-video/chunlei-video.nvue?vue&type=style&index=0&id=bc70e9d0&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "video": {
    "width": "750rpx",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "img": {
    "position": "absolute",
    "width": "750rpx"
  },
  "icon-view": {
    "position": "absolute"
  },
  "top": {
    "position": "absolute",
    "top": 0,
    "backgroundImage": "linear-gradient(to top , rgba(0,0,0,0) , rgba(0,0,0,0.7))",
    "width": "750rpx",
    "height": "300rpx"
  },
  "icon": {
    "opacity": 0.6,
    "fontSize": "42",
    "color": "#ffffff",
    "fontFamily": "texticons"
  },
  "bottom": {
    "position": "absolute",
    "bottom": 0,
    "backgroundImage": "linear-gradient(to top , rgba(0,0,0,0.7) , rgba(0,0,0,0))",
    "width": "750rpx",
    "height": "300rpx"
  },
  "slider-view": {
    "position": "absolute",
    "left": 0,
    "bottom": "50",
    "width": "750rpx"
  },
  "progressBar": {
    "borderRadius": "2upx",
    "height": "4upx",
    "backgroundColor": "#FFFFFF",
    "zIndex": 999999,
    "position": "absolute",
    "left": 0,
    "bottom": "30"
  },
  "danmu-view": {
    "position": "absolute",
    "top": 0,
    "height": "160"
  },
  "rotate-img": {
    "width": "90rpx",
    "height": "90rpx",
    "position": "absolute",
    "bottom": "180rpx",
    "right": "20rpx",
    "borderRadius": "45rpx"
  },
  "@VERSION": 2
}

/***/ }),
/* 39 */
/*!******************************************************************************************************************************!*\
  !*** /Users/wangjunhao/Documents/HBuilderProjects/uni-app-demo/pages/tiktok/tiktok.nvue?vue&type=script&lang=js&mpType=page ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tiktok_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./tiktok.nvue?vue&type=script&lang=js&mpType=page */ 40);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tiktok_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tiktok_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tiktok_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tiktok_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tiktok_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXdqQixDQUFnQixra0JBQUcsRUFBQyIsImZpbGUiOiIzOS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90aWt0b2subnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdGlrdG9rLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///39\n");

/***/ }),
/* 40 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/wangjunhao/Documents/HBuilderProjects/uni-app-demo/pages/tiktok/tiktok.nvue?vue&type=script&lang=js&mpType=page ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__webpack_provided_uni_dot_requireNativePlugin, __f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 33));\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _utils = _interopRequireDefault(__webpack_require__(/*! @/common/utils.js */ 42));\nvar _chunleiVideo = _interopRequireDefault(__webpack_require__(/*! @/components/chunlei-video/chunlei-video */ 7));\nvar _scrollMixins = _interopRequireDefault(__webpack_require__(/*! ./scrollMixins */ 48));\n\n\n\nvar _api = __webpack_require__(/*! @/common/api.js */ 46);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");}function _iterableToArray(iter) {if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _createForOfIteratorHelper(o, allowArrayLike) {var it;if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) {if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") {if (it) o = it;var i = 0;var F = function F() {};return { s: F, n: function n() {if (i >= o.length) return { done: true };return { done: false, value: o[i++] };}, e: function e(_e) {throw _e;}, f: F };}throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");}var normalCompletion = true,didErr = false,err;return { s: function s() {it = o[Symbol.iterator]();}, n: function n() {var step = it.next();normalCompletion = step.done;return step;}, e: function e(_e2) {didErr = true;err = _e2;}, f: function f() {try {if (!normalCompletion && it.return != null) it.return();} finally {if (didErr) throw err;}} };}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === \"Object\" && o.constructor) n = o.constructor.name;if (n === \"Map\" || n === \"Set\") return Array.from(o);if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);}_next(undefined);});};}var BindingX = __webpack_provided_uni_dot_requireNativePlugin('bindingx');var animation = weex.requireModule('animation');var modal = weex.requireModule('modal');\n\n\n\n//引入需要的api \nvar _default = {\n  mixins: [_scrollMixins.default],\n  components: {\n    chunleiVideo: _chunleiVideo.default },\n\n  data: function data() {\n    return {\n      isShowVideos: false, // 控制展示首页内容\n      tempVideoList: [],\n      danmuList: [\n        // \t{\n        // \ttext: '发条弹幕0',\n        // \tcolor: '#fff',\n        // \ttime: 2,\n        // \tavatar: '../../static/avatar.png'\n        // },\n      ],\n      videoList: [\n        // \t{\n        // \tsrc: 'http://baobab.kaiyanapp.com/api/v1/playUrl?vid=129764&resourceType=video&editionType=default&source=aliyun&playUrlType=url_oss',\n        // \tcontent: '广告有反转：危机感十足！一辆车都比你靠谱',\n        // \tflag: false,\n        // \tcheck: true,\n        // \tlike: '7w',\n        // \tcomment: '1045',\n        // \tavatar: 'http://img.kaiyanapp.com/e44ed5fcfa424ba35761ce5f1339bc16.jpeg?imageMogr2/quality/60/format/jpg',\n        // \tinitialTime: 0,\n        // \tat: '欧美广告精选',\n        // \tduration: 149\n        // }, {\n        // \tsrc: 'http://baobab.kaiyanapp.com/api/v1/playUrl?vid=164015&resourceType=video&editionType=default&source=aliyun&playUrlType=url_oss',\n        // \tcontent: '为什么要选择uni-app？',\n        // \tflag: true,\n        // \tcheck: true,\n        // \tlike: '10w',\n        // \tcomment: '1045',\n        // \tavatar: '../../static/logo.png',\n        // \tinitialTime: 20,\n        // \tat: 'Dcloud',\n        // \tduration: 841,\n        // \tobjectFit: 'fill'\n        // },\n      ],\n      oldIndex: null };\n\n  },\n  // 先摸清楚播放逻辑，然后引入接口\n  created: function created() {\n    this.init();\n    //隐藏subnvue\n    uni.getSubNVueById('comment').hide();\n    uni.getSubNVueById('input-box').hide();\n  },\n\n  mounted: function mounted() {var _this = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:\n              uni.showLoading({});\n              __f__(\"log\", '触发一次', \" at pages/tiktok/tiktok.nvue:180\");\n              //this.videoPlay(this.index)\n              _context.next = 4;return _this.pushVideoList(1).then(function (res) {\n                setTimeout(function () {\n                  _this.isShowVideos = true;\n                  uni.hideLoading();\n                }, 1000);\n              });case 4:\n              _this.$nextTick(function () {\n                _this.videoPlay(_this.index);\n              });case 5:case \"end\":return _context.stop();}}}, _callee);}))();\n  },\n  onShow: function onShow() {\n    this.videoPlay(this.index);\n    // uni.getSubNVueById('tabSubNvue').show('none', 0, () => {});\n  },\n  onHide: function onHide() {var _iterator = _createForOfIteratorHelper(\n    this.videoList),_step;try {for (_iterator.s(); !(_step = _iterator.n()).done;) {var item = _step.value;\n        item.flag = false;\n      }} catch (err) {_iterator.e(err);} finally {_iterator.f();}\n  },\n  methods: {\n    // 组件emit触发父组件事件\n    playEvent: function playEvent() {var _this2 = this;\n      // return;\n      // 用户快速滑动视频时，可能视频未播放时就滑过去了，导致没有触发已查看接口；\n      if (this.oldIndex !== this.index) {\n        this.oldIndex = this.index;\n        (0, _api.hadSeen)({\n          zj: this.videoList[this.index].zj }).\n        then(function (res) {\n          if (res.flag === 1) {\n            __f__(\"log\", '当前已阅读视频zj:' + _this2.videoList[_this2.index].zj, \" at pages/tiktok/tiktok.nvue:212\");\n          }\n        }).catch(function (err) {\n          uni.showToast({\n            title: \"\\u5F02\\u5E38\\uFF0C\\u8BF7\\u7A0D\\u540E\\u91CD\\u8BD5\",\n            icon: 'none' });\n\n        });\n      }\n    },\n    clickbt: function clickbt() {\n      __f__(\"log\", 11, \" at pages/tiktok/tiktok.nvue:223\");\n    },\n    //设置参数\n    init: function init() {\n      this.typeX = false; //开启左右滑动\n      this.playCount = 2; //剩余多少视频加载视频列表\n      this.startDistance = 5; //判断左右上下拖动的启动距离 px\n      this.minTime = 300; //判断快速滑动的时间,该时间内无视回弹距离判断\n      this.backDistance = 200; //判断tempVideoList[0].src;上下滑动的回弹距离 px\n    },\n\n    // 将视频的尺寸获取并传递；?\n    pushVideoList: function pushVideoList(num) {var _this3 = this;\n      var promise = new Promise(function (resolve, reject) {\n        (0, _api.getVideos)({\n          cs: num }).\n        then(function (res) {\n          var tempVideoList = [];\n          __f__(\"log\", JSON.stringify(res.datas), \" at pages/tiktok/tiktok.nvue:241\");var _iterator2 = _createForOfIteratorHelper(\n          res.datas),_step2;try {for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {var item = _step2.value;\n              var temp = {};\n              temp.zj = item.zj;\n              temp.userId = item.yhgh;\n              temp.src = _utils.default.dealInternetUrl(item.SPDZ, '', _this3.$store.state.userInfo.\n              userId);\n              // `http://www.hbcoal.cn:8999/document/check?fileId=${item.SPDZ}&userId=${this.$store.state.userInfo.userId}&attname=`;\n              temp.content = item.spjj;\n              temp.tag = item.spbq;\n              temp.like = item.spdzs;\n              temp.attention = item.SFGZYH === 0 ? false : true;\n              temp.at = item.yhxm;\n              temp.check = item.SFSCSP === 0 ? false : true;\n              temp.flag = false;\n              temp.comment = '0';\n              temp.avatar = _utils.default.dealInternetUrl(item.TXDZ, '', _this3.$store.state.userInfo.\n              userId);\n              temp.initialTime = 20;\n              temp.duration = 60;\n              temp.objectFit = 'fill';\n              // 采用utils的方法，拼接头像地址和视频地址\n              // 然后再打个包\n              tempVideoList.push(temp);\n              // 这里是判断src为空 则赋值，然后再增加一个空值\n              _this3.videoList.push({\n                src: '预置空值',\n                zj: '',\n                userId: '',\n                content: '',\n                tag: '',\n                flag: false,\n                check: false,\n                like: '',\n                attention: '',\n                comment: '',\n                avatar: '',\n                initialTime: 0,\n                at: '',\n                duration: 60 });\n\n            }\n            // 先push相对应的数目的对象，然后延迟执行1s  原因：直接this.videoList.push(temp)会导致视频播放异常\n          } catch (err) {_iterator2.e(err);} finally {_iterator2.f();}setTimeout(function () {\n            _this3.isShow = true;var _iterator3 = _createForOfIteratorHelper(\n            _this3.videoList),_step3;try {for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {var s = _step3.value;\n                if (s.src === '预置空值') {\n                  if (tempVideoList[0]) {\n                    // 赋值第一个，然后删除第一个 然后循环赋值下一个第一个\n                    s.src = tempVideoList[0].src;\n                    s.zj = tempVideoList[0].zj;\n                    s.userId = tempVideoList[0].userId;\n                    s.content = tempVideoList[0].content;\n                    s.tag = tempVideoList[0].tag.split(',');\n                    s.like = tempVideoList[0].like;\n                    s.attention = tempVideoList[0].attention;\n                    s.check = tempVideoList[0].check;\n                    s.at = tempVideoList[0].at;\n                    s.avatar = tempVideoList[0].avatar;\n                    tempVideoList.shift();\n                  }\n                }\n              }} catch (err) {_iterator3.e(err);} finally {_iterator3.f();}\n            __f__(\"log\", JSON.stringify(_this3.videoList), \" at pages/tiktok/tiktok.nvue:304\");\n          }, 888);\n          resolve();\n        });\n      });\n      return promise;\n    },\n    tapLove: function tapLove(e) {\n      e.stopPropagation();\n      if (this.distanceX != 0) return;\n      this.videoList[this.index].check = !this.videoList[this.index].check;\n      this.videoList = _toConsumableArray(this.videoList);\n      uni.vibrateShort({\n        success: function success() {\n          __f__(\"log\", 'success', \" at pages/tiktok/tiktok.nvue:318\");\n        } });\n\n      __f__(\"log\", JSON.stringify(this.videoList[this.index]), \" at pages/tiktok/tiktok.nvue:321\");\n      var tempType = '';\n      if (!this.videoList[this.index].check) {\n        tempType = 'delete';\n        this.videoList[this.index].like--;\n      } else {\n        this.videoList[this.index].like++;\n      }\n      (0, _api.addOrDeleteLikeVideo)({\n        zj: this.videoList[this.index].zj,\n        type: tempType }).\n      then(function (res) {\n        __f__(\"log\", JSON.stringify(res), \" at pages/tiktok/tiktok.nvue:333\");\n      }).catch(function (err) {\n        uni.showToast({\n          title: \"\\u5F02\\u5E38\\uFF0C\\u8BF7\\u7A0D\\u540E\\u91CD\\u8BD5\",\n          icon: 'none' });\n\n      });\n    },\n    tapAvatar: function tapAvatar(e) {\n      __f__(\"log\", JSON.stringify(this.videoList[this.index]), \" at pages/tiktok/tiktok.nvue:342\");\n      e.stopPropagation();\n      if (this.distanceX != 0) return;\n      uni.navigateTo({\n        url: \"/pages/tiktok/others?attention=\".concat(this.videoList[this.index].attention, \"&userId=\").concat(this.videoList[this.index].userId, \"&avatar=\").concat(encodeURIComponent(JSON.stringify(this.videoList[this.index].avatar))) });\n\n    },\n    tapMsg: function tapMsg(e) {\n      // e.stopPropagation();\n      // if (this.distanceX != 0) return\n      // uni.getSubNVueById('comment').show('none', 0, () => {\n      // \tuni.$emit('showComment', this.videoList[this.index].content)\n      // });\n    },\n    tapShare: function tapShare(e) {\n      // 获取index，如何触发已经刷了的事件；\n      // 每次都会触发暂停事件，在这该时机去利用当前index 然后取视频简介，打印看一下是不是当前视频，然后再打印主键，然后调用接口\n      // 如何阻止多次调用，当index变化之后 再允许继续调用\n      e.stopPropagation();\n      if (this.distanceX != 0) return;\n      uni.showToast({\n        icon: 'none',\n        title: \"\\u5206\\u4EAB\\u7D22\\u5F15\\u4E3A\".concat(this.index, \"\\u7684\\u89C6\\u9891\") });\n\n    },\n    toWhere: function toWhere(where) {\n      uni.navigateTo({\n        url: \"/pages/tiktok/\".concat(where) });\n\n    },\n    toSearch: function toSearch() {\n      uni.navigateTo({\n        url: \"/pages/tiktok/search\" });\n\n    },\n    // 添加随拍\n    addShoot: function addShoot() {\n      uni.navigateTo({\n        url: \"/pages/tiktok/addShoot?sourceType=camera\" });\n\n      // var self = this;\n      // uni.chooseVideo({\n      // \tcount: 1,\n      // \tsourceType: ['camera'],\n      // \t// sourceType: ['camera', 'album'],\n      // \tcompressed: true,\n      // \tsuccess: function(res) {\n      // \t\t// self.src = res.tempFilePath;\n      // \t\tconsole.log(res.tempFilePath);\n      // \t\tuni.navigateTo({\n      // \t\t\turl: `/pages/tiktok/addShoot?tempFilePath=${res.tempFilePath}`\n      // \t\t})\n      // \t},\n      // \tfail: function(res) {\n      // \t\tconsole.log('error选择视频=========' + JSON.stringify(res));\n      // \t}\n      // });\n\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js */ 41)[\"default\"], __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 25)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvdGlrdG9rL3Rpa3Rvay5udnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnSEE7QUFDQTtBQUNBOzs7O0FBSUEsMEQsaXdGQUhBLDBFQUNBLGdEQUNBOzs7O0FBS0E7ZUFDQTtBQUNBLGlDQURBO0FBRUE7QUFDQSx1Q0FEQSxFQUZBOztBQUtBLE1BTEEsa0JBS0E7QUFDQTtBQUNBLHlCQURBLEVBQ0E7QUFDQSx1QkFGQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkEsT0FIQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBeEJBLE9BWEE7QUFxQ0Esb0JBckNBOztBQXVDQSxHQTdDQTtBQThDQTtBQUNBLFNBL0NBLHFCQStDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FwREE7O0FBc0RBLFNBdERBLHFCQXNEQTtBQUNBO0FBQ0E7QUFDQTtBQUhBLHVDQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBSEEsRUFHQSxJQUhBO0FBSUEsZUFMQSxDQUpBO0FBVUE7QUFDQTtBQUNBLGVBRkEsRUFWQTtBQWFBLEdBbkVBO0FBb0VBLFFBcEVBLG9CQW9FQTtBQUNBO0FBQ0E7QUFDQSxHQXZFQTtBQXdFQSxRQXhFQSxvQkF3RUE7QUFDQSxrQkFEQSxhQUNBO0FBQ0E7QUFDQSxPQUhBO0FBSUEsR0E1RUE7QUE2RUE7QUFDQTtBQUNBLGFBRkEsdUJBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBREE7QUFFQSxZQUZBLENBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQU5BLEVBTUEsS0FOQSxDQU1BO0FBQ0E7QUFDQSxxRUFEQTtBQUVBLHdCQUZBOztBQUlBLFNBWEE7QUFZQTtBQUNBLEtBcEJBO0FBcUJBLFdBckJBLHFCQXFCQTtBQUNBO0FBQ0EsS0F2QkE7QUF3QkE7QUFDQSxRQXpCQSxrQkF5QkE7QUFDQSx5QkFEQSxDQUNBO0FBQ0EseUJBRkEsQ0FFQTtBQUNBLDZCQUhBLENBR0E7QUFDQSx5QkFKQSxDQUlBO0FBQ0EsOEJBTEEsQ0FLQTtBQUNBLEtBL0JBOztBQWlDQTtBQUNBLGlCQWxDQSx5QkFrQ0EsR0FsQ0EsRUFrQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBREE7QUFFQSxZQUZBLENBRUE7QUFDQTtBQUNBLHNGQUZBO0FBR0EsbUJBSEEsY0FHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQURBO0FBRUEsc0JBRkE7QUFHQSwwQkFIQTtBQUlBLDJCQUpBO0FBS0EsdUJBTEE7QUFNQSwyQkFOQTtBQU9BLDRCQVBBO0FBUUEsd0JBUkE7QUFTQSw2QkFUQTtBQVVBLDJCQVZBO0FBV0EsMEJBWEE7QUFZQSw4QkFaQTtBQWFBLHNCQWJBO0FBY0EsNEJBZEE7O0FBZ0JBO0FBQ0E7QUE1Q0Esc0VBNkNBO0FBQ0EsaUNBREE7QUFFQSw0QkFGQSxjQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQW5CQTtBQW9CQTtBQUNBLFdBckJBLEVBcUJBLEdBckJBO0FBc0JBO0FBQ0EsU0F0RUE7QUF1RUEsT0F4RUE7QUF5RUE7QUFDQSxLQTdHQTtBQThHQSxXQTlHQSxtQkE4R0EsQ0E5R0EsRUE4R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBSEE7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BSEEsTUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQURBO0FBRUEsc0JBRkE7QUFHQSxVQUhBLENBR0E7QUFDQTtBQUNBLE9BTEEsRUFLQSxLQUxBLENBS0E7QUFDQTtBQUNBLG1FQURBO0FBRUEsc0JBRkE7O0FBSUEsT0FWQTtBQVdBLEtBM0lBO0FBNElBLGFBNUlBLHFCQTRJQSxDQTVJQSxFQTRJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMk9BREE7O0FBR0EsS0FuSkE7QUFvSkEsVUFwSkEsa0JBb0pBLENBcEpBLEVBb0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBMUpBO0FBMkpBLFlBM0pBLG9CQTJKQSxDQTNKQSxFQTJKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQURBO0FBRUEsd0ZBRkE7O0FBSUEsS0FyS0E7QUFzS0EsV0F0S0EsbUJBc0tBLEtBdEtBLEVBc0tBO0FBQ0E7QUFDQSwyQ0FEQTs7QUFHQSxLQTFLQTtBQTJLQSxZQTNLQSxzQkEyS0E7QUFDQTtBQUNBLG1DQURBOztBQUdBLEtBL0tBO0FBZ0xBO0FBQ0EsWUFqTEEsc0JBaUxBO0FBQ0E7QUFDQSx1REFEQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBdk1BLEVBN0VBLEUiLCJmaWxlIjoiNDAuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcblx0PGRpdj5cclxuXHRcdDxkaXYgY2xhc3M9XCJwYWdlXCI+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJjb3Zlci12aWV3LWNlbnRlclwiIHYtaWY9XCJkaXN0YW5jZVg9PTBcIj5cclxuXHRcdFx0XHQ8ZGl2IDpzdHlsZT1cInsgaGVpZ2h0OiBgJHtzeXNoZWlnaHQtNjB9cHhgLHdpZHRoOiB3aWR0aCB9XCIgcmVmPVwidG91Y2hcIiBAY2xpY2s9XCJjbGlja1ZpZGVvKGluZGV4KVwiXHJcblx0XHRcdFx0XHRAdG91Y2hzdGFydD1cIkxpc3RUb3VjaFN0YXJ0XCIgQHRvdWNobW92ZT1cIkxpc3RUb3VjaE1vdmVcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb3Zlci12aWV3LXJpZ2h0XCIgdi1pZj1cImRpc3RhbmNlWD09MFwiPlxyXG5cdFx0XHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJpbWdcIiBAY2xpY2suc3RvcD1cInRhcEF2YXRhclwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwicmlnaHQtdGV4dFwiPiA8L3RleHQ+XHJcblx0XHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cImltZ1wiIEBjbGljay5zdG9wPVwidGFwTG92ZVwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwicmlnaHQtdGV4dFwiPiA8L3RleHQ+XHJcblx0XHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cImltZ1wiIEBjbGljay5zdG9wPVwidGFwTXNnXCI+PC9pbWFnZT5cclxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJyaWdodC10ZXh0XCI+IDwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwiaW1nXCIgQGNsaWNrLnN0b3A9XCJ0YXBTaGFyZVwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwicmlnaHQtdGV4dFwiPiA8L3RleHQ+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJzd2lwZXJcIiB2LWlmPVwiaXNTaG93VmlkZW9zXCIgcmVmPVwic3dpcGVyXCI+XHJcblx0XHRcdFx0PGJsb2NrIHYtZm9yPVwiKGl0ZW0sIGlkeCkgaW4gdmlkZW9MaXN0XCIgOmtleT1cImlkeFwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cInZpZGVvLWJveFwiIDpzdHlsZT1cInsgaGVpZ2h0OiBoZWlnaHQgfVwiPlxyXG5cdFx0XHRcdFx0XHQ8IS0tIOinhumikea4suafk+aVsOmihOWKoOi9veaVsOW9seWTjeaAp+iDvSAtLT5cclxuXHRcdFx0XHRcdFx0PGJsb2NrIHYtaWY9XCJNYXRoLmFicyhpbmRleC1pZHgpPD0xXCI+XHJcblx0XHRcdFx0XHRcdFx0PGNodW5sZWktdmlkZW8gY2xhc3M9XCJ2aWRlb1wiIDpzcmM9XCJpdGVtLnNyY1wiIDpoZWlnaHQ9XCJoZWlnaHRcIiA6d2lkdGg9XCJ3aWR0aFwiXHJcblx0XHRcdFx0XHRcdFx0XHQ6cGxheT1cIml0ZW0uZmxhZ1wiIDpnRHVyYXRpb249XCJpdGVtLmR1cmF0aW9uXCIgOm9iamVjdEZpdD1cIml0ZW0ub2JqZWN0Rml0XCJcclxuXHRcdFx0XHRcdFx0XHRcdDppbml0aWFsVGltZT1cIml0ZW0uaW5pdGlhbFRpbWVcIiBAcGF1c2U9XCJwYXVzZVZpZGVvXCIgQHBsYXlFdmVudD1cInBsYXlFdmVudFwiXHJcblx0XHRcdFx0XHRcdFx0XHQ6cm90YXRlSW1nPVwiYC8vc3RhdGljL2ltZy9kaXNjLmpwZ2BcIiA6ZGFubXVMaXN0PVwiZGFubXVMaXN0XCI+XHJcblx0XHRcdFx0XHRcdFx0PC9jaHVubGVpLXZpZGVvPlxyXG5cdFx0XHRcdFx0XHRcdDxjb3Zlci12aWV3IGNsYXNzPVwiY292ZXItdmlldy1sZWZ0XCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImxlZnQtdGV4dFwiPkB7e2l0ZW0uYXR9fTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwibGVmdC10ZXh0XCI+e3tpdGVtLmNvbnRlbnR9fTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJ0YWctYm94XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx0ZXh0IHYtZm9yPVwiYSBpbiBpdGVtLnRhZ1wiIGNsYXNzPVwidGFnXCI+e3thfX08L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8L2NvdmVyLXZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PGNvdmVyLXZpZXcgY2xhc3M9XCJjb3Zlci12aWV3LXJpZ2h0XCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8IS0tIOi/meS4quWKoOWPt+agueaNruaYr+WQpuWFs+azqOWtl+auteadpeaOp+WItuaYvuekuumakOiXjyAtLT5cclxuXHRcdFx0XHRcdFx0XHRcdDxjb3Zlci1pbWFnZSA6c3JjPVwiaXRlbS5hdmF0YXJcIiBjbGFzcz1cImF2YXRhciBpbWdcIiBAY2xpY2suc3RvcD1cInRhcEF2YXRhcigpXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2NvdmVyLWltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRleHQgdi1pZj1cIiFpdGVtLmF0dGVudGlvblwiIGNsYXNzPVwicmlnaHQtdGV4dC1hdmF0YXJcIj4rPC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJyaWdodC10ZXh0XCI+PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGNvdmVyLWltYWdlIDpzcmM9XCJpdGVtLmNoZWNrPycuLi8uLi9zdGF0aWMvYWl4aW5SZWQucG5nJzonLi4vLi4vc3RhdGljL2FpeGluLnBuZydcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzcz1cImltZ1wiIEBjbGljay5zdG9wPVwidGFwTG92ZSgpXCI+PC9jb3Zlci1pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwicmlnaHQtdGV4dFwiPnt7aXRlbS5saWtlfX08L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8IS0tIDxjb3Zlci1pbWFnZSBzcmM9XCIuLi8uLi9zdGF0aWMveGlhb3hpLnBuZ1wiIGNsYXNzPVwiaW1nXCIgQGNsaWNrLnN0b3A9XCJ0YXBNc2dcIj48L2NvdmVyLWltYWdlPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwicmlnaHQtdGV4dFwiPnt7aXRlbS5jb21tZW50fX08L3RleHQ+IC0tPlxyXG5cdFx0XHRcdFx0XHRcdFx0PCEtLSA8Y292ZXItaW1hZ2Ugc3JjPVwiLi4vLi4vc3RhdGljL3NoYXJlLWZpbGwucG5nXCIgY2xhc3M9XCJpbWdcIiBAY2xpY2suc3RvcD1cInRhcFNoYXJlXCI+PC9jb3Zlci1pbWFnZT5cclxuXHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInJpZ2h0LXRleHRcIj7liIbkuqs8L3RleHQ+IC0tPlxyXG5cdFx0XHRcdFx0XHRcdDwvY292ZXItdmlldz5cclxuXHJcblx0XHRcdFx0XHRcdDwvYmxvY2s+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0PC9ibG9jaz5cclxuXHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwibGVmdC1kaXZcIiA6c3R5bGU9XCJ7IGhlaWdodDogaGVpZ2h0LHdpZHRoOiB3aWR0aCxsZWZ0OmAkey1wYXJzZUludCh3aWR0aCl9cHhgIH1cIiByZWY9XCJsZWZ0XCJcclxuXHRcdFx0XHRAdG91Y2hzdGFydD1cIkxpc3RUb3VjaFN0YXJ0XCIgQHRvdWNobW92ZT1cIkxpc3RUb3VjaE1vdmVcIj5cclxuXHRcdFx0XHQ8dGV4dCBjbGFzcz1cInRpdGxlLXRleHRcIiBAY2xpY2s9XCJjbGlja2J0XCI+e3t2aWRlb0xpc3RbaW5kZXhdLmF0fX08L3RleHQ+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwicmlnaHQtZGl2XCIgOnN0eWxlPVwieyBoZWlnaHQ6IGhlaWdodCx3aWR0aDogd2lkdGgscmlnaHQ6YCR7LXBhcnNlSW50KHdpZHRoKX1weGAgfVwiIHJlZj1cInJpZ2h0XCJcclxuXHRcdFx0XHRAdG91Y2hzdGFydD1cIkxpc3RUb3VjaFN0YXJ0XCIgQHRvdWNobW92ZT1cIkxpc3RUb3VjaE1vdmVcIj5cclxuXHRcdFx0XHQ8dGV4dCBjbGFzcz1cInRpdGxlLXRleHRcIj57e3ZpZGVvTGlzdFtpbmRleF0uY29udGVudH19PC90ZXh0PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHQ8L2Rpdj5cclxuXHRcdDwhLS0g6aG26YOo5pCc57Si5qCPIC0tPlxyXG5cdFx0PGRpdiBjbGFzcz1cImNvdmVyLXZpZXctdG9wXCI+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJzZWFyY2gtYm94XCIgQGNsaWNrPVwidG9TZWFyY2hcIj5cclxuXHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJzZWFyY2gtaW1nXCIgc3JjPVwiLi4vLi4vc3RhdGljL2ltZy90aWt0b2svc2VhcmNoLnBuZ1wiIG1vZGU9XCJcIj48L2ltYWdlPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cclxuXHRcdDwhLS0g5bqV6YOodGFiIC0tPlxyXG5cdFx0PGRpdiBjbGFzcz1cImNvdmVyLXZpZXctYm90dG9tXCI+XHJcblx0XHRcdDxkaXYgc3R5bGU9XCJkaXNwbGF5OiBmbGV4O2p1c3RpZnktY29udGVudDogZmxleC1lbmQ7XCIgOnN0eWxlPVwieyBoZWlnaHQ6IGAke3N5c2hlaWdodH1weGAsd2lkdGg6IHdpZHRoIH1cIj5cclxuXHRcdFx0XHQ8ZGl2IHN0eWxlPVwid2lkdGg6IDc1MHJweDtcIiBjbGFzcz1cInRhYi1ib3hcIj5cclxuXHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRhYlwiPlxyXG5cdFx0XHRcdFx0XHQ8bmF2aWdhdG9yIG9wZW4tdHlwZT1cInN3aXRjaFRhYlwiIHVybD1cIi9wYWdlcy9pbmRleC9pbmRleFwiIGNsYXNzPVwidGFiLWJveFwiPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidGV4dFwiPummlumhtTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PC9uYXZpZ2F0b3I+XHJcblx0XHRcdFx0XHRcdDxuYXZpZ2F0b3Igb3Blbi10eXBlPVwic3dpdGNoVGFiXCIgdXJsPVwiL3BhZ2VzL2ZvbGxvdy9mb2xsb3dcIiBjbGFzcz1cInRhYi1ib3hcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInRleHRcIj7lhbPms6g8L3RleHQ+XHJcblx0XHRcdFx0XHRcdDwvbmF2aWdhdG9yPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInRhYi1ib3hcIiBAY2xpY2s9XCJhZGRTaG9vdCgpXCI+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxpbWFnZSBjbGFzcz1cImFkZC1pbWdcIiBzcmM9XCIuLi8uLi9zdGF0aWMvaW1nL3Rpa3Rvay9hZGQucG5nXCIgbW9kZT1cIlwiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDxuYXZpZ2F0b3Igb3Blbi10eXBlPVwic3dpdGNoVGFiXCIgdXJsPVwiL3BhZ2VzL25ld3MvbmV3c1wiIGNsYXNzPVwidGFiLWJveFwiPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidGV4dFwiPua2iOaBrzwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PC9uYXZpZ2F0b3I+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidGFiLWJveFwiIEBjbGljaz1cInRvV2hlcmUoJ21pbmUnKVwiPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidGV4dFwiPuaIkTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQ8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0LypcclxuXHRcdDAuIOWKoOS4quaPkOekuu+8jOW7uuiuruS4iuS8oOS4gOWIhumSn+inhumike+8m1xyXG5cdFx0MS4g5Zyo6aaW6aG16L+Y6KaB5Yik5pat5a2X5pWw6L+H6ZW/6KaB5aSa6KGM5bGV56S677yf6LWw6ams54Gv5bGV56S677ybXHJcblx0XHQyLiDmlrDlop7kuIDkuKrpn7PnrKbliqjnlLvvvJtcclxuXHRcdDMuIOWQjumAgOe8k+WtmOa4hemZpO+8jOeCueWHu+WKoOWPt+ebtOaOpeWFs+azqOeUqOaIt++8m1xyXG5cdFx0M2EuIOaSreaUvuW8gOWni+eahOS9jee9ru+8m1xyXG5cdCovXHJcblx0aW1wb3J0IHV0aWxzIGZyb20gJ0AvY29tbW9uL3V0aWxzLmpzJ1xyXG5cdGltcG9ydCBjaHVubGVpVmlkZW8gZnJvbSAnQC9jb21wb25lbnRzL2NodW5sZWktdmlkZW8vY2h1bmxlaS12aWRlbyc7XHJcblx0aW1wb3J0IHNjcm9sbE1peGlucyBmcm9tICcuL3Njcm9sbE1peGlucyc7XHJcblx0Y29uc3QgQmluZGluZ1ggPSB1bmkucmVxdWlyZU5hdGl2ZVBsdWdpbignYmluZGluZ3gnKTtcclxuXHRjb25zdCBhbmltYXRpb24gPSB3ZWV4LnJlcXVpcmVNb2R1bGUoJ2FuaW1hdGlvbicpO1xyXG5cdGNvbnN0IG1vZGFsID0gd2VleC5yZXF1aXJlTW9kdWxlKCdtb2RhbCcpO1xyXG5cdGltcG9ydCB7XHJcblx0XHRnZXRWaWRlb3MsXHJcblx0XHRhZGRPckRlbGV0ZUxpa2VWaWRlbywgLy8g5reu55+/5oqW6Z+z5re75Yqg56e76Zmk5pS26JeP5o6l5Y+jXHJcblx0XHRoYWRTZWVuLCAvLyDmt67nn7/mipbpn7PnlKjmiLforrDlvZXlt7LliLfop4bpopHmjqXlj6NcclxuXHR9IGZyb20gJ0AvY29tbW9uL2FwaS5qcyc7IC8v5byV5YWl6ZyA6KaB55qEYXBpIFxyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdG1peGluczogW3Njcm9sbE1peGluc10sXHJcblx0XHRjb21wb25lbnRzOiB7XHJcblx0XHRcdGNodW5sZWlWaWRlb1xyXG5cdFx0fSxcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0aXNTaG93VmlkZW9zOiBmYWxzZSwgLy8g5o6n5Yi25bGV56S66aaW6aG15YaF5a65XHJcblx0XHRcdFx0dGVtcFZpZGVvTGlzdDogW10sXHJcblx0XHRcdFx0ZGFubXVMaXN0OiBbXHJcblx0XHRcdFx0XHQvLyBcdHtcclxuXHRcdFx0XHRcdC8vIFx0dGV4dDogJ+WPkeadoeW8ueW5lTAnLFxyXG5cdFx0XHRcdFx0Ly8gXHRjb2xvcjogJyNmZmYnLFxyXG5cdFx0XHRcdFx0Ly8gXHR0aW1lOiAyLFxyXG5cdFx0XHRcdFx0Ly8gXHRhdmF0YXI6ICcuLi8uLi9zdGF0aWMvYXZhdGFyLnBuZydcclxuXHRcdFx0XHRcdC8vIH0sXHJcblx0XHRcdFx0XSxcclxuXHRcdFx0XHR2aWRlb0xpc3Q6IFtcclxuXHRcdFx0XHRcdC8vIFx0e1xyXG5cdFx0XHRcdFx0Ly8gXHRzcmM6ICdodHRwOi8vYmFvYmFiLmthaXlhbmFwcC5jb20vYXBpL3YxL3BsYXlVcmw/dmlkPTEyOTc2NCZyZXNvdXJjZVR5cGU9dmlkZW8mZWRpdGlvblR5cGU9ZGVmYXVsdCZzb3VyY2U9YWxpeXVuJnBsYXlVcmxUeXBlPXVybF9vc3MnLFxyXG5cdFx0XHRcdFx0Ly8gXHRjb250ZW50OiAn5bm/5ZGK5pyJ5Y+N6L2s77ya5Y2x5py65oSf5Y2B6Laz77yB5LiA6L6G6L2m6YO95q+U5L2g6Z2g6LCxJyxcclxuXHRcdFx0XHRcdC8vIFx0ZmxhZzogZmFsc2UsXHJcblx0XHRcdFx0XHQvLyBcdGNoZWNrOiB0cnVlLFxyXG5cdFx0XHRcdFx0Ly8gXHRsaWtlOiAnN3cnLFxyXG5cdFx0XHRcdFx0Ly8gXHRjb21tZW50OiAnMTA0NScsXHJcblx0XHRcdFx0XHQvLyBcdGF2YXRhcjogJ2h0dHA6Ly9pbWcua2FpeWFuYXBwLmNvbS9lNDRlZDVmY2ZhNDI0YmEzNTc2MWNlNWYxMzM5YmMxNi5qcGVnP2ltYWdlTW9ncjIvcXVhbGl0eS82MC9mb3JtYXQvanBnJyxcclxuXHRcdFx0XHRcdC8vIFx0aW5pdGlhbFRpbWU6IDAsXHJcblx0XHRcdFx0XHQvLyBcdGF0OiAn5qyn576O5bm/5ZGK57K+6YCJJyxcclxuXHRcdFx0XHRcdC8vIFx0ZHVyYXRpb246IDE0OVxyXG5cdFx0XHRcdFx0Ly8gfSwge1xyXG5cdFx0XHRcdFx0Ly8gXHRzcmM6ICdodHRwOi8vYmFvYmFiLmthaXlhbmFwcC5jb20vYXBpL3YxL3BsYXlVcmw/dmlkPTE2NDAxNSZyZXNvdXJjZVR5cGU9dmlkZW8mZWRpdGlvblR5cGU9ZGVmYXVsdCZzb3VyY2U9YWxpeXVuJnBsYXlVcmxUeXBlPXVybF9vc3MnLFxyXG5cdFx0XHRcdFx0Ly8gXHRjb250ZW50OiAn5Li65LuA5LmI6KaB6YCJ5oupdW5pLWFwcO+8nycsXHJcblx0XHRcdFx0XHQvLyBcdGZsYWc6IHRydWUsXHJcblx0XHRcdFx0XHQvLyBcdGNoZWNrOiB0cnVlLFxyXG5cdFx0XHRcdFx0Ly8gXHRsaWtlOiAnMTB3JyxcclxuXHRcdFx0XHRcdC8vIFx0Y29tbWVudDogJzEwNDUnLFxyXG5cdFx0XHRcdFx0Ly8gXHRhdmF0YXI6ICcuLi8uLi9zdGF0aWMvbG9nby5wbmcnLFxyXG5cdFx0XHRcdFx0Ly8gXHRpbml0aWFsVGltZTogMjAsXHJcblx0XHRcdFx0XHQvLyBcdGF0OiAnRGNsb3VkJyxcclxuXHRcdFx0XHRcdC8vIFx0ZHVyYXRpb246IDg0MSxcclxuXHRcdFx0XHRcdC8vIFx0b2JqZWN0Rml0OiAnZmlsbCdcclxuXHRcdFx0XHRcdC8vIH0sXHJcblx0XHRcdFx0XSxcclxuXHRcdFx0XHRvbGRJbmRleDogbnVsbCxcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdC8vIOWFiOaRuOa4healmuaSreaUvumAu+i+ke+8jOeEtuWQjuW8leWFpeaOpeWPo1xyXG5cdFx0Y3JlYXRlZCgpIHtcclxuXHRcdFx0dGhpcy5pbml0KClcclxuXHRcdFx0Ly/pmpDol49zdWJudnVlXHJcblx0XHRcdHVuaS5nZXRTdWJOVnVlQnlJZCgnY29tbWVudCcpLmhpZGUoKVxyXG5cdFx0XHR1bmkuZ2V0U3ViTlZ1ZUJ5SWQoJ2lucHV0LWJveCcpLmhpZGUoKVxyXG5cdFx0fSxcclxuXHJcblx0XHRhc3luYyBtb3VudGVkKCkge1xyXG5cdFx0XHR1bmkuc2hvd0xvYWRpbmcoe30pO1xyXG5cdFx0XHRjb25zb2xlLmxvZygn6Kem5Y+R5LiA5qyhJyk7XHJcblx0XHRcdC8vdGhpcy52aWRlb1BsYXkodGhpcy5pbmRleClcclxuXHRcdFx0YXdhaXQgdGhpcy5wdXNoVmlkZW9MaXN0KDEpLnRoZW4ocmVzID0+IHtcclxuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMuaXNTaG93VmlkZW9zID0gdHJ1ZTtcclxuXHRcdFx0XHRcdHVuaS5oaWRlTG9hZGluZygpO1xyXG5cdFx0XHRcdH0sIDEwMDApO1xyXG5cdFx0XHR9KVxyXG5cdFx0XHR0aGlzLiRuZXh0VGljaygoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy52aWRlb1BsYXkodGhpcy5pbmRleClcclxuXHRcdFx0fSlcclxuXHRcdH0sXHJcblx0XHRvblNob3coKSB7XHJcblx0XHRcdHRoaXMudmlkZW9QbGF5KHRoaXMuaW5kZXgpXHJcblx0XHRcdC8vIHVuaS5nZXRTdWJOVnVlQnlJZCgndGFiU3ViTnZ1ZScpLnNob3coJ25vbmUnLCAwLCAoKSA9PiB7fSk7XHJcblx0XHR9LFxyXG5cdFx0b25IaWRlKCkge1xyXG5cdFx0XHRmb3IgKGxldCBpdGVtIG9mIHRoaXMudmlkZW9MaXN0KSB7XHJcblx0XHRcdFx0aXRlbS5mbGFnID0gZmFsc2VcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0Ly8g57uE5Lu2ZW1pdOinpuWPkeeItue7hOS7tuS6i+S7tlxyXG5cdFx0XHRwbGF5RXZlbnQoKSB7XHJcblx0XHRcdFx0Ly8gcmV0dXJuO1xyXG5cdFx0XHRcdC8vIOeUqOaIt+W/q+mAn+a7keWKqOinhumikeaXtu+8jOWPr+iDveinhumikeacquaSreaUvuaXtuWwsea7kei/h+WOu+S6hu+8jOWvvOiHtOayoeacieinpuWPkeW3suafpeeci+aOpeWPo++8m1xyXG5cdFx0XHRcdGlmICh0aGlzLm9sZEluZGV4ICE9PSB0aGlzLmluZGV4KSB7XHJcblx0XHRcdFx0XHR0aGlzLm9sZEluZGV4ID0gdGhpcy5pbmRleDtcclxuXHRcdFx0XHRcdGhhZFNlZW4oe1xyXG5cdFx0XHRcdFx0XHR6ajogdGhpcy52aWRlb0xpc3RbdGhpcy5pbmRleF0uempcclxuXHRcdFx0XHRcdH0pLnRoZW4ocmVzID0+IHtcclxuXHRcdFx0XHRcdFx0aWYgKHJlcy5mbGFnID09PSAxKSB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ+W9k+WJjeW3sumYheivu+inhumikXpqOicgKyB0aGlzLnZpZGVvTGlzdFt0aGlzLmluZGV4XS56aik7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pLmNhdGNoKGVyciA9PiB7XHJcblx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdHRpdGxlOiBg5byC5bi477yM6K+356iN5ZCO6YeN6K+VYCxcclxuXHRcdFx0XHRcdFx0XHRpY29uOiAnbm9uZSdcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0Y2xpY2tidCgpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZygxMSlcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly/orr7nva7lj4LmlbBcclxuXHRcdFx0aW5pdCgpIHtcclxuXHRcdFx0XHR0aGlzLnR5cGVYID0gZmFsc2UgLy/lvIDlkK/lt6blj7Pmu5HliqhcclxuXHRcdFx0XHR0aGlzLnBsYXlDb3VudCA9IDIgLy/liankvZnlpJrlsJHop4bpopHliqDovb3op4bpopHliJfooahcclxuXHRcdFx0XHR0aGlzLnN0YXJ0RGlzdGFuY2UgPSA1IC8v5Yik5pat5bem5Y+z5LiK5LiL5ouW5Yqo55qE5ZCv5Yqo6Led56a7IHB4XHJcblx0XHRcdFx0dGhpcy5taW5UaW1lID0gMzAwIC8v5Yik5pat5b+r6YCf5ruR5Yqo55qE5pe26Ze0LOivpeaXtumXtOWGheaXoOinhuWbnuW8uei3neemu+WIpOaWrVxyXG5cdFx0XHRcdHRoaXMuYmFja0Rpc3RhbmNlID0gMjAwIC8v5Yik5patdGVtcFZpZGVvTGlzdFswXS5zcmM75LiK5LiL5ruR5Yqo55qE5Zue5by56Led56a7IHB4XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHQvLyDlsIbop4bpopHnmoTlsLrlr7jojrflj5blubbkvKDpgJLvvJs/XHJcblx0XHRcdHB1c2hWaWRlb0xpc3QobnVtKSB7XHJcblx0XHRcdFx0bGV0IHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblx0XHRcdFx0XHRnZXRWaWRlb3Moe1xyXG5cdFx0XHRcdFx0XHRjczogbnVtXHJcblx0XHRcdFx0XHR9KS50aGVuKHJlcyA9PiB7XHJcblx0XHRcdFx0XHRcdGxldCB0ZW1wVmlkZW9MaXN0ID0gW107XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJlcy5kYXRhcykpO1xyXG5cdFx0XHRcdFx0XHRmb3IgKGxldCBpdGVtIG9mIHJlcy5kYXRhcykge1xyXG5cdFx0XHRcdFx0XHRcdGxldCB0ZW1wID0ge307XHJcblx0XHRcdFx0XHRcdFx0dGVtcC56aiA9IGl0ZW0uemo7XHJcblx0XHRcdFx0XHRcdFx0dGVtcC51c2VySWQgPSBpdGVtLnloZ2g7XHJcblx0XHRcdFx0XHRcdFx0dGVtcC5zcmMgPSB1dGlscy5kZWFsSW50ZXJuZXRVcmwoaXRlbS5TUERaLCAnJywgdGhpcy4kc3RvcmUuc3RhdGUudXNlckluZm9cclxuXHRcdFx0XHRcdFx0XHRcdC51c2VySWQpO1xyXG5cdFx0XHRcdFx0XHRcdC8vIGBodHRwOi8vd3d3LmhiY29hbC5jbjo4OTk5L2RvY3VtZW50L2NoZWNrP2ZpbGVJZD0ke2l0ZW0uU1BEWn0mdXNlcklkPSR7dGhpcy4kc3RvcmUuc3RhdGUudXNlckluZm8udXNlcklkfSZhdHRuYW1lPWA7XHJcblx0XHRcdFx0XHRcdFx0dGVtcC5jb250ZW50ID0gaXRlbS5zcGpqO1xyXG5cdFx0XHRcdFx0XHRcdHRlbXAudGFnID0gaXRlbS5zcGJxO1xyXG5cdFx0XHRcdFx0XHRcdHRlbXAubGlrZSA9IGl0ZW0uc3BkenM7XHJcblx0XHRcdFx0XHRcdFx0dGVtcC5hdHRlbnRpb24gPSBpdGVtLlNGR1pZSCA9PT0gMCA/IGZhbHNlIDogdHJ1ZTtcclxuXHRcdFx0XHRcdFx0XHR0ZW1wLmF0ID0gaXRlbS55aHhtO1xyXG5cdFx0XHRcdFx0XHRcdHRlbXAuY2hlY2sgPSBpdGVtLlNGU0NTUCA9PT0gMCA/IGZhbHNlIDogdHJ1ZTtcclxuXHRcdFx0XHRcdFx0XHR0ZW1wLmZsYWcgPSBmYWxzZTtcclxuXHRcdFx0XHRcdFx0XHR0ZW1wLmNvbW1lbnQgPSAnMCc7XHJcblx0XHRcdFx0XHRcdFx0dGVtcC5hdmF0YXIgPSB1dGlscy5kZWFsSW50ZXJuZXRVcmwoaXRlbS5UWERaLCAnJywgdGhpcy4kc3RvcmUuc3RhdGUudXNlckluZm9cclxuXHRcdFx0XHRcdFx0XHRcdC51c2VySWQpO1xyXG5cdFx0XHRcdFx0XHRcdHRlbXAuaW5pdGlhbFRpbWUgPSAyMDtcclxuXHRcdFx0XHRcdFx0XHR0ZW1wLmR1cmF0aW9uID0gNjA7XHJcblx0XHRcdFx0XHRcdFx0dGVtcC5vYmplY3RGaXQgPSAnZmlsbCc7XHJcblx0XHRcdFx0XHRcdFx0Ly8g6YeH55SodXRpbHPnmoTmlrnms5XvvIzmi7zmjqXlpLTlg4/lnLDlnYDlkozop4bpopHlnLDlnYBcclxuXHRcdFx0XHRcdFx0XHQvLyDnhLblkI7lho3miZPkuKrljIVcclxuXHRcdFx0XHRcdFx0XHR0ZW1wVmlkZW9MaXN0LnB1c2godGVtcCk7XHJcblx0XHRcdFx0XHRcdFx0Ly8g6L+Z6YeM5piv5Yik5patc3Jj5Li656m6IOWImei1i+WAvO+8jOeEtuWQjuWGjeWinuWKoOS4gOS4quepuuWAvFxyXG5cdFx0XHRcdFx0XHRcdHRoaXMudmlkZW9MaXN0LnB1c2goe1xyXG5cdFx0XHRcdFx0XHRcdFx0c3JjOiAn6aKE572u56m65YC8JyxcclxuXHRcdFx0XHRcdFx0XHRcdHpqOiAnJyxcclxuXHRcdFx0XHRcdFx0XHRcdHVzZXJJZDogJycsXHJcblx0XHRcdFx0XHRcdFx0XHRjb250ZW50OiAnJyxcclxuXHRcdFx0XHRcdFx0XHRcdHRhZzogJycsXHJcblx0XHRcdFx0XHRcdFx0XHRmbGFnOiBmYWxzZSxcclxuXHRcdFx0XHRcdFx0XHRcdGNoZWNrOiBmYWxzZSxcclxuXHRcdFx0XHRcdFx0XHRcdGxpa2U6ICcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0YXR0ZW50aW9uOiAnJyxcclxuXHRcdFx0XHRcdFx0XHRcdGNvbW1lbnQ6ICcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0YXZhdGFyOiAnJyxcclxuXHRcdFx0XHRcdFx0XHRcdGluaXRpYWxUaW1lOiAwLFxyXG5cdFx0XHRcdFx0XHRcdFx0YXQ6ICcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IDYwXHJcblx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0Ly8g5YWIcHVzaOebuOWvueW6lOeahOaVsOebrueahOWvueixoe+8jOeEtuWQjuW7tui/n+aJp+ihjDFzICDljp/lm6DvvJrnm7TmjqV0aGlzLnZpZGVvTGlzdC5wdXNoKHRlbXAp5Lya5a+86Ie06KeG6aKR5pKt5pS+5byC5bi4XHJcblx0XHRcdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuaXNTaG93ID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0XHRmb3IgKGxldCBzIG9mIHRoaXMudmlkZW9MaXN0KSB7XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAocy5zcmMgPT09ICfpooTnva7nqbrlgLwnKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGlmICh0ZW1wVmlkZW9MaXN0WzBdKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8g6LWL5YC856ys5LiA5Liq77yM54S25ZCO5Yig6Zmk56ys5LiA5LiqIOeEtuWQjuW+queOr+i1i+WAvOS4i+S4gOS4quesrOS4gOS4qlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHMuc3JjID0gdGVtcFZpZGVvTGlzdFswXS5zcmM7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cy56aiA9IHRlbXBWaWRlb0xpc3RbMF0uemo7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cy51c2VySWQgPSB0ZW1wVmlkZW9MaXN0WzBdLnVzZXJJZDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzLmNvbnRlbnQgPSB0ZW1wVmlkZW9MaXN0WzBdLmNvbnRlbnQ7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cy50YWcgPSB0ZW1wVmlkZW9MaXN0WzBdLnRhZy5zcGxpdCgnLCcpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHMubGlrZSA9IHRlbXBWaWRlb0xpc3RbMF0ubGlrZTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzLmF0dGVudGlvbiA9IHRlbXBWaWRlb0xpc3RbMF0uYXR0ZW50aW9uO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHMuY2hlY2sgPSB0ZW1wVmlkZW9MaXN0WzBdLmNoZWNrO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHMuYXQgPSB0ZW1wVmlkZW9MaXN0WzBdLmF0O1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHMuYXZhdGFyID0gdGVtcFZpZGVvTGlzdFswXS5hdmF0YXI7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGVtcFZpZGVvTGlzdC5zaGlmdCgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMudmlkZW9MaXN0KSk7XHJcblx0XHRcdFx0XHRcdH0sIDg4OCk7XHJcblx0XHRcdFx0XHRcdHJlc29sdmUoKVxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHRyZXR1cm4gcHJvbWlzZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHR0YXBMb3ZlKGUpIHtcclxuXHRcdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdFx0XHRcdGlmICh0aGlzLmRpc3RhbmNlWCAhPSAwKSByZXR1cm5cclxuXHRcdFx0XHR0aGlzLnZpZGVvTGlzdFt0aGlzLmluZGV4XS5jaGVjayA9ICF0aGlzLnZpZGVvTGlzdFt0aGlzLmluZGV4XS5jaGVja1xyXG5cdFx0XHRcdHRoaXMudmlkZW9MaXN0ID0gWy4uLnRoaXMudmlkZW9MaXN0XVxyXG5cdFx0XHRcdHVuaS52aWJyYXRlU2hvcnQoe1xyXG5cdFx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdzdWNjZXNzJyk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy52aWRlb0xpc3RbdGhpcy5pbmRleF0pKTtcclxuXHRcdFx0XHRsZXQgdGVtcFR5cGUgPSAnJztcclxuXHRcdFx0XHRpZiAoIXRoaXMudmlkZW9MaXN0W3RoaXMuaW5kZXhdLmNoZWNrKSB7XHJcblx0XHRcdFx0XHR0ZW1wVHlwZSA9ICdkZWxldGUnO1xyXG5cdFx0XHRcdFx0dGhpcy52aWRlb0xpc3RbdGhpcy5pbmRleF0ubGlrZS0tO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR0aGlzLnZpZGVvTGlzdFt0aGlzLmluZGV4XS5saWtlKys7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGFkZE9yRGVsZXRlTGlrZVZpZGVvKHtcclxuXHRcdFx0XHRcdHpqOiB0aGlzLnZpZGVvTGlzdFt0aGlzLmluZGV4XS56aixcclxuXHRcdFx0XHRcdHR5cGU6IHRlbXBUeXBlXHJcblx0XHRcdFx0fSkudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzKSk7XHJcblx0XHRcdFx0fSkuY2F0Y2goZXJyID0+IHtcclxuXHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHR0aXRsZTogYOW8guW4uO+8jOivt+eojeWQjumHjeivlWAsXHJcblx0XHRcdFx0XHRcdGljb246ICdub25lJ1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0dGFwQXZhdGFyKGUpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLnZpZGVvTGlzdFt0aGlzLmluZGV4XSkpO1xyXG5cdFx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0XHRcdFx0aWYgKHRoaXMuZGlzdGFuY2VYICE9IDApIHJldHVyblxyXG5cdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHRcdHVybDogYC9wYWdlcy90aWt0b2svb3RoZXJzP2F0dGVudGlvbj0ke3RoaXMudmlkZW9MaXN0W3RoaXMuaW5kZXhdLmF0dGVudGlvbn0mdXNlcklkPSR7dGhpcy52aWRlb0xpc3RbdGhpcy5pbmRleF0udXNlcklkfSZhdmF0YXI9JHtlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkodGhpcy52aWRlb0xpc3RbdGhpcy5pbmRleF0uYXZhdGFyKSl9YFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHR0YXBNc2coZSkge1xyXG5cdFx0XHRcdC8vIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0XHRcdFx0Ly8gaWYgKHRoaXMuZGlzdGFuY2VYICE9IDApIHJldHVyblxyXG5cdFx0XHRcdC8vIHVuaS5nZXRTdWJOVnVlQnlJZCgnY29tbWVudCcpLnNob3coJ25vbmUnLCAwLCAoKSA9PiB7XHJcblx0XHRcdFx0Ly8gXHR1bmkuJGVtaXQoJ3Nob3dDb21tZW50JywgdGhpcy52aWRlb0xpc3RbdGhpcy5pbmRleF0uY29udGVudClcclxuXHRcdFx0XHQvLyB9KTtcclxuXHRcdFx0fSxcclxuXHRcdFx0dGFwU2hhcmUoZSkge1xyXG5cdFx0XHRcdC8vIOiOt+WPlmluZGV477yM5aaC5L2V6Kem5Y+R5bey57uP5Yi35LqG55qE5LqL5Lu277ybXHJcblx0XHRcdFx0Ly8g5q+P5qyh6YO95Lya6Kem5Y+R5pqC5YGc5LqL5Lu277yM5Zyo6L+Z6K+l5pe25py65Y675Yip55So5b2T5YmNaW5kZXgg54S25ZCO5Y+W6KeG6aKR566A5LuL77yM5omT5Y2w55yL5LiA5LiL5piv5LiN5piv5b2T5YmN6KeG6aKR77yM54S25ZCO5YaN5omT5Y2w5Li76ZSu77yM54S25ZCO6LCD55So5o6l5Y+jXHJcblx0XHRcdFx0Ly8g5aaC5L2V6Zi75q2i5aSa5qyh6LCD55So77yM5b2TaW5kZXjlj5jljJbkuYvlkI4g5YaN5YWB6K6457un57ut6LCD55SoXHJcblx0XHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHRcdFx0XHRpZiAodGhpcy5kaXN0YW5jZVggIT0gMCkgcmV0dXJuXHJcblx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRpY29uOiAnbm9uZScsXHJcblx0XHRcdFx0XHR0aXRsZTogYOWIhuS6q+e0ouW8leS4uiR7dGhpcy5pbmRleH3nmoTop4bpopFgXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0dG9XaGVyZSh3aGVyZSkge1xyXG5cdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHRcdHVybDogYC9wYWdlcy90aWt0b2svJHt3aGVyZX1gXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdHRvU2VhcmNoKCkge1xyXG5cdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHRcdHVybDogYC9wYWdlcy90aWt0b2svc2VhcmNoYFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDmt7vliqDpmo/mi41cclxuXHRcdFx0YWRkU2hvb3QoKSB7XHJcblx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0dXJsOiBgL3BhZ2VzL3Rpa3Rvay9hZGRTaG9vdD9zb3VyY2VUeXBlPWNhbWVyYWBcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdC8vIHZhciBzZWxmID0gdGhpcztcclxuXHRcdFx0XHQvLyB1bmkuY2hvb3NlVmlkZW8oe1xyXG5cdFx0XHRcdC8vIFx0Y291bnQ6IDEsXHJcblx0XHRcdFx0Ly8gXHRzb3VyY2VUeXBlOiBbJ2NhbWVyYSddLFxyXG5cdFx0XHRcdC8vIFx0Ly8gc291cmNlVHlwZTogWydjYW1lcmEnLCAnYWxidW0nXSxcclxuXHRcdFx0XHQvLyBcdGNvbXByZXNzZWQ6IHRydWUsXHJcblx0XHRcdFx0Ly8gXHRzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuXHRcdFx0XHQvLyBcdFx0Ly8gc2VsZi5zcmMgPSByZXMudGVtcEZpbGVQYXRoO1xyXG5cdFx0XHRcdC8vIFx0XHRjb25zb2xlLmxvZyhyZXMudGVtcEZpbGVQYXRoKTtcclxuXHRcdFx0XHQvLyBcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdC8vIFx0XHRcdHVybDogYC9wYWdlcy90aWt0b2svYWRkU2hvb3Q/dGVtcEZpbGVQYXRoPSR7cmVzLnRlbXBGaWxlUGF0aH1gXHJcblx0XHRcdFx0Ly8gXHRcdH0pXHJcblx0XHRcdFx0Ly8gXHR9LFxyXG5cdFx0XHRcdC8vIFx0ZmFpbDogZnVuY3Rpb24ocmVzKSB7XHJcblx0XHRcdFx0Ly8gXHRcdGNvbnNvbGUubG9nKCdlcnJvcumAieaLqeinhumikT09PT09PT09PScgKyBKU09OLnN0cmluZ2lmeShyZXMpKTtcclxuXHRcdFx0XHQvLyBcdH1cclxuXHRcdFx0XHQvLyB9KTtcclxuXHJcblx0XHRcdH0sXHJcblx0XHR9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cclxuXHQucGFnZSB7XHJcblx0XHRmbGV4OiAxO1xyXG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcblx0fVxyXG5cclxuXHQuc3dpcGVyIHtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcblx0fVxyXG5cclxuXHQubGVmdC1kaXYge1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0dG9wOiAwO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0LnJpZ2h0LWRpdiB7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHR0b3A6IDA7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHQudGl0bGUtdGV4dCB7XHJcblx0XHRmb250LXNpemU6IDE2cHg7XHJcblx0XHRjb2xvcjogIzMzMzMzMztcclxuXHR9XHJcblxyXG5cdC52aWRlby1ib3gge1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuXHR9XHJcblxyXG5cdC5jb3Zlci12aWV3LWNlbnRlciB7XHJcblxyXG5cdFx0cG9zaXRpb246IGZpeGVkO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuXHRcdHotaW5kZXg6IDk5OTtcclxuXHR9XHJcblxyXG5cdC5jb3Zlci12aWV3LWJvdHRvbSB7XHJcblx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHQvLyB3aWR0aDogNzUwcnB4O1xyXG5cdFx0Ly8gaGVpZ2h0OiAxMDAwcHg7XHJcblx0XHQvLyBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRcdHotaW5kZXg6IDk5OTtcclxuXHR9XHJcblxyXG5cdC50YWItYm94IHtcclxuXHRcdC8vIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuXHR9XHJcblxyXG5cdC50YWIge1xyXG5cdFx0aGVpZ2h0OiA1MHB4O1xyXG5cdFx0d2lkdGg6IDc1MHJweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0fVxyXG5cclxuXHQudGV4dCB7XHJcblx0XHRjb2xvcjogI2ZmZmZmZjtcclxuXHR9XHJcblxyXG5cdC50YWItYm94IHtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdHdpZHRoOiAxNTBycHg7XHJcblx0XHRjb2xvcjogI2ZmZmZmZjtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdGhlaWdodDogNTBweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG5cdFx0Zm9udC1zaXplOiAyMHB4XHJcblx0fVxyXG5cclxuXHQuYWRkLWltZyB7XHJcblx0XHR3aWR0aDogNTBycHg7XHJcblx0XHRoZWlnaHQ6IDUwcnB4O1xyXG5cdH1cclxuXHJcblx0LmNvdmVyLXZpZXctbGVmdCB7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRtYXJnaW4tbGVmdDogMTB1cHg7XHJcblx0XHR3aWR0aDogNTAwdXB4O1xyXG5cdFx0Ym90dG9tOiAyMDB1cHg7XHJcblx0XHR6LWluZGV4OiA5OTk5O1xyXG5cdFx0Zm9udC1zaXplOiAxNnB4O1xyXG5cdFx0Y29sb3I6ICNGRkZGRkY7XHJcblx0fVxyXG5cclxuXHQubGVmdC10ZXh0IHtcclxuXHRcdGZvbnQtc2l6ZTogMTZweDtcclxuXHRcdGNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMjB1cHg7XHJcblx0fVxyXG5cclxuXHQudGFnLWJveCB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRcdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuXHR9XHJcblxyXG5cdC50YWcge1xyXG5cdFx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdFx0Y29sb3I6ICNFRkVGRUY7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDhweDtcclxuXHRcdHBhZGRpbmc6IDJweCA4cHg7XHJcblx0fVxyXG5cclxuXHQuYXZhdGFyIHtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDUwdXB4O1xyXG5cdFx0Ym9yZGVyLWNvbG9yOiAjZmZmO1xyXG5cdFx0Ym9yZGVyLXN0eWxlOiBzb2xpZDtcclxuXHRcdGJvcmRlci13aWR0aDogMnB4O1xyXG5cdH1cclxuXHJcblx0LmNvdmVyLXZpZXctcmlnaHQge1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0dG9wOiA0MDB1cHg7XHJcblx0XHRyaWdodDogMjB1cHg7XHJcblx0XHR6LWluZGV4OiA5OTk5O1xyXG5cdH1cclxuXHJcblx0LnJpZ2h0LXRleHQtYXZhdGFyIHtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHRcdHRvcDogODB1cHg7XHJcblx0XHRsZWZ0OiAzMHVweDtcclxuXHRcdGhlaWdodDogNDB1cHg7XHJcblx0XHR3aWR0aDogNDB1cHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjREQ1MjREO1xyXG5cdFx0Y29sb3I6ICNGRkZGRkY7XHJcblx0XHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRsaW5lLWhlaWdodDogNDB1cHg7XHJcblx0XHR6LWluZGV4OiA5OTk7XHJcblx0fVxyXG5cclxuXHQuYXZhdGFyLWljb24ge1xyXG5cdFx0aGVpZ2h0OiA0MHVweDtcclxuXHRcdHdpZHRoOiA0MHVweDtcclxuXHJcblx0XHRjb2xvcjogI2ZmZjtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNERDUyNEQ7XHJcblx0XHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRsZWZ0OiAzMHVweDtcclxuXHRcdHRvcDogLTIwdXB4O1xyXG5cdH1cclxuXHJcblx0LnJpZ2h0LXRleHQge1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdFx0Y29sb3I6ICNGRkZGRkY7XHJcblx0XHRtYXJnaW4tYm90dG9tOiA1MHVweDtcclxuXHRcdGhlaWdodDogMjBweDtcclxuXHR9XHJcblxyXG5cdC5pbWcge1xyXG5cdFx0aGVpZ2h0OiAxMDB1cHg7XHJcblx0XHR3aWR0aDogMTAwdXB4O1xyXG5cdFx0b3BhY2l0eTogMC45O1xyXG5cdH1cclxuXHJcblx0LmNvdmVyLXZpZXctdG9wIHtcclxuXHRcdHdpZHRoOiA3NTBycHg7XHJcblx0XHRoZWlnaHQ6IDgwcHg7XHJcblx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHR6LWluZGV4OiA5OTk7XHJcblx0fVxyXG5cclxuXHQuc2VhcmNoLWJveCB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcblx0XHR3aWR0aDogNzUwcnB4O1xyXG5cdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdH1cclxuXHJcblx0LnNlYXJjaC1pbWcge1xyXG5cdFx0d2lkdGg6IDI4cHg7XHJcblx0XHRoZWlnaHQ6IDI4cHg7XHJcblx0XHRtYXJnaW4tcmlnaHQ6IDQwcnB4O1xyXG5cdH1cclxuPC9zdHlsZT5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///40\n");

/***/ }),
/* 41 */
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = requireNativePlugin;function requireNativePlugin(name) {
  return weex.requireModule(name);
}

/***/ }),
/* 42 */
/*!*********************************************************************************!*\
  !*** /Users/wangjunhao/Documents/HBuilderProjects/uni-app-demo/common/utils.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {var _store = _interopRequireDefault(__webpack_require__(/*! ../store */ 43));\nvar _api = __webpack_require__(/*! @/common/api.js */ 46);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _createForOfIteratorHelper(o, allowArrayLike) {var it;if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) {if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") {if (it) o = it;var i = 0;var F = function F() {};return { s: F, n: function n() {if (i >= o.length) return { done: true };return { done: false, value: o[i++] };}, e: function e(_e) {throw _e;}, f: F };}throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");}var normalCompletion = true,didErr = false,err;return { s: function s() {it = o[Symbol.iterator]();}, n: function n() {var step = it.next();normalCompletion = step.done;return step;}, e: function e(_e2) {didErr = true;err = _e2;}, f: function f() {try {if (!normalCompletion && it.return != null) it.return();} finally {if (didErr) throw err;}} };}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === \"Object\" && o.constructor) n = o.constructor.name;if (n === \"Map\" || n === \"Set\") return Array.from(o);if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}\n\n\n//引入需要的api \nvar utils = {\n  setLocalStorage: function setLocalStorage(key, value) {\n    return new Promise(function (resolve, reject) {\n      try {\n        if (Object.prototype.toString.call(value) === '[object Object]') {\n          value = JSON.stringify(value);\n        }\n        uni.setStorage({\n          key: key,\n          data: value,\n          success: function success() {\n            resolve(200);\n          },\n          fail: function fail() {\n            reject(-1);\n          } });\n\n      } catch (e) {\n        reject(e);\n      }\n\n    });\n  },\n  getLocalStorage: function getLocalStorage(key) {\n    return new Promise(function (resolve, reject) {\n      uni.getStorage({\n        key: key,\n        success: function success(res) {\n          resolve(res.data);\n        },\n        fail: function fail() {\n          reject(-1);\n        } });\n\n    });\n  },\n  // 处理树形结构\n  translateDataToTree: function translateDataToTree(data) {\n    var start = new Date().getTime();\n    // 先处理name为label字段；因为插件使用的是label展示\n    var _iterator = _createForOfIteratorHelper(data),_step;try {for (_iterator.s(); !(_step = _iterator.n()).done;) {var s = _step.value;\n        s.label = s.name;\n      }\n      // 先筛选顶级层级父级, 如果一个parentid 在所有里面的id都取不到 则为顶级父级\n    } catch (err) {_iterator.e(err);} finally {_iterator.f();}var parents = [];var _iterator2 = _createForOfIteratorHelper(\n    data),_step2;try {for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {var a = _step2.value;\n        var temp = a.parentid;\n        var isTopNode = true;var _iterator3 = _createForOfIteratorHelper(\n        data),_step3;try {for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {var b = _step3.value;\n            if (temp === b.id) {\n              isTopNode = false;\n            }\n          }} catch (err) {_iterator3.e(err);} finally {_iterator3.f();}\n        if (isTopNode) {\n          parents.push(a);\n        }\n      }\n      // let parents = data.filter(value => value.parentid == 'undefined' || value.parentid == null)\n    } catch (err) {_iterator2.e(err);} finally {_iterator2.f();}__f__(\"log\", JSON.stringify(parents), \" at common/utils.js:64\");\n    var children = data.filter(function (value) {return value.parentid !== 'undefined' && value.parentid != null;});\n    // console.log(JSON.stringify(children));\n\n    __f__(\"log\", JSON.stringify(parents), \" at common/utils.js:68\");\n    // 默认取第一个为顶级父级 且判断一下是否该值的parentid用indexof取不到（在剔除了首项之后 ）？？？～～～～～～\n    var translator = function translator(parents, children) {\n      parents.forEach(function (parent) {\n        children.forEach(function (current, index) {\n          if (current.parentid === parent.id) {\n            var temp = JSON.parse(JSON.stringify(children));\n            temp.splice(index, 1);\n            translator([current], temp);\n            typeof parent.children !== 'undefined' ? parent.children.push(\n            current) : parent.children = [current];\n          }\n        });\n      });\n    };\n    translator(parents, children);\n    var end = new Date().getTime();\n    __f__(\"log\", end - start, \" at common/utils.js:85\");\n    return parents;\n  },\n  // 执行popup-scroll组件的归位方法\n  popupScrollHoming: function popupScrollHoming(obj) {\n    // 执行组件到归位方法\n    setTimeout(function () {\n      obj.touchStart();\n      setTimeout(function () {\n        obj.homing();\n      }, 200);\n    }, 200);\n  },\n  // 字节B转化成KB，MB，GB\n  dealSize: function dealSize(limit) {\n    var size = \"\";\n    if (limit < 0.1 * 1024) {//小于0.1KB，则转化成B\n      size = limit.toFixed(2) + \"B\";\n    } else if (limit < 0.1 * 1024 * 1024) {//小于0.1MB，则转化成KB\n      size = (limit / 1024).toFixed(2) + \"KB\";\n    } else if (limit < 0.1 * 1024 * 1024 * 1024) {//小于0.1GB，则转化成MB\n      size = (limit / (1024 * 1024)).toFixed(2) + \"MB\";\n    } else {//其他转化成GB\n      size = (limit / (1024 * 1024 * 1024)).toFixed(2) + \"GB\";\n    }\n\n    var sizeStr = size + \"\"; //转成字符串\n    var index = sizeStr.indexOf(\".\"); //获取小数点处的索引\n    var dou = sizeStr.substr(index + 1, 2); //获取小数点后两位的值\n    if (dou == \"00\") {//判断后两位是否为00，如果是则删除00               \n      return sizeStr.substring(0, index) + sizeStr.substr(index + 3, 2);\n    }\n    return size;\n  },\n  dealInternetUrl: function dealInternetUrl(filepath, filename, userId) {\n    return \"http://www.hbcoal.cn:8999/document/check?fileId=\".concat(filepath, \"&userId=\").concat(userId ? userId : _store.default.state.userInfo.userId, \"&attname=\").concat(filename);\n  },\n  // 获取头像地址\n  getAvatar: function getAvatar(userId) {var _this = this;\n    return new Promise(function (resolve, reject) {\n      // 不传参数，查询本人信息\n      var tempUrl = {\n        url: '../../static/img/mine/user.png',\n        mid: '' };\n\n      (0, _api.getUserInfo)().then(function (res) {\n        __f__(\"log\", JSON.stringify(res), \" at common/utils.js:131\");\n        if (res.data.txmid) {\n          tempUrl.mid = res.data.txmid;\n          // 根据头像mid获取头像地址 拼接地址\n          (0, _api.getAttachmentByMid)({\n            mid: res.data.txmid }).\n          then(function (data) {\n            __f__(\"log\", JSON.stringify(data), \" at common/utils.js:138\");\n            tempUrl.url = _this.dealInternetUrl(data.spupload.filepath, data.\n            spupload.filename, userId);\n            resolve(tempUrl);\n          }).catch(function (err) {\n            resolve(tempUrl);\n          });\n        } else {\n          resolve(tempUrl);\n        }\n      }).catch(function (err) {\n        resolve(tempUrl);\n      });\n    });\n\n  },\n  // 查漏补缺式获取头像地址(要在登陆之后调用，否则store.state.userInfo.userId还未赋值)\n  reallyGetAvatar: function reallyGetAvatar() {var _this2 = this;\n    return new Promise(function (resolve, reject) {\n      // 如果登陆时，获取头像失败了，则此处单独获取；\n      if (!_store.default.state.avatar.url) {\n        _this2.getAvatar().then(function (res) {\n          _store.default.commit('setAvatar', res);\n          resolve(res);\n        });\n      } else {\n        __f__(\"log\", '不用重新获取啦 头像', \" at common/utils.js:164\");\n        resolve(_store.default.state.avatar);\n      }\n    });\n\n  } };\n\nmodule.exports = utils;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 25)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tbW9uL3V0aWxzLmpzIl0sIm5hbWVzIjpbInV0aWxzIiwic2V0TG9jYWxTdG9yYWdlIiwia2V5IiwidmFsdWUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsIk9iamVjdCIsInByb3RvdHlwZSIsInRvU3RyaW5nIiwiY2FsbCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1bmkiLCJzZXRTdG9yYWdlIiwiZGF0YSIsInN1Y2Nlc3MiLCJmYWlsIiwiZSIsImdldExvY2FsU3RvcmFnZSIsImdldFN0b3JhZ2UiLCJyZXMiLCJ0cmFuc2xhdGVEYXRhVG9UcmVlIiwic3RhcnQiLCJEYXRlIiwiZ2V0VGltZSIsInMiLCJsYWJlbCIsIm5hbWUiLCJwYXJlbnRzIiwiYSIsInRlbXAiLCJwYXJlbnRpZCIsImlzVG9wTm9kZSIsImIiLCJpZCIsInB1c2giLCJjaGlsZHJlbiIsImZpbHRlciIsInRyYW5zbGF0b3IiLCJmb3JFYWNoIiwicGFyZW50IiwiY3VycmVudCIsImluZGV4IiwicGFyc2UiLCJzcGxpY2UiLCJlbmQiLCJwb3B1cFNjcm9sbEhvbWluZyIsIm9iaiIsInNldFRpbWVvdXQiLCJ0b3VjaFN0YXJ0IiwiaG9taW5nIiwiZGVhbFNpemUiLCJsaW1pdCIsInNpemUiLCJ0b0ZpeGVkIiwic2l6ZVN0ciIsImluZGV4T2YiLCJkb3UiLCJzdWJzdHIiLCJzdWJzdHJpbmciLCJkZWFsSW50ZXJuZXRVcmwiLCJmaWxlcGF0aCIsImZpbGVuYW1lIiwidXNlcklkIiwic3RvcmUiLCJzdGF0ZSIsInVzZXJJbmZvIiwiZ2V0QXZhdGFyIiwidGVtcFVybCIsInVybCIsIm1pZCIsInRoZW4iLCJ0eG1pZCIsInNwdXBsb2FkIiwiY2F0Y2giLCJlcnIiLCJyZWFsbHlHZXRBdmF0YXIiLCJhdmF0YXIiLCJjb21taXQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiNkNBQUE7QUFDQSwwRDs7O0FBRzBCO0FBQzFCLElBQUlBLEtBQUssR0FBRztB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RSxPQUFELENBQVA7QUFDQTtBQUNELE9BbEJELEVBa0JHTSxLQWxCSCxDQWtCUyxVQUFBQyxHQUFHLEVBQUk7QUFDZnZFLGVBQU8sQ0FBQ2dFLE9BQUQsQ0FBUDtBQUNBLE9BcEJEO0FBcUJBLEtBM0JNLENBQVA7O0FBNkJBLEdBbkpVO0FBb0pYO0FBQ0FRLGlCQXJKVyw2QkFxSk87QUFDakIsV0FBTyxJQUFJekUsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN2QztBQUNBLFVBQUksQ0FBQzJELGVBQU1DLEtBQU4sQ0FBWVksTUFBWixDQUFtQlIsR0FBeEIsRUFBNkI7QUFDNUIsY0FBSSxDQUFDRixTQUFMLEdBQWlCSSxJQUFqQixDQUFzQixVQUFBbkQsR0FBRyxFQUFJO0FBQzVCNEMseUJBQU1jLE1BQU4sQ0FBYSxXQUFiLEVBQTBCMUQsR0FBMUI7QUFDQWhCLGlCQUFPLENBQUNnQixHQUFELENBQVA7QUFDQSxTQUhEO0FBSUEsT0FMRCxNQUtPO0FBQ04scUJBQVksWUFBWjtBQUNBaEIsZUFBTyxDQUFDNEQsZUFBTUMsS0FBTixDQUFZWSxNQUFiLENBQVA7QUFDQTtBQUNELEtBWE0sQ0FBUDs7QUFhQSxHQW5LVSxFQUFaOztBQXFLQUUsTUFBTSxDQUFDQyxPQUFQLEdBQWlCakYsS0FBakIsQyIsImZpbGUiOiI0Mi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdG9yZSBmcm9tICcuLi9zdG9yZSdcbmltcG9ydCB7XG5cdGdldFVzZXJJbmZvLFxuXHRnZXRBdHRhY2htZW50QnlNaWQsXG59IGZyb20gJ0AvY29tbW9uL2FwaS5qcyc7IC8v5byV5YWl6ZyA6KaB55qEYXBpIFxubGV0IHV0aWxzID0ge1xuXHRzZXRMb2NhbFN0b3JhZ2Uoa2V5LCB2YWx1ZSkge1xuXHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgT2JqZWN0XScpIHtcblx0XHRcdFx0XHR2YWx1ZSA9IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR1bmkuc2V0U3RvcmFnZSh7XG5cdFx0XHRcdFx0a2V5OiBrZXksXG5cdFx0XHRcdFx0ZGF0YTogdmFsdWUsXG5cdFx0XHRcdFx0c3VjY2VzczogKCkgPT4ge1xuXHRcdFx0XHRcdFx0cmVzb2x2ZSgyMDApO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0ZmFpbDogKCkgPT4ge1xuXHRcdFx0XHRcdFx0cmVqZWN0KC0xKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRyZWplY3QoZSlcblx0XHRcdH1cblxuXHRcdH0pXG5cdH0sXG5cdGdldExvY2FsU3RvcmFnZShrZXkpIHtcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0dW5pLmdldFN0b3JhZ2Uoe1xuXHRcdFx0XHRrZXk6IGtleSxcblx0XHRcdFx0c3VjY2VzczogKHJlcykgPT4ge1xuXHRcdFx0XHRcdHJlc29sdmUocmVzLmRhdGEpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRmYWlsOiAoKSA9PiB7XG5cdFx0XHRcdFx0cmVqZWN0KC0xKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSlcblx0fSxcblx0Ly8g5aSE55CG5qCR5b2i57uT5p6EXG5cdHRyYW5zbGF0ZURhdGFUb1RyZWUoZGF0YSkge1xuXHRcdGxldCBzdGFydD1uZXcgRGF0ZSgpLmdldFRpbWUoKTtcblx0XHQvLyDlhYjlpITnkIZuYW1l5Li6bGFiZWzlrZfmrrXvvJvlm6DkuLrmj5Lku7bkvb/nlKjnmoTmmK9sYWJlbOWxleekulxuXHRcdGZvciAobGV0IHMgb2YgZGF0YSkge1xuXHRcdFx0cy5sYWJlbCA9IHMubmFtZTtcblx0XHR9XG5cdFx0Ly8g5YWI562b6YCJ6aG257qn5bGC57qn54i257qnLCDlpoLmnpzkuIDkuKpwYXJlbnRpZCDlnKjmiYDmnInph4zpnaLnmoRpZOmDveWPluS4jeWIsCDliJnkuLrpobbnuqfniLbnuqdcblx0XHRsZXQgcGFyZW50cyA9IFtdO1xuXHRcdGZvciAobGV0IGEgb2YgZGF0YSkge1xuXHRcdFx0bGV0IHRlbXAgPSBhLnBhcmVudGlkO1xuXHRcdFx0bGV0IGlzVG9wTm9kZSA9IHRydWU7XG5cdFx0XHRmb3IgKGxldCBiIG9mIGRhdGEpIHtcblx0XHRcdFx0aWYgKHRlbXAgPT09IGIuaWQpIHtcblx0XHRcdFx0XHRpc1RvcE5vZGUgPSBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKGlzVG9wTm9kZSkge1xuXHRcdFx0XHRwYXJlbnRzLnB1c2goYSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8vIGxldCBwYXJlbnRzID0gZGF0YS5maWx0ZXIodmFsdWUgPT4gdmFsdWUucGFyZW50aWQgPT0gJ3VuZGVmaW5lZCcgfHwgdmFsdWUucGFyZW50aWQgPT0gbnVsbClcblx0XHRjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShwYXJlbnRzKSk7XG5cdFx0bGV0IGNoaWxkcmVuID0gZGF0YS5maWx0ZXIodmFsdWUgPT4gdmFsdWUucGFyZW50aWQgIT09ICd1bmRlZmluZWQnICYmIHZhbHVlLnBhcmVudGlkICE9IG51bGwpXG5cdFx0Ly8gY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoY2hpbGRyZW4pKTtcblx0XHRcblx0XHRjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShwYXJlbnRzKSk7XG5cdFx0Ly8g6buY6K6k5Y+W56ys5LiA5Liq5Li66aG257qn54i257qnIOS4lOWIpOaWreS4gOS4i+aYr+WQpuivpeWAvOeahHBhcmVudGlk55SoaW5kZXhvZuWPluS4jeWIsO+8iOWcqOWJlOmZpOS6hummlumhueS5i+WQjiDvvInvvJ/vvJ/vvJ/vvZ7vvZ7vvZ7vvZ7vvZ7vvZ5cblx0XHRsZXQgdHJhbnNsYXRvciA9IChwYXJlbnRzLCBjaGlsZHJlbikgPT4ge1xuXHRcdFx0cGFyZW50cy5mb3JFYWNoKChwYXJlbnQpID0+IHtcblx0XHRcdFx0Y2hpbGRyZW4uZm9yRWFjaCgoY3VycmVudCwgaW5kZXgpID0+IHtcblx0XHRcdFx0XHRpZiAoY3VycmVudC5wYXJlbnRpZCA9PT0gcGFyZW50LmlkKSB7XG5cdFx0XHRcdFx0XHRsZXQgdGVtcCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoY2hpbGRyZW4pKVxuXHRcdFx0XHRcdFx0dGVtcC5zcGxpY2UoaW5kZXgsIDEpXG5cdFx0XHRcdFx0XHR0cmFuc2xhdG9yKFtjdXJyZW50XSwgdGVtcClcblx0XHRcdFx0XHRcdHR5cGVvZiBwYXJlbnQuY2hpbGRyZW4gIT09ICd1bmRlZmluZWQnID8gcGFyZW50LmNoaWxkcmVuLnB1c2goXG5cdFx0XHRcdFx0XHRcdGN1cnJlbnQpIDogcGFyZW50LmNoaWxkcmVuID0gW2N1cnJlbnRdXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KVxuXHRcdFx0fSlcblx0XHR9XG5cdFx0dHJhbnNsYXRvcihwYXJlbnRzLCBjaGlsZHJlbilcblx0XHRsZXQgIGVuZCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpXG5cdFx0Y29uc29sZS5sb2coZW5kLXN0YXJ0KTtcblx0XHRyZXR1cm4gcGFyZW50c1xuXHR9LFxuXHQvLyDmiafooYxwb3B1cC1zY3JvbGznu4Tku7bnmoTlvZLkvY3mlrnms5Vcblx0cG9wdXBTY3JvbGxIb21pbmcob2JqKSB7XG5cdFx0Ly8g5omn6KGM57uE5Lu25Yiw5b2S5L2N5pa55rOVXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRvYmoudG91Y2hTdGFydCgpO1xuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdG9iai5ob21pbmcoKTtcblx0XHRcdH0sIDIwMCk7XG5cdFx0fSwgMjAwKTtcblx0fSxcblx0Ly8g5a2X6IqCQui9rOWMluaIkEtC77yMTULvvIxHQlxuXHRkZWFsU2l6ZShsaW1pdCkge1xuXHRcdHZhciBzaXplID0gXCJcIjtcblx0XHRpZiAobGltaXQgPCAwLjEgKiAxMDI0KSB7IC8v5bCP5LqOMC4xS0LvvIzliJnovazljJbmiJBCXG5cdFx0XHRzaXplID0gbGltaXQudG9GaXhlZCgyKSArIFwiQlwiXG5cdFx0fSBlbHNlIGlmIChsaW1pdCA8IDAuMSAqIDEwMjQgKiAxMDI0KSB7IC8v5bCP5LqOMC4xTULvvIzliJnovazljJbmiJBLQlxuXHRcdFx0c2l6ZSA9IChsaW1pdCAvIDEwMjQpLnRvRml4ZWQoMikgKyBcIktCXCJcblx0XHR9IGVsc2UgaWYgKGxpbWl0IDwgMC4xICogMTAyNCAqIDEwMjQgKiAxMDI0KSB7IC8v5bCP5LqOMC4xR0LvvIzliJnovazljJbmiJBNQlxuXHRcdFx0c2l6ZSA9IChsaW1pdCAvICgxMDI0ICogMTAyNCkpLnRvRml4ZWQoMikgKyBcIk1CXCJcblx0XHR9IGVsc2UgeyAvL+WFtuS7lui9rOWMluaIkEdCXG5cdFx0XHRzaXplID0gKGxpbWl0IC8gKDEwMjQgKiAxMDI0ICogMTAyNCkpLnRvRml4ZWQoMikgKyBcIkdCXCJcblx0XHR9XG5cblx0XHR2YXIgc2l6ZVN0ciA9IHNpemUgKyBcIlwiOyAvL+i9rOaIkOWtl+espuS4slxuXHRcdHZhciBpbmRleCA9IHNpemVTdHIuaW5kZXhPZihcIi5cIik7IC8v6I635Y+W5bCP5pWw54K55aSE55qE57Si5byVXG5cdFx0dmFyIGRvdSA9IHNpemVTdHIuc3Vic3RyKGluZGV4ICsgMSwgMikgLy/ojrflj5blsI/mlbDngrnlkI7kuKTkvY3nmoTlgLxcblx0XHRpZiAoZG91ID09IFwiMDBcIikgeyAvL+WIpOaWreWQjuS4pOS9jeaYr+WQpuS4ujAw77yM5aaC5p6c5piv5YiZ5Yig6ZmkMDAgICAgICAgICAgICAgICBcblx0XHRcdHJldHVybiBzaXplU3RyLnN1YnN0cmluZygwLCBpbmRleCkgKyBzaXplU3RyLnN1YnN0cihpbmRleCArIDMsIDIpXG5cdFx0fVxuXHRcdHJldHVybiBzaXplO1xuXHR9LFxuXHRkZWFsSW50ZXJuZXRVcmwoZmlsZXBhdGgsIGZpbGVuYW1lLCB1c2VySWQpIHtcblx0XHRyZXR1cm4gYGh0dHA6Ly93d3cuaGJjb2FsLmNuOjg5OTkvZG9jdW1lbnQvY2hlY2s/ZmlsZUlkPSR7ZmlsZXBhdGh9JnVzZXJJZD0ke3VzZXJJZD91c2VySWQ6c3RvcmUuc3RhdGUudXNlckluZm8udXNlcklkfSZhdHRuYW1lPSR7ZmlsZW5hbWV9YDtcblx0fSxcblx0Ly8g6I635Y+W5aS05YOP5Zyw5Z2AXG5cdGdldEF2YXRhcih1c2VySWQpIHtcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0Ly8g5LiN5Lyg5Y+C5pWw77yM5p+l6K+i5pys5Lq65L+h5oGvXG5cdFx0XHRsZXQgdGVtcFVybCA9IHtcblx0XHRcdFx0dXJsOiAnLi4vLi4vc3RhdGljL2ltZy9taW5lL3VzZXIucG5nJyxcblx0XHRcdFx0bWlkOiAnJ1xuXHRcdFx0fTtcblx0XHRcdGdldFVzZXJJbmZvKCkudGhlbihyZXMgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXMpKTtcblx0XHRcdFx0aWYgKHJlcy5kYXRhLnR4bWlkKSB7XG5cdFx0XHRcdFx0dGVtcFVybC5taWQgPSByZXMuZGF0YS50eG1pZDtcblx0XHRcdFx0XHQvLyDmoLnmja7lpLTlg49taWTojrflj5blpLTlg4/lnLDlnYAg5ou85o6l5Zyw5Z2AXG5cdFx0XHRcdFx0Z2V0QXR0YWNobWVudEJ5TWlkKHtcblx0XHRcdFx0XHRcdG1pZDogcmVzLmRhdGEudHhtaWRcblx0XHRcdFx0XHR9KS50aGVuKGRhdGEgPT4ge1xuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuXHRcdFx0XHRcdFx0dGVtcFVybC51cmwgPSB0aGlzLmRlYWxJbnRlcm5ldFVybChkYXRhLnNwdXBsb2FkLmZpbGVwYXRoLCBkYXRhXG5cdFx0XHRcdFx0XHRcdC5zcHVwbG9hZC5maWxlbmFtZSwgdXNlcklkKTtcblx0XHRcdFx0XHRcdHJlc29sdmUodGVtcFVybCk7XG5cdFx0XHRcdFx0fSkuY2F0Y2goZXJyID0+IHtcblx0XHRcdFx0XHRcdHJlc29sdmUodGVtcFVybCk7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0cmVzb2x2ZSh0ZW1wVXJsKTtcblx0XHRcdFx0fVxuXHRcdFx0fSkuY2F0Y2goZXJyID0+IHtcblx0XHRcdFx0cmVzb2x2ZSh0ZW1wVXJsKTtcblx0XHRcdH0pXG5cdFx0fSlcblxuXHR9LFxuXHQvLyDmn6XmvI/ooaXnvLrlvI/ojrflj5blpLTlg4/lnLDlnYAo6KaB5Zyo55m76ZmG5LmL5ZCO6LCD55So77yM5ZCm5YiZc3RvcmUuc3RhdGUudXNlckluZm8udXNlcklk6L+Y5pyq6LWL5YC8KVxuXHRyZWFsbHlHZXRBdmF0YXIoKSB7XG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdC8vIOWmguaenOeZu+mZhuaXtu+8jOiOt+WPluWktOWDj+Wksei0peS6hu+8jOWImeatpOWkhOWNleeLrOiOt+WPlu+8m1xuXHRcdFx0aWYgKCFzdG9yZS5zdGF0ZS5hdmF0YXIudXJsKSB7XG5cdFx0XHRcdHRoaXMuZ2V0QXZhdGFyKCkudGhlbihyZXMgPT4ge1xuXHRcdFx0XHRcdHN0b3JlLmNvbW1pdCgnc2V0QXZhdGFyJywgcmVzKTtcblx0XHRcdFx0XHRyZXNvbHZlKHJlcyk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y29uc29sZS5sb2coJ+S4jeeUqOmHjeaWsOiOt+WPluWVpiDlpLTlg48nKTtcblx0XHRcdFx0cmVzb2x2ZShzdG9yZS5zdGF0ZS5hdmF0YXIpO1xuXHRcdFx0fVxuXHRcdH0pXG5cblx0fSxcbn1cbm1vZHVsZS5leHBvcnRzID0gdXRpbHM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///42\n");

/***/ }),
/* 43 */
/*!********************************************************************************!*\
  !*** /Users/wangjunhao/Documents/HBuilderProjects/uni-app-demo/store/index.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 44));\nvar _vuex = _interopRequireDefault(__webpack_require__(/*! vuex */ 45));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}\n_vue.default.use(_vuex.default);\nvar store = new _vuex.default.Store({\n  // http://www.hbcoal.cn:8115/com.hbky.basedata.HKDY.queryHKDYSPApp.biz.ext?page=3&limit=6\n  // http://www.hbcoal.cn:8115\n  state: {\n    hostUrl: 'http://www.hbcoal.cn:8115',\n    hasLogin: false,\n    userInfo: {},\n    avatar: {} },\n\n  mutations: {\n    setAvatar: function setAvatar(state, obj) {\n      __f__(\"log\", '设置头像全局变量' + JSON.stringify(obj), \" at store/index.js:15\");\n      state.avatar = obj;\n    },\n    login: function login(state, provider) {\n      state.hasLogin = true;\n      state.userInfo = provider;\n      uni.setStorage({ //缓存用户登陆状态\n        key: 'userInfo',\n        data: provider });\n\n    },\n    logout: function logout(state) {\n      state.hasLogin = false;\n      state.userInfo = {};\n      uni.removeStorage({\n        key: 'userInfo',\n        success: function success(res) {\n          uni.navigateTo({\n            url: '/pages/index/index' });\n\n        },\n        fail: function fail(res) {\n          uni.navigateTo({\n            url: '/pages/index/index' });\n\n          __f__(\"log\", JSON.stringify(res), \" at store/index.js:40\");\n        } });\n\n    } },\n\n  actions: {} });var _default =\n\n\n\n\nstore;exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 25)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vc3RvcmUvaW5kZXguanMiXSwibmFtZXMiOlsiVnVlIiwidXNlIiwiVnVleCIsInN0b3JlIiwiU3RvcmUiLCJzdGF0ZSIsImhvc3RVcmwiLCJoYXNMb2dpbiIsInVzZXJJbmZvIiwiYXZhdGFyIiwibXV0YXRpb25zIiwic2V0QXZhdGFyIiwib2JqIiwiSlNPTiIsInN0cmluZ2lmeSIsImxvZ2luIiwicHJvdmlkZXIiLCJ1bmkiLCJzZXRTdG9yYWdlIiwia2V5IiwiZGF0YSIsImxvZ291dCIsInJlbW92ZVN0b3JhZ2UiLCJzdWNjZXNzIiwicmVzIiwibmF2aWdhdGVUbyIsInVybCIsImZhaWwiLCJhY3Rpb25zIl0sIm1hcHBpbmdzIjoib0lBQUE7QUFDQSx3RTtBQUNBQSxhQUFJQyxHQUFKLENBQVFDLGFBQVI7QUFDQSxJQUFNQyxLQUFLLEdBQUcsSUFBSUQsY0FBS0UsS0FBVCxDQUFlO0FBQzVCO0FBQ0E7QUFDQUMsT0FBSyxFQUFFO0FBQ05DLFdBQU8sRUFBRSwyQkFESDtBQUVOQyxZQUFRLEVBQUUsS0FGSjtBQUdOQyxZQUFRLEVBQUUsRUFISjtBQUlOQyxVQUFNLEVBQUUsRUFKRixFQUhxQjs7QUFTNUJDLFdBQVMsRUFBRTtBQUNWQyxhQURVLHFCQUNBTixLQURBLEVBQ09PLEdBRFAsRUFDWTtBQUNyQixtQkFBWSxhQUFXQyxJQUFJLENBQUNDLFNBQUwsQ0FBZUYsR0FBZixDQUF2QjtBQUNBUCxXQUFLLENBQUNJLE1BQU4sR0FBZUcsR0FBZjtBQUNBLEtBSlM7QUFLVkcsU0FMVSxpQkFLSlYsS0FMSSxFQUtHVyxRQUxILEVBS2E7QUFDdEJYLFdBQUssQ0FBQ0UsUUFBTixHQUFpQixJQUFqQjtBQUNBRixXQUFLLENBQUNHLFFBQU4sR0FBaUJRLFFBQWpCO0FBQ0FDLFNBQUcsQ0FBQ0MsVUFBSixDQUFlLEVBQUU7QUFDaEJDLFdBQUcsRUFBRSxVQURTO0FBRWRDLFlBQUksRUFBRUosUUFGUSxFQUFmOztBQUlBLEtBWlM7QUFhVkssVUFiVSxrQkFhSGhCLEtBYkcsRUFhSTtBQUNiQSxXQUFLLENBQUNFLFFBQU4sR0FBaUIsS0FBakI7QUFDQUYsV0FBSyxDQUFDRyxRQUFOLEdBQWlCLEVBQWpCO0FBQ0FTLFNBQUcsQ0FBQ0ssYUFBSixDQUFrQjtBQUNqQkgsV0FBRyxFQUFFLFVBRFk7QUFFakJJLGVBQU8sRUFBRSxpQkFBU0MsR0FBVCxFQUFjO0FBQ3RCUCxhQUFHLENBQUNRLFVBQUosQ0FBZTtBQUNkQyxlQUFHLEVBQUUsb0JBRFMsRUFBZjs7QUFHQSxTQU5nQjtBQU9qQkMsWUFBSSxFQUFFLGNBQVNILEdBQVQsRUFBYztBQUNuQlAsYUFBRyxDQUFDUSxVQUFKLENBQWU7QUFDZEMsZUFBRyxFQUFFLG9CQURTLEVBQWY7O0FBR0EsdUJBQVliLElBQUksQ0FBQ0MsU0FBTCxDQUFlVSxHQUFmLENBQVo7QUFDQSxTQVpnQixFQUFsQjs7QUFjQSxLQTlCUyxFQVRpQjs7QUF5QzVCSSxTQUFPLEVBQUUsRUF6Q21CLEVBQWYsQ0FBZCxDOzs7OztBQThDZXpCLEsiLCJmaWxlIjoiNDMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcclxuaW1wb3J0IFZ1ZXggZnJvbSAndnVleCdcclxuVnVlLnVzZShWdWV4KVxyXG5jb25zdCBzdG9yZSA9IG5ldyBWdWV4LlN0b3JlKHtcclxuXHQvLyBodHRwOi8vd3d3LmhiY29hbC5jbjo4MTE1L2NvbS5oYmt5LmJhc2VkYXRhLkhLRFkucXVlcnlIS0RZU1BBcHAuYml6LmV4dD9wYWdlPTMmbGltaXQ9NlxyXG5cdC8vIGh0dHA6Ly93d3cuaGJjb2FsLmNuOjgxMTVcclxuXHRzdGF0ZToge1xyXG5cdFx0aG9zdFVybDogJ2h0dHA6Ly93d3cuaGJjb2FsLmNuOjgxMTUnLFxyXG5cdFx0aGFzTG9naW46IGZhbHNlLFxyXG5cdFx0dXNlckluZm86IHt9LFxyXG5cdFx0YXZhdGFyOiB7fSxcclxuXHR9LFxyXG5cdG11dGF0aW9uczoge1xyXG5cdFx0c2V0QXZhdGFyKHN0YXRlLCBvYmopIHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ+iuvue9ruWktOWDj+WFqOWxgOWPmOmHjycrSlNPTi5zdHJpbmdpZnkob2JqKSk7XHJcblx0XHRcdHN0YXRlLmF2YXRhciA9IG9iajtcclxuXHRcdH0sXHJcblx0XHRsb2dpbihzdGF0ZSwgcHJvdmlkZXIpIHtcclxuXHRcdFx0c3RhdGUuaGFzTG9naW4gPSB0cnVlO1xyXG5cdFx0XHRzdGF0ZS51c2VySW5mbyA9IHByb3ZpZGVyO1xyXG5cdFx0XHR1bmkuc2V0U3RvcmFnZSh7IC8v57yT5a2Y55So5oi355m76ZmG54q25oCBXHJcblx0XHRcdFx0a2V5OiAndXNlckluZm8nLFxyXG5cdFx0XHRcdGRhdGE6IHByb3ZpZGVyXHJcblx0XHRcdH0pXHJcblx0XHR9LFxyXG5cdFx0bG9nb3V0KHN0YXRlKSB7XHJcblx0XHRcdHN0YXRlLmhhc0xvZ2luID0gZmFsc2U7XHJcblx0XHRcdHN0YXRlLnVzZXJJbmZvID0ge307XHJcblx0XHRcdHVuaS5yZW1vdmVTdG9yYWdlKHtcclxuXHRcdFx0XHRrZXk6ICd1c2VySW5mbycsXHJcblx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcblx0XHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0XHRcdHVybDogJy9wYWdlcy9pbmRleC9pbmRleCdcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0ZmFpbDogZnVuY3Rpb24ocmVzKSB7XHJcblx0XHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0XHRcdHVybDogJy9wYWdlcy9pbmRleC9pbmRleCdcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzKSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdGFjdGlvbnM6IHtcclxuXHJcblx0fVxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3RvcmVcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///43\n");

/***/ }),
/* 44 */
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),
/* 45 */
/*!********************************************!*\
  !*** ./node_modules/vuex/dist/vuex.esm.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.install = install;exports.mapState = exports.mapMutations = exports.mapGetters = exports.mapActions = exports.createNamespacedHelpers = exports.Store = exports.default = void 0; /*!
                                                                                                                                                                                                                                                                      * vuex v3.4.0
                                                                                                                                                                                                                                                                      * (c) 2020 Evan You
                                                                                                                                                                                                                                                                      * @license MIT
                                                                                                                                                                                                                                                                      */
function applyMixin(Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if (options === void 0) options = {};

      options.init = options.init ?
      [vuexInit].concat(options.init) :
      vuexInit;
      _init.call(this, options);
    };
  }

  /**
     * Vuex init hook, injected into each instances init hooks list.
     */

  function vuexInit() {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function' ?
      options.store() :
      options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
}

var target = typeof window !== 'undefined' ?
window :
typeof global !== 'undefined' ?
global :
{};
var devtoolHook = target.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin(store) {
  if (!devtoolHook) {return;}

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  }, { prepend: true });

  store.subscribeAction(function (action, state) {
    devtoolHook.emit('vuex:action', action, state);
  }, { prepend: true });
}

/**
   * Get the first item that pass the test
   * by second argument function
   *
   * @param {Array} list
   * @param {Function} f
   * @return {*}
   */

/**
       * forEach for object
       */
function forEachValue(obj, fn) {
  Object.keys(obj).forEach(function (key) {return fn(obj[key], key);});
}

function isObject(obj) {
  return obj !== null && typeof obj === 'object';
}

function isPromise(val) {
  return val && typeof val.then === 'function';
}

function assert(condition, msg) {
  if (!condition) {throw new Error("[vuex] " + msg);}
}

function partial(fn, arg) {
  return function () {
    return fn(arg);
  };
}

// Base data struct for store's module, package with some attribute and method
var Module = function Module(rawModule, runtime) {
  this.runtime = runtime;
  // Store some children item
  this._children = Object.create(null);
  // Store the origin module object which passed by programmer
  this._rawModule = rawModule;
  var rawState = rawModule.state;

  // Store the origin module's state
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors = { namespaced: { configurable: true } };

prototypeAccessors.namespaced.get = function () {
  return !!this._rawModule.namespaced;
};

Module.prototype.addChild = function addChild(key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild(key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild(key) {
  return this._children[key];
};

Module.prototype.hasChild = function hasChild(key) {
  return key in this._children;
};

Module.prototype.update = function update(rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild(fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter(fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction(fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation(fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties(Module.prototype, prototypeAccessors);

var ModuleCollection = function ModuleCollection(rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get(path) {
  return path.reduce(function (module, key) {
    return module.getChild(key);
  }, this.root);
};

ModuleCollection.prototype.getNamespace = function getNamespace(path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '');
  }, '');
};

ModuleCollection.prototype.update = function update$1(rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register(path, rawModule, runtime) {
  var this$1 = this;
  if (runtime === void 0) runtime = true;

  if (true) {
    assertRawModule(path, rawModule);
  }

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister(path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  if (!parent.getChild(key).runtime) {return;}

  parent.removeChild(key);
};

ModuleCollection.prototype.isRegistered = function isRegistered(path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];

  return parent.hasChild(key);
};

function update(path, targetModule, newModule) {
  if (true) {
    assertRawModule(path, newModule);
  }

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if (true) {
          console.warn(
          "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
          'manual reload is needed');

        }
        return;
      }
      update(
      path.concat(key),
      targetModule.getChild(key),
      newModule.modules[key]);

    }
  }
}

var functionAssert = {
  assert: function assert(value) {return typeof value === 'function';},
  expected: 'function' };


var objectAssert = {
  assert: function assert(value) {return typeof value === 'function' ||
    typeof value === 'object' && typeof value.handler === 'function';},
  expected: 'function or object with "handler" function' };


var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert };


function assertRawModule(path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) {return;}

    var assertOptions = assertTypes[key];

    forEachValue(rawModule[key], function (value, type) {
      assert(
      assertOptions.assert(value),
      makeAssertionMessage(path, key, type, value, assertOptions.expected));

    });
  });
}

function makeAssertionMessage(path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + path.join('.') + "\"";
  }
  buf += " is " + JSON.stringify(value) + ".";
  return buf;
}

var Vue; // bind on install

var Store = function Store(options) {
  var this$1 = this;
  if (options === void 0) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  if (true) {
    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "store must be called with the new operator.");
  }

  var plugins = options.plugins;if (plugins === void 0) plugins = [];
  var strict = options.strict;if (strict === void 0) strict = false;

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();
  this._makeLocalGettersCache = Object.create(null);

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch(type, payload) {
    return dispatch.call(store, type, payload);
  };
  this.commit = function boundCommit(type, payload, options) {
    return commit.call(store, type, payload, options);
  };

  // strict mode
  this.strict = strict;

  var state = this._modules.root.state;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) {return plugin(this$1);});

  var useDevtools = options.devtools !== undefined ? options.devtools : Vue.config.devtools;
  if (useDevtools) {
    devtoolPlugin(this);
  }
};exports.Store = Store;

var prototypeAccessors$1 = { state: { configurable: true } };

prototypeAccessors$1.state.get = function () {
  return this._vm._data.$$state;
};

prototypeAccessors$1.state.set = function (v) {
  if (true) {
    assert(false, "use store.replaceState() to explicit replace store state.");
  }
};

Store.prototype.commit = function commit(_type, _payload, _options) {
  var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
  var type = ref.type;
  var payload = ref.payload;
  var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    if (true) {
      console.error("[vuex] unknown mutation type: " + type);
    }
    return;
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator(handler) {
      handler(payload);
    });
  });

  this._subscribers.
  slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
  .forEach(function (sub) {return sub(mutation, this$1.state);});

  if (
   true &&
  options && options.silent)
  {
    console.warn(
    "[vuex] mutation type: " + type + ". Silent option has been removed. " +
    'Use the filter functionality in the vue-devtools');

  }
};

Store.prototype.dispatch = function dispatch(_type, _payload) {
  var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
  var type = ref.type;
  var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    if (true) {
      console.error("[vuex] unknown action type: " + type);
    }
    return;
  }

  try {
    this._actionSubscribers.
    slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
    .filter(function (sub) {return sub.before;}).
    forEach(function (sub) {return sub.before(action, this$1.state);});
  } catch (e) {
    if (true) {
      console.warn("[vuex] error in before action subscribers: ");
      console.error(e);
    }
  }

  var result = entry.length > 1 ?
  Promise.all(entry.map(function (handler) {return handler(payload);})) :
  entry[0](payload);

  return new Promise(function (resolve, reject) {
    result.then(function (res) {
      try {
        this$1._actionSubscribers.
        filter(function (sub) {return sub.after;}).
        forEach(function (sub) {return sub.after(action, this$1.state);});
      } catch (e) {
        if (true) {
          console.warn("[vuex] error in after action subscribers: ");
          console.error(e);
        }
      }
      resolve(res);
    }, function (error) {
      try {
        this$1._actionSubscribers.
        filter(function (sub) {return sub.error;}).
        forEach(function (sub) {return sub.error(action, this$1.state, error);});
      } catch (e) {
        if (true) {
          console.warn("[vuex] error in error action subscribers: ");
          console.error(e);
        }
      }
      reject(error);
    });
  });
};

Store.prototype.subscribe = function subscribe(fn, options) {
  return genericSubscribe(fn, this._subscribers, options);
};

Store.prototype.subscribeAction = function subscribeAction(fn, options) {
  var subs = typeof fn === 'function' ? { before: fn } : fn;
  return genericSubscribe(subs, this._actionSubscribers, options);
};

Store.prototype.watch = function watch(getter, cb, options) {
  var this$1 = this;

  if (true) {
    assert(typeof getter === 'function', "store.watch only accepts a function.");
  }
  return this._watcherVM.$watch(function () {return getter(this$1.state, this$1.getters);}, cb, options);
};

Store.prototype.replaceState = function replaceState(state) {
  var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule(path, rawModule, options) {
  if (options === void 0) options = {};

  if (typeof path === 'string') {path = [path];}

  if (true) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, 'cannot register the root module by using registerModule.');
  }

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule(path) {
  var this$1 = this;

  if (typeof path === 'string') {path = [path];}

  if (true) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hasModule = function hasModule(path) {
  if (typeof path === 'string') {path = [path];}

  if (true) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  return this._modules.isRegistered(path);
};

Store.prototype.hotUpdate = function hotUpdate(newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit(fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties(Store.prototype, prototypeAccessors$1);

function genericSubscribe(fn, subs, options) {
  if (subs.indexOf(fn) < 0) {
    options && options.prepend ?
    subs.unshift(fn) :
    subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  };
}

function resetStore(store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM(store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  // reset local getters cache
  store._makeLocalGettersCache = Object.create(null);
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    // direct inline function use will lead to closure preserving oldVm.
    // using partial to return function with only arguments preserved in closure environment.
    computed[key] = partial(fn, store);
    Object.defineProperty(store.getters, key, {
      get: function get() {return store._vm[key];},
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state },

    computed: computed });

  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () {return oldVm.$destroy();});
  }
}

function installModule(store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    if (store._modulesNamespaceMap[namespace] && "development" !== 'production') {
      console.error("[vuex] duplicate namespace " + namespace + " for the namespaced module " + path.join('/'));
    }
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      if (true) {
        if (moduleName in parentState) {
          console.warn(
          "[vuex] state field \"" + moduleName + "\" was overridden by a module with the same name at \"" + path.join('.') + "\"");

        }
      }
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
   * make localized dispatch, commit, getters and state
   * if there is no namespace, just use root ones
   */
function makeLocalContext(store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if ( true && !store._actions[type]) {
          console.error("[vuex] unknown local action type: " + args.type + ", global type: " + type);
          return;
        }
      }

      return store.dispatch(type, payload);
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if ( true && !store._mutations[type]) {
          console.error("[vuex] unknown local mutation type: " + args.type + ", global type: " + type);
          return;
        }
      }

      store.commit(type, payload, options);
    } };


  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace ?
      function () {return store.getters;} :
      function () {return makeLocalGetters(store, namespace);} },

    state: {
      get: function get() {return getNestedState(store.state, path);} } });



  return local;
}

function makeLocalGetters(store, namespace) {
  if (!store._makeLocalGettersCache[namespace]) {
    var gettersProxy = {};
    var splitPos = namespace.length;
    Object.keys(store.getters).forEach(function (type) {
      // skip if the target getter is not match this namespace
      if (type.slice(0, splitPos) !== namespace) {return;}

      // extract local getter type
      var localType = type.slice(splitPos);

      // Add a port to the getters proxy.
      // Define as getter property because
      // we do not want to evaluate the getters in this time.
      Object.defineProperty(gettersProxy, localType, {
        get: function get() {return store.getters[type];},
        enumerable: true });

    });
    store._makeLocalGettersCache[namespace] = gettersProxy;
  }

  return store._makeLocalGettersCache[namespace];
}

function registerMutation(store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler(payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction(store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler(payload) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state },
    payload);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err;
      });
    } else {
      return res;
    }
  });
}

function registerGetter(store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if (true) {
      console.error("[vuex] duplicate getter key: " + type);
    }
    return;
  }
  store._wrappedGetters[type] = function wrappedGetter(store) {
    return rawGetter(
    local.state, // local state
    local.getters, // local getters
    store.state, // root state
    store.getters // root getters
    );
  };
}

function enableStrictMode(store) {
  store._vm.$watch(function () {return this._data.$$state;}, function () {
    if (true) {
      assert(store._committing, "do not mutate vuex store state outside mutation handlers.");
    }
  }, { deep: true, sync: true });
}

function getNestedState(state, path) {
  return path.reduce(function (state, key) {return state[key];}, state);
}

function unifyObjectStyle(type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if (true) {
    assert(typeof type === 'string', "expects string as the type, but found " + typeof type + ".");
  }

  return { type: type, payload: payload, options: options };
}

function install(_Vue) {
  if (Vue && _Vue === Vue) {
    if (true) {
      console.error(
      '[vuex] already installed. Vue.use(Vuex) should be called only once.');

    }
    return;
  }
  Vue = _Vue;
  applyMixin(Vue);
}

/**
   * Reduce the code which written in Vue.js for getting the state.
   * @param {String} [namespace] - Module's namespace
   * @param {Object|Array} states # Object's item can be a function which accept state and getters for param, you can do something for state and getters in it.
   * @param {Object}
   */
var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  if ( true && !isValidMap(states)) {
    console.error('[vuex] mapState: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState() {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return;
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function' ?
      val.call(this, state, getters) :
      state[val];
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res;
});

/**
     * Reduce the code which written in Vue.js for committing the mutation
     * @param {String} [namespace] - Module's namespace
     * @param {Object|Array} mutations # Object's item can be a function which accept `commit` function as the first param, it can accept anthor params. You can commit mutation and do any other things in this function. specially, You need to pass anthor params from the mapped function.
     * @return {Object}
     */exports.mapState = mapState;
var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  if ( true && !isValidMap(mutations)) {
    console.error('[vuex] mapMutations: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation() {
      var args = [],len = arguments.length;
      while (len--) {args[len] = arguments[len];}

      // Get the commit method from store
      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return;
        }
        commit = module.context.commit;
      }
      return typeof val === 'function' ?
      val.apply(this, [commit].concat(args)) :
      commit.apply(this.$store, [val].concat(args));
    };
  });
  return res;
});

/**
     * Reduce the code which written in Vue.js for getting the getters
     * @param {String} [namespace] - Module's namespace
     * @param {Object|Array} getters
     * @return {Object}
     */exports.mapMutations = mapMutations;
var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  if ( true && !isValidMap(getters)) {
    console.error('[vuex] mapGetters: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    // The namespace has been mutated by normalizeNamespace
    val = namespace + val;
    res[key] = function mappedGetter() {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return;
      }
      if ( true && !(val in this.$store.getters)) {
        console.error("[vuex] unknown getter: " + val);
        return;
      }
      return this.$store.getters[val];
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res;
});

/**
     * Reduce the code which written in Vue.js for dispatch the action
     * @param {String} [namespace] - Module's namespace
     * @param {Object|Array} actions # Object's item can be a function which accept `dispatch` function as the first param, it can accept anthor params. You can dispatch action and do any other things in this function. specially, You need to pass anthor params from the mapped function.
     * @return {Object}
     */exports.mapGetters = mapGetters;
var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  if ( true && !isValidMap(actions)) {
    console.error('[vuex] mapActions: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction() {
      var args = [],len = arguments.length;
      while (len--) {args[len] = arguments[len];}

      // get dispatch function from store
      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return;
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function' ?
      val.apply(this, [dispatch].concat(args)) :
      dispatch.apply(this.$store, [val].concat(args));
    };
  });
  return res;
});

/**
     * Rebinding namespace param for mapXXX function in special scoped, and return them by simple object
     * @param {String} namespace
     * @return {Object}
     */exports.mapActions = mapActions;
var createNamespacedHelpers = function createNamespacedHelpers(namespace) {return {
    mapState: mapState.bind(null, namespace),
    mapGetters: mapGetters.bind(null, namespace),
    mapMutations: mapMutations.bind(null, namespace),
    mapActions: mapActions.bind(null, namespace) };
};

/**
    * Normalize the map
    * normalizeMap([1, 2, 3]) => [ { key: 1, val: 1 }, { key: 2, val: 2 }, { key: 3, val: 3 } ]
    * normalizeMap({a: 1, b: 2, c: 3}) => [ { key: 'a', val: 1 }, { key: 'b', val: 2 }, { key: 'c', val: 3 } ]
    * @param {Array|Object} map
    * @return {Object}
    */exports.createNamespacedHelpers = createNamespacedHelpers;
function normalizeMap(map) {
  if (!isValidMap(map)) {
    return [];
  }
  return Array.isArray(map) ?
  map.map(function (key) {return { key: key, val: key };}) :
  Object.keys(map).map(function (key) {return { key: key, val: map[key] };});
}

/**
   * Validate whether given map is valid or not
   * @param {*} map
   * @return {Boolean}
   */
function isValidMap(map) {
  return Array.isArray(map) || isObject(map);
}

/**
   * Return a function expect two param contains namespace and map. it will normalize the namespace and then the param's function will handle the new namespace and the map.
   * @param {Function} fn
   * @return {Function}
   */
function normalizeNamespace(fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map);
  };
}

/**
   * Search a special module from store by namespace. if module not exist, print error message.
   * @param {Object} store
   * @param {String} helper
   * @param {String} namespace
   * @return {Object}
   */
function getModuleByNamespace(store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if ( true && !module) {
    console.error("[vuex] module namespace not found in " + helper + "(): " + namespace);
  }
  return module;
}

var index = {
  Store: Store,
  install: install,
  version: '3.4.0',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers };var _default =


index;exports.default = _default;

/***/ }),
/* 46 */
/*!*******************************************************************************!*\
  !*** /Users/wangjunhao/Documents/HBuilderProjects/uni-app-demo/common/api.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.login = login;exports.getJob = getJob;exports.getWO = getWO;exports.getProduceWorkContent = getProduceWorkContent;exports.saveProduceWorkContent = saveProduceWorkContent;exports.submitProduceWorkContent = submitProduceWorkContent;exports.getProduceWorkContentTree = getProduceWorkContentTree;exports.getLineContent = getLineContent;exports.saveLineContent = saveLineContent;exports.submitLineContent = submitLineContent;exports.getBreakdownStaff = getBreakdownStaff;exports.getBreakdownStaffBZ = getBreakdownStaffBZ;exports.getBreakdownSystem = getBreakdownSystem;exports.getBreakdownContent = getBreakdownContent;exports.getBreakdownPointListContent = getBreakdownPointListContent;exports.saveBreakdownContent = saveBreakdownContent;exports.submitBreakdownContent = submitBreakdownContent;exports.getBreakdownPointContent = getBreakdownPointContent;exports.saveBreakdownPointContent = saveBreakdownPointContent;exports.deleteBreakdownPointContent = deleteBreakdownPointContent;exports.rejectBreakdownPointContent = rejectBreakdownPointContent;exports.getElectromechanicalContent = getElectromechanicalContent;exports.getElectromechanicalBdzTree = getElectromechanicalBdzTree;exports.getElectromechanicalZgrTree = getElectromechanicalZgrTree;exports.releaseElectromechanical = releaseElectromechanical;exports.submitElectromechanical = submitElectromechanical;exports.readOverElectromechanical = readOverElectromechanical;exports.getElectromechanicalBjrTree = getElectromechanicalBjrTree;exports.getBaseElectromechanicalContent = getBaseElectromechanicalContent;exports.releaseBaseElectromechanical = releaseBaseElectromechanical;exports.submitBaseElectromechanical = submitBaseElectromechanical;exports.getEquipmentContent = getEquipmentContent;exports.saveEquipmentContent = saveEquipmentContent;exports.submitEquipmentContent = submitEquipmentContent;exports.delayProduceWorkContent = delayProduceWorkContent;exports.auditDelayProduceWorkContent = auditDelayProduceWorkContent;exports.getProfessionalLedgerTree = getProfessionalLedgerTree;exports.rejectOrPassProduceWorkContent = rejectOrPassProduceWorkContent;exports.queryAttachementByUUID = queryAttachementByUUID;exports.getAttachmentByMid = getAttachmentByMid;exports.reallySaveFile = reallySaveFile;exports.deleteFile = deleteFile;exports.getVideos = getVideos;exports.releaseVideo = releaseVideo;exports.deleteVideo = deleteVideo;exports.myVideo = myVideo;exports.getLikeVideos = getLikeVideos;exports.isLikeVideo = isLikeVideo;exports.addOrDeleteLikeVideo = addOrDeleteLikeVideo;exports.editAvatar = editAvatar;exports.getUserInfo = getUserInfo;exports.hadSeen = hadSeen;exports.getVideoTypeList = getVideoTypeList;exports.getFansOrAttentionList = getFansOrAttentionList;exports.attentionYesOrNo = attentionYesOrNo;exports.searchVideos = searchVideos;exports.getDeviceInfo = getDeviceInfo;exports.getProduceSummaryInfo = getProduceSummaryInfo;exports.getProduceSummaryFiles = getProduceSummaryFiles;exports.updateAndBindNFC = updateAndBindNFC;exports.getDeviceInfoByNfc = getDeviceInfoByNfc;exports.getDeviceList = getDeviceList;exports.getAllTechTypeTree = getAllTechTypeTree;exports.getAllTechTypeTreeById = getAllTechTypeTreeById;exports.createEquipmentWO = createEquipmentWO;exports.getEquipmentStandard = getEquipmentStandard;exports.deleteEquipmentWO = deleteEquipmentWO;exports.getBreakdownListBySbzj = getBreakdownListBySbzj;var _request = _interopRequireDefault(__webpack_require__(/*! ./request.js */ 47));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}\nfunction login(data) {\n  return (0, _request.default)({\n    url: '/sbjsgl/base.lcdd.loginVerification.biz.ext',\n    method: 'GET',\n    data: data });\n\n}\n// 获取用户信息\nfunction getJob(data) {\n  return (0, _request.default)({\n    url: '/com.hbky.basedata.ProfessionalLedger.gwkbUser.biz.ext',\n    method: 'GET',\n    data: data });\n\n}\n// 获取运行中的工单\nfunction getWO(data) {\n  return (0, _request.default)({\n    url: '/com.hbky.basedata.SystemInfo.queryWorksOrderPerson.biz.ext',\n    method: 'GET',\n    data: data });\n\n}\n// 获取生产系统执行步骤内容\nfunction getProduceWorkContent(data) {\n  return (0, _request.default)({\n    url: '/com.hbky.basedata.SystemInfo.queryWorkContent.biz.ext',\n    method: 'GET',\n    data: data });\n\n}\n// 保存生产系统工单步骤 \nfunction saveProduceWorkContent(data) {\n  return (0, _request.default)({\n    url: '/com.hbky.basedata.SystemInfo.InsertWorkerContent.biz.ext',\n    method: 'POST',\n    data: data });\n\n}\n// 提交生产系统工单\nfunction submitProduceWorkContent(data) {\n  return (0, _request.default)({\n    url: '/com.hbky.basedata.SystemInfo.submitWorkOrder.biz.ext',\n    method: 'POST',\n    data: data });\n\n}\n\n// 生产系统工单审核人员树数据\nfunction getProduceWorkContentTree(data) {\n  return (0, _request.default)({\n    url: '/com.hbky.basedata.ProfessionalLedger.querybdkqz.biz.ext',\n    method: 'POST',\n    data: data });\n\n}\n// ====================== 以下 通讯线路 ====================\n\n// 获取通讯线路执行步骤内容\nfunction getLineContent(data) {\n  return (0, _request.default)({\n    url: '/com.hbky.basedata.LineAccount.queryWorkContent.biz.ext',\n    method: 'GET',\n    data: data });\n\n}\n\n// 保存通讯线路工单步骤 \nfunction saveLineContent(data) {\n  return (0, _request.default)({\n    url: '/com.hbky.basedata.SystemInfo.InsertWorkerContent.biz.ext',\n    method: 'POST',\n    data: data });\n\n}\n\n// 提交通讯线路工单\nfunction submitLineContent(data) {\n  return (0, _request.default)({\n    url: '/com.hbky.basedata.SystemInfo.submitWorkOrder.biz.ext',\n    method: 'POST',\n    data: data });\n\n}\n// ====================== 以下 故障 =======================\n// 获取故障维修人员_选择树数据\nfunction getBreakdownStaff(data) {\n  return (0, _request.default)({\n    url: '/com.hbky.basedata.ProfessionalLedger.queryBjr.biz.ext',\n    method: 'GET',\n    data: data });\n\n}\n\n// 36.获取故障维修人员班组_选择树数据 \t\t请求参数 maindeptid：单位或科区id（不传的话获取登录人所在单位id）\n// 返回值 ：systemInfo：数据信息\nfunction getBreakdownStaffBZ(data) {\n  return (0, _request.default)({\n    url: '/com.hbky.basedata.ProfessionalLedger.queryBjrBZ.biz.ext',\n    method: 'GET',\n    data: data });\n\n}\n\n// 38.故障工单生产系统选择树数据\nfunction getBreakdownSystem(data) {\n  return (0, _request.default)({\n    url: '/com.hbky.basedata.SystemInfo.queryAllSystemInfo.biz.ext',\n    method: 'POST',\n    data: data });\n\n}\n\n// 获取故障工单信息\nfunction getBreakdownContent(data) {\n  return (0, _request.default)({\n    url: '/com.hbky.basedata.bdFault.getFault.biz.ext',\n    method: 'POST',\n    data: data });\n\n}\n\n// 获取故障工单故障点数据\nfunction getBreakdownPointListContent(data) {\n  return (0, _request.default)({\n    url: '/com.hbky.basedata.bdFault.getMaintains.biz.ext',\n    method: 'POST',\n    data: data });\n\n}\n\n// 保存故障工单信息\nfunction saveBreakdownContent(data) {\n  return (0, _request.default)({\n    url: '/com.hbky.basedata.bdFault.saveFault.biz.ext',\n    method: 'POST',\n    data: data });\n\n}\n\n// 提交故障工单信息\nfunction submitBreakdownContent(data) {\n  return (0, _request.default)({\n    url: '/com.hbky.basedata.bdFault.saveFaultTj.biz.ext',\n    method: 'POST',\n    data: data });\n\n}\n\n// 获取故障点数据\nfunction getBreakdownPointContent(data) {\n  return (0, _request.default)({\n    url: '/com.hbky.basedata.bdFault.getMaintain.biz.ext',\n    method: 'POST',\n    data: data });\n\n}\n\n// 保存故障点数据\nfunction saveBreakdownPointContent(data) {\n  return (0, _request.default)({\n    url: '/com.hbky.basedata.bdFault.saveMaintain.biz.ext',\n    method: 'POST',\n    data: data });\n\n}\n\n// 删除故障点数据\nfunction deleteBreakdownPointContent(data) {\n  return (0, _request.default)({\n    url: '/com.hbky.basedata.bdFault.deleteMaintain.biz.ext',\n    method: 'POST',\n    data: data });\n\n}\n\n// 驳回故障工单\nfunction rejectBreakdownPointContent(data) {\n  return (0, _request.default)({\n    url: '/com.hbky.basedata.bdFault.saveFaultBh.biz.ext',\n    method: 'POST',\n    data: data });\n\n}\n\n// ========================================= 以下 机电隐患和机电基层隐患接口 ========================================\n// 机电隐患工单查询\nfunction getElectromechanicalContent(data) {\n  return (0, _request.default)({\n    url: '/com.hbky.basedata.JDYH.queryYH.biz.ext',\n    method: 'POST',\n    data: data });\n\n}\n\n// 获取机电班队长_选择树数据\nfunction getElectromechanicalBdzTree(data) {\n  return (0, _request.default)({\n    url: '/com.hbky.basedata.JDYH.queryBjrbdz.biz.ext',\n    method: 'POST',\n    data: data });\n\n}\n\n\n// 获取机电整改人_选择树数据\nfunction getElectromechanicalZgrTree(data) {\n  return (0, _request.default)({\n    url: '/com.hbky.basedata.JDYH.queryBjrzgr.biz.ext',\n    method: 'POST',\n    data: data });\n\n}\n\n// 机电隐患工单科区长发布\nfunction releaseElectromechanical(data) {\n  return (0, _request.default)({\n    url: '/com.hbky.basedata.JDYH.fbyh.biz.ext',\n    method: 'POST',\n    data: data });\n\n}\n\n\n// 机电隐患班组长整改提交完成 \nfunction submitElectromechanical(data) {\n  return (0, _request.default)({\n    url: '/com.hbky.basedata.JDYH.zgyh.biz.ext',\n    method: 'POST',\n    data: data });\n\n}\n\n// 机电隐患工单阅办提交  短语： read over：审阅\nfunction readOverElectromechanical(data) {\n  return (0, _request.default)({\n    url: '/com.hbky.basedata.JDYH.createYHYB.biz.ext',\n    method: 'POST',\n    data: data });\n\n}\n\n// 获取隐患阅办人提交选择人数据_选择树数据\nfunction getElectromechanicalBjrTree(data) {\n  return (0, _request.default)({\n    url: '/com.hbky.basedata.JDYH.queryBjr.biz.ext',\n    method: 'POST',\n    data: data });\n\n}\n\n\n// 机电基层隐患工单查询\nfunction getBaseElectromechanicalContent(data) {\n  return (0, _request.default)({\n    url: '/com.hbky.basedata.JDYHJC.queryYH.biz.ext',\n    method: 'POST',\n    data: data });\n\n}\n\n\n// 机电基层隐患工单科区长发布\nfunction releaseBaseElectromechanical(data) {\n  return (0, _request.default)({\n    url: '/com.hbky.basedata.JDYHJC.fbyh.biz.ext',\n    method: 'POST',\n    data: data });\n\n}\n\n// 机电基层隐患班组长整改提交完成\nfunction submitBaseElectromechanical(data) {\n  return (0, _request.default)({\n    url: '/com.hbky.basedata.JDYHJC.zgyh.biz.ext',\n    method: 'POST',\n    data: data });\n\n}\n\n// ========================================= 以下 设备巡检 接口 ========================================\n\n// 设备巡检工单步骤查询\nfunction getEquipmentContent(data) {\n  return (0, _request.default)({\n    url: '/com.hbky.basedata.jdjssbxj.getPollingApp.biz.ext',\n    method: 'POST',\n    data: data });\n\n}\n// 设备巡检工单保存\nfunction saveEquipmentContent(data) {\n  return (0, _request.default)({\n    url: '/com.hbky.basedata.jdjssbxj.saveBdCardSjzxApp.biz.ext',\n    method: 'POST',\n    data: data });\n\n}\n// 设备巡检工单提交\nfunction submitEquipmentContent(data) {\n  return (0, _request.default)({\n    url: '/com.hbky.basedata.jdjssbxj.addBdCardSjzxApp.biz.ext',\n    method: 'POST',\n    data: data });\n\n}\n// ========================================= 以下 延期 和 延期审核 接口 ========================================\n// 生产系统过期工单延期申请\nfunction delayProduceWorkContent(data) {\n  return (0, _request.default)({\n    url: '/com.hbky.basedata.SystemInfo.yqsqWorkOrder.biz.ext',\n    method: 'GET',\n    data: data });\n\n}\n\n// 生产系统过期工单延期审核\nfunction auditDelayProduceWorkContent(data) {\n  return (0, _request.default)({\n    url: '/com.hbky.basedata.SystemInfo.yqshWorkOrder.biz.ext',\n    method: 'GET',\n    data: data });\n\n}\n\n// 获取科区长人员_选择树数据  （可以通用，在故障维修和重修时也用到了？）\nfunction getProfessionalLedgerTree(data) {\n  return (0, _request.default)({\n    url: '/com.hbky.basedata.ProfessionalLedger.querykqz.biz.ext',\n    method: 'POST',\n    data: data });\n\n}\n\n// 生产系统工单审核退回接口\nfunction rejectOrPassProduceWorkContent(data) {\n  return (0, _request.default)({\n    url: '/com.hbky.basedata.SystemInfo.checkSubmit.biz.ext',\n    method: 'POST',\n    data: data });\n\n}\n// 待做 线路隐患延期和审核\n\n// ========================================= 以下 文件相关接口 ========================================\n// 通过uuid查询文档图片列表\nfunction queryAttachementByUUID(data) {\n  return (0, _request.default)({\n    url: '/com.lmkh.scgl.base.multiFileUploadBiz.queryAttachementByUUID.biz.ext',\n    method: 'GET',\n    data: data });\n\n}\n\n// 通过主键获取文档图片信息\nfunction getAttachmentByMid(data) {\n  return (0, _request.default)({\n    url: '/com.lmkh.scgl.base.multiFileUploadBiz.getAttachmentByMid.biz.ext',\n    method: 'GET',\n    data: data });\n\n}\n\n// 持久化保存上传的文件\nfunction reallySaveFile(data) {\n  return (0, _request.default)({\n    url: '/FileUpLoadByYearServlet',\n    method: 'GET',\n    data: data });\n\n}\n\n// 删除文件\nfunction deleteFile(data) {\n  return (0, _request.default)({\n    url: '/FileUpLoadByYearServlet',\n    method: 'GET',\n    data: data });\n\n}\n\n\n\n//================================  视频相关  ====================================\n// 49.淮矿抖音视频播放接口 首页获取视频列表接口\nfunction getVideos(data) {\n  return (0, _request.default)({\n    url: '/com.hbky.basedata.HKDY.querySPALL.biz.ext',\n    method: 'POST',\n    data: data });\n\n}\n\n// 视频发布修改接口\nfunction releaseVideo(data) {\n  return (0, _request.default)({\n    url: '/com.hbky.basedata.HKDY.saveSPXX.biz.ext',\n    method: 'POST',\n    data: data });\n\n}\n\n// 视频删除接口\nfunction deleteVideo(data) {\n  return (0, _request.default)({\n    url: '/com.hbky.basedata.HKDY.deleteSPXX.biz.ext',\n    method: 'POST',\n    data: data });\n\n}\n\n// 51.淮矿抖音我的视频（用户发布的视频）接口\nfunction myVideo(data) {\n  return (0, _request.default)({\n    url: '/com.hbky.basedata.HKDY.queryUSERWDSP.biz.ext',\n    method: 'POST',\n    data: data });\n\n}\n\n// 50.淮矿抖音视频收藏接口\nfunction getLikeVideos(data) {\n  return (0, _request.default)({\n    url: '/com.hbky.basedata.HKDY.queryUSERSCSP.biz.ext',\n    method: 'POST',\n    data: data });\n\n}\n\n// 52.淮矿抖音是否收藏判断接口\nfunction isLikeVideo(data) {\n  return (0, _request.default)({\n    url: '/com.hbky.basedata.HKDY.sfSCSP.biz.ext',\n    method: 'POST',\n    data: data });\n\n}\n\n// 54.淮矿抖音添加移除收藏接口\nfunction addOrDeleteLikeVideo(data) {\n  return (0, _request.default)({\n    url: '/com.hbky.basedata.HKDY.addUSERSPSC.biz.ext',\n    method: 'POST',\n    data: data });\n\n}\n\n// 55.淮矿抖音修改头像接口  请求参数 ： mid 头像图片主键\nfunction editAvatar(data) {\n  return (0, _request.default)({\n    url: '/com.hbky.basedata.HKDY.saveYHTX.biz.ext',\n    method: 'POST',\n    data: data });\n\n}\n\n// 56.淮矿抖音用户信息查询接口 请求参数 ： userid 用户工号(string)（为空查询本人信息，传值为所传用户信息）\nfunction getUserInfo(data) {\n  return (0, _request.default)({\n    url: '/com.hbky.basedata.HKDY.getYHXX.biz.ext',\n    method: 'POST',\n    data: data });\n\n}\n\n// 57.淮矿抖音用户记录已刷视频接口\nfunction hadSeen(data) {\n  return (0, _request.default)({\n    url: '/com.hbky.basedata.HKDY.YSSP.biz.ext',\n    method: 'POST',\n    data: data });\n\n}\n\n// 58.淮矿抖音视频类型接口\nfunction getVideoTypeList(data) {\n  return (0, _request.default)({\n    url: '/com.hbky.bps.FunctionUtil.getDictByDictID.biz.ext',\n    method: 'POST',\n    data: data });\n\n}\n\n\n// 59.淮矿抖音我关注的人和关注我的人查询接口    \t\t参数：type int类型（为空查询我关注的人，传值1为关注我的人）\nfunction getFansOrAttentionList(data) {\n  return (0, _request.default)({\n    url: '/com.hbky.basedata.HKDY.queryWDGZ.biz.ext',\n    method: 'POST',\n    data: data });\n\n}\n\n// 60.淮矿抖音关注用户取消关注接口    \t\t请求参数 ： type 类型（为空关注用户，传值1为取消关注）\n// Userid 关注（取消）人工号\nfunction attentionYesOrNo(data) {\n  return (0, _request.default)({\n    url: '/com.hbky.basedata.HKDY.YHGZQX.biz.ext',\n    method: 'POST',\n    data: data });\n\n}\n\n// 61.淮矿抖音搜索视频接口   \t\t请求参数 ： page 页码，limit 条数，title 视频标签、视频简介、视频所属人姓名、时间模糊搜索，工号为精确搜索\nfunction searchVideos(data) {\n  return (0, _request.default)({\n    url: '/com.hbky.basedata.HKDY.queryHKDYSPApp.biz.ext',\n    method: 'POST',\n    data: data });\n\n}\n\n// 74.设备信息（是否可看）接口    \t\t请求参数 ： code:设备主键\nfunction getDeviceInfo(data) {\n  return (0, _request.default)({\n    url: '/com.hbky.basedata.EquipmentLedger.querytycisf.biz.ext',\n    method: 'POST',\n    data: data });\n\n}\n\n// 83.生产系统查询总览展示接口\t \t\t请求参数 ： bm:系统编码\n// 返回值 ：data  所有参数值\n// data1  系统信息\n// data2  有层级的父节点\n// data3  组成父节点 \n// data4  组成子节点\nfunction getProduceSummaryInfo(data) {\n  return (0, _request.default)({\n    url: '/com.hbky.basedata.SystemInfo.queryScxtZlCs.biz.ext',\n    method: 'POST',\n    data: data });\n\n}\n\n// 84.生产系统总览文档接口\t \t\t请求参数 ： uuid:系统编码\n// 返回值 ：uploadFiles:文档信息\nfunction getProduceSummaryFiles(data) {\n  return (0, _request.default)({\n    url: '/com.lmkh.scgl.base.multiFileUploadBiz.queryScxtZlFile.biz.ext',\n    method: 'POST',\n    data: data });\n\n}\n\n// 88.更新设备NFC编号接口    \t\t请求参数 ： zj:设备主键，nfcid：nfc编号\n// 返回值 ：f:1绑定成功，f:2已绑定其他设备，f:3已绑定该设备\nfunction updateAndBindNFC(data) {\n  return (0, _request.default)({\n    url: '/com.hbky.basedata.EquipmentLedger.updateBdCardNFCUUID.biz.ext',\n    method: 'POST',\n    data: data });\n\n}\n\n// \n// 89.通过NFC编码查设备信息（是否可看）接口\t\t\t请求参数 ： code:nfc编码\n// 返回值 ：f:0 设备不可看，f:2 nfc未绑定设备 ; bdcardinfo：设备信息\nfunction getDeviceInfoByNfc(data) {\n  return (0, _request.default)({\n    url: '/com.hbky.basedata.EquipmentLedger.querytycisfNFC.biz.ext',\n    method: 'POST',\n    data: data });\n\n}\n\n// 90.通过技术编码查设备列表接口 \t请求参数 ： page:页码，limit:条数，lbbm:技术类别编码，sbmc:设备名称\nfunction getDeviceList(data) {\n  return (0, _request.default)({\n    url: '/com.hbky.basedata.EquipmentLedger.queryAllBasicJCAPP.biz.ext',\n    method: 'POST',\n    data: data });\n\n}\n\n// 91.设备技术类别树数据 \t请求参数 ： page:页码，limit:条数，lbbm:技术类别编码，sbmc:设备名称\nfunction getAllTechTypeTree(data) {\n  return (0, _request.default)({\n    url: '/com.hbky.basedata.TechType.queryAllTechTypeAPP.biz.ext',\n    method: 'POST',\n    data: data });\n\n}\n\n// 92.设备技术类别树数据（分层次查询） \t请求参数 ：id 父级id\nfunction getAllTechTypeTreeById(data) {\n  return (0, _request.default)({\n    url: '/com.hbky.basedata.TechType.queryAllTechType1.biz.ext',\n    method: 'POST',\n    data: data });\n\n}\n\n// 93.设备巡检生成巡检工单  \t请求参数 ：sbzj 设备主键，lx 传固定值‘设备’\n// f：2 成功，zj：任务主键，sbzj：设备主键\nfunction createEquipmentWO(data) {\n  return (0, _request.default)({\n    url: '/com.hbky.basedata.EquipmentLedger.createBdCardPollingWorkXJ.biz.ext',\n    method: 'POST',\n    data: data });\n\n}\n\n// 94.设备巡检标准查询\t\t请求参数 ：sbzj 设备主键\nfunction getEquipmentStandard(data) {\n  return (0, _request.default)({\n    url: '/com.hbky.basedata.jdjssbxj.queryBdCardSjzxbzs.biz.ext',\n    method: 'POST',\n    data: data });\n\n}\n\n// 95.设备巡检工单删除\t\t请求参数 ：zj 工单主键\nfunction deleteEquipmentWO(data) {\n  return (0, _request.default)({\n    url: '/com.hbky.basedata.EquipmentLedger.deleteTycCardXjjhrw.biz.ext',\n    method: 'POST',\n    data: data });\n\n}\n\n// 96.通过设备主键查询故障列表接口  \t 请求参数 ：Page:页码，limit:条数，sbzj:设备主键\nfunction getBreakdownListBySbzj(data) {\n  return (0, _request.default)({\n    url: '/com.hbky.basedata.bdFault.queryFaultWorksweixin.biz.ext',\n    method: 'POST',\n    data: data });\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tbW9uL2FwaS5qcyJdLCJuYW1lcyI6WyJsb2dpbiIsImRhdGEiLCJ1cmwiLCJtZXRob2QiLCJnZXRKb2IiLCJnZXRXTyIsImdldFByb2R1Y2VXb3JrQ29udGVudCIsInNhdmVQcm9kdWNlV29ya0NvbnRlbnQiLCJzdWJtaXRQcm9kdWNlV29ya0NvbnRlbnQiLCJnZXRQcm9kdWNlV29ya0NvbnRlbnRUcmVlIiwiZ2V0TGluZUNvbnRlbnQiLCJzYXZlTGluZUNvbnRlbnQiLCJzdWJtaXRMaW5lQ29udGVudCIsImdldEJyZWFrZG93blN0YWZmIiwiZ2V0QnJlYWtkb3duU3RhZmZCWiIsImdldEJyZWFrZG93blN5c3RlbSIsImdldEJyZWFrZG93bkNvbnRlbnQiLCJnZXRCcmVha2Rvd25Qb2ludExpc3RDb250ZW50Iiwic2F2ZUJyZWFrZG93bkNvbnRlbnQiLCJzdWJtaXRCcmVha2Rvd25Db250ZW50IiwiZ2V0QnJlYWtkb3duUG9pbnRDb250ZW50Iiwic2F2ZUJyZWFrZG93blBvaW50Q29udGVudCIsImRlbGV0ZUJyZWFrZG93blBvaW50Q29udGVudCIsInJlamVjdEJyZWFrZG93blBvaW50Q29udGVudCIsImdldEVsZWN0cm9tZWNoYW5pY2FsQ29udGVudCIsImdldEVsZWN0cm9tZWNoYW5pY2FsQmR6VHJlZSIsImdldEVsZWN0cm9tZWNoYW5pY2FsWmdyVHJlZSIsInJlbGVhc2VFbGVjdHJvbWVjaGFuaWNhbCIsInN1Ym1pdEVsZWN0cm9tZWNoYW5pY2FsIiwicmVhZE92ZXJFbGVjdHJvbWVjaGFuaWNhbCIsImdldEVsZWN0cm9tZWNoYW5pY2FsQmpyVHJlZSIsImdldEJhc2VFbGVjdHJvbWVjaGFuaWNhbENvbnRlbnQiLCJyZWxlYXNlQmFzZUVsZWN0cm9tZWNoYW5pY2FsIiwic3VibWl0QmFzZUVsZWN0cm9tZWNoYW5pY2FsIiwiZ2V0RXF1aXBtZW50Q29udGVudCIsInNhdmVFcXVpcG1lbnRDb250ZW50Iiwic3VibWl0RXF1aXBtZW50Q29udGVudCIsImRlbGF5UHJvZHVjZVdvcmtDb250ZW50IiwiYXVkaXREZWxheVByb2R1Y2VXb3JrQ29udGVudCIsImdldFByb2Zlc3Npb25hbExlZGdlclRyZWUiLCJyZWplY3RPclBhc3NQcm9kdWNlV29ya0NvbnRlbnQiLCJxdWVyeUF0dGFjaGVtZW50QnlVVUlEIiwiZ2V0QXR0YWNobWVudEJ5TWlkIiwicmVhbGx5U2F2ZUZpbGUiLCJkZWxldGVGaWxlIiwiZ2V0VmlkZW9zIiwicmVsZWFzZVZpZGVvIiwiZGVsZXRlVmlkZW8iLCJteVZpZGVvIiwiZ2V0TGlrZVZpZGVvcyIsImlzTGlrZVZpZGVvIiwiYWRkT3JEZWxldGVMaWtlVmlkZW8iLCJlZGl0QXZhdGFyIiwiZ2V0VXNlckluZm8iLCJoYWRTZWVuIiwiZ2V0VmlkZW9UeXBlTGlzdCIsImdldEZhbnNPckF0dGVudGlvbkxpc3QiLCJhdHRlbnRpb25ZZXNPck5vIiwic2VhcmNoVmlkZW9zIiwiZ2V0RGV2aWNlSW5mbyIsImdldFByb2R1Y2VTdW1tYXJ5SW5mbyIsImdldFByb2R1Y2VTdW1tYXJ5RmlsZXMiLCJ1cGRhdGVBbmRCaW5kTkZDIiwiZ2V0RGV2aWNlSW5mb0J5TmZjIiwiZ2V0RGV2aWNlTGlzdCIsImdldEFsbFRlY2hUeXBlVHJlZSIsImdldEFsbFRlY2hUeXBlVHJlZUJ5SWQiLCJjcmVhdGVFcXVpcG1lbnRXTyIsImdldEVxdWlwbWVudFN0YW5kYXJkIiwiZGVsZXRlRXF1aXBtZW50V08iLCJnZXRCcmVha2Rvd25MaXN0QnlTYnpqIl0sIm1hcHBpbmdzIjoidzRHQUFBLG1GO0FBQ08sU0FBU0EsS0FBVCxDQUFlQyxJQUFmLEVBQXFCO0FBQzNCLFNBQU8sc0JBQVE7QUFDZEMsT0FBRyxFQUFFLDZDQURTO0FBRWRDLFVBQU0sRUFBRSxLQUZNO0FBR2RGLFFBQUksRUFBSkEsSUFIYyxFQUFSLENBQVA7O0FBS0E7QUFDRDtBQUNPLFNBQVNHLE1BQVQsQ0FBZ0JILElBQWhCLEVBQXNCO0FBQzVCLFNBQU8sc0JBQVE7QUFDZEMsT0FB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T0FBRyxFQUFFLHNFQURTO0FBRWRDLFVBQU0sRUFBRSxNQUZNO0FBR2RGLFFBQUksRUFBSkEsSUFIYyxFQUFSLENBQVA7O0FBS0E7O0FBRUQ7QUFDTyxTQUFTbUUsb0JBQVQsQ0FBOEJuRSxJQUE5QixFQUFvQztBQUMxQyxTQUFPLHNCQUFRO0FBQ2RDLE9BQUcsRUFBRSx3REFEUztBQUVkQyxVQUFNLEVBQUUsTUFGTTtBQUdkRixRQUFJLEVBQUpBLElBSGMsRUFBUixDQUFQOztBQUtBOztBQUVEO0FBQ08sU0FBU29FLGlCQUFULENBQTJCcEUsSUFBM0IsRUFBaUM7QUFDdkMsU0FBTyxzQkFBUTtBQUNkQyxPQUFHLEVBQUUsZ0VBRFM7QUFFZEMsVUFBTSxFQUFFLE1BRk07QUFHZEYsUUFBSSxFQUFKQSxJQUhjLEVBQVIsQ0FBUDs7QUFLQTs7QUFFRDtBQUNPLFNBQVNxRSxzQkFBVCxDQUFnQ3JFLElBQWhDLEVBQXNDO0FBQzVDLFNBQU8sc0JBQVE7QUFDZEMsT0FBRyxFQUFFLDBEQURTO0FBRWRDLFVBQU0sRUFBRSxNQUZNO0FBR2RGLFFBQUksRUFBSkEsSUFIYyxFQUFSLENBQVA7O0FBS0EiLCJmaWxlIjoiNDYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVxdWVzdCBmcm9tICcuL3JlcXVlc3QuanMnXG5leHBvcnQgZnVuY3Rpb24gbG9naW4oZGF0YSkge1xuXHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0dXJsOiAnL3NianNnbC9iYXNlLmxjZGQubG9naW5WZXJpZmljYXRpb24uYml6LmV4dCcsXG5cdFx0bWV0aG9kOiAnR0VUJyxcblx0XHRkYXRhXG5cdH0pXG59XG4vLyDojrflj5bnlKjmiLfkv6Hmga9cbmV4cG9ydCBmdW5jdGlvbiBnZXRKb2IoZGF0YSkge1xuXHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0dXJsOiAnL2NvbS5oYmt5LmJhc2VkYXRhLlByb2Zlc3Npb25hbExlZGdlci5nd2tiVXNlci5iaXouZXh0Jyxcblx0XHRtZXRob2Q6ICdHRVQnLFxuXHRcdGRhdGFcblx0fSlcbn1cbi8vIOiOt+WPlui/kOihjOS4reeahOW3peWNlVxuZXhwb3J0IGZ1bmN0aW9uIGdldFdPKGRhdGEpIHtcblx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdHVybDogJy9jb20uaGJreS5iYXNlZGF0YS5TeXN0ZW1JbmZvLnF1ZXJ5V29ya3NPcmRlclBlcnNvbi5iaXouZXh0Jyxcblx0XHRtZXRob2Q6ICdHRVQnLFxuXHRcdGRhdGFcblx0fSlcbn1cbi8vIOiOt+WPlueUn+S6p+ezu+e7n+aJp+ihjOatpemqpOWGheWuuVxuZXhwb3J0IGZ1bmN0aW9uIGdldFByb2R1Y2VXb3JrQ29udGVudChkYXRhKSB7XG5cdHJldHVybiByZXF1ZXN0KHtcblx0XHR1cmw6ICcvY29tLmhia3kuYmFzZWRhdGEuU3lzdGVtSW5mby5xdWVyeVdvcmtDb250ZW50LmJpei5leHQnLFxuXHRcdG1ldGhvZDogJ0dFVCcsXG5cdFx0ZGF0YVxuXHR9KVxufVxuLy8g5L+d5a2Y55Sf5Lqn57O757uf5bel5Y2V5q2l6aqkIFxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVQcm9kdWNlV29ya0NvbnRlbnQoZGF0YSkge1xuXHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0dXJsOiAnL2NvbS5oYmt5LmJhc2VkYXRhLlN5c3RlbUluZm8uSW5zZXJ0V29ya2VyQ29udGVudC5iaXouZXh0Jyxcblx0XHRtZXRob2Q6ICdQT1NUJyxcblx0XHRkYXRhXG5cdH0pXG59XG4vLyDmj5DkuqTnlJ/kuqfns7vnu5/lt6XljZVcbmV4cG9ydCBmdW5jdGlvbiBzdWJtaXRQcm9kdWNlV29ya0NvbnRlbnQoZGF0YSkge1xuXHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0dXJsOiAnL2NvbS5oYmt5LmJhc2VkYXRhLlN5c3RlbUluZm8uc3VibWl0V29ya09yZGVyLmJpei5leHQnLFxuXHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdGRhdGFcblx0fSlcbn1cblxuLy8g55Sf5Lqn57O757uf5bel5Y2V5a6h5qC45Lq65ZGY5qCR5pWw5o2uXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvZHVjZVdvcmtDb250ZW50VHJlZShkYXRhKSB7XG5cdHJldHVybiByZXF1ZXN0KHtcblx0XHR1cmw6ICcvY29tLmhia3kuYmFzZWRhdGEuUHJvZmVzc2lvbmFsTGVkZ2VyLnF1ZXJ5YmRrcXouYml6LmV4dCcsXG5cdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0ZGF0YVxuXHR9KVxufVxuLy8gPT09PT09PT09PT09PT09PT09PT09PSDku6XkuIsg6YCa6K6v57q/6LevID09PT09PT09PT09PT09PT09PT09XG5cbi8vIOiOt+WPlumAmuiur+e6v+i3r+aJp+ihjOatpemqpOWGheWuuVxuZXhwb3J0IGZ1bmN0aW9uIGdldExpbmVDb250ZW50KGRhdGEpIHtcblx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdHVybDogJy9jb20uaGJreS5iYXNlZGF0YS5MaW5lQWNjb3VudC5xdWVyeVdvcmtDb250ZW50LmJpei5leHQnLFxuXHRcdG1ldGhvZDogJ0dFVCcsXG5cdFx0ZGF0YVxuXHR9KVxufVxuXG4vLyDkv53lrZjpgJrorq/nur/ot6/lt6XljZXmraXpqqQgXG5leHBvcnQgZnVuY3Rpb24gc2F2ZUxpbmVDb250ZW50KGRhdGEpIHtcblx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdHVybDogJy9jb20uaGJreS5iYXNlZGF0YS5TeXN0ZW1JbmZvLkluc2VydFdvcmtlckNvbnRlbnQuYml6LmV4dCcsXG5cdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0ZGF0YVxuXHR9KVxufVxuXG4vLyDmj5DkuqTpgJrorq/nur/ot6/lt6XljZVcbmV4cG9ydCBmdW5jdGlvbiBzdWJtaXRMaW5lQ29udGVudChkYXRhKSB7XG5cdHJldHVybiByZXF1ZXN0KHtcblx0XHR1cmw6ICcvY29tLmhia3kuYmFzZWRhdGEuU3lzdGVtSW5mby5zdWJtaXRXb3JrT3JkZXIuYml6LmV4dCcsXG5cdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0ZGF0YVxuXHR9KVxufVxuLy8gPT09PT09PT09PT09PT09PT09PT09PSDku6XkuIsg5pWF6ZqcID09PT09PT09PT09PT09PT09PT09PT09XG4vLyDojrflj5bmlYXpmpznu7Tkv67kurrlkZhf6YCJ5oup5qCR5pWw5o2uXG5leHBvcnQgZnVuY3Rpb24gZ2V0QnJlYWtkb3duU3RhZmYoZGF0YSkge1xuXHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0dXJsOiAnL2NvbS5oYmt5LmJhc2VkYXRhLlByb2Zlc3Npb25hbExlZGdlci5xdWVyeUJqci5iaXouZXh0Jyxcblx0XHRtZXRob2Q6ICdHRVQnLFxuXHRcdGRhdGFcblx0fSlcbn1cblxuLy8gMzYu6I635Y+W5pWF6Zqc57u05L+u5Lq65ZGY54+t57uEX+mAieaLqeagkeaVsOaNriBcdFx06K+35rGC5Y+C5pWwIG1haW5kZXB0aWTvvJrljZXkvY3miJbnp5HljLppZO+8iOS4jeS8oOeahOivneiOt+WPlueZu+W9leS6uuaJgOWcqOWNleS9jWlk77yJXG4vLyDov5Tlm57lgLwg77yac3lzdGVtSW5mb++8muaVsOaNruS/oeaBr1xuZXhwb3J0IGZ1bmN0aW9uIGdldEJyZWFrZG93blN0YWZmQlooZGF0YSkge1xuXHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0dXJsOiAnL2NvbS5oYmt5LmJhc2VkYXRhLlByb2Zlc3Npb25hbExlZGdlci5xdWVyeUJqckJaLmJpei5leHQnLFxuXHRcdG1ldGhvZDogJ0dFVCcsXG5cdFx0ZGF0YVxuXHR9KVxufVxuXG4vLyAzOC7mlYXpmpzlt6XljZXnlJ/kuqfns7vnu5/pgInmi6nmoJHmlbDmja5cbmV4cG9ydCBmdW5jdGlvbiBnZXRCcmVha2Rvd25TeXN0ZW0oZGF0YSkge1xuXHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0dXJsOiAnL2NvbS5oYmt5LmJhc2VkYXRhLlN5c3RlbUluZm8ucXVlcnlBbGxTeXN0ZW1JbmZvLmJpei5leHQnLFxuXHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdGRhdGFcblx0fSlcbn1cblxuLy8g6I635Y+W5pWF6Zqc5bel5Y2V5L+h5oGvXG5leHBvcnQgZnVuY3Rpb24gZ2V0QnJlYWtkb3duQ29udGVudChkYXRhKSB7XG5cdHJldHVybiByZXF1ZXN0KHtcblx0XHR1cmw6ICcvY29tLmhia3kuYmFzZWRhdGEuYmRGYXVsdC5nZXRGYXVsdC5iaXouZXh0Jyxcblx0XHRtZXRob2Q6ICdQT1NUJyxcblx0XHRkYXRhXG5cdH0pXG59XG5cbi8vIOiOt+WPluaVhemanOW3peWNleaVhemanOeCueaVsOaNrlxuZXhwb3J0IGZ1bmN0aW9uIGdldEJyZWFrZG93blBvaW50TGlzdENvbnRlbnQoZGF0YSkge1xuXHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0dXJsOiAnL2NvbS5oYmt5LmJhc2VkYXRhLmJkRmF1bHQuZ2V0TWFpbnRhaW5zLmJpei5leHQnLFxuXHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdGRhdGFcblx0fSlcbn1cblxuLy8g5L+d5a2Y5pWF6Zqc5bel5Y2V5L+h5oGvXG5leHBvcnQgZnVuY3Rpb24gc2F2ZUJyZWFrZG93bkNvbnRlbnQoZGF0YSkge1xuXHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0dXJsOiAnL2NvbS5oYmt5LmJhc2VkYXRhLmJkRmF1bHQuc2F2ZUZhdWx0LmJpei5leHQnLFxuXHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdGRhdGFcblx0fSlcbn1cblxuLy8g5o+Q5Lqk5pWF6Zqc5bel5Y2V5L+h5oGvXG5leHBvcnQgZnVuY3Rpb24gc3VibWl0QnJlYWtkb3duQ29udGVudChkYXRhKSB7XG5cdHJldHVybiByZXF1ZXN0KHtcblx0XHR1cmw6ICcvY29tLmhia3kuYmFzZWRhdGEuYmRGYXVsdC5zYXZlRmF1bHRUai5iaXouZXh0Jyxcblx0XHRtZXRob2Q6ICdQT1NUJyxcblx0XHRkYXRhXG5cdH0pXG59XG5cbi8vIOiOt+WPluaVhemanOeCueaVsOaNrlxuZXhwb3J0IGZ1bmN0aW9uIGdldEJyZWFrZG93blBvaW50Q29udGVudChkYXRhKSB7XG5cdHJldHVybiByZXF1ZXN0KHtcblx0XHR1cmw6ICcvY29tLmhia3kuYmFzZWRhdGEuYmRGYXVsdC5nZXRNYWludGFpbi5iaXouZXh0Jyxcblx0XHRtZXRob2Q6ICdQT1NUJyxcblx0XHRkYXRhXG5cdH0pXG59XG5cbi8vIOS/neWtmOaVhemanOeCueaVsOaNrlxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVCcmVha2Rvd25Qb2ludENvbnRlbnQoZGF0YSkge1xuXHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0dXJsOiAnL2NvbS5oYmt5LmJhc2VkYXRhLmJkRmF1bHQuc2F2ZU1haW50YWluLmJpei5leHQnLFxuXHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdGRhdGFcblx0fSlcbn1cblxuLy8g5Yig6Zmk5pWF6Zqc54K55pWw5o2uXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlQnJlYWtkb3duUG9pbnRDb250ZW50KGRhdGEpIHtcblx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdHVybDogJy9jb20uaGJreS5iYXNlZGF0YS5iZEZhdWx0LmRlbGV0ZU1haW50YWluLmJpei5leHQnLFxuXHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdGRhdGFcblx0fSlcbn1cblxuLy8g6amz5Zue5pWF6Zqc5bel5Y2VXG5leHBvcnQgZnVuY3Rpb24gcmVqZWN0QnJlYWtkb3duUG9pbnRDb250ZW50KGRhdGEpIHtcblx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdHVybDogJy9jb20uaGJreS5iYXNlZGF0YS5iZEZhdWx0LnNhdmVGYXVsdEJoLmJpei5leHQnLFxuXHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdGRhdGFcblx0fSlcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0g5Lul5LiLIOacuueUtemakOaCo+WSjOacuueUteWfuuWxgumakOaCo+aOpeWPoyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyDmnLrnlLXpmpDmgqPlt6XljZXmn6Xor6JcbmV4cG9ydCBmdW5jdGlvbiBnZXRFbGVjdHJvbWVjaGFuaWNhbENvbnRlbnQoZGF0YSkge1xuXHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0dXJsOiAnL2NvbS5oYmt5LmJhc2VkYXRhLkpEWUgucXVlcnlZSC5iaXouZXh0Jyxcblx0XHRtZXRob2Q6ICdQT1NUJyxcblx0XHRkYXRhXG5cdH0pXG59XG5cbi8vIOiOt+WPluacuueUteePremYn+mVv1/pgInmi6nmoJHmlbDmja5cbmV4cG9ydCBmdW5jdGlvbiBnZXRFbGVjdHJvbWVjaGFuaWNhbEJkelRyZWUoZGF0YSkge1xuXHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0dXJsOiAnL2NvbS5oYmt5LmJhc2VkYXRhLkpEWUgucXVlcnlCanJiZHouYml6LmV4dCcsXG5cdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0ZGF0YVxuXHR9KVxufVxuXG5cbi8vIOiOt+WPluacuueUteaVtOaUueS6ul/pgInmi6nmoJHmlbDmja5cbmV4cG9ydCBmdW5jdGlvbiBnZXRFbGVjdHJvbWVjaGFuaWNhbFpnclRyZWUoZGF0YSkge1xuXHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0dXJsOiAnL2NvbS5oYmt5LmJhc2VkYXRhLkpEWUgucXVlcnlCanJ6Z3IuYml6LmV4dCcsXG5cdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0ZGF0YVxuXHR9KVxufVxuXG4vLyDmnLrnlLXpmpDmgqPlt6XljZXnp5HljLrplb/lj5HluINcbmV4cG9ydCBmdW5jdGlvbiByZWxlYXNlRWxlY3Ryb21lY2hhbmljYWwoZGF0YSkge1xuXHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0dXJsOiAnL2NvbS5oYmt5LmJhc2VkYXRhLkpEWUguZmJ5aC5iaXouZXh0Jyxcblx0XHRtZXRob2Q6ICdQT1NUJyxcblx0XHRkYXRhXG5cdH0pXG59XG5cblxuLy8g5py655S16ZqQ5oKj54+t57uE6ZW/5pW05pS55o+Q5Lqk5a6M5oiQIFxuZXhwb3J0IGZ1bmN0aW9uIHN1Ym1pdEVsZWN0cm9tZWNoYW5pY2FsKGRhdGEpIHtcblx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdHVybDogJy9jb20uaGJreS5iYXNlZGF0YS5KRFlILnpneWguYml6LmV4dCcsXG5cdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0ZGF0YVxuXHR9KVxufVxuXG4vLyDmnLrnlLXpmpDmgqPlt6XljZXpmIXlip7mj5DkuqQgIOefreivre+8miByZWFkIG92ZXLvvJrlrqHpmIVcbmV4cG9ydCBmdW5jdGlvbiByZWFkT3ZlckVsZWN0cm9tZWNoYW5pY2FsKGRhdGEpIHtcblx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdHVybDogJy9jb20uaGJreS5iYXNlZGF0YS5KRFlILmNyZWF0ZVlIWUIuYml6LmV4dCcsXG5cdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0ZGF0YVxuXHR9KVxufVxuXG4vLyDojrflj5bpmpDmgqPpmIXlip7kurrmj5DkuqTpgInmi6nkurrmlbDmja5f6YCJ5oup5qCR5pWw5o2uXG5leHBvcnQgZnVuY3Rpb24gZ2V0RWxlY3Ryb21lY2hhbmljYWxCanJUcmVlKGRhdGEpIHtcblx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdHVybDogJy9jb20uaGJreS5iYXNlZGF0YS5KRFlILnF1ZXJ5QmpyLmJpei5leHQnLFxuXHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdGRhdGFcblx0fSlcbn1cblxuXG4vLyDmnLrnlLXln7rlsYLpmpDmgqPlt6XljZXmn6Xor6JcbmV4cG9ydCBmdW5jdGlvbiBnZXRCYXNlRWxlY3Ryb21lY2hhbmljYWxDb250ZW50KGRhdGEpIHtcblx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdHVybDogJy9jb20uaGJreS5iYXNlZGF0YS5KRFlISkMucXVlcnlZSC5iaXouZXh0Jyxcblx0XHRtZXRob2Q6ICdQT1NUJyxcblx0XHRkYXRhXG5cdH0pXG59XG5cblxuLy8g5py655S15Z+65bGC6ZqQ5oKj5bel5Y2V56eR5Yy66ZW/5Y+R5biDXG5leHBvcnQgZnVuY3Rpb24gcmVsZWFzZUJhc2VFbGVjdHJvbWVjaGFuaWNhbChkYXRhKSB7XG5cdHJldHVybiByZXF1ZXN0KHtcblx0XHR1cmw6ICcvY29tLmhia3kuYmFzZWRhdGEuSkRZSEpDLmZieWguYml6LmV4dCcsXG5cdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0ZGF0YVxuXHR9KVxufVxuXG4vLyDmnLrnlLXln7rlsYLpmpDmgqPnj63nu4Tplb/mlbTmlLnmj5DkuqTlrozmiJBcbmV4cG9ydCBmdW5jdGlvbiBzdWJtaXRCYXNlRWxlY3Ryb21lY2hhbmljYWwoZGF0YSkge1xuXHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0dXJsOiAnL2NvbS5oYmt5LmJhc2VkYXRhLkpEWUhKQy56Z3loLmJpei5leHQnLFxuXHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdGRhdGFcblx0fSlcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0g5Lul5LiLIOiuvuWkh+W3oeajgCDmjqXlj6MgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vLyDorr7lpIflt6Hmo4Dlt6XljZXmraXpqqTmn6Xor6JcbmV4cG9ydCBmdW5jdGlvbiBnZXRFcXVpcG1lbnRDb250ZW50KGRhdGEpIHtcblx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdHVybDogJy9jb20uaGJreS5iYXNlZGF0YS5qZGpzc2J4ai5nZXRQb2xsaW5nQXBwLmJpei5leHQnLFxuXHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdGRhdGFcblx0fSlcbn1cbi8vIOiuvuWkh+W3oeajgOW3peWNleS/neWtmFxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVFcXVpcG1lbnRDb250ZW50KGRhdGEpIHtcblx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdHVybDogJy9jb20uaGJreS5iYXNlZGF0YS5qZGpzc2J4ai5zYXZlQmRDYXJkU2p6eEFwcC5iaXouZXh0Jyxcblx0XHRtZXRob2Q6ICdQT1NUJyxcblx0XHRkYXRhXG5cdH0pXG59XG4vLyDorr7lpIflt6Hmo4Dlt6XljZXmj5DkuqRcbmV4cG9ydCBmdW5jdGlvbiBzdWJtaXRFcXVpcG1lbnRDb250ZW50KGRhdGEpIHtcblx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdHVybDogJy9jb20uaGJreS5iYXNlZGF0YS5qZGpzc2J4ai5hZGRCZENhcmRTanp4QXBwLmJpei5leHQnLFxuXHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdGRhdGFcblx0fSlcbn1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IOS7peS4iyDlu7bmnJ8g5ZKMIOW7tuacn+WuoeaguCDmjqXlj6MgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8g55Sf5Lqn57O757uf6L+H5pyf5bel5Y2V5bu25pyf55Sz6K+3XG5leHBvcnQgZnVuY3Rpb24gZGVsYXlQcm9kdWNlV29ya0NvbnRlbnQoZGF0YSkge1xuXHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0dXJsOiAnL2NvbS5oYmt5LmJhc2VkYXRhLlN5c3RlbUluZm8ueXFzcVdvcmtPcmRlci5iaXouZXh0Jyxcblx0XHRtZXRob2Q6ICdHRVQnLFxuXHRcdGRhdGFcblx0fSlcbn1cblxuLy8g55Sf5Lqn57O757uf6L+H5pyf5bel5Y2V5bu25pyf5a6h5qC4XG5leHBvcnQgZnVuY3Rpb24gYXVkaXREZWxheVByb2R1Y2VXb3JrQ29udGVudChkYXRhKSB7XG5cdHJldHVybiByZXF1ZXN0KHtcblx0XHR1cmw6ICcvY29tLmhia3kuYmFzZWRhdGEuU3lzdGVtSW5mby55cXNoV29ya09yZGVyLmJpei5leHQnLFxuXHRcdG1ldGhvZDogJ0dFVCcsXG5cdFx0ZGF0YVxuXHR9KVxufVxuXG4vLyDojrflj5bnp5HljLrplb/kurrlkZhf6YCJ5oup5qCR5pWw5o2uICDvvIjlj6/ku6XpgJrnlKjvvIzlnKjmlYXpmpznu7Tkv67lkozph43kv67ml7bkuZ/nlKjliLDkuobvvJ/vvIlcbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9mZXNzaW9uYWxMZWRnZXJUcmVlKGRhdGEpIHtcblx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdHVybDogJy9jb20uaGJreS5iYXNlZGF0YS5Qcm9mZXNzaW9uYWxMZWRnZXIucXVlcnlrcXouYml6LmV4dCcsXG5cdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0ZGF0YVxuXHR9KVxufVxuXG4vLyDnlJ/kuqfns7vnu5/lt6XljZXlrqHmoLjpgIDlm57mjqXlj6NcbmV4cG9ydCBmdW5jdGlvbiByZWplY3RPclBhc3NQcm9kdWNlV29ya0NvbnRlbnQoZGF0YSkge1xuXHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0dXJsOiAnL2NvbS5oYmt5LmJhc2VkYXRhLlN5c3RlbUluZm8uY2hlY2tTdWJtaXQuYml6LmV4dCcsXG5cdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0ZGF0YVxuXHR9KVxufVxuLy8g5b6F5YGaIOe6v+i3r+makOaCo+W7tuacn+WSjOWuoeaguFxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSDku6XkuIsg5paH5Lu255u45YWz5o6l5Y+jID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIOmAmui/h3V1aWTmn6Xor6LmlofmoaPlm77niYfliJfooahcbmV4cG9ydCBmdW5jdGlvbiBxdWVyeUF0dGFjaGVtZW50QnlVVUlEKGRhdGEpIHtcblx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdHVybDogJy9jb20ubG1raC5zY2dsLmJhc2UubXVsdGlGaWxlVXBsb2FkQml6LnF1ZXJ5QXR0YWNoZW1lbnRCeVVVSUQuYml6LmV4dCcsXG5cdFx0bWV0aG9kOiAnR0VUJyxcblx0XHRkYXRhXG5cdH0pXG59XG5cbi8vIOmAmui/h+S4u+mUruiOt+WPluaWh+aho+WbvueJh+S/oeaBr1xuZXhwb3J0IGZ1bmN0aW9uIGdldEF0dGFjaG1lbnRCeU1pZChkYXRhKSB7XG5cdHJldHVybiByZXF1ZXN0KHtcblx0XHR1cmw6ICcvY29tLmxta2guc2NnbC5iYXNlLm11bHRpRmlsZVVwbG9hZEJpei5nZXRBdHRhY2htZW50QnlNaWQuYml6LmV4dCcsXG5cdFx0bWV0aG9kOiAnR0VUJyxcblx0XHRkYXRhXG5cdH0pXG59XG5cbi8vIOaMgeS5heWMluS/neWtmOS4iuS8oOeahOaWh+S7tlxuZXhwb3J0IGZ1bmN0aW9uIHJlYWxseVNhdmVGaWxlKGRhdGEpIHtcblx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdHVybDogJy9GaWxlVXBMb2FkQnlZZWFyU2VydmxldCcsXG5cdFx0bWV0aG9kOiAnR0VUJyxcblx0XHRkYXRhXG5cdH0pXG59XG5cbi8vIOWIoOmZpOaWh+S7tlxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZUZpbGUoZGF0YSkge1xuXHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0dXJsOiAnL0ZpbGVVcExvYWRCeVllYXJTZXJ2bGV0Jyxcblx0XHRtZXRob2Q6ICdHRVQnLFxuXHRcdGRhdGFcblx0fSlcbn1cblxuXG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gIOinhumikeebuOWFsyAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyA0OS7mt67nn7/mipbpn7Pop4bpopHmkq3mlL7mjqXlj6Mg6aaW6aG16I635Y+W6KeG6aKR5YiX6KGo5o6l5Y+jXG5leHBvcnQgZnVuY3Rpb24gZ2V0VmlkZW9zKGRhdGEpIHtcblx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdHVybDogJy9jb20uaGJreS5iYXNlZGF0YS5IS0RZLnF1ZXJ5U1BBTEwuYml6LmV4dCcsXG5cdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0ZGF0YVxuXHR9KVxufVxuXG4vLyDop4bpopHlj5HluIPkv67mlLnmjqXlj6NcbmV4cG9ydCBmdW5jdGlvbiByZWxlYXNlVmlkZW8oZGF0YSkge1xuXHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0dXJsOiAnL2NvbS5oYmt5LmJhc2VkYXRhLkhLRFkuc2F2ZVNQWFguYml6LmV4dCcsXG5cdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0ZGF0YVxuXHR9KVxufVxuXG4vLyDop4bpopHliKDpmaTmjqXlj6NcbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVWaWRlbyhkYXRhKSB7XG5cdHJldHVybiByZXF1ZXN0KHtcblx0XHR1cmw6ICcvY29tLmhia3kuYmFzZWRhdGEuSEtEWS5kZWxldGVTUFhYLmJpei5leHQnLFxuXHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdGRhdGFcblx0fSlcbn1cblxuLy8gNTEu5reu55+/5oqW6Z+z5oiR55qE6KeG6aKR77yI55So5oi35Y+R5biD55qE6KeG6aKR77yJ5o6l5Y+jXG5leHBvcnQgZnVuY3Rpb24gbXlWaWRlbyhkYXRhKSB7XG5cdHJldHVybiByZXF1ZXN0KHtcblx0XHR1cmw6ICcvY29tLmhia3kuYmFzZWRhdGEuSEtEWS5xdWVyeVVTRVJXRFNQLmJpei5leHQnLFxuXHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdGRhdGFcblx0fSlcbn1cblxuLy8gNTAu5reu55+/5oqW6Z+z6KeG6aKR5pS26JeP5o6l5Y+jXG5leHBvcnQgZnVuY3Rpb24gZ2V0TGlrZVZpZGVvcyhkYXRhKSB7XG5cdHJldHVybiByZXF1ZXN0KHtcblx0XHR1cmw6ICcvY29tLmhia3kuYmFzZWRhdGEuSEtEWS5xdWVyeVVTRVJTQ1NQLmJpei5leHQnLFxuXHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdGRhdGFcblx0fSlcbn1cblxuLy8gNTIu5reu55+/5oqW6Z+z5piv5ZCm5pS26JeP5Yik5pat5o6l5Y+jXG5leHBvcnQgZnVuY3Rpb24gaXNMaWtlVmlkZW8oZGF0YSkge1xuXHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0dXJsOiAnL2NvbS5oYmt5LmJhc2VkYXRhLkhLRFkuc2ZTQ1NQLmJpei5leHQnLFxuXHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdGRhdGFcblx0fSlcbn1cblxuLy8gNTQu5reu55+/5oqW6Z+z5re75Yqg56e76Zmk5pS26JeP5o6l5Y+jXG5leHBvcnQgZnVuY3Rpb24gYWRkT3JEZWxldGVMaWtlVmlkZW8oZGF0YSkge1xuXHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0dXJsOiAnL2NvbS5oYmt5LmJhc2VkYXRhLkhLRFkuYWRkVVNFUlNQU0MuYml6LmV4dCcsXG5cdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0ZGF0YVxuXHR9KVxufVxuXG4vLyA1NS7mt67nn7/mipbpn7Pkv67mlLnlpLTlg4/mjqXlj6MgIOivt+axguWPguaVsCDvvJogbWlkIOWktOWDj+WbvueJh+S4u+mUrlxuZXhwb3J0IGZ1bmN0aW9uIGVkaXRBdmF0YXIoZGF0YSkge1xuXHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0dXJsOiAnL2NvbS5oYmt5LmJhc2VkYXRhLkhLRFkuc2F2ZVlIVFguYml6LmV4dCcsXG5cdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0ZGF0YVxuXHR9KVxufVxuXG4vLyA1Ni7mt67nn7/mipbpn7PnlKjmiLfkv6Hmga/mn6Xor6LmjqXlj6Mg6K+35rGC5Y+C5pWwIO+8miB1c2VyaWQg55So5oi35bel5Y+3KHN0cmluZynvvIjkuLrnqbrmn6Xor6LmnKzkurrkv6Hmga/vvIzkvKDlgLzkuLrmiYDkvKDnlKjmiLfkv6Hmga/vvIlcbmV4cG9ydCBmdW5jdGlvbiBnZXRVc2VySW5mbyhkYXRhKSB7XG5cdHJldHVybiByZXF1ZXN0KHtcblx0XHR1cmw6ICcvY29tLmhia3kuYmFzZWRhdGEuSEtEWS5nZXRZSFhYLmJpei5leHQnLFxuXHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdGRhdGFcblx0fSlcbn1cblxuLy8gNTcu5reu55+/5oqW6Z+z55So5oi36K6w5b2V5bey5Yi36KeG6aKR5o6l5Y+jXG5leHBvcnQgZnVuY3Rpb24gaGFkU2VlbihkYXRhKSB7XG5cdHJldHVybiByZXF1ZXN0KHtcblx0XHR1cmw6ICcvY29tLmhia3kuYmFzZWRhdGEuSEtEWS5ZU1NQLmJpei5leHQnLFxuXHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdGRhdGFcblx0fSlcbn1cblxuLy8gNTgu5reu55+/5oqW6Z+z6KeG6aKR57G75Z6L5o6l5Y+jXG5leHBvcnQgZnVuY3Rpb24gZ2V0VmlkZW9UeXBlTGlzdChkYXRhKSB7XG5cdHJldHVybiByZXF1ZXN0KHtcblx0XHR1cmw6ICcvY29tLmhia3kuYnBzLkZ1bmN0aW9uVXRpbC5nZXREaWN0QnlEaWN0SUQuYml6LmV4dCcsXG5cdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0ZGF0YVxuXHR9KVxufVxuXG5cbi8vIDU5Lua3ruefv+aKlumfs+aIkeWFs+azqOeahOS6uuWSjOWFs+azqOaIkeeahOS6uuafpeivouaOpeWPoyAgICBcdFx05Y+C5pWw77yadHlwZSBpbnTnsbvlnovvvIjkuLrnqbrmn6Xor6LmiJHlhbPms6jnmoTkurrvvIzkvKDlgLwx5Li65YWz5rOo5oiR55qE5Lq677yJXG5leHBvcnQgZnVuY3Rpb24gZ2V0RmFuc09yQXR0ZW50aW9uTGlzdChkYXRhKSB7XG5cdHJldHVybiByZXF1ZXN0KHtcblx0XHR1cmw6ICcvY29tLmhia3kuYmFzZWRhdGEuSEtEWS5xdWVyeVdER1ouYml6LmV4dCcsXG5cdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0ZGF0YVxuXHR9KVxufVxuXG4vLyA2MC7mt67nn7/mipbpn7PlhbPms6jnlKjmiLflj5bmtojlhbPms6jmjqXlj6MgICAgXHRcdOivt+axguWPguaVsCDvvJogdHlwZSDnsbvlnovvvIjkuLrnqbrlhbPms6jnlKjmiLfvvIzkvKDlgLwx5Li65Y+W5raI5YWz5rOo77yJXG4vLyBVc2VyaWQg5YWz5rOo77yI5Y+W5raI77yJ5Lq65bel5Y+3XG5leHBvcnQgZnVuY3Rpb24gYXR0ZW50aW9uWWVzT3JObyhkYXRhKSB7XG5cdHJldHVybiByZXF1ZXN0KHtcblx0XHR1cmw6ICcvY29tLmhia3kuYmFzZWRhdGEuSEtEWS5ZSEdaUVguYml6LmV4dCcsXG5cdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0ZGF0YVxuXHR9KVxufVxuXG4vLyA2MS7mt67nn7/mipbpn7PmkJzntKLop4bpopHmjqXlj6MgICBcdFx06K+35rGC5Y+C5pWwIO+8miBwYWdlIOmhteegge+8jGxpbWl0IOadoeaVsO+8jHRpdGxlIOinhumikeagh+etvuOAgeinhumikeeugOS7i+OAgeinhumikeaJgOWxnuS6uuWnk+WQjeOAgeaXtumXtOaooeeziuaQnOe0ou+8jOW3peWPt+S4uueyvuehruaQnOe0olxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaFZpZGVvcyhkYXRhKSB7XG5cdHJldHVybiByZXF1ZXN0KHtcblx0XHR1cmw6ICcvY29tLmhia3kuYmFzZWRhdGEuSEtEWS5xdWVyeUhLRFlTUEFwcC5iaXouZXh0Jyxcblx0XHRtZXRob2Q6ICdQT1NUJyxcblx0XHRkYXRhXG5cdH0pXG59XG5cbi8vIDc0LuiuvuWkh+S/oeaBr++8iOaYr+WQpuWPr+eci++8ieaOpeWPoyAgICBcdFx06K+35rGC5Y+C5pWwIO+8miBjb2RlOuiuvuWkh+S4u+mUrlxuZXhwb3J0IGZ1bmN0aW9uIGdldERldmljZUluZm8oZGF0YSkge1xuXHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0dXJsOiAnL2NvbS5oYmt5LmJhc2VkYXRhLkVxdWlwbWVudExlZGdlci5xdWVyeXR5Y2lzZi5iaXouZXh0Jyxcblx0XHRtZXRob2Q6ICdQT1NUJyxcblx0XHRkYXRhXG5cdH0pXG59XG5cbi8vIDgzLueUn+S6p+ezu+e7n+afpeivouaAu+iniOWxleekuuaOpeWPo1x0IFx0XHTor7fmsYLlj4LmlbAg77yaIGJtOuezu+e7n+e8lueggVxuLy8g6L+U5Zue5YC8IO+8mmRhdGEgIOaJgOacieWPguaVsOWAvFxuLy8gZGF0YTEgIOezu+e7n+S/oeaBr1xuLy8gZGF0YTIgIOacieWxgue6p+eahOeItuiKgueCuVxuLy8gZGF0YTMgIOe7hOaIkOeItuiKgueCuSBcbi8vIGRhdGE0ICDnu4TmiJDlrZDoioLngrlcbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9kdWNlU3VtbWFyeUluZm8oZGF0YSkge1xuXHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0dXJsOiAnL2NvbS5oYmt5LmJhc2VkYXRhLlN5c3RlbUluZm8ucXVlcnlTY3h0WmxDcy5iaXouZXh0Jyxcblx0XHRtZXRob2Q6ICdQT1NUJyxcblx0XHRkYXRhXG5cdH0pXG59XG5cbi8vIDg0LueUn+S6p+ezu+e7n+aAu+iniOaWh+aho+aOpeWPo1x0IFx0XHTor7fmsYLlj4LmlbAg77yaIHV1aWQ657O757uf57yW56CBXG4vLyDov5Tlm57lgLwg77yadXBsb2FkRmlsZXM65paH5qGj5L+h5oGvXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvZHVjZVN1bW1hcnlGaWxlcyhkYXRhKSB7XG5cdHJldHVybiByZXF1ZXN0KHtcblx0XHR1cmw6ICcvY29tLmxta2guc2NnbC5iYXNlLm11bHRpRmlsZVVwbG9hZEJpei5xdWVyeVNjeHRabEZpbGUuYml6LmV4dCcsXG5cdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0ZGF0YVxuXHR9KVxufVxuXG4vLyA4OC7mm7TmlrDorr7lpIdORkPnvJblj7fmjqXlj6MgICAgXHRcdOivt+axguWPguaVsCDvvJogemo66K6+5aSH5Li76ZSu77yMbmZjaWTvvJpuZmPnvJblj7dcbi8vIOi/lOWbnuWAvCDvvJpmOjHnu5HlrprmiJDlip/vvIxmOjLlt7Lnu5Hlrprlhbbku5borr7lpIfvvIxmOjPlt7Lnu5Hlrpror6Xorr7lpIdcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVBbmRCaW5kTkZDKGRhdGEpIHtcblx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdHVybDogJy9jb20uaGJreS5iYXNlZGF0YS5FcXVpcG1lbnRMZWRnZXIudXBkYXRlQmRDYXJkTkZDVVVJRC5iaXouZXh0Jyxcblx0XHRtZXRob2Q6ICdQT1NUJyxcblx0XHRkYXRhXG5cdH0pXG59XG5cbi8vIFxuLy8gODku6YCa6L+HTkZD57yW56CB5p+l6K6+5aSH5L+h5oGv77yI5piv5ZCm5Y+v55yL77yJ5o6l5Y+jXHRcdFx06K+35rGC5Y+C5pWwIO+8miBjb2RlOm5mY+e8lueggVxuLy8g6L+U5Zue5YC8IO+8mmY6MCDorr7lpIfkuI3lj6/nnIvvvIxmOjIgbmZj5pyq57uR5a6a6K6+5aSHIDsgYmRjYXJkaW5mb++8muiuvuWkh+S/oeaBr1xuZXhwb3J0IGZ1bmN0aW9uIGdldERldmljZUluZm9CeU5mYyhkYXRhKSB7XG5cdHJldHVybiByZXF1ZXN0KHtcblx0XHR1cmw6ICcvY29tLmhia3kuYmFzZWRhdGEuRXF1aXBtZW50TGVkZ2VyLnF1ZXJ5dHljaXNmTkZDLmJpei5leHQnLFxuXHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdGRhdGFcblx0fSlcbn1cblxuLy8gOTAu6YCa6L+H5oqA5pyv57yW56CB5p+l6K6+5aSH5YiX6KGo5o6l5Y+jIFx06K+35rGC5Y+C5pWwIO+8miBwYWdlOumhteegge+8jGxpbWl0OuadoeaVsO+8jGxiYm065oqA5pyv57G75Yir57yW56CB77yMc2JtYzrorr7lpIflkI3np7BcbmV4cG9ydCBmdW5jdGlvbiBnZXREZXZpY2VMaXN0KGRhdGEpIHtcblx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdHVybDogJy9jb20uaGJreS5iYXNlZGF0YS5FcXVpcG1lbnRMZWRnZXIucXVlcnlBbGxCYXNpY0pDQVBQLmJpei5leHQnLFxuXHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdGRhdGFcblx0fSlcbn1cblxuLy8gOTEu6K6+5aSH5oqA5pyv57G75Yir5qCR5pWw5o2uIFx06K+35rGC5Y+C5pWwIO+8miBwYWdlOumhteegge+8jGxpbWl0OuadoeaVsO+8jGxiYm065oqA5pyv57G75Yir57yW56CB77yMc2JtYzrorr7lpIflkI3np7BcbmV4cG9ydCBmdW5jdGlvbiBnZXRBbGxUZWNoVHlwZVRyZWUoZGF0YSkge1xuXHRyZXR1cm4gcmVxdWVzdCh7XG5cdFx0dXJsOiAnL2NvbS5oYmt5LmJhc2VkYXRhLlRlY2hUeXBlLnF1ZXJ5QWxsVGVjaFR5cGVBUFAuYml6LmV4dCcsXG5cdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0ZGF0YVxuXHR9KVxufVxuXG4vLyA5Mi7orr7lpIfmioDmnK/nsbvliKvmoJHmlbDmja7vvIjliIblsYLmrKHmn6Xor6LvvIkgXHTor7fmsYLlj4LmlbAg77yaaWQg54i257qnaWRcbmV4cG9ydCBmdW5jdGlvbiBnZXRBbGxUZWNoVHlwZVRyZWVCeUlkKGRhdGEpIHtcblx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdHVybDogJy9jb20uaGJreS5iYXNlZGF0YS5UZWNoVHlwZS5xdWVyeUFsbFRlY2hUeXBlMS5iaXouZXh0Jyxcblx0XHRtZXRob2Q6ICdQT1NUJyxcblx0XHRkYXRhXG5cdH0pXG59XG5cbi8vIDkzLuiuvuWkh+W3oeajgOeUn+aIkOW3oeajgOW3peWNlSAgXHTor7fmsYLlj4LmlbAg77yac2J6aiDorr7lpIfkuLvplK7vvIxseCDkvKDlm7rlrprlgLzigJjorr7lpIfigJlcbi8vIGbvvJoyIOaIkOWKn++8jHpq77ya5Lu75Yqh5Li76ZSu77yMc2J6au+8muiuvuWkh+S4u+mUrlxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVxdWlwbWVudFdPKGRhdGEpIHtcblx0cmV0dXJuIHJlcXVlc3Qoe1xuXHRcdHVybDogJy9jb20uaGJreS5iYXNlZGF0YS5FcXVpcG1lbnRMZWRnZXIuY3JlYXRlQmRDYXJkUG9sbGluZ1dvcmtYSi5iaXouZXh0Jyxcblx0XHRtZXRob2Q6ICdQT1NUJyxcblx0XHRkYXRhXG5cdH0pXG59XG5cbi8vIDk0LuiuvuWkh+W3oeajgOagh+WHhuafpeivolx0XHTor7fmsYLlj4LmlbAg77yac2J6aiDorr7lpIfkuLvplK5cbmV4cG9ydCBmdW5jdGlvbiBnZXRFcXVpcG1lbnRTdGFuZGFyZChkYXRhKSB7XG5cdHJldHVybiByZXF1ZXN0KHtcblx0XHR1cmw6ICcvY29tLmhia3kuYmFzZWRhdGEuamRqc3NieGoucXVlcnlCZENhcmRTanp4YnpzLmJpei5leHQnLFxuXHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdGRhdGFcblx0fSlcbn1cblxuLy8gOTUu6K6+5aSH5beh5qOA5bel5Y2V5Yig6ZmkXHRcdOivt+axguWPguaVsCDvvJp6aiDlt6XljZXkuLvplK5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVFcXVpcG1lbnRXTyhkYXRhKSB7XG5cdHJldHVybiByZXF1ZXN0KHtcblx0XHR1cmw6ICcvY29tLmhia3kuYmFzZWRhdGEuRXF1aXBtZW50TGVkZ2VyLmRlbGV0ZVR5Y0NhcmRYampocncuYml6LmV4dCcsXG5cdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0ZGF0YVxuXHR9KVxufVxuXG4vLyA5Ni7pgJrov4forr7lpIfkuLvplK7mn6Xor6LmlYXpmpzliJfooajmjqXlj6MgIFx0IOivt+axguWPguaVsCDvvJpQYWdlOumhteegge+8jGxpbWl0OuadoeaVsO+8jHNiemo66K6+5aSH5Li76ZSuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QnJlYWtkb3duTGlzdEJ5U2J6aihkYXRhKSB7XG5cdHJldHVybiByZXF1ZXN0KHtcblx0XHR1cmw6ICcvY29tLmhia3kuYmFzZWRhdGEuYmRGYXVsdC5xdWVyeUZhdWx0V29ya3N3ZWl4aW4uYml6LmV4dCcsXG5cdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0ZGF0YVxuXHR9KVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///46\n");

/***/ }),
/* 47 */
/*!***********************************************************************************!*\
  !*** /Users/wangjunhao/Documents/HBuilderProjects/uni-app-demo/common/request.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\nvar _store = _interopRequireDefault(__webpack_require__(/*! ../store */ 43));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //把配置项单独处理\n// import store from '/store/index.js'; //vuex  \nvar server_url = _store.default.state.hostUrl; //请求地址\n// let token = ' ';  凭证\n// process.env.NODE_ENV === 'development' ? '192.168.0.1' : 'http://***/api' ; //环境配置\nfunction service() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  // store.state.token && (token = store.state.token); //从vuex中获取登录凭证\n  options.url = \"\".concat(server_url).concat(options.url);\n  __f__(\"log\", \"\\u53D1\\u8D77\\u8BF7\\u6C42\\u7684\\u53C2\\u6570\\u4EEC\\uFF1A\".concat(JSON.stringify(options)), \" at common/request.js:10\");\n  //配置请求头\n  options.header = {\n    // 'content-type': 'application/x-www-form-urlencoded',\n    // 'accessToken': `${token}` //Bearer \n  };\n\n  return new Promise(function (resolve, reject) {\n    //成功\n    options.success = function (res) {\n      if (Number(res.statusCode) == 200) {//请求成功\n        // console.log(JSON.stringify(res.data))\n        // 登录失效时\n        if (res.data && res.data.exception && res.data.exception.code === '12101001') {\n          uni.showToast({\n            icon: 'none',\n            title: \"\\u767B\\u9646\\u5931\\u6548\\u6216\\u8005\\u7528\\u6237\\u672A\\u767B\\u9646\\uFF0C\\u8BF7\\u91CD\\u65B0\\u767B\\u5F55\" });\n\n          // 登陆失效时，执行退出逻辑\n          setTimeout(function () {\n            _store.default.commit('logout');\n          }, 1500);\n          reject(res.data); //错误\n          return;\n        }\n        resolve(res.data);\n      } else {\n        uni.showToast({\n          icon: 'none',\n          duration: 3000,\n          title: \"\".concat(res.data) });\n\n        reject(res.data.msg); //错误\n      }\n\n    };\n    //错误\n    options.fail = function (err) {\n      reject(err); //错误\n    };\n    uni.request(options);\n\n  });\n}var _default =\n\nservice;exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 25)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tbW9uL3JlcXVlc3QuanMiXSwibmFtZXMiOlsic2VydmVyX3VybCIsInN0b3JlIiwic3RhdGUiLCJob3N0VXJsIiwic2VydmljZSIsIm9wdGlvbnMiLCJ1cmwiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVyIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzdWNjZXNzIiwicmVzIiwiTnVtYmVyIiwic3RhdHVzQ29kZSIsImRhdGEiLCJleGNlcHRpb24iLCJjb2RlIiwidW5pIiwic2hvd1RvYXN0IiwiaWNvbiIsInRpdGxlIiwic2V0VGltZW91dCIsImNvbW1pdCIsImR1cmF0aW9uIiwibXNnIiwiZmFpbCIsImVyciIsInJlcXVlc3QiXSwibWFwcGluZ3MiOiI7QUFDQSw2RSw4RkFEQTtBQUVBO0FBQ0EsSUFBSUEsVUFBVSxHQUFHQyxlQUFNQyxLQUFOLENBQVlDLE9BQTdCLEMsQ0FBc0M7QUFDdEM7QUFDQTtBQUNBLFNBQVNDLE9BQVQsR0FBK0IsS0FBZEMsT0FBYyx1RUFBSixFQUFJO0FBQzlCO0FBQ0FBLFNBQU8sQ0FBQ0MsR0FBUixhQUFpQk4sVUFBakIsU0FBOEJLLE9BQU8sQ0FBQ0MsR0FBdEM7QUFDQSwrRUFBd0JDLElBQUksQ0FBQ0MsU0FBTCxDQUFlSCxPQUFmLENBQXhCO0FBQ0E7QUFDQUEsU0FBTyxDQUFDSSxNQUFSLEdBQWlCO0FBQ2hCO0FBQ0E7QUFGZ0IsR0FBakI7O0FBS0EsU0FBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3ZDO0FBQ0FQLFdBQU8sQ0FBQ1EsT0FBUixHQUFrQixVQUFDQyxHQUFELEVBQVM7QUFDMUIsVUFBSUMsTUFBTSxDQUFDRCxHQUFHLENBQUNFLFVBQUwsQ0FBTixJQUEwQixHQUE5QixFQUFtQyxDQUFFO0FBQ3BDO0FBQ0E7QUFDQSxZQUFJRixHQUFHLENBQUNHLElBQUosSUFBWUgsR0FBRyxDQUFDRyxJQUFKLENBQVNDLFNBQXJCLElBQWtDSixHQUFHLENBQUNHLElBQUosQ0FBU0MsU0FBVCxDQUFtQkMsSUFBbkIsS0FBNEIsVUFBbEUsRUFBOEU7QUFDN0VDLGFBQUcsQ0FBQ0MsU0FBSixDQUFjO0FBQ2JDLGdCQUFJLEVBQUUsTUFETztBQUViQyxpQkFBSywwR0FGUSxFQUFkOztBQUlBO0FBQ0FDLG9CQUFVLENBQUMsWUFBTTtBQUNoQnZCLDJCQUFNd0IsTUFBTixDQUFhLFFBQWI7QUFDQSxXQUZTLEVBRVAsSUFGTyxDQUFWO0FBR0FiLGdCQUFNLENBQUNFLEdBQUcsQ0FBQ0csSUFBTCxDQUFOLENBVDZFLENBUzNEO0FBQ2xCO0FBQ0E7QUFDRE4sZUFBTyxDQUFDRyxHQUFHLENBQUNHLElBQUwsQ0FBUDtBQUNBLE9BaEJELE1BZ0JPO0FBQ05HLFdBQUcsQ0FBQ0MsU0FBSixDQUFjO0FBQ2JDLGNBQUksRUFBRSxNQURPO0FBRWJJLGtCQUFRLEVBQUUsSUFGRztBQUdiSCxlQUFLLFlBQUtULEdBQUcsQ0FBQ0csSUFBVCxDQUhRLEVBQWQ7O0FBS0FMLGNBQU0sQ0FBQ0UsR0FBRyxDQUFDRyxJQUFKLENBQVNVLEdBQVYsQ0FBTixDQU5NLENBTWdCO0FBQ3RCOztBQUVELEtBMUJEO0FBMkJBO0FBQ0F0QixXQUFPLENBQUN1QixJQUFSLEdBQWUsVUFBQ0MsR0FBRCxFQUFTO0FBQ3ZCakIsWUFBTSxDQUFDaUIsR0FBRCxDQUFOLENBRHVCLENBQ1Y7QUFDYixLQUZEO0FBR0FULE9BQUcsQ0FBQ1UsT0FBSixDQUFZekIsT0FBWjs7QUFFQSxHQW5DTSxDQUFQO0FBb0NBLEM7O0FBRWNELE8iLCJmaWxlIjoiNDcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL+aKiumFjee9rumhueWNleeLrOWkhOeQhlxuaW1wb3J0IHN0b3JlIGZyb20gJy4uL3N0b3JlJ1xuLy8gaW1wb3J0IHN0b3JlIGZyb20gJy9zdG9yZS9pbmRleC5qcyc7IC8vdnVleCAgXG5sZXQgc2VydmVyX3VybCA9IHN0b3JlLnN0YXRlLmhvc3RVcmw7IC8v6K+35rGC5Zyw5Z2AXG4vLyBsZXQgdG9rZW4gPSAnICc7ICDlh63or4Fcbi8vIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnID8gJzE5Mi4xNjguMC4xJyA6ICdodHRwOi8vKioqL2FwaScgOyAvL+eOr+Wig+mFjee9rlxuZnVuY3Rpb24gc2VydmljZShvcHRpb25zID0ge30pIHtcblx0Ly8gc3RvcmUuc3RhdGUudG9rZW4gJiYgKHRva2VuID0gc3RvcmUuc3RhdGUudG9rZW4pOyAvL+S7jnZ1ZXjkuK3ojrflj5bnmbvlvZXlh63or4Fcblx0b3B0aW9ucy51cmwgPSBgJHtzZXJ2ZXJfdXJsfSR7b3B0aW9ucy51cmx9YDtcblx0Y29uc29sZS5sb2coYOWPkei1t+ivt+axgueahOWPguaVsOS7rO+8miR7SlNPTi5zdHJpbmdpZnkob3B0aW9ucyl9YClcblx0Ly/phY3nva7or7fmsYLlpLRcblx0b3B0aW9ucy5oZWFkZXIgPSB7XG5cdFx0Ly8gJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuXHRcdC8vICdhY2Nlc3NUb2tlbic6IGAke3Rva2VufWAgLy9CZWFyZXIgXG5cdH07XG5cblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHQvL+aIkOWKn1xuXHRcdG9wdGlvbnMuc3VjY2VzcyA9IChyZXMpID0+IHtcblx0XHRcdGlmIChOdW1iZXIocmVzLnN0YXR1c0NvZGUpID09IDIwMCkgeyAvL+ivt+axguaIkOWKn1xuXHRcdFx0XHQvLyBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXMuZGF0YSkpXG5cdFx0XHRcdC8vIOeZu+W9leWkseaViOaXtlxuXHRcdFx0XHRpZiAocmVzLmRhdGEgJiYgcmVzLmRhdGEuZXhjZXB0aW9uICYmIHJlcy5kYXRhLmV4Y2VwdGlvbi5jb2RlID09PSAnMTIxMDEwMDEnKSB7XG5cdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XG5cdFx0XHRcdFx0XHRpY29uOiAnbm9uZScsXG5cdFx0XHRcdFx0XHR0aXRsZTogYOeZu+mZhuWkseaViOaIluiAheeUqOaIt+acqueZu+mZhu+8jOivt+mHjeaWsOeZu+W9lWBcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHQvLyDnmbvpmYblpLHmlYjml7bvvIzmiafooYzpgIDlh7rpgLvovpFcblx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XHRcdHN0b3JlLmNvbW1pdCgnbG9nb3V0Jyk7XG5cdFx0XHRcdFx0fSwgMTUwMCk7XG5cdFx0XHRcdFx0cmVqZWN0KHJlcy5kYXRhKTsgLy/plJnor69cblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdFx0cmVzb2x2ZShyZXMuZGF0YSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcblx0XHRcdFx0XHRpY29uOiAnbm9uZScsXG5cdFx0XHRcdFx0ZHVyYXRpb246IDMwMDAsXG5cdFx0XHRcdFx0dGl0bGU6IGAke3Jlcy5kYXRhfWBcblx0XHRcdFx0fSk7XG5cdFx0XHRcdHJlamVjdChyZXMuZGF0YS5tc2cpOyAvL+mUmeivr1xuXHRcdFx0fVxuXG5cdFx0fVxuXHRcdC8v6ZSZ6K+vXG5cdFx0b3B0aW9ucy5mYWlsID0gKGVycikgPT4ge1xuXHRcdFx0cmVqZWN0KGVycik7IC8v6ZSZ6K+vXG5cdFx0fVxuXHRcdHVuaS5yZXF1ZXN0KG9wdGlvbnMpO1xuXG5cdH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzZXJ2aWNlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///47\n");

/***/ }),
/* 48 */
/*!**********************************************************************************************!*\
  !*** /Users/wangjunhao/Documents/HBuilderProjects/uni-app-demo/pages/tiktok/scrollMixins.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__webpack_provided_uni_dot_requireNativePlugin, __f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 33));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _createForOfIteratorHelper(o, allowArrayLike) {var it;if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) {if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") {if (it) o = it;var i = 0;var F = function F() {};return { s: F, n: function n() {if (i >= o.length) return { done: true };return { done: false, value: o[i++] };}, e: function e(_e) {throw _e;}, f: F };}throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");}var normalCompletion = true,didErr = false,err;return { s: function s() {it = o[Symbol.iterator]();}, n: function n() {var step = it.next();normalCompletion = step.done;return step;}, e: function e(_e2) {didErr = true;err = _e2;}, f: function f() {try {if (!normalCompletion && it.return != null) it.return();} finally {if (didErr) throw err;}} };}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === \"Object\" && o.constructor) n = o.constructor.name;if (n === \"Map\" || n === \"Set\") return Array.from(o);if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);}_next(undefined);});};}var BindingX = __webpack_provided_uni_dot_requireNativePlugin('bindingx');\nvar animation = weex.requireModule('animation');\nvar modal = weex.requireModule('modal');var _default =\n{\n  data: function data() {\n    return {\n      typeX: false, //是否开启左右滑动\n      playCount: 2, //剩余多少视频加载视频列表\n      startDistance: 5, //开启左右滑动时有效,判断左右上下拖动的启动距离\n      minTime: 300, //判断为快速滑动的时间,该时间内无视回弹\n      backDistance: 200, //上下滑动的回弹距离\n\n\n      oldTime: 0,\n      oldTouces: {},\n      touchType: null,\n      gesToken: 0,\n      height: '667px',\n      index: 0,\n      oldIndex: 0,\n      width: '',\n      sysheight: 0,\n      distance: 0,\n      distanceX: 0,\n      scroll: false };\n\n  },\n  created: function created() {\n\n    plus.screen.lockOrientation(\"portrait-primary\");\n\n    this.sysheight = uni.getSystemInfoSync().windowHeight;\n    this.height = \"\".concat(this.sysheight, \"px\");\n    var width = uni.getSystemInfoSync().windowWidth;\n    this.width = \"\".concat(width, \"px\");\n  },\n  methods: {\n    getEl: function getEl(el) {\n      if (typeof el === 'string' || typeof el === 'number') return el;\n      if (WXEnvironment) {\n        return el.ref;\n      } else {\n        return el instanceof HTMLElement ? el : el.$el;\n      }\n    },\n    // ListTouch触摸开始\n    ListTouchStart: function ListTouchStart(e) {\n      __f__(\"log\", '====================== ====  ListTouchStart', \" at pages/tiktok/scrollMixins.js:48\");\n      this.oldTime = new Date();\n      this.oldTouces = e.changedTouches[0];\n    },\n    ListTouchEnd: function ListTouchEnd(e) {\n      __f__(\"log\", '====================== ====  ListTouchEnd', \" at pages/tiktok/scrollMixins.js:53\");\n      __f__(\"log\", 'end', \" at pages/tiktok/scrollMixins.js:54\");\n    },\n    //判定方向\n    ListTouchMove: function ListTouchMove(e) {var _this = this;\n\n      //结束启动判断\n      if (this.touchType == 'stop') return;var\n      oldTouces = this.oldTouces,oldValue = this.oldValue,touchType = this.touchType;\n      var newTouces = e.changedTouches[0];\n\n      if (!this.touchType) {\n        var startDistance = this.typeX ? this.startDistance : 0;\n\n        //滑动启动条件\n        this.touchType = Math.abs(newTouces.pageY - oldTouces.pageY) > startDistance ? 'moveY' : null;\n        if (this.touchType == 'moveY' && newTouces.pageY > oldTouces.pageY) {\n          this.touchType = 'moveYB';\n        } else if (this.touchType == 'moveY' && newTouces.pageY < oldTouces.pageY) {\n          this.touchType = 'moveYT';\n        }\n        //是否开启左右滑动\n        if (!this.touchType && this.typeX) {\n          this.touchType = newTouces.pageX - oldTouces.pageX > startDistance ? 'moveXR' : this.touchType;\n          this.touchType = newTouces.pageX - oldTouces.pageX < -startDistance ? 'moveXL' : this.touchType;\n        }\n\n      } else {\n\n\n        // 如果在执行动画，就不触发\n        if (this.scroll) return;\n        // 解绑动画\n        if (this.gesToken != 0) {\n          BindingX.unbind({\n            eventType: 'pan',\n            token: this.gesToken });\n\n          this.gesToken = 0;\n          // return\n        }\n\n        var move;\n        if (this.touchType == 'moveYB' || this.touchType == 'moveYT') {\n          move = 0;\n        } else if (this.touchType == 'moveXL') {\n          move = -1;\n        } else if (this.touchType == 'moveXR') {\n          move = 1;\n        }\n\n\n\n        //关闭启动判断\n        this.touchType = 'stop';\n\n        var touch_origin = \"y+\".concat(this.distance, \"<=0 && \").concat(move, \"==0 && \").concat(this.distanceX, \"==0 && \\n\\t\\t\\t\\t\\ty+\").concat(\n        this.distance, \"-\").concat(this.sysheight, \">=\").concat(-this.sysheight * this.videoList.length, \"? \\n\\t\\t\\t\\t\\ty+\").concat(\n        this.distance, \" : \").concat(this.distance);\n        // 找到元素 \n        var swiperRef = this.getEl(this.$refs.swiper);\n        var leftRef = this.getEl(this.$refs.left);\n        var rightRef = this.getEl(this.$refs.right);\n\n        var anchor;\n        if (this.distanceX == 0) {\n          var touchRef = this.getEl(this.$refs.touch);\n          anchor = touchRef;\n        } else if (this.distanceX <= 0) {\n          anchor = rightRef;\n        } else {\n          anchor = leftRef;\n        }\n\n        var gesTokenObj = BindingX.bind({\n          anchor: anchor,\n          eventType: 'pan',\n          props: [\n          { element: swiperRef, property: 'transform.translateY', expression: touch_origin },\n          { element: swiperRef, property: 'transform.translateX', expression: \"\".concat(move, \"!=0 && \").concat(move, \"*x>0 ?x+\").concat(this.distanceX, \" : \").concat(this.distanceX) },\n          { element: leftRef, property: 'transform.translateX', expression: \"\".concat(move, \"!=0&& \").concat(move * this.distanceX, \"<=0&&x+\").concat(this.distanceX, \"<393?x+\").concat(this.distanceX, \" : \").concat(this.distanceX) },\n          { element: rightRef, property: 'transform.translateX', expression: \"\".concat(move, \"!=0&& \").concat(move * this.distanceX, \"<=0&&x+\").concat(this.distanceX, \">-393?x+\").concat(this.distanceX, \" : \").concat(this.distanceX) }] },\n\n        function (e) {\n          if (e.state === 'end') {\n            _this.touchType = null;\n\n            //上下\n            if (move == 0 && _this.distanceX == 0 && Math.abs(e.deltaY) > _this.startDistance) {\n              var newTime = new Date();\n              var quickMove = newTime.getTime() - _this.oldTime.getTime() <= _this.minTime ? true : false;\n\n              // 记录当前坐标\n              var distance = _this.distance + e.deltaY;\n\n              if (distance > 0 || _this.distance + e.deltaY - _this.sysheight < -_this.sysheight * _this.videoList.length) return;\n\n              _this.bindTiming(distance, e.deltaY, quickMove);\n            }\n\n            if (move != 0 && move * _this.distanceX <= 0 && e.deltaX * _this.distanceX <= 0 && Math.abs(e.deltaX) > _this.startDistance) {\n              var _distance = _this.distanceX + e.deltaX;\n\n              _this.bindTimingX(_distance, e.deltaX);\n            }\n          }\n        });\n        // 记录下取消的token 多次 ontouchstart 时要带着 token 把上次的解绑\n        this.gesToken = gesTokenObj.token;\n      }\n\n    },\n    bindTiming: function bindTiming(distance, Y, quickMove) {var _this2 = this;\n      BindingX.unbindAll();\n      // 开始执行动画\n      this.scroll = true;\n      var swiperRef = this.getEl(this.$refs.swiper);\n      var sysheight = this.sysheight;\n\n      var changed_Y, final_Y, translate_Y_origin;\n\n      // 生成表达式逻辑\n      if (Math.abs(Y) <= this.backDistance && !quickMove) {\n        // 往上下拖动20以内时\n        final_Y = this.distance; // 回到原点\n        changed_Y = final_Y - distance; // 计算出需要位置的值\n        translate_Y_origin = \"easeOutExpo(t,\".concat(distance, \",\").concat(changed_Y, \",300)\"); // 运动曲线为easeOutElastic\n      } else {\n        // 往上下拖动超过一半时\n        final_Y = this.distance + (Y > 0 ? 1 : -1) * this.sysheight;\n        changed_Y = final_Y - distance; // 计算出需要位置的值\n        translate_Y_origin = \"easeOutExpo(t,\".concat(distance, \",\").concat(changed_Y, \",900)\"); // 运动曲线为easeOutExpo\n      }\n      var result = BindingX.bind({\n        eventType: 'timing', // 结束的时候是没有任何监听的 用 timing 来做定时的动画\n        exitExpression: \"t>600\", // 当时间超过 300ms 结束动画\n        props: [\n        { element: swiperRef, property: 'transform.translateY', expression: translate_Y_origin }] }, /*#__PURE__*/function () {var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(\n\n        function _callee(e) {var _iterator, _step, item;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:if (!(\n                  e.state === 'end' || e.state === 'exit')) {_context.next = 15;break;}\n                  _this2.distance = final_Y;\n                  _this2.scroll = false;if (!(\n                  Math.abs(Y) > _this2.backDistance || quickMove)) {_context.next = 14;break;}_iterator = _createForOfIteratorHelper(\n                  _this2.videoList);try {for (_iterator.s(); !(_step = _iterator.n()).done;) {item = _step.value;\n                      item.flag = false;\n                    }} catch (err) {_iterator.e(err);} finally {_iterator.f();}\n                  _this2.index = -_this2.distance / _this2.sysheight;\n\n                  _this2.videoList[_this2.index].flag = true;\n                  //加载视频\n                  __f__(\"log\", '===========================//加载视频', \" at pages/tiktok/scrollMixins.js:204\");if (!(\n                  _this2.videoList.length - _this2.index - 1 <= _this2.playCount)) {_context.next = 12;break;}_context.next = 12;return (\n                    _this2.pushVideoList());case 12:_context.next = 15;break;case 14:\n\n                  if (Math.abs(Y) <= _this2.backDistance && !quickMove) {\n                    _this2.videoList[_this2.index].flag = true;\n                  }case 15:case \"end\":return _context.stop();}}}, _callee);}));return function (_x) {return _ref.apply(this, arguments);};}());\n\n\n    },\n    bindTimingX: function bindTimingX(distance, X) {var _this3 = this;\n      // 开始执行动画\n      this.scroll = true;\n      var swiperRef = this.getEl(this.$refs.swiper);\n      var leftRef = this.getEl(this.$refs.left);\n      var rightRef = this.getEl(this.$refs.right);\n      var width = parseInt(this.width);\n\n      var changed_X, final_X, origin;\n\n      // 生成表达式逻辑\n      if (Math.abs(X) <= 10) {\n        final_X = this.distanceX; // 回到原点\n        changed_X = final_X - distance; // 计算出需要位置的值\n        origin = \"easeOutExpo(t,\".concat(distance, \",\").concat(changed_X, \",300)\"); // 运动曲线为easeOutElastic\n      } else {\n        final_X = this.distanceX + (X > 0 ? 1 : -1) * width;\n        changed_X = final_X - distance; // 计算出需要位置的值\n        origin = \"easeOutExpo(t,\".concat(distance, \",\").concat(changed_X, \",300)\"); // 运动曲线为easeOutExpo\n      }\n      var result = BindingX.bind({\n        eventType: 'timing', // 结束的时候是没有任何监听的 用 timing 来做定时的动画\n        exitExpression: \"t>300\", // 当时间超过 300ms 结束动画\n        props: [\n        { element: swiperRef, property: 'transform.translateX', expression: origin },\n        { element: swiperRef, property: 'transform.translateY', expression: \"easeOutExpo(t,\".concat(this.distance, \",0,200)\") },\n        { element: leftRef, property: 'transform.translateX', expression: origin },\n        { element: rightRef, property: 'transform.translateX', expression: origin }] }, /*#__PURE__*/function () {var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(\n\n        function _callee2(e) {var _iterator2, _step2, item;return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:\n                  if (e.state === 'end' || e.state === 'exit') {\n                    _this3.distanceX = final_X;\n                    _this3.scroll = false;\n                    if (Math.abs(X) <= 10 && _this3.distanceX == 0) {\n\n                    } else if (Math.abs(X) > 10 && _this3.distanceX != 0) {_iterator2 = _createForOfIteratorHelper(\n                      _this3.videoList);try {for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {item = _step2.value;\n                          item.flag = false;\n                        }} catch (err) {_iterator2.e(err);} finally {_iterator2.f();}\n                    } else if (Math.abs(X) > 10 && _this3.distanceX == 0) {\n                      _this3.videoPlay(_this3.index);\n                    }\n\n                  }case 1:case \"end\":return _context2.stop();}}}, _callee2);}));return function (_x2) {return _ref2.apply(this, arguments);};}());\n\n    },\n    bindCurrentX: function bindCurrentX(current) {var _this4 = this;var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;\n      if (this.distanceX != 0) return;\n      this.scroll = true;\n      var swiperRef = this.getEl(this.$refs.swiper);\n      var changed_Y, final_Y, origin;\n\n      final_Y = this.distance + (this.index - current) * this.sysheight;\n      changed_Y = final_Y - this.distance; // 计算出需要位置的值\n      time = time * Math.abs(this.index - current);\n      origin = \"easeOutExpo(t,\".concat(this.distance, \",\").concat(changed_Y, \",\").concat(time, \")\"); // 运动曲线为easeOutExpo\n\n\n\n      var result = BindingX.bind({\n        eventType: 'timing', // 结束的时候是没有任何监听的 用 timing 来做定时的动画\n        exitExpression: \"t>\".concat(time), // 当时间超过 300ms 结束动画\n        props: [\n        { element: swiperRef, property: 'transform.translateY', expression: origin }] }, /*#__PURE__*/function () {var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(\n\n        function _callee3(e) {var _iterator3, _step3, item;return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:if (!(\n                  e.state === 'end' || e.state === 'exit')) {_context3.next = 12;break;}\n                  _this4.distance = final_Y;\n                  _this4.scroll = false;_iterator3 = _createForOfIteratorHelper(\n\n                  _this4.videoList);try {for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {item = _step3.value;\n                      item.flag = false;\n                    }} catch (err) {_iterator3.e(err);} finally {_iterator3.f();}\n                  _this4.index = -_this4.distance / _this4.sysheight;\n\n                  _this4.videoList[_this4.index].flag = true;\n\n\n                  //加载视频\n                  __f__(\"log\", '===========================//加载视频', \" at pages/tiktok/scrollMixins.js:293\");if (!(\n                  _this4.videoList.length - _this4.index - 1 <= _this4.playCount)) {_context3.next = 12;break;}\n                  __f__(\"log\", '===========================//加载视频', \" at pages/tiktok/scrollMixins.js:295\");_context3.next = 12;return (\n                    _this4.pushVideoList());case 12:case \"end\":return _context3.stop();}}}, _callee3);}));return function (_x3) {return _ref3.apply(this, arguments);};}());\n\n\n\n\n\n\n    },\n    pauseVideo: function pauseVideo(val) {\n      this.videoList[this.oldIndex].initialTime = val;\n    },\n    clickVideo: function clickVideo() {\n      this.videoList[this.index].flag = !this.videoList[this.index].flag;\n    },\n    videoPlay: function videoPlay(index) {var _this5 = this;\n      if (this.distanceX != 0) return;\n      var promise = new Promise(function (resolve, reject) {\n        resolve();\n      });\n      promise.then(function (res) {\n        _this5.videoList[index].flag = !_this5.videoList[index].flag;\n      });\n    } },\n\n  watch: {\n    index: function index(newVal, oldVal) {\n      this.oldIndex = oldVal;\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js */ 41)[\"default\"], __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 25)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvdGlrdG9rL3Njcm9sbE1peGlucy5qcyJdLCJuYW1lcyI6WyJCaW5kaW5nWCIsInVuaSIsImFuaW1hdGlvbiIsIndlZXgiLCJyZXF1aXJlTW9kdWxlIiwibW9kYWwiLCJkYXRhIiwidHlwZVgiLCJwbGF5Q291bnQiLCJzdGFydERpc3RhbmNlIiwibWluVGltZSIsImJhY2tEaXN0YW5jZSIsIm9sZFRpbWUiLCJvbGRUb3VjZXMiLCJ0b3VjaFR5cGUiLCJnZXNUb2tlbiIsImhlaWdodCIsImluZGV4Iiwib2xkSW5kZXgiLCJ3aWR0aCIsInN5c2hlaWdodCIsImRpc3RhbmNlIiwiZGlzdGFuY2VYIiwic2Nyb2xsIiwiY3JlYXRlZCIsInBsdXMiLCJzY3JlZW4iLCJsb2NrT3JpZW50YXRpb24iLCJnZXRTeXN0ZW1JbmZvU3luYyIsIndpbmRvd0hlaWdodCIsIndpbmRvd1dpZHRoIiwibWV0aG9kcyIsImdldEVsIiwiZWwiLCJXWEVudmlyb25tZW50IiwicmVmIiwiSFRNTEVsZW1lbnQiLCIkZWwiLCJMaXN0VG91Y2hTdGFydCIsImUiLCJEYXRlIiwiY2hhbmdlZFRvdWNoZXMiLCJMaXN0VG91Y2hFbmQiLCJMaXN0VG91Y2hNb3ZlIiwib2xkVmFsdWUiLCJuZXdUb3VjZXMiLCJNYXRoIiwiYWJzIiwicGFnZVkiLCJwYWdlWCIsInVuYmluZCIsImV2ZW50VHlwZSIsInRva2VuIiwibW92ZSIsInRvdWNoX29yaWdpbiIsInZpZGVvTGlzdCIsImxlbmd0aCIsInN3aXBlclJlZiIsIiRyZWZzIiwic3dpcGVyIiwibGVmdFJlZiIsImxlZnQiLCJyaWdodFJlZiIsInJpZ2h0IiwiYW5jaG9yIiwidG91Y2hSZWYiLCJ0b3VjaCIsImdlc1Rva2VuT2JqIiwiYmluZCIsInByb3BzIiwiZWxlbWVudCIsInByb3BlcnR5IiwiZXhwcmVzc2lvbiIsInN0YXRlIiwiZGVsdGFZIiwibmV3VGltZSIsInF1aWNrTW92ZSIsImdldFRpbWUiLCJiaW5kVGltaW5nIiwiZGVsdGFYIiwiYmluZFRpbWluZ1giLCJZIiwidW5iaW5kQWxsIiwiY2hhbmdlZF9ZIiwiZmluYWxfWSIsInRyYW5zbGF0ZV9ZX29yaWdpbiIsInJlc3VsdCIsImV4aXRFeHByZXNzaW9uIiwiaXRlbSIsImZsYWciLCJwdXNoVmlkZW9MaXN0IiwiWCIsInBhcnNlSW50IiwiY2hhbmdlZF9YIiwiZmluYWxfWCIsIm9yaWdpbiIsInZpZGVvUGxheSIsImJpbmRDdXJyZW50WCIsImN1cnJlbnQiLCJ0aW1lIiwicGF1c2VWaWRlbyIsInZhbCIsImluaXRpYWxUaW1lIiwiY2xpY2tWaWRlbyIsInByb21pc2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInRoZW4iLCJyZXMiLCJ3YXRjaCIsIm5ld1ZhbCIsIm9sZFZhbCJdLCJtYXBwaW5ncyI6IjYvRUFBQSxJQUFNQSxRQUFRLEdBQUdDLDhDQUFBLENBQXdCLFVBQXhCLENBQWpCO0FBQ0EsSUFBTUMsU0FBUyxHQUFHQyxJQUFJLENBQUNDLGFBQUwsQ0FBbUIsV0FBbkIsQ0FBbEI7QUFDQSxJQUFNQyxLQUFLLEdBQUdGLElBQUksQ0FBQ0MsYUFBTCxDQUFtQixPQUFuQixDQUFkLEM7QUFDZTtBQUNkRSxNQURjLGtCQUNSO0FBQ0wsV0FBTTtBQUNMQyxXQUFLLEVBQUMsS0FERCxFQUNRO0FBQ2JDLGVBQVMsRUFBQyxDQUZMLEVBRU87QUFDWkMsbUJBQWEsRUFBQyxDQUhULEVBR1k7QUFDakJDLGFBQU8sRUFBQyxHQUpILEVBSVE7QUFDYkMsa0JBQVksRUFBQyxHQUxSLEVBS2E7OztBQUdsQkMsYUFBTyxFQUFDLENBUkg7QUFTTEMsZUFBUyxFQUFDLEVBVEw7QUFVTEMsZUFBUyxFQUFDLElBVkw7QUFXTEMsY0FBUSxFQUFDLENBWEo7QUFZTEMsWUFBTSxFQUFDLE9BWkY7QUFhTEMsV0FBSyxFQUFDLENBYkQ7QUFjTEMsY0FBUSxFQUFDLENBZEo7QUFlTEMsV0FBSyxFQUFDLEVBZkQ7QUFnQkxDLGVBQVMsRUFBQyxDQWhCTDtBQWlCTEMsY0FB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SUFBMEMsTUFBSSxDQUFDVCxTQWZsRDtBQWdCQywrQkFBWSxtQ0FBWiwwQ0FoQkQ7QUFpQk8sMEJBQUksQ0FBQ2tGLGFBQUwsRUFqQlAsNkRBTlUsb0VBQWI7Ozs7Ozs7QUE4QkEsS0ExUU07QUEyUVBVLGNBM1FPLHNCQTJRSUMsR0EzUUosRUEyUVE7QUFDYixXQUFLOUMsU0FBTCxDQUFlLEtBQUtyQyxRQUFwQixFQUE4Qm9GLFdBQTlCLEdBQTRDRCxHQUE1QztBQUNELEtBN1FNO0FBOFFQRSxjQTlRTyx3QkE4UUs7QUFDWCxXQUFLaEQsU0FBTCxDQUFlLEtBQUt0QyxLQUFwQixFQUEyQndFLElBQTNCLEdBQWtDLENBQUMsS0FBS2xDLFNBQUwsQ0FBZSxLQUFLdEMsS0FBcEIsRUFBMkJ3RSxJQUE5RDtBQUNBLEtBaFJNO0FBaVJQTyxhQWpSTyxxQkFpUkcvRSxLQWpSSCxFQWlSUztBQUNmLFVBQUcsS0FBS0ssU0FBTCxJQUFnQixDQUFuQixFQUFzQjtBQUN0QixVQUFJa0YsT0FBTyxHQUFHLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVNDLE1BQVQsRUFBa0I7QUFDM0NELGVBQU87QUFDUCxPQUZhLENBQWQ7QUFHQUYsYUFBTyxDQUFDSSxJQUFSLENBQWEsVUFBQUMsR0FBRyxFQUFFO0FBQ2pCLGNBQUksQ0FBQ3RELFNBQUwsQ0FBZXRDLEtBQWYsRUFBc0J3RSxJQUF0QixHQUE2QixDQUFDLE1BQUksQ0FBQ2xDLFNBQUwsQ0FBZXRDLEtBQWYsRUFBc0J3RSxJQUFwRDtBQUNBLE9BRkQ7QUFHQSxLQXpSTSxFQWpDTTs7QUE0VGRxQixPQUFLLEVBQUM7QUFDTDdGLFNBREssaUJBQ0M4RixNQURELEVBQ1FDLE1BRFIsRUFDZTtBQUNuQixXQUFLOUYsUUFBTCxHQUFnQjhGLE1BQWhCO0FBQ0EsS0FISSxFQTVUUSxFIiwiZmlsZSI6IjQ4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQmluZGluZ1ggPSB1bmkucmVxdWlyZU5hdGl2ZVBsdWdpbignYmluZGluZ3gnKTtcbmNvbnN0IGFuaW1hdGlvbiA9IHdlZXgucmVxdWlyZU1vZHVsZSgnYW5pbWF0aW9uJyk7XG5jb25zdCBtb2RhbCA9IHdlZXgucmVxdWlyZU1vZHVsZSgnbW9kYWwnKTtcbmV4cG9ydCBkZWZhdWx0IHtcblx0ZGF0YSgpe1xuXHRcdHJldHVybntcblx0XHRcdHR5cGVYOmZhbHNlLCAvL+aYr+WQpuW8gOWQr+W3puWPs+a7keWKqFxuXHRcdFx0cGxheUNvdW50OjIsLy/liankvZnlpJrlsJHop4bpopHliqDovb3op4bpopHliJfooahcblx0XHRcdHN0YXJ0RGlzdGFuY2U6NSwgLy/lvIDlkK/lt6blj7Pmu5Hliqjml7bmnInmlYgs5Yik5pat5bem5Y+z5LiK5LiL5ouW5Yqo55qE5ZCv5Yqo6Led56a7XG5cdFx0XHRtaW5UaW1lOjMwMCwgLy/liKTmlq3kuLrlv6vpgJ/mu5HliqjnmoTml7bpl7Qs6K+l5pe26Ze05YaF5peg6KeG5Zue5by5XG5cdFx0XHRiYWNrRGlzdGFuY2U6MjAwLCAvL+S4iuS4i+a7keWKqOeahOWbnuW8uei3neemu1xuXHRcdFx0XG5cdFx0XHRcblx0XHRcdG9sZFRpbWU6MCxcblx0XHRcdG9sZFRvdWNlczp7fSxcblx0XHRcdHRvdWNoVHlwZTpudWxsLFxuXHRcdFx0Z2VzVG9rZW46MCxcblx0XHRcdGhlaWdodDonNjY3cHgnLFxuXHRcdFx0aW5kZXg6MCxcblx0XHRcdG9sZEluZGV4OjAsXG5cdFx0XHR3aWR0aDonJyxcblx0XHRcdHN5c2hlaWdodDowLFxuXHRcdFx0ZGlzdGFuY2U6MCxcblx0XHRcdGRpc3RhbmNlWDowLFxuXHRcdFx0c2Nyb2xsOmZhbHNlLFxuXHRcdH1cblx0fSxcblx0Y3JlYXRlZCgpe1xuXG5cdFx0XHRwbHVzLnNjcmVlbi5sb2NrT3JpZW50YXRpb24oXCJwb3J0cmFpdC1wcmltYXJ5XCIpXG5cblx0XHR0aGlzLnN5c2hlaWdodCA9IHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpLndpbmRvd0hlaWdodFxuXHRcdHRoaXMuaGVpZ2h0ID0gYCR7dGhpcy5zeXNoZWlnaHR9cHhgIFxuXHRcdGxldCB3aWR0aCA9IHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpLndpbmRvd1dpZHRoIFxuXHRcdHRoaXMud2lkdGggPSBgJHt3aWR0aH1weGAgXG5cdH0sXG5cdG1ldGhvZHM6e1xuXHRcdGdldEVsOiBmdW5jdGlvbihlbCkge1xuXHRcdCAgICBpZiAodHlwZW9mIGVsID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgZWwgPT09ICdudW1iZXInKSByZXR1cm4gZWw7XG5cdFx0XHRpZiAoV1hFbnZpcm9ubWVudCkge1xuXHRcdFx0ICAgIHJldHVybiBlbC5yZWY7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0ICAgIHJldHVybiBlbCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ID8gZWwgOiBlbC4kZWw7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHQvLyBMaXN0VG91Y2jop6bmkbjlvIDlp4tcblx0XHRMaXN0VG91Y2hTdGFydChlKSB7XG5cdFx0XHRjb25zb2xlLmxvZygnPT09PT09PT09PT09PT09PT09PT09PSA9PT09ICBMaXN0VG91Y2hTdGFydCcpO1xuXHRcdFx0dGhpcy5vbGRUaW1lID0gbmV3IERhdGUoKVxuXHRcdFx0dGhpcy5vbGRUb3VjZXMgPSBlLmNoYW5nZWRUb3VjaGVzWzBdXG5cdFx0fSxcblx0XHRMaXN0VG91Y2hFbmQoZSkge1xuXHRcdFx0Y29uc29sZS5sb2coJz09PT09PT09PT09PT09PT09PT09PT0gPT09PSAgTGlzdFRvdWNoRW5kJyk7XG5cdFx0XHRjb25zb2xlLmxvZygnZW5kJylcblx0XHR9LFxuXHRcdC8v5Yik5a6a5pa55ZCRXG5cdFx0TGlzdFRvdWNoTW92ZShlKXtcblx0XHRcdFxuXHRcdFx0Ly/nu5PmnZ/lkK/liqjliKTmlq1cblx0XHRcdGlmKHRoaXMudG91Y2hUeXBlID09ICdzdG9wJykgcmV0dXJuXG5cdFx0XHRsZXQgeyBvbGRUb3VjZXMsb2xkVmFsdWUsdG91Y2hUeXBlIH0gPSB0aGlzXG5cdFx0XHRsZXQgbmV3VG91Y2VzID0gZS5jaGFuZ2VkVG91Y2hlc1swXVxuXHRcdFx0XG5cdFx0XHRpZighdGhpcy50b3VjaFR5cGUpe1xuXHRcdFx0XHRsZXQgc3RhcnREaXN0YW5jZSA9IHRoaXMudHlwZVg/dGhpcy5zdGFydERpc3RhbmNlOiAwIFxuXHRcdFx0XHRcblx0XHRcdFx0Ly/mu5HliqjlkK/liqjmnaHku7Zcblx0XHRcdFx0dGhpcy50b3VjaFR5cGUgPSBNYXRoLmFicyggbmV3VG91Y2VzLnBhZ2VZIC0gb2xkVG91Y2VzLnBhZ2VZICkgPiBzdGFydERpc3RhbmNlID8gJ21vdmVZJyA6IG51bGxcblx0XHRcdFx0aWYodGhpcy50b3VjaFR5cGU9PSdtb3ZlWScmJm5ld1RvdWNlcy5wYWdlWT4gb2xkVG91Y2VzLnBhZ2VZKXtcblx0XHRcdFx0XHR0aGlzLnRvdWNoVHlwZSA9ICdtb3ZlWUInXG5cdFx0XHRcdH1lbHNlIGlmKHRoaXMudG91Y2hUeXBlPT0nbW92ZVknJiZuZXdUb3VjZXMucGFnZVk8b2xkVG91Y2VzLnBhZ2VZKXtcblx0XHRcdFx0XHR0aGlzLnRvdWNoVHlwZSA9ICdtb3ZlWVQnXG5cdFx0XHRcdH1cblx0XHRcdFx0Ly/mmK/lkKblvIDlkK/lt6blj7Pmu5Hliqhcblx0XHRcdFx0aWYoIXRoaXMudG91Y2hUeXBlJiZ0aGlzLnR5cGVYKXtcblx0XHRcdFx0XHR0aGlzLnRvdWNoVHlwZSA9IG5ld1RvdWNlcy5wYWdlWCAtIG9sZFRvdWNlcy5wYWdlWCA+IHN0YXJ0RGlzdGFuY2UgPyAnbW92ZVhSJyA6IHRoaXMudG91Y2hUeXBlXG5cdFx0XHRcdFx0dGhpcy50b3VjaFR5cGUgPSBuZXdUb3VjZXMucGFnZVggLSBvbGRUb3VjZXMucGFnZVggPCAtc3RhcnREaXN0YW5jZSA/ICdtb3ZlWEwnIDogdGhpcy50b3VjaFR5cGVcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdH1lbHNle1xuXHRcdFx0XHRcblx0XHRcdFx0XG5cdFx0XHRcdC8vIOWmguaenOWcqOaJp+ihjOWKqOeUu++8jOWwseS4jeinpuWPkVxuXHRcdFx0XHRpZih0aGlzLnNjcm9sbCkgcmV0dXJuIFxuXHRcdFx0XHQvLyDop6Pnu5HliqjnlLtcblx0XHRcdFx0aWYodGhpcy5nZXNUb2tlbiAhPSAwKSB7XG5cdFx0XHRcdFx0QmluZGluZ1gudW5iaW5kKHtcblx0XHRcdFx0XHRcdGV2ZW50VHlwZToncGFuJyxcblx0XHRcdFx0XHRcdHRva2VuOnRoaXMuZ2VzVG9rZW5cblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdHRoaXMuZ2VzVG9rZW4gPSAwXG5cdFx0XHRcdFx0Ly8gcmV0dXJuXG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdGxldCBtb3ZlXG5cdFx0XHRcdGlmKHRoaXMudG91Y2hUeXBlID09ICdtb3ZlWUInfHx0aGlzLnRvdWNoVHlwZSA9PSAnbW92ZVlUJyl7XG5cdFx0XHRcdFx0bW92ZSA9IDBcblx0XHRcdFx0fWVsc2UgaWYodGhpcy50b3VjaFR5cGUgPT0gJ21vdmVYTCcpe1xuXHRcdFx0XHRcdG1vdmUgPSAtMVxuXHRcdFx0XHR9ZWxzZSBpZih0aGlzLnRvdWNoVHlwZSA9PSAnbW92ZVhSJyl7XG5cdFx0XHRcdFx0bW92ZSA9IDFcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdFx0XG5cdFx0XHRcdFxuXHRcdFx0XHQvL+WFs+mXreWQr+WKqOWIpOaWrVxuXHRcdFx0XHR0aGlzLnRvdWNoVHlwZSA9ICdzdG9wJ1xuXHRcdFx0XHRcblx0XHRcdFx0bGV0IHRvdWNoX29yaWdpbiA9IGB5KyR7dGhpcy5kaXN0YW5jZX08PTAgJiYgJHttb3ZlfT09MCAmJiAke3RoaXMuZGlzdGFuY2VYfT09MCAmJiBcblx0XHRcdFx0XHR5KyR7dGhpcy5kaXN0YW5jZX0tJHt0aGlzLnN5c2hlaWdodH0+PSR7LXRoaXMuc3lzaGVpZ2h0KnRoaXMudmlkZW9MaXN0Lmxlbmd0aH0/IFxuXHRcdFx0XHRcdHkrJHt0aGlzLmRpc3RhbmNlfSA6ICR7dGhpcy5kaXN0YW5jZX1gXG5cdFx0XHRcdC8vIOaJvuWIsOWFg+e0oCBcblx0XHRcdFx0bGV0IHN3aXBlclJlZiA9IHRoaXMuZ2V0RWwodGhpcy4kcmVmcy5zd2lwZXIpXG5cdFx0XHRcdGxldCBsZWZ0UmVmID0gdGhpcy5nZXRFbCh0aGlzLiRyZWZzLmxlZnQpXG5cdFx0XHRcdGxldCByaWdodFJlZiA9IHRoaXMuZ2V0RWwodGhpcy4kcmVmcy5yaWdodClcblx0XHRcdFx0XG5cdFx0XHRcdGxldCBhbmNob3Jcblx0XHRcdFx0aWYodGhpcy5kaXN0YW5jZVg9PTApe1xuXHRcdFx0XHRcdGxldCB0b3VjaFJlZiA9IHRoaXMuZ2V0RWwodGhpcy4kcmVmcy50b3VjaClcblx0XHRcdFx0XHRhbmNob3IgPSB0b3VjaFJlZlxuXHRcdFx0XHR9ZWxzZSBpZih0aGlzLmRpc3RhbmNlWDw9MCl7XG5cdFx0XHRcdFx0YW5jaG9yID0gcmlnaHRSZWZcblx0XHRcdFx0fWVsc2V7XG5cdFx0XHRcdFx0YW5jaG9yID0gbGVmdFJlZlxuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0XHRsZXQgZ2VzVG9rZW5PYmogPSBCaW5kaW5nWC5iaW5kKHtcblx0XHRcdFx0XHRhbmNob3I6YW5jaG9yLFxuXHRcdFx0XHRcdGV2ZW50VHlwZToncGFuJyxcblx0XHRcdFx0XHRwcm9wczogW1xuXHRcdFx0XHRcdFx0e2VsZW1lbnQ6c3dpcGVyUmVmLCBwcm9wZXJ0eTondHJhbnNmb3JtLnRyYW5zbGF0ZVknLGV4cHJlc3Npb246IHRvdWNoX29yaWdpbn0sXG5cdFx0XHRcdFx0XHR7ZWxlbWVudDpzd2lwZXJSZWYsIHByb3BlcnR5Oid0cmFuc2Zvcm0udHJhbnNsYXRlWCcsZXhwcmVzc2lvbjogYCR7bW92ZX0hPTAgJiYgJHttb3ZlfSp4PjAgP3grJHt0aGlzLmRpc3RhbmNlWH0gOiAke3RoaXMuZGlzdGFuY2VYfWB9LFxuXHRcdFx0XHRcdFx0e2VsZW1lbnQ6bGVmdFJlZiwgcHJvcGVydHk6J3RyYW5zZm9ybS50cmFuc2xhdGVYJyxleHByZXNzaW9uOiBgJHttb3ZlfSE9MCYmICR7bW92ZSp0aGlzLmRpc3RhbmNlWH08PTAmJngrJHt0aGlzLmRpc3RhbmNlWH08MzkzP3grJHt0aGlzLmRpc3RhbmNlWH0gOiAke3RoaXMuZGlzdGFuY2VYfWB9LFxuXHRcdFx0XHRcdFx0e2VsZW1lbnQ6cmlnaHRSZWYsIHByb3BlcnR5Oid0cmFuc2Zvcm0udHJhbnNsYXRlWCcsZXhwcmVzc2lvbjogYCR7bW92ZX0hPTAmJiAke21vdmUqdGhpcy5kaXN0YW5jZVh9PD0wJiZ4KyR7dGhpcy5kaXN0YW5jZVh9Pi0zOTM/eCske3RoaXMuZGlzdGFuY2VYfSA6ICR7dGhpcy5kaXN0YW5jZVh9YH1cblx0XHRcdFx0XHRdXG5cdFx0XHRcdH0sIChlKSA9PiB7XG5cdFx0XHRcdFx0aWYoZS5zdGF0ZSA9PT0gJ2VuZCcpIHtcblx0XHRcdFx0XHRcdHRoaXMudG91Y2hUeXBlID0gbnVsbFxuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHQvL+S4iuS4i1xuXHRcdFx0XHRcdFx0aWYobW92ZT09MCYmIHRoaXMuZGlzdGFuY2VYPT0wJiYgTWF0aC5hYnMoZS5kZWx0YVkpPnRoaXMuc3RhcnREaXN0YW5jZSl7XG5cdFx0XHRcdFx0XHRcdGxldCBuZXdUaW1lID0gbmV3IERhdGUoKVxuXHRcdFx0XHRcdFx0XHRsZXQgcXVpY2tNb3ZlID0gbmV3VGltZS5nZXRUaW1lKCkgLSB0aGlzLm9sZFRpbWUuZ2V0VGltZSgpIDw9IHRoaXMubWluVGltZSA/IHRydWU6ZmFsc2Vcblx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdC8vIOiusOW9leW9k+WJjeWdkOagh1xuXHRcdFx0XHRcdFx0XHRjb25zdCBkaXN0YW5jZSA9IHRoaXMuZGlzdGFuY2UgKyBlLmRlbHRhWVxuXHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0aWYoZGlzdGFuY2U+MCB8fCB0aGlzLmRpc3RhbmNlICsgZS5kZWx0YVktdGhpcy5zeXNoZWlnaHQ8LXRoaXMuc3lzaGVpZ2h0KnRoaXMudmlkZW9MaXN0Lmxlbmd0aCkgcmV0dXJuXG5cdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHR0aGlzLmJpbmRUaW1pbmcoZGlzdGFuY2UsZS5kZWx0YVkscXVpY2tNb3ZlKVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0aWYobW92ZSE9MCYmIG1vdmUqdGhpcy5kaXN0YW5jZVg8PTAmJiBlLmRlbHRhWCp0aGlzLmRpc3RhbmNlWDw9MCYmIE1hdGguYWJzKGUuZGVsdGFYKT50aGlzLnN0YXJ0RGlzdGFuY2Upe1xuXHRcdFx0XHRcdFx0XHRjb25zdCBkaXN0YW5jZSA9IHRoaXMuZGlzdGFuY2VYICsgZS5kZWx0YVhcblx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdHRoaXMuYmluZFRpbWluZ1goZGlzdGFuY2UsZS5kZWx0YVgpXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KVxuXHRcdFx0XHQvLyDorrDlvZXkuIvlj5bmtojnmoR0b2tlbiDlpJrmrKEgb250b3VjaHN0YXJ0IOaXtuimgeW4puedgCB0b2tlbiDmiorkuIrmrKHnmoTop6Pnu5Fcblx0XHRcdFx0dGhpcy5nZXNUb2tlbiA9IGdlc1Rva2VuT2JqLnRva2VuXG5cdFx0XHR9XG5cdFx0XHRcblx0XHR9LFxuXHRcdGJpbmRUaW1pbmcoZGlzdGFuY2UsWSxxdWlja01vdmUpe1xuXHRcdFx0QmluZGluZ1gudW5iaW5kQWxsKClcblx0XHRcdC8vIOW8gOWni+aJp+ihjOWKqOeUu1xuXHRcdFx0dGhpcy5zY3JvbGwgPSB0cnVlXG5cdFx0XHRsZXQgc3dpcGVyUmVmID0gdGhpcy5nZXRFbCh0aGlzLiRyZWZzLnN3aXBlcilcblx0XHRcdGxldCBzeXNoZWlnaHQgPSB0aGlzLnN5c2hlaWdodFxuXHRcdFx0XG5cdFx0XHRsZXQgY2hhbmdlZF9ZLCBmaW5hbF9ZLCB0cmFuc2xhdGVfWV9vcmlnaW5cblx0XHRcdFxuXHRcdFx0Ly8g55Sf5oiQ6KGo6L6+5byP6YC76L6RXG5cdFx0XHRpZiggTWF0aC5hYnMoWSk8PXRoaXMuYmFja0Rpc3RhbmNlJiYhcXVpY2tNb3ZlKSB7XG5cdFx0XHRcdC8vIOW+gOS4iuS4i+aLluWKqDIw5Lul5YaF5pe2XG5cdFx0XHRcdGZpbmFsX1kgPSB0aGlzLmRpc3RhbmNlXHQvLyDlm57liLDljp/ngrlcblx0XHRcdFx0Y2hhbmdlZF9ZID0gZmluYWxfWSAtIGRpc3RhbmNlICAgIC8vIOiuoeeul+WHuumcgOimgeS9jee9rueahOWAvFxuXHRcdFx0XHR0cmFuc2xhdGVfWV9vcmlnaW4gPSBgZWFzZU91dEV4cG8odCwke2Rpc3RhbmNlfSwke2NoYW5nZWRfWX0sMzAwKWAgLy8g6L+Q5Yqo5puy57q/5Li6ZWFzZU91dEVsYXN0aWNcblx0XHRcdH0gZWxzZXtcblx0XHRcdFx0Ly8g5b6A5LiK5LiL5ouW5Yqo6LaF6L+H5LiA5Y2K5pe2XG5cdFx0XHRcdGZpbmFsX1kgPSB0aGlzLmRpc3RhbmNlICsgKFk+MD8xOi0xKSAqdGhpcy5zeXNoZWlnaHRcblx0XHRcdFx0Y2hhbmdlZF9ZPSBmaW5hbF9ZIC0gZGlzdGFuY2UvLyDorqHnrpflh7rpnIDopoHkvY3nva7nmoTlgLxcblx0XHRcdFx0dHJhbnNsYXRlX1lfb3JpZ2luID0gYGVhc2VPdXRFeHBvKHQsJHtkaXN0YW5jZX0sJHtjaGFuZ2VkX1l9LDkwMClgIC8vIOi/kOWKqOabsue6v+S4umVhc2VPdXRFeHBvXG5cdFx0XHR9XG5cdFx0XHRsZXQgcmVzdWx0ID0gQmluZGluZ1guYmluZCh7XG5cdFx0XHRcdGV2ZW50VHlwZTondGltaW5nJywgICAgICAgLy8g57uT5p2f55qE5pe25YCZ5piv5rKh5pyJ5Lu75L2V55uR5ZCs55qEIOeUqCB0aW1pbmcg5p2l5YGa5a6a5pe255qE5Yqo55S7XG5cdFx0XHRcdGV4aXRFeHByZXNzaW9uOlwidD42MDBcIiwgIC8vIOW9k+aXtumXtOi2hei/hyAzMDBtcyDnu5PmnZ/liqjnlLtcblx0XHRcdFx0cHJvcHM6IFtcblx0XHRcdFx0XHR7ZWxlbWVudDpzd2lwZXJSZWYsIHByb3BlcnR5Oid0cmFuc2Zvcm0udHJhbnNsYXRlWScsZXhwcmVzc2lvbjp0cmFuc2xhdGVfWV9vcmlnaW59LFxuXHRcdFx0XHRcdF1cblx0XHRcdFx0fSxhc3luYyAoZSkgPT4ge1xuXHRcdFx0XHRcdGlmKGUuc3RhdGUgPT09ICdlbmQnIHx8IGUuc3RhdGUgPT09ICdleGl0Jykge1xuXHRcdFx0XHRcdFx0dGhpcy5kaXN0YW5jZSA9IGZpbmFsX1lcblx0XHRcdFx0XHRcdHRoaXMuc2Nyb2xsID0gZmFsc2Vcblx0XHRcdFx0XHRcdGlmKCBNYXRoLmFicyhZKT50aGlzLmJhY2tEaXN0YW5jZXx8cXVpY2tNb3ZlKSB7XG5cdFx0XHRcdFx0XHRcdGZvciAobGV0IGl0ZW0gb2YgdGhpcy52aWRlb0xpc3QpIHtcblx0XHRcdFx0XHRcdFx0XHRpdGVtLmZsYWcgPSBmYWxzZVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdHRoaXMuaW5kZXggPSAtdGhpcy5kaXN0YW5jZS90aGlzLnN5c2hlaWdodFxuXHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0dGhpcy52aWRlb0xpc3RbdGhpcy5pbmRleF0uZmxhZyA9IHRydWVcblx0XHRcdFx0XHRcdFx0Ly/liqDovb3op4bpopFcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJz09PT09PT09PT09PT09PT09PT09PT09PT09PS8v5Yqg6L296KeG6aKRJyk7XG5cdFx0XHRcdFx0XHRcdGlmKHRoaXMudmlkZW9MaXN0Lmxlbmd0aCAtIHRoaXMuaW5kZXggLSAxIDw9IHRoaXMucGxheUNvdW50KXtcblx0XHRcdFx0XHRcdFx0XHRhd2FpdCB0aGlzLnB1c2hWaWRlb0xpc3QoKVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9ZWxzZSBpZihNYXRoLmFicyhZKTw9dGhpcy5iYWNrRGlzdGFuY2UmJiFxdWlja01vdmUpe1xuXHRcdFx0XHRcdFx0XHR0aGlzLnZpZGVvTGlzdFt0aGlzLmluZGV4XS5mbGFnID0gdHJ1ZVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdH0pXG5cdFx0fSxcblx0XHRiaW5kVGltaW5nWChkaXN0YW5jZSxYKXtcblx0XHRcdC8vIOW8gOWni+aJp+ihjOWKqOeUu1xuXHRcdFx0dGhpcy5zY3JvbGwgPSB0cnVlXG5cdFx0XHRsZXQgc3dpcGVyUmVmID0gdGhpcy5nZXRFbCh0aGlzLiRyZWZzLnN3aXBlcilcblx0XHRcdGxldCBsZWZ0UmVmID0gdGhpcy5nZXRFbCh0aGlzLiRyZWZzLmxlZnQpXG5cdFx0XHRsZXQgcmlnaHRSZWYgPSB0aGlzLmdldEVsKHRoaXMuJHJlZnMucmlnaHQpXG5cdFx0XHRsZXQgd2lkdGggPSBwYXJzZUludCh0aGlzLndpZHRoKSBcblx0XHRcdFxuXHRcdFx0bGV0IGNoYW5nZWRfWCwgZmluYWxfWCwgb3JpZ2luXG5cdFx0XHRcblx0XHRcdC8vIOeUn+aIkOihqOi+vuW8j+mAu+i+kVxuXHRcdFx0aWYoIE1hdGguYWJzKFgpPD0xMCkge1xuXHRcdFx0XHRmaW5hbF9YID0gdGhpcy5kaXN0YW5jZVhcdC8vIOWbnuWIsOWOn+eCuVxuXHRcdFx0XHRjaGFuZ2VkX1ggPSBmaW5hbF9YIC0gZGlzdGFuY2UgICAgLy8g6K6h566X5Ye66ZyA6KaB5L2N572u55qE5YC8XG5cdFx0XHRcdG9yaWdpbiA9IGBlYXNlT3V0RXhwbyh0LCR7ZGlzdGFuY2V9LCR7Y2hhbmdlZF9YfSwzMDApYCAvLyDov5Dliqjmm7Lnur/kuLplYXNlT3V0RWxhc3RpY1xuXHRcdFx0fSBlbHNle1xuXHRcdFx0XHRmaW5hbF9YID0gdGhpcy5kaXN0YW5jZVggKyAoWD4wPzE6LTEpICp3aWR0aFxuXHRcdFx0XHRjaGFuZ2VkX1g9IGZpbmFsX1ggLSBkaXN0YW5jZS8vIOiuoeeul+WHuumcgOimgeS9jee9rueahOWAvFxuXHRcdFx0XHRvcmlnaW4gPSBgZWFzZU91dEV4cG8odCwke2Rpc3RhbmNlfSwke2NoYW5nZWRfWH0sMzAwKWAgLy8g6L+Q5Yqo5puy57q/5Li6ZWFzZU91dEV4cG9cblx0XHRcdH1cblx0XHRcdGxldCByZXN1bHQgPSBCaW5kaW5nWC5iaW5kKHtcblx0XHRcdFx0ZXZlbnRUeXBlOid0aW1pbmcnLCAgICAgICAvLyDnu5PmnZ/nmoTml7blgJnmmK/msqHmnInku7vkvZXnm5HlkKznmoQg55SoIHRpbWluZyDmnaXlgZrlrprml7bnmoTliqjnlLtcblx0XHRcdFx0ZXhpdEV4cHJlc3Npb246XCJ0PjMwMFwiLCAgLy8g5b2T5pe26Ze06LaF6L+HIDMwMG1zIOe7k+adn+WKqOeUu1xuXHRcdFx0XHRwcm9wczogW1xuXHRcdFx0XHRcdHtlbGVtZW50OnN3aXBlclJlZiwgcHJvcGVydHk6J3RyYW5zZm9ybS50cmFuc2xhdGVYJyxleHByZXNzaW9uOm9yaWdpbn0sXG5cdFx0XHRcdFx0e2VsZW1lbnQ6c3dpcGVyUmVmLCBwcm9wZXJ0eTondHJhbnNmb3JtLnRyYW5zbGF0ZVknLGV4cHJlc3Npb246YGVhc2VPdXRFeHBvKHQsJHt0aGlzLmRpc3RhbmNlfSwwLDIwMClgfSxcblx0XHRcdFx0XHR7ZWxlbWVudDpsZWZ0UmVmLCBwcm9wZXJ0eTondHJhbnNmb3JtLnRyYW5zbGF0ZVgnLGV4cHJlc3Npb246b3JpZ2lufSxcblx0XHRcdFx0XHR7ZWxlbWVudDpyaWdodFJlZiwgcHJvcGVydHk6J3RyYW5zZm9ybS50cmFuc2xhdGVYJyxleHByZXNzaW9uOm9yaWdpbn1cblx0XHRcdFx0XHRdXG5cdFx0XHRcdH0sYXN5bmMgKGUpID0+IHtcblx0XHRcdFx0XHRpZihlLnN0YXRlID09PSAnZW5kJyB8fCBlLnN0YXRlID09PSAnZXhpdCcpIHtcblx0XHRcdFx0XHRcdHRoaXMuZGlzdGFuY2VYID0gZmluYWxfWFxuXHRcdFx0XHRcdFx0dGhpcy5zY3JvbGwgPSBmYWxzZVxuXHRcdFx0XHRcdFx0aWYoIE1hdGguYWJzKFgpPD0xMCYmdGhpcy5kaXN0YW5jZVg9PTApe1xuXHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdH1lbHNlIGlmKCBNYXRoLmFicyhYKT4xMCYmdGhpcy5kaXN0YW5jZVghPTApIHtcblx0XHRcdFx0XHRcdFx0Zm9yIChsZXQgaXRlbSBvZiB0aGlzLnZpZGVvTGlzdCkge1xuXHRcdFx0XHRcdFx0XHRcdGl0ZW0uZmxhZyA9IGZhbHNlXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1lbHNlIGlmKE1hdGguYWJzKFgpPjEwJiZ0aGlzLmRpc3RhbmNlWD09MCl7XG5cdFx0XHRcdFx0XHRcdHRoaXMudmlkZW9QbGF5KHRoaXMuaW5kZXgpXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHR9XG5cdFx0XHR9KVxuXHRcdH0sXG5cdFx0YmluZEN1cnJlbnRYKGN1cnJlbnQsdGltZT0zMDApIHtcblx0XHRcdGlmKHRoaXMuZGlzdGFuY2VYIT0wKSByZXR1cm5cblx0XHRcdHRoaXMuc2Nyb2xsID0gdHJ1ZVxuXHRcdFx0bGV0IHN3aXBlclJlZiA9IHRoaXMuZ2V0RWwodGhpcy4kcmVmcy5zd2lwZXIpXG5cdFx0XHRsZXQgY2hhbmdlZF9ZLCBmaW5hbF9ZLCBvcmlnaW5cblx0XHRcdFxuXHRcdFx0ZmluYWxfWSA9IHRoaXMuZGlzdGFuY2UgKyAodGhpcy5pbmRleC1jdXJyZW50KSAqdGhpcy5zeXNoZWlnaHRcblx0XHRcdGNoYW5nZWRfWT0gZmluYWxfWSAtIHRoaXMuZGlzdGFuY2UgLy8g6K6h566X5Ye66ZyA6KaB5L2N572u55qE5YC8XG5cdFx0XHR0aW1lID0gdGltZSAqIE1hdGguYWJzKHRoaXMuaW5kZXgtY3VycmVudClcblx0XHRcdG9yaWdpbiA9IGBlYXNlT3V0RXhwbyh0LCR7dGhpcy5kaXN0YW5jZX0sJHtjaGFuZ2VkX1l9LCR7dGltZX0pYCAvLyDov5Dliqjmm7Lnur/kuLplYXNlT3V0RXhwb1xuXHRcdFxuXHRcdFx0XG5cdFx0XHRcblx0XHRcdGxldCByZXN1bHQgPSBCaW5kaW5nWC5iaW5kKHtcblx0XHRcdFx0ZXZlbnRUeXBlOid0aW1pbmcnLCAvLyDnu5PmnZ/nmoTml7blgJnmmK/msqHmnInku7vkvZXnm5HlkKznmoQg55SoIHRpbWluZyDmnaXlgZrlrprml7bnmoTliqjnlLtcblx0XHRcdFx0ZXhpdEV4cHJlc3Npb246YHQ+JHt0aW1lfWAsIC8vIOW9k+aXtumXtOi2hei/hyAzMDBtcyDnu5PmnZ/liqjnlLtcblx0XHRcdFx0cHJvcHM6IFtcblx0XHRcdFx0XHR7ZWxlbWVudDpzd2lwZXJSZWYsIHByb3BlcnR5Oid0cmFuc2Zvcm0udHJhbnNsYXRlWScsZXhwcmVzc2lvbjpvcmlnaW59LFxuXHRcdFx0XHRdXG5cdFx0XHRcdH0sYXN5bmMgKGUpID0+IHtcblx0XHRcdFx0XHRpZihlLnN0YXRlID09PSAnZW5kJyB8fCBlLnN0YXRlID09PSAnZXhpdCcpIHtcblx0XHRcdFx0XHRcdHRoaXMuZGlzdGFuY2UgPSBmaW5hbF9ZXG5cdFx0XHRcdFx0XHR0aGlzLnNjcm9sbCA9IGZhbHNlXG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdGZvciAobGV0IGl0ZW0gb2YgdGhpcy52aWRlb0xpc3QpIHtcblx0XHRcdFx0XHRcdFx0aXRlbS5mbGFnID0gZmFsc2Vcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHRoaXMuaW5kZXggPSAtdGhpcy5kaXN0YW5jZS90aGlzLnN5c2hlaWdodFxuXG5cdFx0XHRcdFx0XHR0aGlzLnZpZGVvTGlzdFt0aGlzLmluZGV4XS5mbGFnID0gdHJ1ZVxuXG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdC8v5Yqg6L296KeG6aKRXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnPT09PT09PT09PT09PT09PT09PT09PT09PT09Ly/liqDovb3op4bpopEnKTtcblx0XHRcdFx0XHRcdGlmKHRoaXMudmlkZW9MaXN0Lmxlbmd0aCAtIHRoaXMuaW5kZXggLSAxIDw9IHRoaXMucGxheUNvdW50KXtcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJz09PT09PT09PT09PT09PT09PT09PT09PT09PS8v5Yqg6L296KeG6aKRJyk7XG5cdFx0XHRcdFx0XHRcdGF3YWl0IHRoaXMucHVzaFZpZGVvTGlzdCgpXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHR9KVxuXHRcdH0sXG5cdFx0cGF1c2VWaWRlbyh2YWwpe1xuXHRcdFx0IHRoaXMudmlkZW9MaXN0W3RoaXMub2xkSW5kZXhdLmluaXRpYWxUaW1lID0gdmFsXG5cdFx0fSxcblx0XHRjbGlja1ZpZGVvKCl7XG5cdFx0XHR0aGlzLnZpZGVvTGlzdFt0aGlzLmluZGV4XS5mbGFnID0gIXRoaXMudmlkZW9MaXN0W3RoaXMuaW5kZXhdLmZsYWdcblx0XHR9LFxuXHRcdHZpZGVvUGxheShpbmRleCl7XG5cdFx0XHRpZih0aGlzLmRpc3RhbmNlWCE9MCkgcmV0dXJuXG5cdFx0XHRsZXQgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9Pntcblx0XHRcdFx0cmVzb2x2ZSgpXG5cdFx0XHR9KVxuXHRcdFx0cHJvbWlzZS50aGVuKHJlcz0+e1xuXHRcdFx0XHR0aGlzLnZpZGVvTGlzdFtpbmRleF0uZmxhZyA9ICF0aGlzLnZpZGVvTGlzdFtpbmRleF0uZmxhZ1xuXHRcdFx0fSlcblx0XHR9LFxuXHR9LFxuXHR3YXRjaDp7XG5cdFx0aW5kZXgobmV3VmFsLG9sZFZhbCl7XG5cdFx0XHR0aGlzLm9sZEluZGV4ID0gb2xkVmFsXG5cdFx0fVxuXHR9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///48\n");

/***/ }),
/* 49 */
/*!***************************************************************************************************************************************************************!*\
  !*** /Users/wangjunhao/Documents/HBuilderProjects/uni-app-demo/pages/tiktok/tiktok.nvue?vue&type=style&index=0&id=2180c6b0&lang=scss&scoped=true&mpType=page ***!
  \***************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tiktok_nvue_vue_type_style_index_0_id_2180c6b0_lang_scss_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--9-oneOf-0-2!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-0-3!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-4!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./tiktok.nvue?vue&type=style&index=0&id=2180c6b0&lang=scss&scoped=true&mpType=page */ 50);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tiktok_nvue_vue_type_style_index_0_id_2180c6b0_lang_scss_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tiktok_nvue_vue_type_style_index_0_id_2180c6b0_lang_scss_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tiktok_nvue_vue_type_style_index_0_id_2180c6b0_lang_scss_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tiktok_nvue_vue_type_style_index_0_id_2180c6b0_lang_scss_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tiktok_nvue_vue_type_style_index_0_id_2180c6b0_lang_scss_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 50 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/wangjunhao/Documents/HBuilderProjects/uni-app-demo/pages/tiktok/tiktok.nvue?vue&type=style&index=0&id=2180c6b0&lang=scss&scoped=true&mpType=page ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "page": {
    "flex": 1,
    "overflow": "hidden",
    "position": "relative",
    "backgroundColor": "#000000"
  },
  "swiper": {
    "position": "relative",
    "backgroundColor": "#000000"
  },
  "left-div": {
    "position": "absolute",
    "top": 0,
    "justifyContent": "center",
    "alignItems": "center"
  },
  "right-div": {
    "position": "absolute",
    "top": 0,
    "justifyContent": "center",
    "alignItems": "center"
  },
  "title-text": {
    "fontSize": "16",
    "color": "#333333"
  },
  "video-box": {
    "position": "relative",
    "backgroundColor": "#000000"
  },
  "cover-view-center": {
    "position": "fixed",
    "justifyContent": "center",
    "alignItems": "center",
    "zIndex": 999
  },
  "cover-view-bottom": {
    "position": "fixed",
    "overflow": "hidden",
    "zIndex": 999
  },
  "tab": {
    "height": "50",
    "width": "750rpx",
    "backgroundColor": "rgba(0,0,0,0.6)",
    "alignItems": "center",
    "justifyContent": "center",
    "flexDirection": "row"
  },
  "text": {
    "color": "#ffffff"
  },
  "tab-box": {
    "alignItems": "center",
    "justifyContent": "center",
    "width": "150rpx",
    "color": "#ffffff",
    "textAlign": "center",
    "height": "50",
    "lineHeight": "50",
    "fontSize": "20"
  },
  "add-img": {
    "width": "50rpx",
    "height": "50rpx"
  },
  "cover-view-left": {
    "position": "absolute",
    "marginLeft": "10upx",
    "width": "500upx",
    "bottom": "200upx",
    "zIndex": 9999,
    "fontSize": "16",
    "color": "#FFFFFF"
  },
  "left-text": {
    "fontSize": "16",
    "color": "#FFFFFF",
    "marginBottom": "20upx"
  },
  "tag-box": {
    "display": "flex",
    "flexDirection": "row",
    "justifyContent": "flex-start"
  },
  "tag": {
    "fontSize": "12",
    "color": "#EFEFEF",
    "backgroundColor": "rgba(255,255,255,0.2)",
    "marginRight": "8",
    "paddingTop": "2",
    "paddingRight": "8",
    "paddingBottom": "2",
    "paddingLeft": "8"
  },
  "avatar": {
    "borderRadius": "50upx",
    "borderColor": "#ffffff",
    "borderStyle": "solid",
    "borderWidth": "2"
  },
  "cover-view-right": {
    "position": "absolute",
    "top": "400upx",
    "right": "20upx",
    "zIndex": 9999
  },
  "right-text-avatar": {
    "position": "absolute",
    "fontSize": "14",
    "top": "80upx",
    "left": "30upx",
    "height": "40upx",
    "width": "40upx",
    "backgroundColor": "#DD524D",
    "color": "#FFFFFF",
    "borderRadius": 50,
    "textAlign": "center",
    "lineHeight": "40upx",
    "zIndex": 999
  },
  "avatar-icon": {
    "height": "40upx",
    "width": "40upx",
    "color": "#ffffff",
    "backgroundColor": "#DD524D",
    "borderRadius": 50,
    "position": "absolute",
    "left": "30upx",
    "top": "-20upx"
  },
  "right-text": {
    "textAlign": "center",
    "fontSize": "14",
    "color": "#FFFFFF",
    "marginBottom": "50upx",
    "height": "20"
  },
  "img": {
    "height": "100upx",
    "width": "100upx",
    "opacity": 0.9
  },
  "cover-view-top": {
    "width": "750rpx",
    "height": "80",
    "position": "fixed",
    "zIndex": 999
  },
  "search-box": {
    "display": "flex",
    "justifyContent": "center",
    "alignItems": "flex-end",
    "width": "750rpx",
    "height": 100
  },
  "search-img": {
    "width": "28",
    "height": "28",
    "marginRight": "40rpx"
  },
  "@VERSION": 2
}

/***/ })
/******/ ]);