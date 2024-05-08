<template>
  <q-card class="q-pt-sm q-pb-sm">
    <q-card-section>
      <img :src="book.image" />
      <q-item-section>
        <q-item-label class="q-pt-sm q-pb-sm text-weight-bold">{{
          truncateString(book.title, 12)
        }}</q-item-label>
        <div class="q-pb-sm text-subtitle2 text-weight-bold text-red">
          {{ truncateString(book.author, 14) }}
        </div>
        <q-separator inset />
        <div class="q-pt-sm text-subtitle2">Цена: {{ book.price }}₽</div>
      </q-item-section>
      <q-card-actions vertical>
        <q-btn @click="addToCart" color="secondary" class="text-black">
          Купить
        </q-btn>
      </q-card-actions></q-card-section
    >
  </q-card>
</template>

<script setup>
import { truncateString } from "../helpers/truncate";
import { defineProps, onMounted } from "vue";
import { useCartStore } from "src/store/cart";
import { useQuasar } from "quasar";

const cartStore = useCartStore();
const { book } = defineProps({
  book: {
    type: Object,
    required: true,
  },
});

const $q = useQuasar();
const addToCart = () => {
  cartStore.addToCart(book);
  $q.notify({
    message: "Добавлено в корзину",
    color: "primary",
    position: "right",
    timeout: 100,
  });
};
</script>

<style>
.catalog-list__products {
  text-align: center;
  display: grid;
  grid-template-columns: repeat(4, 220px);
  grid-template-rows: repeat(2, 400px);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  margin-bottom: 170px;
}
</style>
