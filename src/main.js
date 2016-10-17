import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import circleIndex from './views/circle/index'
import circleAttention from './views/circle/attention'
import circleScience from './views/circle/science'
import circleHot from './views/circle/hot'
import circleContent from './views/circle/content'

Vue.use(VueRouter)
Vue.use(VueResource)

const routes = [
  {path: '/', name: 'circleIndex', component: circleIndex},
  {path: '/circle/index', name: 'circleIndex', component: circleIndex},
  {path: '/circle/attention', name: 'circleAttention', component: circleAttention},
  {path: '/circle/science', name: 'circleScience', component: circleScience},
  {path: '/circle/hot', name: 'circleHot', component: circleHot},
  {path: '/circle/content/:id', name: 'circleContent', component: circleContent}
]
const router = new VueRouter({
  routes
})

// router.beforeEach((to,from,next) => {
//   window.console.log(to)
//   window.console.log(from)
//   window.console.log(next)
//   next();
// })
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
