/**
 * Created by xhl on 2016/10/17.
 * Description : 路由列表
 */


export const  circleRouter=[
  {
    path: '/circle/groupAll',
    name: 'circleGroupCommented',
    component: resolve => require(['./views/circle/group/groupRecommend'], resolve)
  },
  {
    path: '/circle/groupList/:id',
    name: 'login',
    component: resolve => require(['./views/circle/group/groupList'], resolve)
  },
  {
    path: '/circle/content/:id',
    name: 'circleContent',
    component: resolve => require(['./views/circle/content/content'], resolve)
  },
  {
    path: '/circle/commentList/:id',
    name: 'circleCommentList',
    component: resolve => require(['./views/circle/content/comment'], resolve)
  },
]
export const routes = [
  {
    path: '/circle/index',
    name: 'circleIndex',
    component: resolve => require(['./views/circle/index'], resolve),
    children: circleRouter
  },
  {
    path: '/circle/attention',
    name: 'circleAttention',
    component: resolve => require(['./views/circle/attention'], resolve)
  },
  {
    path: '/circle/science',
    name: 'circleScience',
    component: resolve => require(['./views/circle/science'], resolve)
  },
  {
    path: '/circle/hot',
    name: 'circleHot',
    component: resolve => require(['./views/circle/hot'], resolve)
  },
  {
    path: '/login',
    name: 'login',
    component: resolve => require(['./views/login'], resolve)
  },
  {
    path: '/search',
    name: 'search',
    component:resolve => require(['./views/search'], resolve)
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
        component: resolve => require(['./views/userCenter/fans/index'], resolve)
      },
    ]
  },
  {
    path: '/admin/:userId',
    name: 'adminIndex',
    component:resolve => require(['./views/admin/index'], resolve)
  }
]

// export const routes = [
//   {
//     path: '/circle',
//     name: 'circleIndex',
//     component: resolve => require(['./views/circle/index'], resolve),
//     children: [
//       {
//         path: '/circle/attention',
//         name: 'circleAttention',
//         component: resolve => require(['./views/circle/attention'], resolve)
//       },
//       {
//         path: '/circle/science',
//         name: 'circleScience',
//         component: resolve => require(['./views/circle/science'], resolve)
//       },
//       {
//         path: '/circle/hot',
//         name: 'circleHot',
//         component: resolve => require(['./views/circle/hot'], resolve)
//       },
//       {
//         path: '/circle/content/:id',
//         name: 'circleContent',
//         component: resolve => require(['./views/circle/content'], resolve)
//       },
//       {
//         path: '/circle/commentList/:id',
//         name: 'circleCommentList',
//         component: resolve => require(['./views/circle/comment'], resolve)
//       },
//       {
//         path: '/circle/groupList/:id',
//         name: 'circleGroupList',
//         component: resolve => require(['./views/circle/groupList'], resolve)
//       },
//       {
//         path: '/circle/groupAll',
//         name: 'circleGroupCommented',
//         component: resolve => require(['./views/circle/groupRecommend'], resolve)
//       },
//     ]
//   },
//   {
//     path: '/login',
//     name: 'login',
//     component: resolve => require(['./views/login'], resolve)
//   },
//   {
//     path: '/userCenter/index',
//     name: 'userCenterIndex',
//     component: resolve => require(['./views/userCenter/index'], resolve)
//   }
// ]
