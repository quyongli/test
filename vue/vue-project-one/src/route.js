import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import indexDemo from './view/index';
// import learn from './components/learn';
// import student from './components/student.vue';
// import about from './components/about.vue';
// import home from './components/home.vue';

// const routes = [
//     {
//       path:'/',
//       component:indexDemo
//     },
//     {
//       path:'/learn',
//       component:learn
//     },
//     {
//       path:'/student',
//       component:student
//     },
//     {
//       path:'/about',
//       component:about
//     },
//     {
//       path:'/home',
//       component:home
//     }
//   ]
// 下面其它单页面写成异步组件；
  const routes = [
    {
      path:'/',
      component:indexDemo
    },
    {
      path:'/learn',
      component:()=>import('./view/learn')
    },
    {
      path:'/student',
      component:()=>import('./view/student') 
    },
    {
      path:'/about',
      component:()=>import('./view/about') 
    },
    {
      path:'/home',
      component:()=>import('./view/home') 
    }
  ]


export default new VueRouter({
    routes,
    linkActiveClass:'link-active',
    linkExactActiveClass:'exact-active'
  
  })