<template>
  <div class="cart">
    <nav class="cart__navbar">
      <h3 class="cart__navbar_heading q-mt-none text-dark text-weight-bold">
        Корзина
      </h3>
      <q-btn
        to="/catalog"
        exact
        clickable
        flat
        color="primary"
        label="Назад в каталог"
      />
    </nav>

    <div class="cart-list__products q-gutter-md">
      <CartItem v-for="book in cartStore.getCart" :key="book.id" :book="book" />
      <!-- {{ cartStore.cart }} -->
    </div>

    <p v-if="cartStore.getCart.length === 0" class="cart__state">
      В корзине ничего нет
    </p>

    <h3
      v-if="cartStore.getCart.length !== 0"
      class="cart__navbar_heading q-mt-none text-dark text-weight-bold"
    >
      Итоговая сумма: {{ totalPrice }}₽
    </h3>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import CartItem from "../components/CartItem.vue";
import { useCartStore } from "src/store/cart";

const cartStore = useCartStore();

const totalPrice = ref(
  cartStore.getCart.reduce((accumulator, book) => {
    return accumulator + book.price * book.quantity;
  }, 0)
);

watch(
  cartStore.getCart,
  () => {
    totalPrice.value = cartStore.getCart.reduce((accumulator, book) => {
      return accumulator + book.price * book.quantity;
    }, 0);
  },
  { deep: true }
);
</script>

<style lang="scss">
.cart {
  margin: 100px auto 0;
  max-width: 1140px;
  width: 100%;
  letter-spacing: 2px;
  display: grid;
  grid-template-columns: 1140px;
  justify-content: center;
  &__navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    &_heading {
      letter-spacing: 2px;
      font-size: 36px;
    }
  }

  &__state {
    text-align: center;
  }
}
</style>
