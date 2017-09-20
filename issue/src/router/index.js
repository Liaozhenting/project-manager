import Vue from 'vue'
import VueRouter from 'vue-router';

//引用了两个页面，配置了相应的router
// const index = resolve => require(["../components/index.vue"], resolve);
// const projects = resolve => require(["../components/projects.vue"], resolve);
// const issues = resolve => require(["../components/issues.vue"], resolve);
const index = () => import("../components/index.vue");
const projects = () => import("../components/projects.vue");
const issues = () => import("../components/issues.vue");


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