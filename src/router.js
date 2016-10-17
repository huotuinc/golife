/**
 * Created by xhl on 2016/10/17.
 * Description : 路由列表
 */

import circleIndex from './views/circle/index'
import circleAttention from './views/circle/attention'
import circleScience from './views/circle/science'
import circleHot from './views/circle/hot'
import circleContent from './views/circle/content'
import circleCommentList from './views/circle/comment'

import login from './views/login'

export const routes = [
  {path: '/', name: 'circleIndex', component: circleIndex},
  {path: '/circle/index', name: 'circleIndex', component: circleIndex},
  {path: '/circle/attention', name: 'circleAttention', component: circleAttention},
  {path: '/circle/science', name: 'circleScience', component: circleScience},
  {path: '/circle/hot', name: 'circleHot', component: circleHot},
  {path: '/circle/content/:id', name: 'circleContent', component: circleContent},
  {path: '/circle/commentList/:id', name: 'circleCommentList', component: circleCommentList},
  {path: '/login', name: 'login', component: login}
]
