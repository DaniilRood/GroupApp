<template>
  <q-page class="wrapper">
    <div class="box-home q-pt-xl q-mb-xl">
      <div class="format-text">
        <q-img src="../assets/image/header-question.svg" width="600px" />
        <p class="text-uppercase text-dark text-h6 text-center q-pt-md">
          Виртуальный помощник <span class="text-weight-bolder">Шук</span> рад
          помочь!
        </p>
        <p class="text-uppercase text-center q-pt-xs q-pb-md">
          <span class="text-weight-bolder">пройдите короткий опрос!</span> наш
          виртуальный помощник подберёт литературу на ваш вкус с учётом оценок
          других пользователей и новинок.
        </p>
        <q-btn
          to="/chat"
          class="text-black text-weight-bolder format-text"
          no-caps
          color="secondary"
          icon="help"
          label="Спросить Шука"
        />
      </div>
      <div>
        <q-img src="../assets/image/shook.png" width="400px" />
      </div>
    </div>

    <p class="text-h4 text-center text-dark text-weight-bolder">Новинки</p>

    <div class="cards-wrapper flex flex-center justify-between q-mb-xl">
      <!-- <q-card style="width: 150px" class="my-card" flat bordered>
        <img class="q-mb-md" src="../assets/image/book.png" />
        <q-item-section>
          <q-item-label class="text-weight-bolder q-mb-md text-center"
            >Название книги</q-item-label
          >
          <q-item-label class="text-red q-mb-md text-center"
            >Автор книги</q-item-label
          >
          <q-item-label class="text-red q-mb-md text-center">Цена</q-item-label>
        </q-item-section>
        <q-card-actions align="center">
          <q-btn xl color="accent" clickable>Купить</q-btn>
        </q-card-actions>
      </q-card> -->
      <CatalogItem :books="books.getNewSixBooks" />
    </div>

    <div class="col-6 q-mb-xl">
      <q-img class="" src="../assets/image/back-loyal.png">
        <div class="absolute-left bg-transparent banner-image">
          <p class="q-pl-xl q-mt-xl text-h3">Подключайся к лояльности!</p>
          <p class="q-pl-xl q-mb-xl text-h6">
            Получи постоянную скидку 20% на любимый жанр!
          </p>
          <q-btn
            class="q-ml-xl text-black bg-secondary text-weight-bolder"
            no-caps
          >
            Подключиться
          </q-btn>
        </div>
      </q-img>
    </div>
  </q-page>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import { useQuery } from "@vue/apollo-composable";
import { getBooks } from "../graphql/queries";
import { truncateString } from "../helpers/truncate";
import CatalogItem from "../components/CatalogItem.vue";
import { useBooksStore } from "src/store/books";
const books = useBooksStore();

// const { result, loading, error } = useQuery(getBooks);

// watch(loading, (value) => {
//   if (value) return;
//   books.setBooks(result.value?.books);
// });

defineOptions({
  name: "IndexPage",
});
</script>

<style>
.box-home {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.wrapper {
  margin: 0 auto;
  width: 1200px;
}
.format-text {
  width: 600px;
}
.cards-wrapper {
  text-align: center;
  display: grid;
  grid-template-columns: repeat(6, 185px);
  grid-template-rows: repeat(1, 400px);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  margin-bottom: 70px;
}
</style>
