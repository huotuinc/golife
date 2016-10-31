/**
 *  已经没有分页数据，禁用滚动条
 * @param Vue vue 实例
 */
export const disabledScroll=function (Vue) {
  Vue.scrollStatus.loading = false;
  Vue.scrollStatus.disabled = true;
}

/**
 * 启用滚动条滚动操作
 * @param Vue vue实例
 */
export const undisabledScroll=function (Vue) {
  Vue.scrollStatus.loading = false;
  Vue.scrollStatus.disabled = false;
}
