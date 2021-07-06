"use strict";

function _typeof3(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && _typeof3(Symbol.iterator) === "symbol") { _typeof3 = function _typeof(obj) { return typeof obj === "undefined" ? "undefined" : _typeof3(obj); }; } else { _typeof3 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof3(obj); }; } return _typeof3(obj); }

// 获取数据类型
(function (root, globalName, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD:
    define([], factory);
  } else if ((typeof module === "undefined" ? "undefined" : _typeof3(module)) === 'object' && module.exports) {
    // Node:
    module.exports = factory();
    module.exports.default = module.exports;
  } else {
    // Browser:
    window[globalName] = factory();
  }
})(undefined, 'dataType', function () {
  'use strict';

  return function dataType(data) {
    return {}.toString.call(data).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
  };
});