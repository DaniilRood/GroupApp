<template>
  <q-layout view="lHh Lpr fff">
    <q-header class="bg-primary" reveal height-hint="60">
      <q-toolbar class="text-grey-6">
        <div class="q-pr-lg q-pt-md">
          <img class="" src="../assets/image/logo-homepage.svg" />
        </div>

        <q-space />

        <div class="row no-wrap">
          <q-input
            dense
            outlined
            flat
            placeholder="Поиск"
            class="bg-white col"
          />
          <q-btn
            class=""
            color="grey-3"
            text-color="grey-8"
            icon="search"
            unelevated
          />
        </div>

        <q-space />

        <div class="q-pl-md q-gutter-sm row no-wrap items-center">
          <q-btn to="/" round dense flat color="white">Главная</q-btn>

          <q-btn to="/about" round dense flat color="white" size="14px">
            О нас
          </q-btn>

          <q-btn to="/catalog" round dense flat color="white">Каталог</q-btn>

          <q-btn to="/cart" round dense flat color="white" icon="shopping_cart">
            <q-badge color="red" text-color="white" floating> 2 </q-badge>
            <q-tooltip>Корзина</q-tooltip>
          </q-btn>

          <q-btn to="/personal" round flat icon="perm_identity" color="white">
            <q-tooltip>Личный кабинет</q-tooltip>
          </q-btn>

          <q-btn color="secondary" class="text-black"> Выйти </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-footer bordered class="bg-primary">
      <div class="q-pr-lg footer-nav">
        <div class="q-pa-xl">
          <img class="" src="../assets/image/logo-homepage.svg" />
        </div>
        <div class="footer-nav q-pa-xl">
          <div class="q-pa-md">
            <p class="text-white footer-text text-h6 q-ml-md">Страницы</p>
            <q-btn to="/personal" class="text-white footer-text block" flat
              >Личынй кабинет</q-btn
            >
            <q-btn
              to="/catalog"
              class="text-white footer-text block"
              align="left"
              flat
              >Каталог</q-btn
            >
          </div>
          <div class="q-pa-md">
            <p class="text-white footer-text text-h6">Контакты</p>
            <p class="text-white footer-text">+7 (495) 987 65 43</p>
            <p class="text-white footer-text">welcome@shook.ru</p>
          </div>
        </div>
      </div>
      <div class="text-white footer-rights">&#169;Все права защищены</div>
    </q-footer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";

defineOptions({
  name: "MainLayout",
});

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>

<style>
.footer-nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.footer-text {
  text-transform: uppercase;
  opacity: 0.7;
  letter-spacing: 2px;
}
.footer-rights {
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.7;
  letter-spacing: 2px;
}
</style>
