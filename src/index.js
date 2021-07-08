const dataType = (data) =>{
  var type = typeof data;
  //如果不是object类型的数据，直接用typeof就能判断出来
  if (type !== 'object') {
      return type;
  }
  //如果是object类型数据，准确判断类型必须使用Object.prototype.toString.call(obj)的方式才能判断
  return Object.prototype.toString.call(data).slice(8, -1).toLowerCase();
}
// export default getType