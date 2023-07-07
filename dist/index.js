parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"BhTX":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.groupingDoms=exports.getSchemaType=exports.getSchemaName=exports.getSchemaLabel=exports.getRootProperty=exports.getProperty=exports.getFieldDoms=void 0;var e=function(e){var t=e.querySelector('[class ^= "SchemaNode__label__"]');return(null==t?void 0:t.textContent)||"root"};exports.getSchemaLabel=e;var t=function(e){var t=e.querySelector('[class ^= "SchemaNode__name__"]');return(null==t?void 0:t.textContent)||"not specified"};exports.getSchemaName=t;var r=function(e){var t=e.querySelector('[class ^= "SchemaNode__type__"');return(null==t?void 0:t.textContent)||"not specified"};exports.getSchemaType=r;var o=function(e){return{name:t(e),type:r(e)}};exports.getProperty=o;var n=function(t){return{name:e(t),type:"Object"}};exports.getRootProperty=n;var a=function(e){var t=e.find(function(e){return e.className.includes("SchemaNode__root")}),r=e.filter(function(e){return e.className.includes("SchemaLeaf__leaf__")}),o=e.filter(function(e){return e!==t&&!r.includes(e)});return{root:t,leaves:r,groups:o}};exports.groupingDoms=a;var c=function(e){var t=e.target,r=e.path,o=e.level;return 1===o?null==t?void 0:t.querySelectorAll('[data-level="'.concat(o,'"]')):null==t?void 0:t.querySelectorAll('[data-node-path^="'.concat(r,'"][data-level="').concat(o,'"]'))};exports.getFieldDoms=c;
},{}],"dd2a":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.open=exports.close=void 0;var e=function(e){var o=e.querySelector('[class ^= "SchemaNode__symbol__"]');null==o||o.click()},o=function(o){"false"===o.ariaExpanded&&e(o)};exports.open=o;var r=function(o){"true"===o.ariaExpanded&&e(o)};exports.close=r;
},{}],"HwWB":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.walk=void 0;var e=require("./extract"),r=require("./operation");function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,o)}return t}function n(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach(function(r){i(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function i(e,r,t){return(r=u(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function u(e){var r=l(e,"string");return"symbol"===t(r)?r:String(r)}function l(e,r){if("object"!==t(e)||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var n=o.call(e,r||"default");if("object"!==t(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}var a=function t(o){var i=o.root,u=o.group,l=o.path,a=o.level;(0,r.open)(u);var c=(0,e.getFieldDoms)({target:i,path:l,level:a}),p=n(n({},(0,e.getProperty)(u)),{},{leaves:[],groups:[],array:[],path:l});return null==c||c.forEach(function(r){var o,n=(0,e.getSchemaName)(r),u=t({root:i,group:r,path:l?l+"."+n:n,level:a+1});if("Object"===u.type)null===(o=p.groups)||void 0===o||o.push(u);else if("array[]"===u.type){var c;null===(c=p.array)||void 0===c||c.push(u)}else{var f;null===(f=p.leaves)||void 0===f||f.push(u)}}),(0,r.close)(u),p};exports.walk=a;
},{"./extract":"BhTX","./operation":"dd2a"}],"QCba":[function(require,module,exports) {
"use strict";var e=require("./dom/extract"),r=require("./dom/walk");function o(e){return a(e)||l(e)||n(e)||t()}function t(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(e,r){if(e){if("string"==typeof e)return i(e,r);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?i(e,r):void 0}}function l(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function a(e){if(Array.isArray(e))return i(e)}function i(e,r){(null==r||r>e.length)&&(r=e.length);for(var o=0,t=new Array(r);o<r;o++)t[o]=e[o];return t}var c=function(){var t=document.querySelector('[class ^= "SchemaTree__tree"]');if(t){var n=o(t.childNodes),l=(0,e.groupingDoms)(n),a=l.root;l.leaves,l.groups;if(a){console.time(),console.log("enter");var i=(0,r.walk)({root:t,group:a,path:"",level:1});console.log("res",i),console.timeEnd()}else console.log("Root is not found")}else console.log("Dom tree is not found. Click any dom element with dev-console")};c();
},{"./dom/extract":"BhTX","./dom/walk":"HwWB"}]},{},["QCba"], null)
//# sourceMappingURL=/index.js.map