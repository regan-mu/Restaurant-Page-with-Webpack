/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./bg.jpg */ \"./src/bg.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&family=Square+Peg&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n    padding: 0;\\r\\n    margin: 0;\\r\\n    box-sizing: border-box;\\r\\n}\\r\\n\\r\\nbody {\\r\\n    color: #000;\\r\\n    font-family: 'Roboto', sans-serif;\\r\\n    background: rgb(0,0,0);\\r\\n    background: linear-gradient(90deg, rgba(0,0,0,0.6) 43%, rgba(0,0,0,0.6) 100%),\\r\\n        url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n    background-repeat: no-repeat;\\r\\n    background-position: center;\\r\\n    background-size: cover;\\r\\n    background-attachment: fixed;\\r\\n    font-family: 'Square Peg', cursive;\\r\\n}\\r\\n.main {\\r\\n    width: 100%;\\r\\n    height: auto;\\r\\n    position: relative;\\r\\n}\\r\\n.main-header {\\r\\n    width: 100%;\\r\\n    height: auto;\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    background-color: rgb(0, 0, 0, 0.6);\\r\\n}\\r\\n.main-header .header-inner {\\r\\n    height: 100%;\\r\\n    width: 80%;\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: space-between;\\r\\n    padding: 16px 0;\\r\\n    row-gap: 20px;\\r\\n    font-weight: bold;\\r\\n    color: #F94c66;\\r\\n}\\r\\n.main-header .header-inner .logo {\\r\\n    font-size: 3.5rem;\\r\\n}\\r\\n.main-header .header-inner .menu-items {\\r\\n    height: 100%;\\r\\n    width: 40%;\\r\\n    display: flex;\\r\\n    justify-content: space-between;\\r\\n    align-items: center;\\r\\n    list-style: none;\\r\\n}\\r\\n.main-header .header-inner .menu-items .item {\\r\\n    color: #F94c66;\\r\\n    font-size: 2rem;\\r\\n    position: relative;\\r\\n    padding: 5px 10px;\\r\\n    letter-spacing: 1.5px;\\r\\n    cursor: pointer;\\r\\n}\\r\\n.main-header .header-inner .menu-items .item::after {\\r\\n    content: \\\"\\\";\\r\\n    position: absolute;\\r\\n    background-color: #F94c66;\\r\\n    width: 100%;\\r\\n    height: 3px;\\r\\n    top: 100%;\\r\\n    left: 0;\\r\\n    transform: scale(0);\\r\\n    transform-origin: left;\\r\\n    transition: transform 0.3s ease;\\r\\n}\\r\\n.main-header .header-inner .menu-items .item:hover::after {\\r\\n    transform: scale(1);\\r\\n}\\r\\n\\r\\n.card {\\r\\n    width: 650px;\\r\\n    height: 600px;\\r\\n    background-color: rgba(0, 0, 0, 0.6);\\r\\n    margin: 64px auto;\\r\\n    padding: 32px;\\r\\n    text-align: center;\\r\\n}\\r\\n\\r\\n.card .card-top {\\r\\n    width: 100%;\\r\\n    height: auto;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    color: #53BF9D;\\r\\n    border-bottom: 0.5px solid rgb(89, 89, 89);\\r\\n    padding: 0 0 32px;\\r\\n    font-weight: bold;\\r\\n}\\r\\n.card .card-top .title {\\r\\n    font-size: 3.5rem;\\r\\n    letter-spacing: 2.5px;\\r\\n    \\r\\n}\\r\\n.card .card-top .sub-title {\\r\\n    font-weight: lighter;\\r\\n    font-size: 2rem;\\r\\n    letter-spacing: 1.3px;\\r\\n}\\r\\n.card img {\\r\\n    width: 300px;\\r\\n    height: 300px;\\r\\n    border-radius: 100%;\\r\\n    margin: 32px auto;\\r\\n    margin-bottom: 0;\\r\\n}\\r\\n\\r\\n/*---------- Style the dishes component ---------*/\\r\\n.about-main {\\r\\n    width: 80%;\\r\\n    height: 100%;\\r\\n    margin: 48px auto;\\r\\n    display: grid;\\r\\n    grid-template: 1fr / repeat(3, 1fr);\\r\\n    gap: 16px;\\r\\n}\\r\\n.about-main .dish-card {\\r\\n    position: relative;\\r\\n    padding: 32px 16px;\\r\\n    color: white;\\r\\n    background-color: rgba(0, 0, 0, 0.8);\\r\\n    text-align: center;\\r\\n    font-family: \\\"Roboto\\\";\\r\\n    transition: all 0.3s ease;\\r\\n    overflow: hidden;\\r\\n}\\r\\n.about-main .dish-card:hover {\\r\\n    transform: scale(1.05);\\r\\n}\\r\\n.about-main .dish-card img {\\r\\n    width: 100px;\\r\\n    height: 100px;\\r\\n}\\r\\n.about-main .dish-card .dish-name {\\r\\n    font-weight: bold;\\r\\n    font-size: 2rem;\\r\\n    margin: 8px 0 16px;\\r\\n    letter-spacing: 1.3px;\\r\\n}\\r\\n.about-main .dish-card .description {\\r\\n    font-weight: lighter;\\r\\n    color: rgb(196, 196, 196);\\r\\n}\\r\\n.about-main .dish-card .dish-price {\\r\\n    position: absolute;\\r\\n    top: 0;\\r\\n    right: 0;\\r\\n    height: 32px;\\r\\n    background-color: #F94c66;\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    text-align: center;\\r\\n    padding: 0 12px;\\r\\n    font-weight: bold;\\r\\n    font-size: 1.2rem;\\r\\n}\\r\\n\\r\\n.contact-card {\\r\\n    position: relative;\\r\\n    width: 450px;\\r\\n    height: 400px;\\r\\n    margin: 32px auto;\\r\\n    color: #F94c66;\\r\\n    padding: 32px;\\r\\n    text-align: center;\\r\\n    background-color: rgba(0, 0, 0, 0.6);\\r\\n}\\r\\n.contact-card .card-header {\\r\\n    font-size: 3.5rem;\\r\\n    margin: 0 0 8px;\\r\\n    font-weight: bold;\\r\\n    border-bottom: 0.5px solid rgb(167, 167, 167);\\r\\n}\\r\\n.contact-card p {\\r\\n    font-size: 2rem;\\r\\n    font-weight: lighter;\\r\\n}\\r\\n.contact-card .socials {\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: space-evenly;\\r\\n    width: 160px;\\r\\n    height: 32px;\\r\\n    margin: 32px auto;\\r\\n}\\r\\n.contact-card .socials img {\\r\\n    width: 40px;\\r\\n    height: 40px;\\r\\n}\\r\\n\\r\\n\\r\\nfooter {\\r\\n    width: 100%;\\r\\n    height: 40px;\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    color: #53BF9D;\\r\\n    font-size: 1.6rem;\\r\\n    padding: 8px;\\r\\n}\\r\\nfooter a {\\r\\n    color: #F94c66;\\r\\n    font-size: 2rem;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/components/contact.js":
/*!***********************************!*\
  !*** ./src/components/contact.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _facebook_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../facebook.png */ \"./src/facebook.png\");\n/* harmony import */ var _instagram_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../instagram.png */ \"./src/instagram.png\");\n/* harmony import */ var _twitter_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../twitter.png */ \"./src/twitter.png\");\n\r\n\r\n\r\n\r\nconst contactPage = () => {\r\n    const contactCard = document.createElement(\"div\");\r\n    contactCard.classList.add(\"contact-card\");\r\n\r\n    const socials = document.createElement(\"div\");\r\n    socials.classList.add(\"socials\");\r\n    const fb = new Image();\r\n    fb.src = _facebook_png__WEBPACK_IMPORTED_MODULE_0__;\r\n\r\n    const insta = new Image();\r\n    insta.src = _instagram_png__WEBPACK_IMPORTED_MODULE_1__;\r\n\r\n    const twitter = new Image();\r\n    twitter.src = _twitter_png__WEBPACK_IMPORTED_MODULE_2__;\r\n\r\n    socials.appendChild(fb);\r\n    socials.appendChild(insta);\r\n    socials.appendChild(twitter);\r\n\r\n\r\n    const cardHeader = document.createElement(\"h3\");\r\n    cardHeader.classList.add(\"card-header\");\r\n    cardHeader.textContent = \"Contact Us\";\r\n    contactCard.appendChild(cardHeader);\r\n\r\n    const cardInfo = document.createElement(\"div\");\r\n    cardInfo.classList.add(\"card-info\");\r\n    const cardText1 = document.createElement(\"p\");\r\n    cardText1.textContent = \"Moi Avenue, Nairobi\";\r\n    const cardText2 = document.createElement(\"p\");\r\n    cardText2.textContent = \"(254) 700 000 0000\";\r\n    const cardText3 = document.createElement(\"p\");\r\n    cardText3.textContent = \"food@africaeats.com\";\r\n\r\n    cardInfo.appendChild(cardText1);\r\n    cardInfo.appendChild(cardText2);\r\n    cardInfo.appendChild(cardText3);\r\n\r\n\r\n    contactCard.appendChild(cardHeader);\r\n    contactCard.appendChild(cardInfo);\r\n    contactCard.appendChild(socials);\r\n    \r\n    return contactCard;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactPage);\n\n//# sourceURL=webpack://restaurant-page/./src/components/contact.js?");

