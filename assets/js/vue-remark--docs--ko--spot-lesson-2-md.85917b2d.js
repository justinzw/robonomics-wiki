(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vue-remark--docs--ko--spot-lesson-2-md"],{

/***/ "/XKx":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/ko/spot-lesson2.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initFrontMatter; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"Kw5r\");\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].config.optionMergeStrategies;\nvar key = '__vueRemarkFrontMatter';\nvar data = {\n  \"excerpt\": null,\n  \"title\": \"Lesson 2. Robot Command Service\",\n  \"contributors\": [\"LoSk-p\"],\n  \"translated\": false\n};\nfunction initFrontMatter(Component) {\n  if (Component.options[key]) {\n    Component.options[key] = data;\n  }\n\n  vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].util.defineReactive(Component.options, key, data);\n  Component.options.computed = strats.computed({\n    $frontmatter: function $frontmatter() {\n      return Component.options[key];\n    }\n  }, Component.options.computed);\n}\n\n//# sourceURL=webpack:///./docs/ko/spot-lesson2.md?./node_modules/babel-loader/lib??ref--16-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "/sTk":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/gridsome","cacheIdentifier":"293f11d7-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/ko/spot-lesson2.md?vue&type=template&id=033337ec& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('VueRemarkRoot',[_c('p',[_vm._v(\"In the second lesson you will learn how to use Spot Command services and walk with Spot.\")]),_c('h2',{attrs:{\"id\":\"requirements\"}},[_c('a',{attrs:{\"href\":\"#requirements\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"Requirements\")]),_c('p',[_vm._v(\"Before this lesson go through \"),_c('a',{attrs:{\"href\":\"/docs/spot-lesson0\"}},[_vm._v(\"Lesson 0\")]),_vm._v(\" to setup your connection.\")]),_c('blockquote',[_c('p',[_vm._v(\"Don't forget to run Yggdrasil if you use macOS:\")]),_c('pre',[_c('code',{pre:true,attrs:{\"class\":\"hljs language-bash\"}},[_vm._v(\"sudo yggdrasil -useconffile /etc/yggdrasil.conf\")])])]),_c('h2',{attrs:{\"id\":\"documentation\"}},[_c('a',{attrs:{\"href\":\"#documentation\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"Documentation\")]),_c('p',[_vm._v(\"To control Spot with \"),_c('code',{pre:true},[_vm._v(\"Robot Command Service\")]),_vm._v(\" you firstly need to build command. Spot SDK has RobotCommandBuilder class for it. Full list of methods and its descriprions you can find \"),_c('a',{attrs:{\"href\":\"https://github.com/boston-dynamics/spot-sdk/blob/7ce5c5f31f4e1e45e9ff4be29fb097e258b75919/python/bosdyn-client/src/bosdyn/client/robot_command.py#L593\",\"target\":\"_blank\",\"rel\":\"nofollow noopener noreferrer\"}},[_vm._v(\"here\")]),_vm._v(\". \")]),_c('p',[_vm._v(\"In this lesson you may need to use:\")]),_c('ul',[_c('li',[_vm._v(\"Stand Command\")])]),_c('pre',[_c('code',{pre:true,attrs:{\"class\":\"hljs language-python\"}},[_c('span',{pre:true,attrs:{\"class\":\"hljs-function\"}},[_c('span',{pre:true,attrs:{\"class\":\"hljs-keyword\"}},[_vm._v(\"def\")]),_vm._v(\" \"),_c('span',{pre:true,attrs:{\"class\":\"hljs-title\"}},[_vm._v(\"stand_command\")]),_vm._v(\"(\"),_c('span',{pre:true,attrs:{\"class\":\"hljs-params\"}},[_vm._v(\"params=\"),_c('span',{pre:true,attrs:{\"class\":\"hljs-literal\"}},[_vm._v(\"None\")]),_vm._v(\", body_height=\"),_c('span',{pre:true,attrs:{\"class\":\"hljs-number\"}},[_vm._v(\"0.0\")]),_vm._v(\", footprint_R_body=geometry.EulerZXY(\"),_c('span',{pre:true,attrs:{\"class\":\"hljs-params\"}}),_vm._v(\")\")]),_vm._v(\")\")])])]),_c('ul',[_c('li',[_vm._v(\"Go to point\")])]),_c('pre',[_c('code',{pre:true,attrs:{\"class\":\"hljs language-python\"}},[_c('span',{pre:true,attrs:{\"class\":\"hljs-function\"}},[_c('span',{pre:true,attrs:{\"class\":\"hljs-keyword\"}},[_vm._v(\"def\")]),_vm._v(\" \"),_c('span',{pre:true,attrs:{\"class\":\"hljs-title\"}},[_vm._v(\"synchro_se2_trajectory_point_command\")]),_vm._v(\"(\"),_c('span',{pre:true,attrs:{\"class\":\"hljs-params\"}},[_vm._v(\"goal_x, goal_y, goal_heading,      \\n                                    frame_name, params=\"),_c('span',{pre:true,attrs:{\"class\":\"hljs-literal\"}},[_vm._v(\"None\")]),_vm._v(\",\\n                                    body_height=\"),_c('span',{pre:true,attrs:{\"class\":\"hljs-number\"}},[_vm._v(\"0.0\")]),_vm._v(\",\\n                                    locomotion_hint=spot_command_pb2.HINT_AUTO,\\n                                    build_on_command=\"),_c('span',{pre:true,attrs:{\"class\":\"hljs-literal\"}},[_vm._v(\"None\")])]),_vm._v(\")\")])])]),_c('p',[_vm._v(\"The example of use \"),_c('a',{attrs:{\"href\":\"https://github.com/boston-dynamics/spot-sdk/blob/master/python/examples/frame_trajectory_command/frame_trajectory_command.py\",\"target\":\"_blank\",\"rel\":\"nofollow noopener noreferrer\"}},[_vm._v(\"here\")]),_vm._v(\".\")]),_c('ul',[_c('li',[_vm._v(\"Velocity Command\")])]),_c('pre',[_c('code',{pre:true,attrs:{\"class\":\"hljs language-python\"}},[_c('span',{pre:true,attrs:{\"class\":\"hljs-function\"}},[_c('span',{pre:true,attrs:{\"class\":\"hljs-keyword\"}},[_vm._v(\"def\")]),_vm._v(\" \"),_c('span',{pre:true,attrs:{\"class\":\"hljs-title\"}},[_vm._v(\"velocity_command\")]),_vm._v(\"(\"),_c('span',{pre:true,attrs:{\"class\":\"hljs-params\"}},[_vm._v(\"v_x, v_y, v_rot, params=\"),_c('span',{pre:true,attrs:{\"class\":\"hljs-literal\"}},[_vm._v(\"None\")]),_vm._v(\", body_height=\"),_c('span',{pre:true,attrs:{\"class\":\"hljs-number\"}},[_vm._v(\"0.0\")]),_vm._v(\",\\n                         locomotion_hint=spot_command_pb2.HINT_AUTO, \\n                         frame_name=BODY_FRAME_NAME\")]),_vm._v(\")\")])])]),_c('p',[_vm._v(\"Example of building and running velocity command:\")]),_c('pre',[_c('code',{pre:true,attrs:{\"class\":\"hljs language-python\"}},[_c('span',{pre:true,attrs:{\"class\":\"hljs-keyword\"}},[_vm._v(\"from\")]),_vm._v(\" bosdyn.client.robot_command \"),_c('span',{pre:true,attrs:{\"class\":\"hljs-keyword\"}},[_vm._v(\"import\")]),_vm._v(\" RobotCommandClient, RobotCommandBuilder\\n\"),_c('span',{pre:true,attrs:{\"class\":\"hljs-keyword\"}},[_vm._v(\"import\")]),_vm._v(\" time\\n\\ncommand_client = robot.ensure_client(RobotCommandClient.default_service_name)\\ncmd = RobotCommandBuilder.velocity_command(\"),_c('span',{pre:true,attrs:{\"class\":\"hljs-number\"}},[_vm._v(\"0.5\")]),_vm._v(\", \"),_c('span',{pre:true,attrs:{\"class\":\"hljs-number\"}},[_vm._v(\"0\")]),_vm._v(\", \"),_c('span',{pre:true,attrs:{\"class\":\"hljs-number\"}},[_vm._v(\"0.5\")]),_vm._v(\")\\ncommand_client.robot_command(robot_cmd, end_time_secs=time.time() + \"),_c('span',{pre:true,attrs:{\"class\":\"hljs-number\"}},[_vm._v(\"2\")]),_vm._v(\")\")])]),_c('h2',{attrs:{\"id\":\"task\"}},[_c('a',{attrs:{\"href\":\"#task\",\"aria-hidden\":\"true\"}},[_vm._v(\"#\")]),_vm._v(\"Task\")]),_c('p',[_vm._v(\"You will have a list of points with their local coordinates and you need make Spot to go through theese points.\")])])}\nvar staticRenderFns = []\n\n\n\n//# sourceURL=webpack:///./docs/ko/spot-lesson2.md?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/gridsome%22,%22cacheIdentifier%22:%22293f11d7-vue-loader-template%22%7D!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "OjjK":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./docs/ko/spot-lesson2.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \**************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_runner_work_robonomics_wiki_robonomics_wiki_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@gridsome/vue-remark/src/VueRemarkRoot.js */ \"UQSp\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"Kw5r\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n\n\nvar strats = vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"].config.optionMergeStrategies;\nvar imported = {\n  VueRemarkRoot: _home_runner_work_robonomics_wiki_robonomics_wiki_node_modules_gridsome_vue_remark_src_VueRemarkRoot_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (Component) {\n  var components = Component.options.components = Component.options.components || {};\n  var computed = Component.options.computed = Component.options.computed || {};\n  Object.keys(imported).forEach(function (key) {\n    if (_typeof(imported[key]) === 'object' && typeof imported[key].render === 'function') {\n      components[key] = imported[key];\n    } else if (typeof imported[key] === 'function' && typeof imported[key].options.render === 'function') {\n      components[key] = imported[key];\n    } else {\n      computed[key] = function () {\n        return imported[key];\n      };\n    }\n  });\n});\n\n//# sourceURL=webpack:///./docs/ko/spot-lesson2.md?./node_modules/babel-loader/lib??ref--15-0!./node_modules/vue-loader/lib??ref--17-0!./node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1");

