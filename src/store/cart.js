import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    cart: [],
  }),

  getters: {
    getCart: (state) => state.cart,
  },

  actions: {
    addToCart(book) {
      if (this.cart.includes(book)) {
        book.quantity++;
      } else {
        // book.quantity = 0;
        this.cart.push(book);
      }
    },

    removeFromCart(book) {
      book.quantity = 1;
      this.cart.splice(this.cart.indexOf(book), 1);
    },
    incrementQuantity(book) {
      book.quantity++;
    },
    decrementQuantity(book) {
      book.quantity--;
      if (book.quantity === 0) {
        this.removeFromCart(book);
      }
    },
  },
});
