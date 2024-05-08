<template>
  <q-page class="flex flex-center">
    <q-card style="width: 400px">
      <q-card-section>
        <div class="text-h6">Вход</div>
      </q-card-section>

      <q-form @submit="signin" class="q-gutter-md">
        <q-card-section>
          <q-input
            class="q-mb-md"
            filled
            v-model="email"
            label="Email"
            lazy-rules
          />
          <q-input
            filled
            v-model="password"
            label="Пароль"
            type="password"
            lazy-rules
          />
        </q-card-section>

        <q-card-actions align="right">
          <q-btn label="Вход" type="submit" color="primary" />
        </q-card-actions>
      </q-form>

      <q-card-actions align="center">
        <q-btn
          flat
          no-caps
          label="Вы еще не зарегистрированы? Скорее сделайте это"
          to="/signup"
        />
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import { useAuthStore } from "../store/auth.js";
import { useRouter } from "vue-router";

const authStore = useAuthStore();
const router = useRouter();

const email = ref();
const password = ref();

const signin = async () => {
  await authStore.auth(
    {
      email: email.value,
      password: password.value,
    },
    "signin"
  );
  router.push("/personal");
};
</script>
