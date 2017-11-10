import Vue from 'vue';
import Router from 'vue-router';

const Home = () => import(/* webpackChunkName: "home" */'@/views/Home');
const Article = () => import(/* webpackChunkName: "article" */'@/views/Article');
const ArticleAdd = () => import(/* webpackChunkName: "article-add" */'@/views/ArticleAdd');

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
      path: '/article/:id(\\d+)',
      name: 'Article',
      component: Article,
    },
    {
      path: '/article/add',
      name: 'ArticleAdd',
      component: ArticleAdd,
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});
