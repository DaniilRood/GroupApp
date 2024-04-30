<template>
  <q-page style="margin: 0 auto; width: 1200px;" >
    <div class="box-home q-pt-xl q-mb-xl">
      <div style="width: 600px">
        <q-img src="../assets/image/header-question.svg" width="600px"/>
        <p class="text-uppercase text-dark text-h6 text-center">Виртуальный помощник <span class="text-weight-bolder">Шук</span> рад помочь!</p>
        <p class="text-uppercase text-center"><span class="text-weight-bolder">пройдите короткий опрос!</span> наш виртуальный помощник подберёт литературу на ваш вкус с учётом оценок других пользователей и новинок.</p>
        <q-btn to="/chat" class="text-black text-weight-bolder" no-caps style="width: 600px" color="secondary" icon="help" label="Спросить Шука" />
      </div>
      <div>
        <q-img src="../assets/image/shook.png" width="400px" />
      </div>
    </div> 
    
    
    <p class="text-h4 text-center text-dark text-weight-bolder">Новинки</p>

    <div class="flex flex-center justify-between q-mb-xl">
      <q-card style="width: 150px;" class="my-card" flat bordered>
        <img  class="q-mb-md" src="../assets/image/book.png">
          <q-item-section>
            <q-item-label class="text-weight-bolder q-mb-md text-center">Название книги</q-item-label>
            <q-item-label class="text-red q-mb-md text-center">Автор книги</q-item-label>
            <q-item-label class="text-red q-mb-md text-center">Цена</q-item-label>
          </q-item-section>
        <q-card-actions align="center">
          <q-btn xl color="accent" clickable>Купить</q-btn>
        </q-card-actions>
    </q-card>
    </div>
    
    <div class="col-6 q-mb-xl ">
        <q-img class="" src="../assets/image/back-loyal.png">
          <div class="absolute-left bg-transparent banner-image">
            <p class="q-pl-xl q-mt-xl text-h3">Подключайся к лояльности!</p>
            <p class="q-pl-xl q-mb-xl text-h6">Получи постоянную скидку 20% на любимый жанр!</p>
            <q-btn class=" q-ml-xl text-black bg-secondary text-weight-bolder" no-caps>
              Подключиться
            </q-btn>
          </div>
        </q-img>
      </div>
    <p class="text-h4 text-center text-dark text-weight-bolder">О нас</p>
      <div class="flex flex-center q-mb-xl">
        <p class="" style="width: 800px;">
        Мы — бесплатный сервис по поиску книг.
        После короткого опроса наш виртуальный помощник подберёт литературу на ваш вкус с учётом оценок других пользователей и новинок. Потратьте своё время с удовольствием от чтения. 
      </p>
      <p style="width: 800px;">
        На наших полках книги всех значимых издательств: «Эксмо», «АСТ», «Манн, Иванов и Фербер», «Азбука», «Альпина», «Синдбад» и другие. А среди издательских брендов, которые представлены в Shook, есть: «БОМБОРА», «Corpus», «Mainstream», «Редакция Елены Шубиной», «Вилли-Винки», «Fanzon», «Комильфо» и «Канц-Эксмо».
      </p>
      </div>
  </q-page>
</template>

<script setup>
defineOptions({
  name: 'IndexPage'
});
</script>

<style>
  .box-home {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
</style>
