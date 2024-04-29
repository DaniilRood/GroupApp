<template>
  <div class="flex flex-center fullscreen ">
    <div>
      
      <div class="text-h3 no-page-text">
        Страница не найдена!
      </div>
      
      <div class="box">
          <q-img class="img-four" src="../assets/image/4.png" alt="404" />
          <q-img class="img-clock" src="../assets/image/picture404.png" alt="404" />
          <q-img class="img-four" src="../assets/image/4.png" alt="404" />
      </div>

      
      <div class="flex flex-center">
        <q-btn
        class="q-mt-xl"
        color="secondary"
        text-color="black"
        size="xl"
        to="/"
        label="На главную"
        no-caps
        />
      </div>
      
    </div>
  </div>
</template>

<script setup>
defineOptions({
  name: 'ErrorNotFound'
});
</script>

<style>

  .text-color {
    color: #17496A;
  }
  .img-clock {
    width: 60%;
  }
  .img-four {
    width: 20%;
  }
  .box {
    max-width: 1600px;
    margin: 0 auto;
  }
  
  .no-page-text {
    color: #17496A;
  }
  

</style>
