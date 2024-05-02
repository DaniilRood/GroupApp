<template>
  <div>
    <div v-if="loggedIn">
      <button @click="logout">LogOut</button>
      <h1 style="color: purple">Hello from there</h1>
      <h2>name: {{ user.name }}</h2>
      <h2>email: {{ user.email }}</h2>
      <img :src="user.picture" />
    </div>
    <div v-else>
      <GoogleLogin :callback="callback" prompt auto-login />
    </div>
  </div>
</template>

<script>
import { decodeCredential, googleLogout } from "vue3-google-login";
export default {
  data() {
    return {
      loggedIn: false,
      user: null,

      callback: (response) => {
        this.loggedIn = true;
        this.user = decodeCredential(response.credential);
      },
    };
  },
  methods: {
    logout() {
      googleLogout();
      this.loggedIn = false;
    },
  },
};
</script>
