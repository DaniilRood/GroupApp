<template>
  <q-page class="catalog-wrapper">
    <div class="catalog-list">
      <nav class="catalog__navbar">
        <q-select
          class="catalog-select"
          v-model="sortBooks"
          :options="sortOptions"
          emit-value
          map-options
          borderless
          @update:model-value="getSortedBooks"
        />
      </nav>
      <div class="catalog-list__products q-gutter-md">
        <h2 v-if="loading">Loading...</h2>
        <CatalogItem v-else :books="sortedBooks ?? books.getBooks" />
      </div>
      <!-- <q-pagination
        class="q-pb-xl"
        :max="3"
        direction-links
        outline
        color="black"
        active-design="unelevated"
        active-color="secondary"
        active-text-color="black"
      /> -->
    </div>
    <div class="catalog-options">
      <h3 class="catalog-heading q-mt-none text-dark text-weight-bold">
        Каталог
      </h3>
      <q-list class="checkbox-filter">
        <p class="q-ml-md">Жанры</p>
        <q-checkbox
          v-model="selectedFilter"
          label="Айти"
          size="40px"
          val="Айти"
          @update:model-value="getFilteredBooks"
        />
        <q-checkbox
          v-model="selectedFilter"
          label="Дизайн"
          size="40px"
          val="Дизайн"
          @update:model-value="getFilteredBooks"
        />
        <q-checkbox
          v-model="selectedFilter"
          label="Комикс"
          size="40px"
          val="Комикс"
          @update:model-value="getFilteredBooks"
        />
        <q-checkbox
          v-model="selectedFilter"
          label="Проза"
          size="40px"
          val="Проза"
          @update:model-value="getFilteredBooks"
        />
        <q-checkbox
          v-model="selectedFilter"
          label="Фэнтези"
          size="40px"
          val="Фэнтези"
          @update:model-value="getFilteredBooks"
        />
        <!-- <pre>{{ selectedFilter }}</pre> -->
      </q-list>
    </div>
  </q-page>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import { useRouter } from "vue-router";
import { truncateString } from "../helpers/truncate";
import CatalogItem from "../components/CatalogItem.vue";
import { useBooksStore } from "src/store/books";
import { useQuery, provideApolloClient } from "@vue/apollo-composable";
import {
  getBooksByAscPrice,
  getBooksByDescPrice,
  getBooksNew,
  getBooksByGenre,
} from "src/graphql/queries";
import apolloClient from "src/apollo/apollo-client";

provideApolloClient(apolloClient);

const books = useBooksStore();
const sortedBooks = ref(null);
const loading = ref(null);

const selectedFilter = ref([]);

const getFilteredBooks = (filtersArray) => {
  if (filtersArray.length > 0) {
    const { result, loading } = useQuery(getBooksByGenre(filtersArray));
    loading.value = loading;
    sortedBooks.value = result.value ? result.value.books : [];

    watch(result, (newValue) => {
      if (newValue) {
        sortedBooks.value = newValue.books;
      }
    });
  } else sortedBooks.value = null;
};

const sortBooks = ref("priceLowToHigh");
const sortOptions = [
  { label: "Сначала дешёвые", value: "priceLowToHigh" },
  { label: "Сначала дорогие", value: "priceHighToLow" },
  { label: "Сначала новинки", value: "newest" },
];
let sortedQuery = null;
const getSortedBooks = (value) => {
  if (value === "priceLowToHigh") {
    sortedQuery = getBooksByAscPrice;
  }
  if (value === "priceHighToLow") {
    sortedQuery = getBooksByDescPrice;
  }
  if (value === "newest") {
    sortedQuery = getBooksNew;
  }
  const { result, loading } = useQuery(sortedQuery);
  loading.value = loading;
  sortedBooks.value = result.value ? result.value.books : [];

  watch(result, (newValue) => {
    if (newValue) {
      sortedBooks.value = newValue.books;
    }
  });
};
</script>

<style>
.catalog-wrapper {
  margin: 100px auto 0;
  max-width: 1140px;
  width: 100%;
  letter-spacing: 2px;
  display: flex;
  column-gap: 32px;
}
.catalog__navbar {
  display: flex;
  justify-content: end;
}
.catalog-heading {
  letter-spacing: 2px;
  font-size: 36px;
}
.q-ripple {
  display: none !important;
}
.catalog-select {
  border: 2px solid;
  border-color: #212122;
  border-radius: 10px;
  padding: 0 20px;
  min-width: 270px;
}
.checkbox-filter {
  display: flex;
  flex-direction: column;
}
.catalog-list {
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  order: 1;
  row-gap: 32px;
  flex-grow: 1;
}
.catalog-options {
  flex-basis: 240px;
}
</style>
