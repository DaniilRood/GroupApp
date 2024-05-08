<template>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>
</template>

<script setup>
import { watch } from "vue";
import { useQuery } from "@vue/apollo-composable";
import { getBooks } from "src/graphql/queries";
import { useBooksStore } from "src/store/books";
const books = useBooksStore();
defineOptions({
  name: "App",
});
const { result, loading, error } = useQuery(getBooks);

watch(loading, (value) => {
  if (value) return;
  books.setBooks(result.value?.books.map((book) => ({ ...book, quantity: 1 })));
});
</script>
