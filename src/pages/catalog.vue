<template>
  <q-page class="catalog-wrapper">
    <div class="catalog-list">
      <nav class="catalog__navbar">
        <q-select
          class="catalog-select"
          v-model="selectedSort"
          :options="sortOptions"
          emit-value
          map-options
          borderless
        />
      </nav>
      <h2 v-if="loading">Loading...</h2>
      <div v-else class="catalog-list__products q-gutter-md">
        <q-card v-for="book in books" :key="book.id" class="q-pt-sm q-pb-sm">
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
              <q-btn color="secondary" class="text-black"> Купить </q-btn>
            </q-card-actions></q-card-section
          >
        </q-card>
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
      <h3 class="q-mt-none">Каталог</h3>
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
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { truncateString } from "../helpers/truncate";

const books = ref([]);

const { result, loading, error } = useQuery(gql`
  query BooksCatalog {
    books {
      id
      image
      title
      author
      price
      genre
    }
  }
`);

watch(loading, (value) => {
  if (value) return;
  books.value = result.value?.books;
});

const selectedFilter = ref({
  author: false,
  genre: false,
});
const selectedSort = ref("priceLowToHigh");
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
