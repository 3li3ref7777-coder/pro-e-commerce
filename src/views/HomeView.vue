<template>
  <div class="container">
    <div v-if="!user" class="alert alert-info text-center shadow-sm mb-4">
      <i class="fa-solid fa-circle-info me-2"></i> أنت تتصفح الموقع كـ <strong>زائر</strong>. يرجى <router-link to="/login" class="alert-link">تسجيل الدخول</router-link> لرؤية الأسعار وإضافة الكتب للسلة!
    </div>

    <h2 class="text-center mb-4 fw-bold">معرض الكتب</h2>

    <div class="row g-4">
      <div v-for="book in books" :key="book.ISBN" class="col-lg-4 col-md-6">
        <div class="card book-card h-100 shadow-sm">
          <img :src="book.image" :alt="book.Name" class="card-img-top book-image">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title fw-bold">{{ book.Name }}</h5>
            <p class="card-text text-muted small flex-grow-1">{{ book.description }}</p>
            
            <div class="mb-2">
              <span class="badge bg-secondary me-1">{{ book.category }}</span>
              <span :class="['badge', book.numberofpage < 50 ? 'badge-pages-less' : 'badge-pages-more']">
                {{ book.numberofpage }} صفحة
              </span>
            </div>

            <p class="mb-1"><strong>الكاتب:</strong> {{ book.author }}</p>

            <div v-if="user" class="mt-3 pt-3 border-top">
              <div class="d-flex justify-content-between align-items-center mb-3">
                <span class="fs-5 fw-bold text-success">{{ formatPrice(book.price) }}</span>
              </div>
              <button class="btn btn-primary w-100" @click="$emit('add-to-cart', book)">
                <i class="fa-solid fa-cart-plus me-1"></i> إضافة إلى السلة
              </button>
            </div>
            <div v-else class="mt-3 pt-3 border-top text-center">
              <span class="text-muted small"><i class="fa-solid fa-lock me-1"></i> سجل الدخول لمعرفة السعر والشراء</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['books', 'user'],
  emits: ['add-to-cart'],
  methods: {
    formatPrice(price) {
      return new Intl.NumberFormat("ar-SA", { style: "currency", currency: "SAR" }).format(price);
    }
  }
}
</script>