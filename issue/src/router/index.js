import Vue from 'vue'
import VueRouter from 'vue-router';

//引用了两个页面，配置了相应的router
import index from '../components/index.vue'
import projects from '../components/projects.vue'
import issues from '../components/issues.vue'


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
    path: '/projects',
    component:projects ,
    meta: {
      title:'home'
    }
  },
  {
    path: '/issues/:project_id',
    component:issues ,
    meta: {
      title:'home'
    }
  }
]

export default new VueRouter({
  routes
})