import { defineStore } from "pinia";

export const booksStore = defineStore("books", {
  state: () => ({
    books: [],
    cart: [],
  }),

  // actions: {
  //   addToCart(book) {
  //     this.cart.push(book);
  //   },

  //   removeFromCart(id) {
  //     this.cart = this.cart.filter((item) => item.id !== id);
  //   },
  // },
});
