<template>
  <div class="container my-5">
    <div class="row justify-content-center">
      <div class="col-md-5">
        <div class="card shadow-lg border-0 rounded-3">
          <div class="card-body p-4">
            <h3 class="card-title text-center mb-4 fw-bold">تسجيل الدخول</h3>
            <div v-if="errorMessage" class="alert alert-danger">{{ errorMessage }}</div>
            <form @submit.prevent="submitLogin">
              <div class="mb-3">
                <label class="form-label">البريد الإلكتروني</label>
                <input type="email" v-model="email" class="form-control" required>
              </div>
              <div class="mb-3">
                <label class="form-label">كلمة المرور</label>
                <input type="password" v-model="password" class="form-control" required>
              </div>
              <button type="submit" class="btn btn-primary w-100 py-2">دخول</button>
            </form>
            <p class="text-center mt-3 mb-0">ليس لديك حساب؟ <router-link to="/register">إنشاء حساب جديد</router-link></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  emits: ['login-success'],
  data() {
    return { email: '', password: '', errorMessage: '' };
  },
  methods: {
    submitLogin() {
      if (this.email && this.password) {
        const user = { name: this.email.split('@')[0], email: this.email };
        this.$emit('login-success', user);
        this.$router.push('/');
      } else {
        this.errorMessage = 'بيانات الدخول غير صحيحة';
      }
    }
  }
}
</script>