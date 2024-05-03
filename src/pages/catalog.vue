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
        />
      </nav>
      <div class="catalog-list__products q-gutter-md">
        <CatalogItem :books="books.getBooks" />
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
      <!-- <q-tabs v-model="tab" indicator-color="primary" align="justify">
        <q-tab to="/catalog" name="all" label="Все" />
        <q-tab to="/" name="new" label="Новинки" />
      </q-tabs> -->
      <q-list class="checkbox-filter">
        <p class="q-ml-md">Авторы</p>
        <q-checkbox v-model="selectedFilter.author" label="Автор" size="40px" />
        <p class="q-ml-md">Жанры</p>
        <q-checkbox v-model="selectedFilter.genre" label="Жанр" size="40px" />
        <pre>{{ selectedFilter }}</pre>
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
const books = useBooksStore();

const selectedFilter = ref({
  author: false,
  genre: false,
});
const sortBooks = ref("priceLowToHigh");
const sortOptions = [
  { label: "Сначала дешёвые", value: "priceLowToHigh" },
  { label: "Сначала дорогие", value: "priceHighToLow" },
  { label: "Сначала новинки", value: "newest" },
  { label: "По популярности", value: "popularity" },
];
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