/***/ }),

/***/ "./src/components/dishCard.js":
/*!************************************!*\
  !*** ./src/components/dishCard.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst dish = (dishName, dishPrice, dishDescription) => {\r\n    const dishCard = document.createElement(\"div\");\r\n    dishCard.classList.add(\"dish-card\")\r\n\r\n    const name = document.createElement(\"h3\")\r\n    name.classList.add(\"dish-name\");\r\n    name.textContent = dishName;\r\n\r\n    const price = document.createElement(\"div\");\r\n    price.classList.add(\"dish-price\");\r\n    price.textContent = dishPrice;\r\n\r\n    const description = document.createElement(\"div\");\r\n    description.classList.add(\"description\");\r\n    description.textContent = dishDescription;\r\n    \r\n    dishCard.appendChild(name);\r\n    dishCard.appendChild(price);\r\n    dishCard.appendChild(description);\r\n\r\n    return dishCard;\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dish);\n\n//# sourceURL=webpack://restaurant-page/./src/components/dishCard.js?");

/***/ }),

/***/ "./src/components/dishes.js":
/*!**********************************!*\
  !*** ./src/components/dishes.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _dishCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dishCard */ \"./src/components/dishCard.js\");\n/* harmony import */ var _matoke_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../matoke.png */ \"./src/matoke.png\");\n/* harmony import */ var _hot_soup_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hot-soup.png */ \"./src/hot-soup.png\");\n/* harmony import */ var _fried_rice_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fried-rice.png */ \"./src/fried-rice.png\");\n\r\n\r\n\r\n\r\n\r\nconst dishesPage = () => {\r\n    let matokeDescription = \"East african dish made from unripe bananas cooked, marshed and served with stew\";\r\n    let thufuDescription = \"Thufu is a primarily liquid food, generally served warm or hot that is made by combining ingredients.\";\r\n    let riceDescription = \"The starchy seeds of an annual southeast Asian cereal grass that are cooked and used for food\";\r\n\r\n    const dishesMain = document.createElement(\"div\");\r\n    dishesMain.classList.add(\"about-main\");\r\n\r\n    // Matoke\r\n    const matoke = (0,_dishCard__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"Matoke\", \"500 Kes\", matokeDescription);\r\n    const matokeImg = new Image();\r\n    matokeImg.src = _matoke_png__WEBPACK_IMPORTED_MODULE_1__;\r\n    matoke.prepend(matokeImg);\r\n    dishesMain.appendChild(matoke);\r\n    // Soup\r\n    const soup = (0,_dishCard__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"Thufu\", \"1000 Kes\", thufuDescription);\r\n    const thufuImg = new Image();\r\n    thufuImg.src = _hot_soup_png__WEBPACK_IMPORTED_MODULE_2__;\r\n    soup.prepend(thufuImg);\r\n    dishesMain.appendChild(soup);\r\n    // Rice\r\n    const rice = (0,_dishCard__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"Rice\", \"300 Kes\", riceDescription);\r\n    const riceImg = new Image();\r\n    riceImg.src = _fried_rice_png__WEBPACK_IMPORTED_MODULE_3__;\r\n    rice.prepend(riceImg);\r\n    dishesMain.appendChild(rice);\r\n\r\n    return dishesMain;\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dishesPage);\n\n//# sourceURL=webpack://restaurant-page/./src/components/dishes.js?");

