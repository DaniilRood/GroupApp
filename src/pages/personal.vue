<template>
  <q-page class="wrapper">
    <div class="flex flex">
      <p class="text-h4 text-weight-bold text-dark q-mt-xl q-mb-xl q-mr-xl">Личный кабинет</p>
      <p class="text-h4 text-weight-bold text-dark q-mt-xl q-mb-xl q-ml-xl">Мои заказы</p>
    </div>
      <div class="flex">
        <div class="shadow-4 q-pa-md q-mr-xl rounded-borders box-personal">
        <q-avatar size="100px" font-size="52px" color="teal" text-color="white" class="q-mb-">
          <img src="https://cdn.quasar.dev/img/avatar.png">
        </q-avatar>  
<<<<<<< HEAD
        <p class="text-h6 text-bold text-dark">{{ name }} {{ surname }}</p>
        <p class="text-h6 text-bold text-dark">{{ email }}</p>
=======
        <p class="text-h6 text-bold text-dark">{{ userInfo.firstName }} {{ userInfo.lastName }}</p>
        <p class="text-h6 text-bold text-dark">{{ userInfo.email }}</p>
>>>>>>> aea9875 (update auth)
      </div>

      <div class="shadow-4 q-pa-md q-ml-xl box-order rounded-borders">
          <div class="flex justify-between">
            <p class="text-h6 text-bold">Номер</p>
            <p class="text-h6 text-bold">Заказ</p>
            <p class="text-h6 text-bold">Дата</p>
            <p class="text-h6 text-bold">Сумма</p> 
          </div>
      </div>
    </div>
    
  </q-page>
</template>

<script setup>
  import { ref } from 'vue'
  import {useAuthStore} from '../store/auth.js';
  import { computed } from 'vue';

  const authStore = useAuthStore()

  const userInfo = computed(() => {
    return authStore.userInfo
  })
</script>

<style>
  .box-order {
    width: 600px;
  }
  .wrapper {
    margin: 0 auto; 
    width: 1000px;
  }
  .box-personal {
    width: 300px;
  }  
</style>
