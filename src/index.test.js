const dataType = require('../src/index');
describe('基本数据类型', function () {
    // 每个describe块应该包括一个或多个test块，称为测试用例（test case）
    test('undefined-类型检测测试', () => {
        expect(dataType(undefined)).toBe('undefined');
    });
    test('null-类型检测测试', () => {
        expect(dataType(null)).toBe('null');
    });
    test('string-类型检测测试', () => {
        expect(dataType('abc')).toBe('string');
    });
    test('boolean-类型检测测试', () => {
        expect(dataType(true)).toBe('boolean');
    });
    test('number-类型检测测试', () => {
        expect(dataType(1)).toBe('number');
    });
    test('symbol-类型检测测试', () => {
        expect(dataType(Symbol())).toBe('symbol');
    });
    test('bigint-类型检测测试', () => {
        expect(dataType(10n)).toBe('bigint');
    });
});
describe('复合数据类型', function () {
    test('array-类型检测测试', () => {
        expect(dataType([1, 2, 3])).toEqual('array');
        expect(dataType(new Array())).toEqual('array');
    });
    test('object-类型检测测试', () => {
        expect(dataType({ name: "lili", age: 12 })).toEqual('object');
        expect(dataType(new Object())).toEqual('object');
    });
    test('date-类型检测测试', () => {
        expect(dataType(new Date())).toEqual('date');
    });
    test('regex-类型检测测试', () => {
        expect(dataType(new RegExp("\\w+"))).toEqual('regexp');
    });
    test('function-类型检测测试', () => {
        expect(dataType(function () { })).toEqual('function');
        expect(dataType(new Function())).toEqual('function');
    });
});