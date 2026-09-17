import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue';
import RegisterView from '../views/RegisterView.vue';
import CartView from '../views/CartView.vue';

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/login', name: 'Login', component: LoginView },
  { path: '/register', name: 'Register', component: RegisterView },
  { 
    path: '/cart', 
    name: 'Cart', 
    component: CartView,
    beforeEnter: (to, from, next) => {
      const isLoggedIn = localStorage.getItem('user');
      if (!isLoggedIn) {
        next('/login');
      } else {
        next();
      }
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;