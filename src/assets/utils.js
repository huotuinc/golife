/**
 * 判断是否是微信
 * @returns {boolean}
 */
export const isWeXin=function () {
  var u = navigator.userAgent;
  return !!u.match(/MicroMessenger.*/)//是否是微信浏览器
}

/**
 * 发送短信60秒倒计时
 * @param el dom实例
 * @param disCls 禁用样式
 * @param second 间隔秒数 默认60秒
 */
export const lastTime=function (el,disCls,second=60) {
  if (el.length < 1)
    return;
  var oldText = el.html();
  var functionName = el.attr("onclick");
  el.removeAttr("onclick", "");
  if (el.hasClass(disCls)) {
    el.addClass("disabled");
    el.removeClass(disCls);
    var time = second;
    var elTime = el.find("span");
    if (elTime.length == 0) {
      el.html("<span>" + time + "</span>秒");
      elTime = el.find("span");
    }
    var timer = setInterval(function () {
      if (time > 1) {
        var str = time - 1;
        time = time - 1;
        elTime.html(str);
      } else {
        str = "";
        el.html(oldText);
        el.addClass(disCls);
        el.removeClass("disabled");
        if (functionName) { el.attr("onclick", functionName); }
        clearInterval(timer);
      }

    }, 1000);
  } else {
    el.addClass(disCls);
    var time = second;
    var elTime = el.find("span");
    if (elTime.length == 0) {
      el.html("<span>" + time + "</span>秒");
      elTime = el.find("span");
    }
    var timer = setInterval(function () {
      if (time > 1) {
        var str = time - 1;
        time = time - 1;
        elTime.html(str);
      } else {
        str = "";
        el.html(oldText);
        if (functionName) { el.attr("onclick", functionName); }
        el.removeClass(disCls);
        clearInterval(timer);
      }

    }, 1000)
  }
}

/**
 * 判断是否是手机号码
 * @param str 字符串
 * @returns {boolean}
 */
export const isMobile=function (str) {
  return /^1[1-9][0-9]{9}$/.test(str);
}

/**
 * 判断是否是密码格式
 * @param passWord 密码
 * @returns {boolean}
 */
export const isPassWord=function (passWord) {
  return !(passWord.length>16||passWord.length<6)
}

/**
 * 判断字符串是否为空对象
 * @param str
 * @returns {boolean}
 */
export const isEmpty=function (str) {
  return str==undefined||str==''
}

/**
 * 判断两个字符串是否相同
 * @param str1
 * @param str2
 * @returns {boolean}
 */
export const isEqual=function (str1,str2) {
  return str1==str2
}

/**
 * 重定向登录页面
 * @param customerId
 * @param redirectUrl 需要跳转的地址（相对路由地址包含参数,比如你要访问http://localhost:8080/#/search?customerId=3447 则这里传递/search?customerId=3447即可）
 * @returns {{path: string, query: {customerId: *, redirectUrl: string}}}
 */
export const redirectLogin =function (customerId,redirectUrl) {
  let referer=redirectUrl
  return {path:'/login',query:{customerId:customerId,redirectUrl:referer}}
}

// Browser: {
//   UserAgent: function () {
//     var u = navigator.userAgent;
//     return {
//       IsMobile: !!u.match(/AppleWebKit.*Mobile.*/) && !!u.match(/AppleWebKit/),//是否是移动浏览器
//       IsMicroMessagener: !!u.match(/MicroMessenger.*/),//是否是微信浏览器
//       IsAndroid: /(android)/i.test(u),//是否是android环境
//       IsQQ: /MQQBrowser/i.test(u), //是否是QQ浏览器
//       Mobile: !!u.match(/AppleWebKit.*Mobile.*/)//是否是移动浏览器
//     };
//   }()
// }
