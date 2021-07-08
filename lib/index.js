"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var dataType = function dataType(data) {
  //如果不是object类型的数据，直接用typeof就能判断出来
  if (_typeof(data) !== 'object') {
    return _typeof(data); // undefined number string boolean symbol function
  }

  if (data === null) {
    return 'null';
  }

  if (data instanceof Array) {
    return 'array';
  }

  if (data instanceof Date) {
    return 'date';
  }

  if (data instanceof RegExp) {
    return 'regexp';
  }

  if (data instanceof Object) {
    return 'object';
  }
};

var _default = dataType;
exports["default"] = _default;