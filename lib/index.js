"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var getType = function getType(data) {
  var type = _typeof(data); //如果不是object类型的数据，直接用typeof就能判断出来


  if (type !== 'object') {
    return type;
  } //如果是object类型数据，准确判断类型必须使用Object.prototype.toString.call(obj)的方式才能判断


  return Object.prototype.toString.call(data).match(/\s([a-zA-Z]+)/)[1]; //.replace(/^\[object (\S+)\]$/, '$1');  主要是把  第一个对象去掉
};

var _default = getType;
exports["default"] = _default;