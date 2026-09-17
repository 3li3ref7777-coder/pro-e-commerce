<template>
  <div class="container my-5">
    <div class="row justify-content-center">
      <div class="col-md-5">
        <div class="card shadow-lg border-0 rounded-3">
          <div class="card-body p-4">
            <h3 class="card-title text-center mb-4 fw-bold">إنشاء حساب جديد</h3>
            <div v-if="errorMessage" class="alert alert-danger">{{ errorMessage }}</div>
            <form @submit.prevent="submitRegister">
              <div class="mb-3">
                <label class="form-label">الاسم الكامل</label>
                <input type="text" v-model="name" class="form-control" required>
              </div>
              <div class="mb-3">
                <label class="form-label">البريد الإلكتروني</label>
                <input type="email" v-model="email" class="form-control" required>
              </div>
              <div class="mb-3">
                <label class="form-label">كلمة المرور</label>
                <input type="password" v-model="password" class="form-control" required>
              </div>
              <button type="submit" class="btn btn-success w-100 py-2">تسجيل الحساب</button>
            </form>
            <p class="text-center mt-3 mb-0">لديك حساب بالفعل؟ <router-link to="/login">تسجيل الدخول</router-link></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  emits: ['register-success'],
  data() {
    return { name: '', email: '', password: '', errorMessage: '' };
  },
  methods: {
    submitRegister() {
      if (this.name && this.email) {
        const user = { name: this.name, email: this.email };
        this.$emit('register-success', user);
        this.$router.push('/');
      }
    }
  }
}
</script>