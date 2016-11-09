/**
 * Created by xhl on 2016/10/17.
 * Description : 路由列表
 */
const circleRouter = [
  {
    path: 'groupAll',
    component: resolve => require(['./views/circle/group/groupRecommend'], resolve),
    meta: {
      requiresAuth: true,
      isLogin: false,
    }
  },
  {
    path: 'groupList/:id',
    component: resolve => require(['./views/circle/group/groupList'], resolve),
    meta: {
      requiresAuth: true,
      isLogin: false,
    }
  },
  {
    path: 'content/:id',
    component: resolve => require(['./views/circle/content/content'], resolve),
    children: commentRouter,
    meta: {
      requiresAuth: true,
      isLogin: false,
    }
  }
]
/**
 * 评论路由
 * @type {*[]}
 */
const commentRouter = [
  {
    path: 'commentList/:id',
    component: resolve => require(['./views/circle/content/comment'], resolve),
    meta: {
      requiresAuth: true,
      isLogin: false,
    }
  },
]
export const routes = [
  {
    path: '/introduce/:id',
    component: resolve => require(['./views/circle/group/introduce'], resolve),
    meta: {
      isLogin: false,
      requiresAuth: true
    }
  },
  {
    path: '/circle',
    name: 'circleIndex',
    component: resolve => require(['./views/circle/index'], resolve),
    children: circleRouter,
    meta: {
      isLogin: false,
      requiresAuth: true
    }
  },
  {
    path: '/attention',
    name: 'circleAttention',
    component: resolve => require(['./views/circle/attention'], resolve),
    children: circleRouter,
    meta: {
      isLogin: true,
      requiresAuth: true
    }
  },
  {
    path: '/science',
    name: 'circleScience',
    component: resolve => require(['./views/circle/science'], resolve),
    children: circleRouter,
    meta: {
      isLogin: false,
      requiresAuth: true
    }
  },
  {
    path: '/hot',
    name: 'circleHot',
    component: resolve => require(['./views/circle/hot'], resolve),
    children: circleRouter,
    meta: {
      isLogin: false,
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: resolve => require(['./views/login'], resolve),
    meta:{
      isLogin: false,
      requiresAuth: true
    }
  },
  {
    path: '/register',
    name: 'register',
    component: resolve => require(['./views/register'], resolve),
    meta: {
      isLogin: false,
      requiresAuth: true
    }
  },
  {
    path: '/search',
    name: 'search',
    component: resolve => require(['./views/search'], resolve),
    meta: {
      isLogin: false,
      requiresAuth: true
    }
  },
  {
    path: '/write',
    component: resolve => require(['./views/admin/write'], resolve),
    meta: {
      isLogin: true,
      requiresAuth: true
    }
  },
  {
    path: '/userCenter/index',
    name: 'userCenterIndex',
    component: resolve => require(['./views/userCenter/index'], resolve),
    meta: {
      isLogin: true,
      requiresAuth: true
    },
    children: [
      {
        path: '/userCenter/message',
        name: 'userCenterMessage',
        component: resolve => require(['./views/userCenter/message'], resolve),
        meta: {
          isLogin: true,
          requiresAuth: true
        },
      },
      {
        path: '/userCenter/fans/:tab',
        name: 'userCenterFansIndex',
        component: resolve => require(['./views/userCenter/fans/index'], resolve),
        meta: {
          isLogin: true,
          requiresAuth: true
        },
        children: [
          {
            path: '/admin/:userId',
            name: 'adminIndex',
            component: resolve => require(['./views/admin/index'], resolve),
            meta: {
              isLogin: false,
              requiresAuth: true
            }
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
      requiresAuth: false,
      isLogin: false,
    }
  },
]
