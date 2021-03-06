import Vue from 'vue';
import Router from 'vue-router';
import Projects from './views/Projects.vue';
// import Words from './views/Words.vue';
import About from './views/About.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // {
    //   path: '/',
    //   name: 'words',
    //   component: Words,
    // },
    {
      path: '/',
      name: 'projects',
      component: Projects,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
  ],
});