/***/ }),

/***/ "./src/components/footer.js":
/*!**********************************!*\
  !*** ./src/components/footer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst footer = () => {\r\n    const foot = document.createElement(\"footer\");\r\n\r\n    const myGithub = document.createElement(\"p\");\r\n    const githubLink = document.createElement(\"a\");\r\n    githubLink.href = \"https://github.com/regan-mu\"\r\n    githubLink.textContent = \"Github\";\r\n    githubLink.target = \"_blank\";\r\n    myGithub.textContent = \"Created by Regan Mu | \";\r\n    myGithub.appendChild(githubLink);\r\n\r\n    foot.appendChild(myGithub);\r\n\r\n    return foot\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (footer);\n\n//# sourceURL=webpack://restaurant-page/./src/components/footer.js?");

/***/ }),

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _menuLink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menuLink */ \"./src/components/menuLink.js\");\n\r\nconst header = () => {\r\n    const mainHeader = document.createElement(\"div\");\r\n    mainHeader.classList.add(\"main-header\");\r\n\r\n    const headerInner = document.createElement(\"div\");\r\n    headerInner.classList.add(\"header-inner\");\r\n\r\n    const logo = document.createElement(\"div\");\r\n    logo.classList.add(\"logo\");\r\n\r\n    const logoTitle = document.createElement(\"h2\");\r\n    logoTitle.textContent = \"Africa Eats\";\r\n\r\n    const menuItems = document.createElement(\"ul\");\r\n    menuItems.classList.add(\"menu-items\");\r\n\r\n    // Menu Links\r\n    const home = (0,_menuLink__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"Home\", \"home\");\r\n    const dishes = (0,_menuLink__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"Dishes\", \"dishes\");    \r\n    const contact= (0,_menuLink__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"Contact\", \"contact\");\r\n\r\n    menuItems.appendChild(home);\r\n    menuItems.appendChild(dishes);\r\n    menuItems.appendChild(contact);\r\n\r\n    logo.appendChild(logoTitle);\r\n    headerInner.appendChild(logo);\r\n    headerInner.appendChild(menuItems);\r\n    mainHeader.appendChild(headerInner);\r\n\r\n    return {mainHeader, home, dishes, contact};\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (header);\n\n//# sourceURL=webpack://restaurant-page/./src/components/header.js?");

