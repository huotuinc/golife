/**
 * Created by xhl on 2016/10/17.
 * Description : 路由列表
 */
const circleRouter = [
  {
    path: 'groupAll',
    component: resolve => require(['./views/circle/group/groupRecommend'], resolve),
    meta: {
      title: "热门推荐",
      description: ""
    }
  },
  {
    path: 'groupList/:id',
    component: resolve => require(['./views/circle/group/groupList'], resolve)
  },
  {
    path: 'content/:id',
    component: resolve => require(['./views/circle/content/content'], resolve),
    children: commentRouter
  }
]
/**
 * 评论路由
 * @type {*[]}
 */
const commentRouter = [
  {
    path: 'commentList/:id',
    component: resolve => require(['./views/circle/content/comment'], resolve)
  },
]
export const routes = [
  {
    path: '/introduce/:id',
    component: resolve => require(['./views/circle/group/introduce'], resolve),
    redirect: { name: 'introduce' }
  },
  {
    path: '/circle',
    name: 'circleIndex',
    component: resolve => require(['./views/circle/index'], resolve),
    children: circleRouter
  },
  {
    path: '/attention',
    name: 'circleAttention',
    component: resolve => require(['./views/circle/attention'], resolve),
    children: circleRouter
  },
  {
    path: '/science',
    name: 'circleScience',
    component: resolve => require(['./views/circle/science'], resolve),
    children: circleRouter
  },
  {
    path: '/hot',
    name: 'circleHot',
    component: resolve => require(['./views/circle/hot'], resolve),
    children: circleRouter
  },
  {
    path: '/login',
    name: 'login',
    component: resolve => require(['./views/login'], resolve)
  },
  {
    path: '/search',
    name: 'search',
    component: resolve => require(['./views/search'], resolve)
  },
  {
    path: '/write',
    component: resolve => require(['./views/admin/write'], resolve)
  },
  {
    path: '/userCenter/index',
    name: 'userCenterIndex',
    component: resolve => require(['./views/userCenter/index'], resolve),
    children: [
      {
        path: '/userCenter/message',
        name: 'userCenterMessage',
        component: resolve => require(['./views/userCenter/message'], resolve)
      },
      {
        path: '/userCenter/fans/:tab',
        name: 'userCenterFansIndex',
        component: resolve => require(['./views/userCenter/fans/index'], resolve),
        children: [
          {
            path: '/admin/:userId',
            name: 'adminIndex',
            component: resolve => require(['./views/admin/index'], resolve)
          }
        ]
      },
    ]
  },
  {
    path: '/error/:code',
    name: 'error',
    component: resolve => require(['./components/common/error'], resolve),
    meta: {
      requiresAuth: false
    }
  },
]
