import { defineStore } from "pinia";

export const booksStore = defineStore("books", {
  state: () => ({
    books: [],
    cart: [],
  }),

  actions: {},
});
