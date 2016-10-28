

/**
 * 新增Cookie
 * @param name
 * @param value
 * @param days
 * @param path
 */
export const addCookie=function (name,value,days) {
  var name = escape(name);
  var value = escape(value);
  var expires = new Date();
  expires.setTime(expires.getTime() + days * 3600000 * 24);
  // var path = path == "" ? "" : ";path=" + path;
  var path ='/';
  //GMT(Greenwich Mean Time)是格林尼治平时，现在的标准时间，协调世界时是UTC
  //参数days只能是数字型
  var _expires = (typeof days) == "string" ? "" : ";expires=" + expires.toUTCString();
  document.cookie = name + "=" + value + _expires + path;
}

/**
 * 获得Cookie值
 * @param name Cookie的键值名称
 * @returns {*} 返回Cookie value
 */
export const getCookie = function (name) {
  //用处理字符串的方式查找到key对应value
  var name = escape(name);
  //读cookie属性，这将返回文档的所有cookie
  var allcookies = document.cookie;
  //查找名为name的cookie的开始位置
  name += "=";
  var pos = allcookies.indexOf(name);
  //如果找到了具有该名字的cookie，那么提取并使用它的值
  if (pos != -1){
    var start = pos + name.length;
    var end = allcookies.indexOf(";",start);
    if (end == -1) end = allcookies.length;
    var value = allcookies.substring(start,end);
    return (value);
  }else{  //搜索失败，返回空字符串
    return "";
  }
}

/**
 * 删除Cookie 值
 * @param name
 * @param path
 */
export const deleteCookie=function (name,path) {
  var name = escape(name);
  var expires = new Date(0);
  path = path == "" ? "" : ";path=" + path;
  document.cookie = name + "="+ ";expires=" + expires.toUTCString() + path;
}
