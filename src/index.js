// 获取数据类型
(function (root, globalName, factory) {
    if (typeof define === 'function' && define.amd) {
      // AMD:
      define([], factory);
    } else if (typeof module === 'object' && module.exports) {
      // Node:
      module.exports = factory();
      module.exports.default = module.exports;
    } else {
      // Browser:
      window[globalName] = factory();
    }
  }(this, 'dataType', function () {
    'use strict';
  
    return function dataType (data) {
      return ({}).toString.call(data).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
    }
  })
);