<template>
  <div id="app" class="d-flex flex-column min-vh-100">
    <AppNavbar :user="currentUser" :cart-count="cartCount" @logout="logout" />

    <main class="flex-grow-1 py-4">
      <router-view 
        :books="books" 
        :user="currentUser" 
        :cart="cart"
        @add-to-cart="addToCart"
        @remove-from-cart="removeFromCart"
        @clear-cart="clearCart"
        @login-success="setUser"
        @register-success="setUser"
      />
    </main>

    <AppFooter />
  </div>
</template>

<script>
import AppNavbar from './components/AppNavbar.vue';
import AppFooter from './components/AppFooter.vue';
import { booksData } from './books.js';

export default {
  name: 'App',
  components: { 
    AppNavbar, 
    AppFooter 
  },
  data() {
    return {
      currentUser: JSON.parse(localStorage.getItem('user')) || null,
      cart: [],
      books: booksData
    };
  },
  computed: {
    // حساب مجموع قطع الكتب في السلة بدلاً من عدد الأنواع فقط
    cartCount() {
      return this.cart.reduce((total, item) => total + item.quantity, 0);
    }
  },
  methods: {
    setUser(user) {
      this.currentUser = user;
      localStorage.setItem('user', JSON.stringify(user));
    },
    logout() {
      this.currentUser = null;
      localStorage.removeItem('user');
      this.cart = [];
      this.$router.push('/login');
    },
    addToCart(book) {
      const existing = this.cart.find(item => item.book.ISBN === book.ISBN);
      if (existing) {
        existing.quantity++;
      } else {
        this.cart.push({ book, quantity: 1 });
      }
    },
    removeFromCart(isbn) {
      this.cart = this.cart.filter(item => item.book.ISBN !== isbn);
    },
    clearCart() {
      this.cart = [];
    }
  }
}
</script>

<style>
.book-image { 
  height: 280px; 
  object-fit: contain; 
  background-color: #f1f1f1; 
  padding: 15px; 
}
.badge-pages-less { 
  background-color: #dc3545; 
}
.badge-pages-more { 
  background-color: #198754; 
}
</style>