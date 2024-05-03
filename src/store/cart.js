import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    cart: [],
  }),

  getters: {},

  actions: {
    addToCart(book) {
      this.cart.push(book);
    },

    removeFromCart(id) {
      this.cart = this.cart.filter((item) => item.id !== id);
    },
  },
});
