// const dataType = {}
const dataType = (data) =>{
  //如果不是object类型的数据，直接用typeof就能判断出来
  if (typeof data !== 'object') {
    return typeof data // undefined number string boolean symbol function
  }
  if (data === null) {
      return 'null'
  }
  if (data instanceof Array) {
      return 'array'
  }
  if (data instanceof Date) {
      return 'date'
  }
  if (data instanceof RegExp) {
      return 'regexp'
  }
  if (data instanceof Object) {
      return 'object'
  }
}
module.exports = dataType;