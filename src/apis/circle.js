/**
 * Created by Administrator on 2016/10/11.
 */
import "whatwg-fetch"
import * as bases from '../apis/base'


/**
 * Mocking client-server processing
 */
export default {
  getBanner () {
    return bases.get({uri: '/app/circle/indexTop'});
  },
  getGroup(){
    return bases.get({uri: '/app/circle/indexList'});
  }
}
