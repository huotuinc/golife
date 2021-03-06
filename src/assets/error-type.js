/**
 * 参数错误
 * @type {string}
 */
export const ERROR_PARAMETER=5001

/**
 * 获取配置信息错误
 * @type {number}
 */
export const ERROR_CONFIG=5002

/**
 * 404
 * @type {number}
 */
export const ERROR_NOFIND=4000

/**
 * 获得跳转的错误页面path
 * @param code 错误编码
 * @returns {{path: string}}
 */
export const redirectErrorByCode = function (code) {
  let url = ''
  if (code == ERROR_CONFIG) {
    url = '/error/' +ERROR_CONFIG
  } else if (code ==ERROR_PARAMETER) {
    url = '/error/' +ERROR_PARAMETER
  }
  return {path: url}
}

