import { defineStore } from 'pinia';

export const useStore = defineStore({
  id: 'user',
  state: () => ({
    name: '',
    surname: '',
    email: '',
    id: '',
  }),
  actions: {
    setUser(user) {
      this.name = user.name;
      this.surname = user.surname;
      this.email = user.email;
      this.id = user.id;
    },
    clearUser() {
      this.name = '';
      this.surname = '';
      this.email = '';
      this.id = '';
    },
  },
});