/***/ }),

/***/ "UQSp":
/*!****************************************************************!*\
  !*** ./node_modules/@gridsome/vue-remark/src/VueRemarkRoot.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// @vue/component\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'VueRemarkRoot',\n  render: function render(h) {\n    return h('div', null, this.$slots[\"default\"]);\n  }\n});\n\n//# sourceURL=webpack:///./node_modules/@gridsome/vue-remark/src/VueRemarkRoot.js?");

/***/ }),

/***/ "a1Tr":
/*!****************************************************************!*\
  !*** ./docs/ko/spot-lesson2.md?vue&type=template&id=033337ec& ***!
  \****************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_293f11d7_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_spot_lesson2_md_vue_type_template_id_033337ec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/gridsome\",\"cacheIdentifier\":\"293f11d7-vue-loader-template\"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./spot-lesson2.md?vue&type=template&id=033337ec& */ \"/sTk\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_293f11d7_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_spot_lesson2_md_vue_type_template_id_033337ec___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_gridsome_cacheIdentifier_293f11d7_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_spot_lesson2_md_vue_type_template_id_033337ec___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./docs/ko/spot-lesson2.md?");

/***/ }),

/***/ "koYn":
/*!******************************************************************************************!*\
  !*** ./docs/ko/spot-lesson2.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_spot_lesson2_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--16-0!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./spot-lesson2.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"/XKx\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_16_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_spot_lesson2_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./docs/ko/spot-lesson2.md?");

/***/ }),

