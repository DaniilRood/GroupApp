<template>
  <q-card class="q-pt-sm q-pb-sm">
    <q-card-section class="cart-item row">
      <img class="cart-item__image" :src="book.image" />
      <q-item-section>
        <q-item-label
          class="cart-item__title q-pt-sm q-pb-sm text-weight-bold"
          >{{ book.title }}</q-item-label
        >
        <div
          class="cart-item__subtitle q-pb-sm text-subtitle2 text-weight-bold text-red"
        >
          {{ book.author }}
        </div>
      </q-item-section>
      <q-card-actions>
        <q-btn @click="decrementQuantity" color="secondary" class="text-black">
          -
        </q-btn>
      </q-card-actions>
      <div>{{ book.quantity }}</div>
      <q-card-actions>
        <q-btn @click="incrementQuantity" color="secondary" class="text-black">
          +
        </q-btn>
      </q-card-actions>
      <div class="cart-item__price q-pt-sm text-subtitle2">
        Цена: {{ book.price * book.quantity }}₽
      </div>
      <q-card-actions>
        <q-btn @click="removeFromCart" class="text-black">
          <q-icon name="delete" size="24px" />
        </q-btn>
      </q-card-actions>
    </q-card-section>
  </q-card>
</template>

<script setup>
import { useCartStore } from "src/store/cart";
const cartStore = useCartStore();
const { book } = defineProps({
  book: {
    type: Object,
    required: true,
  },
});

const removeFromCart = () => {
  cartStore.removeFromCart(book);
};

const decrementQuantity = () => {
  cartStore.decrementQuantity(book);
};

const incrementQuantity = () => {
  cartStore.incrementQuantity(book);
};

// import { defineProps, onMounted } from "vue";

// const { books } = defineProps({
//   books: {
//     type: Array,
//     required: true,
//   },
// });
</script>

<style lang="scss">
.cart-item {
  gap: 35px;
  align-items: center;

  &__image {
    width: 116px;
    height: 178px;
    object-fit: cover;
  }
  &__title {
    letter-spacing: 2px;
    font-size: 30px;
  }
  &__subtitle {
    letter-spacing: 2px;
    font-size: 24px;
    font-weight: 500;
  }
}
</style>
