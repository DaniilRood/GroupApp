import { defineStore } from "pinia";

export const useBooksStore = defineStore("books", {
  state: () => ({
    books: [],
  }),

  getters: {
    getBooks: (state) => state.books,
    getNewSixBooks: (state) =>
      state.books.filter((book) => book.new).slice(0, 6),
  },

  actions: {
    setBooks(books) {
      this.books.push(...books);
    },
  },
});
