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
    </div>

    <p v-if="cartStore.getCart.length === 0" class="cart__state">
      В корзине ничего нет
    </p>
    <q-separator
      class="q-mb-xs q-mt-xl q-pa-xs"
      v-if="cartStore.getCart.length !== 0"
      color="primary"
    />
    <q-form
      v-if="cartStore.getCart.length !== 0"
      class="cart-form column q-pa-md q-mt-xl q-mb-xl shadow-2"
      action="http://localhost:8080/"
      method="GET"
    >
      <h4 class="q-ma-none text-dark text-weight-bold">Оформление заказа:</h4>
      <q-input
        v-model="formName"
        name="cart-form__name"
        type="text"
        outlined
        placeholder="Введите Имя"
      />
      <q-input
        class="q-pt-md"
        v-model="formPhone"
        type="number"
        outlined
        name="cart-form__phone"
        placeholder="Введите телефон"
        :rules="[requiredRule]"
      />
      <q-input
        v-model="formEmail"
        type="email"
        outlined
        name="cart-form__email"
        placeholder="Введите email"
      />

      <div class="cart-form__order">
        <p
          v-if="cartStore.getCart.length !== 0"
          class="cart-form__total q-mt-md text-dark text-weight-bold"
        >
          Итоговая сумма: {{ totalPrice }}₽
        </p>
        <q-btn
          class="text-black"
          label="Оформить заказ"
          type="submit"
          color="secondary"
        />
      </div>
    </q-form>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import CartItem from "../components/CartItem.vue";
import { useCartStore } from "src/store/cart";

const cartStore = useCartStore();

const formName = ref("");
const formPhone = ref("");
const formEmail = ref("");

const requiredRule = (val) => (val && val.length > 0) || "Заполните это поле";

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

  .cart-form {
    gap: 20px;
  }

  .cart-form__total {
    font-size: 24px;
    text-align: end;
  }

  .cart-form__order {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }
}
</style>