/***/ "qMiZ":
/*!*********************************!*\
  !*** ./docs/ko/spot-lesson2.md ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _spot_lesson2_md_vue_type_template_id_033337ec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spot-lesson2.md?vue&type=template&id=033337ec& */ \"a1Tr\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"KHd+\");\n/* harmony import */ var _spot_lesson2_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spot-lesson2.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"ta8w\");\n/* harmony import */ var _spot_lesson2_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./spot-lesson2.md?vue&type=custom&index=1&blockType=vue-remark-frontmatter */ \"koYn\");\n\nvar script = {}\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  script,\n  _spot_lesson2_md_vue_type_template_id_033337ec___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _spot_lesson2_md_vue_type_template_id_033337ec___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* custom blocks */\n\nif (typeof _spot_lesson2_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"] === 'function') Object(_spot_lesson2_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(component)\n\nif (typeof _spot_lesson2_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"] === 'function') Object(_spot_lesson2_md_vue_type_custom_index_1_blockType_vue_remark_frontmatter__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(component)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./docs/ko/spot-lesson2.md?");

/***/ }),

/***/ "ta8w":
/*!*************************************************************************************!*\
  !*** ./docs/ko/spot-lesson2.md?vue&type=custom&index=0&blockType=vue-remark-import ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_spot_lesson2_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--15-0!../../node_modules/vue-loader/lib??ref--17-0!../../node_modules/@gridsome/vue-remark/lib/loader.js??ref--17-1!./spot-lesson2.md?vue&type=custom&index=0&blockType=vue-remark-import */ \"OjjK\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_15_0_node_modules_vue_loader_lib_index_js_ref_17_0_node_modules_gridsome_vue_remark_lib_loader_js_ref_17_1_spot_lesson2_md_vue_type_custom_index_0_blockType_vue_remark_import__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./docs/ko/spot-lesson2.md?");

/***/ })

}]);