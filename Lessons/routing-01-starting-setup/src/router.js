import { createRouter, createWebHistory } from 'vue-router';


import TeamsList from './pages/TeamsList.vue';
import UserList from './pages/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './pages/NotFound.vue';
import TeamsFooter from './pages/TeamsFooter.vue';
import UsersFooter from './pages/UsersFooter.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/', redirect: '/teams' },
      { name: 'teams',
        path: '/teams',
        components: { default: TeamsList, footer: TeamsFooter },
        children: [{name:'team-members', path: ':teamId', component: TeamMembers, props: true }],
      },
      { path: '/users', components: { default: UserList, footer: UsersFooter }, beforeEnter(to, from, next) {
        console.log('users beforeEnter');
        console.log(to, from);
        next();
      } },
      { path: '/:notFound(.*)', component: NotFound },
    ],
    linkActiveClass: 'active',
    scrollBehavior(_, _2, savedPosition){
      if (savedPosition) {
        return savedPosition
      }
      return {left:0, top:0}
    }
  });
  
  router.beforeEach(function (to, from, next) {
    console.log('Global beforeEach');
    console.log(to, from)
    next();
  })
  //Used for sending analytics, register navigation acctions, register users web changes
  router.afterEach(function (to, from) {
    console.log('Global afterEach')
    console.log(to, from)
  }) 

  export default router;