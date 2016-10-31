/**
 * 判断是否是微信
 * @returns {boolean}
 */
export const isWeXin=function () {
  var u = navigator.userAgent;
  return !!u.match(/MicroMessenger.*/)//是否是微信浏览器
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