/***/ }),

/***/ "./src/components/mainCard.js":
/*!************************************!*\
  !*** ./src/components/mainCard.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _restaurant_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../restaurant.png */ \"./src/restaurant.png\");\n\r\nconst mainCard = () => {\r\n    const card = document.createElement(\"div\");\r\n    card.classList.add(\"card\");\r\n\r\n    const cardTop = document.createElement(\"div\");\r\n    cardTop.classList.add(\"card-top\");\r\n\r\n    const title = document.createElement(\"h1\");\r\n    title.classList.add(\"title\");\r\n    title.textContent = \"Africa's Finest Dishes\";\r\n\r\n    const subTitle = document.createElement(\"p\");\r\n    subTitle.classList.add(\"sub-title\");\r\n    subTitle.textContent = \"Grab yourself a cozy meal from the cradle of Mankind! 😜\";\r\n\r\n    const restaurantImg = new Image();\r\n    restaurantImg.src = _restaurant_png__WEBPACK_IMPORTED_MODULE_0__;\r\n\r\n    cardTop.appendChild(title);\r\n    cardTop.appendChild(subTitle);\r\n\r\n    card.appendChild(cardTop);\r\n    card.appendChild(restaurantImg);\r\n\r\n    return card;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mainCard);\n\n//# sourceURL=webpack://restaurant-page/./src/components/mainCard.js?");

