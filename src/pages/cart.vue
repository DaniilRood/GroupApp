<template>
  <div class="cart">
    <nav class="cart__navbar">
      <h2 class="cart__navbar_heading">Корзина</h2>
      <q-btn
        to="/catalog"
        exact
        clickable
        flat
        color="primary"
        label="Назад в каталог"
      />
    </nav>
    <p class="cart__state">В корзине ничего нет</p>
  </div>
</template>

<script></script>

<style lang="scss">
.cart {
  margin-top: 100px;
  margin-left: auto;
  margin-right: auto;
  max-width: 1140px;
  letter-spacing: 2px;
  padding-top: 20px;
  display: grid;
  grid-template-columns: 1140px;
  justify-content: center;
  // background-color: white;
  // filter: drop-shadow(0.15rem 0.15rem 0.4rem rgba(0, 0, 0, 0.1));
  &__navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    &_heading {
      letter-spacing: 2px;
      font-size: 36px;
      color: #1a5b79;
      font-weight: bold;
    }
  }

  &__state {
    text-align: center;
  }
}
</style>
