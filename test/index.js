// 断言库 chai.js
var expect = require('chai').expect;
var dataType = require('../src/index');
// console.log(dataType.test)
describe('基本数据类型', function () {
    // 每个describe块应该包括一个或多个it块，称为测试用例（test case）
    it('undefined-类型检测测试', () => {
        expect(dataType(undefined)).equal('undefined');
    });
    it('null-类型检测测试', () => {
        expect(dataType(null)).equal('null');
    });
    it('string-类型检测测试', () => {
        expect(dataType('abc')).equal('string');
    });
    it('boolean-类型检测测试', () => {
        expect(dataType(true)).equal('boolean');
    });
    it('number-类型检测测试', () => {
        expect(dataType(1)).equal('number');
    });
    it('symbol-类型检测测试', () => {
        expect(dataType(Symbol())).equal('symbol');
    });
});

describe('引用数据类型', function () {
    it('array-类型检测测试', () => {
        expect(dataType([1, 2, 3])).equal('array');
    });
    it('object-类型检测测试', () => {
        expect(dataType({ name: "lili", age: 12 })).equal('object');
    });
    it('date-类型检测测试', () => {
        expect(dataType(new Date())).equal('date');
    });
    it('regex-类型检测测试', () => {
        expect(dataType(new RegExp("\\w+"))).equal('regexp');
    });
    it('function-类型检测测试', () => {
        expect(dataType(function () { })).equal('function');
        expect(dataType(new Function())).equal('function');
    });
});
