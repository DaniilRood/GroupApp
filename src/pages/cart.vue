<template>
  <div class="cart">
    <nav class="cart__navbar">
      <h3 class="cart__navbar_heading q-mt-none text-dark text-weight-bold">
        Корзина
      </h3>
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
  margin: 100px auto 0;
  max-width: 1140px;
  width: 100%;
  letter-spacing: 2px;
  display: grid;
  grid-template-columns: 1140px;
  justify-content: center;
  &__navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    &_heading {
      letter-spacing: 2px;
      font-size: 36px;
    }
  }

  &__state {
    text-align: center;
  }
}
</style>
