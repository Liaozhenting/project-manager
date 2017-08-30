import Vue from 'vue'
import VueRouter from 'vue-router';

//引用了两个页面，配置了相应的router
import index from '../components/index.vue'
import h from '../components/Hello.vue'


Vue.use(VueRouter)


const routes = [  
  {
    path: '/',
    component: index,
    meta: {
      title:'home'
    }
  },
  {
    path: '/h',
    component:h ,
    meta: {
      title:'home'
    }
  }
]

export default new VueRouter({
  routes
})