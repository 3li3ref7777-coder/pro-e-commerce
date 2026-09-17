<template>
  <div class="container my-4">
    <h2 class="text-center mb-4 fw-bold">سلة المشتريات</h2>

    <div v-if="orderPlaced" class="alert alert-success text-center p-5 rounded-3">
      <i class="fa-solid fa-circle-check text-success display-3 mb-3"></i>
      <h3>تمت عملية الشراء بنجاح!</h3>
      <router-link to="/" class="btn btn-primary mt-3">العودة للرئيسية</router-link>
    </div>

    <div v-else-if="cart.length === 0" class="text-center py-5">
      <i class="fa-solid fa-cart-arrow-down text-muted display-1 mb-3"></i>
      <h4>السلة فارغة حالياً</h4>
      <router-link to="/" class="btn btn-outline-primary mt-3">تصفح الكتب</router-link>
    </div>

    <div v-else class="row">
      <div class="col-lg-8 mb-4">
        <div class="table-responsive bg-white rounded shadow-sm p-3">
          <table class="table align-middle">
            <thead>
              <tr>
                <th>الكتاب</th>
                <th>السعر</th>
                <th>الكمية</th>
                <th>الإجمالي</th>
                <th>إجراء</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in cart" :key="item.book.ISBN">
                <td>
                  <div class="d-flex align-items-center">
                    <img :src="item.book.image" style="width: 50px; height: 70px; object-fit: contain;" class="me-2">
                    <div>
                      <h6 class="mb-0">{{ item.book.Name }}</h6>
                      <small class="text-muted">{{ item.book.author }}</small>
                    </div>
                  </div>
                </td>
                <td>{{ formatPrice(item.book.price) }}</td>
                <td>
                  <input type="number" v-model.number="item.quantity" min="1" class="form-control form-control-sm" style="width: 70px;">
                </td>
                <td class="fw-bold">{{ formatPrice(item.book.price * item.quantity) }}</td>
                <td>
                  <button class="btn btn-outline-danger btn-sm" @click="$emit('remove-from-cart', item.book.ISBN)">
                    <i class="fa-solid fa-trash"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="col-lg-4">
        <div class="card shadow-sm border-0">
          <div class="card-body">
            <h5 class="card-title fw-bold mb-3">ملخص الطلب</h5>
            <div class="d-flex justify-content-between mb-3 fs-5 fw-bold">
              <span>المبلغ الإجمالي:</span>
              <span class="text-success">{{ formatPrice(totalPrice) }}</span>
            </div>
            <button class="btn btn-success w-100 py-2 fw-bold" @click="checkout">تأكيد الشراء</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['cart'],
  emits: ['remove-from-cart', 'clear-cart'],
  data() {
    return { orderPlaced: false };
  },
  computed: {
    totalPrice() {
      return this.cart.reduce((sum, item) => sum + (item.book.price * item.quantity), 0);
    }
  },
  methods: {
    formatPrice(price) {
      return new Intl.NumberFormat("ar-SA", { style: "currency", currency: "SAR" }).format(price);
    },
    checkout() {
      this.orderPlaced = true;
      this.$emit('clear-cart');
    }
  }
}
</script>