import Vue from 'vue';
import Router from 'vue-router';
import TodoMVC from '../views/todoMVC/index';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Todo',
      component: TodoMVC,
    },
  ],
});