/***/ }),

/***/ "./src/components/menuLink.js":
/*!************************************!*\
  !*** ./src/components/menuLink.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menuLink = (text, role) => {\r\n    const item = document.createElement(\"li\");\r\n    item.classList.add(\"item\", role);\r\n    item.textContent = text;\r\n    \r\n    return item\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuLink);\n\n//# sourceURL=webpack://restaurant-page/./src/components/menuLink.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _components_mainCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/mainCard */ \"./src/components/mainCard.js\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/header */ \"./src/components/header.js\");\n/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/footer */ \"./src/components/footer.js\");\n/* harmony import */ var _components_dishes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/dishes */ \"./src/components/dishes.js\");\n/* harmony import */ var _components_contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/contact */ \"./src/components/contact.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction component() {\r\n    const main = document.createElement(\"div\");\r\n    main.classList.add(\"main\");\r\n    const mainBody = document.createElement('div');\r\n    const {mainHeader, home, dishes, contact} = (0,_components_header__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n    mainBody.classList.add(\"main-body\")\r\n    \r\n    main.appendChild(mainHeader);\r\n    main.appendChild(mainBody);\r\n\r\n    mainBody.appendChild((0,_components_mainCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\r\n    home.addEventListener(\"click\", () => {\r\n        mainBody.removeChild(mainBody.lastChild);\r\n        mainBody.appendChild((0,_components_mainCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\r\n    });\r\n\r\n    dishes.addEventListener(\"click\", () => {\r\n        mainBody.removeChild(mainBody.lastChild);\r\n        mainBody.appendChild((0,_components_dishes__WEBPACK_IMPORTED_MODULE_4__[\"default\"])());\r\n    });\r\n\r\n    contact.addEventListener(\"click\", () => {\r\n        mainBody.removeChild(mainBody.lastChild);\r\n        mainBody.appendChild((0,_components_contact__WEBPACK_IMPORTED_MODULE_5__[\"default\"])());\r\n    });\r\n\r\n    main.appendChild((0,_components_footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"])());\r\n    return main;\r\n}\r\n  \r\ndocument.body.appendChild(component());\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/bg.jpg":
/*!********************!*\
  !*** ./src/bg.jpg ***!
  \********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"94ba8c1e9b0a7f50e558.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/bg.jpg?");

/***/ }),

/***/ "./src/facebook.png":
/*!**************************!*\
  !*** ./src/facebook.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8851228152bf21d38bb9.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/facebook.png?");

/***/ }),

/***/ "./src/fried-rice.png":
/*!****************************!*\
  !*** ./src/fried-rice.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bada1e165390f0897b04.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/fried-rice.png?");

/***/ }),

/***/ "./src/hot-soup.png":
/*!**************************!*\
  !*** ./src/hot-soup.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"dce687b5367b14863103.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/hot-soup.png?");

/***/ }),

/***/ "./src/instagram.png":
/*!***************************!*\
  !*** ./src/instagram.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f3b182d9cd76a97f2d5f.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/instagram.png?");

/***/ }),

/***/ "./src/matoke.png":
/*!************************!*\
  !*** ./src/matoke.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ba362d93078deb777659.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/matoke.png?");

/***/ }),

/***/ "./src/restaurant.png":
/*!****************************!*\
  !*** ./src/restaurant.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1b3e3986617aad1589d3.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/restaurant.png?");

/***/ }),

/***/ "./src/twitter.png":
/*!*************************!*\
  !*** ./src/twitter.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a7af5e81d4ff7feeef0f.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/twitter.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;