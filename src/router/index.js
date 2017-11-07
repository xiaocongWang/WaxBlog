import Vue from 'vue';
import Router from 'vue-router';

const Home = () => import(/* webpackChunkName: "home" */'@/views/Home');
const Article = () => import(/* webpackChunkName: "article" */'@/views/Article');
Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/article/:id',
      name: 'Article',
      component: Article,
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});
