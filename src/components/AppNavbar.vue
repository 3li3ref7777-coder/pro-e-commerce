<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
    <div class="container">
      <router-link class="navbar-brand" to="/">
        <i class="fa-solid fa-book-open me-2"></i> متجر الكتب
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto align-items-center">
          <li class="nav-item">
            <router-link class="nav-link" to="/">الرئيسية (الكتب)</router-link>
          </li>
          <template v-if="user">
            <li class="nav-item">
              <router-link class="nav-link position-relative" to="/cart">
                <i class="fa-solid fa-cart-shopping"></i> السلة
                <span v-if="cartCount > 0" class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {{ cartCount }}
                </span>
              </router-link>
            </li>
            <li class="nav-item ms-lg-3">
              <span class="navbar-text text-light me-2"><i class="fa-solid fa-user me-1"></i> أهلاً، {{ user.name }}</span>
            </li>
            <li class="nav-item">
              <button class="btn btn-outline-light btn-sm ms-2" @click="$emit('logout')">تسجيل الخروج</button>
            </li>
          </template>
          <template v-else>
            <li class="nav-item">
              <router-link class="btn btn-outline-light me-2 ms-2" to="/login">تسجيل الدخول</router-link>
            </li>
            <li class="nav-item">
              <router-link class="btn btn-primary" to="/register">إنشاء حساب</router-link>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: ['user', 'cartCount'],
  emits: ['logout']
}
</script>