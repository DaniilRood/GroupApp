<template>
  <q-page class="catalog-wrapper column">
    <nav class="catalog__navbar" style="max-width: 200px">
      <q-tabs v-model="tab" indicator-color="primary" align="justify">
        <q-tab to="/catalog" name="all" label="Все" />
        <q-tab to="/" name="new" label="Новинки" />
      </q-tabs>
      <q-select
        class="catalog-select"
        v-model="selectedSort"
        :options="sortOptions"
        emit-value
        map-options
        @input="sortProducts"
        borderless
      />
    </nav>
  </q-page>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const selectedSort = ref("priceLowToHigh");
    const sortOptions = [
      { label: "Сначала дешёвые", value: "priceLowToHigh" },
      { label: "Сначала дорогие", value: "priceHighToLow" },
      { label: "Сначала новинки", value: "newest" },
      { label: "По популярности", value: "popularity" },
    ];

    return {
      selectedSort,
      sortOptions,
    };
  },
};
</script>

<style>
.catalog-wrapper {
  margin: 0 auto;
  max-width: 1127px;
  letter-spacing: 2px;
  padding-top: 20px;
}
.catalog__navbar {
  display: flex;
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
  /* max-height: 40px; */
}
</style>
