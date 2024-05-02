<template>
  <q-page class="flex flex-center">
    <q-card style="width: 400px">
      <q-card-section>
        <div class="text-h6">{{ isLogin ? "Вход" : "Регистрация" }}</div>
      </q-card-section>

      <q-form @submit.prevent="isLogin ? login() : register()" class="q-mb-xl">
        <q-card-section v-if="!isLogin">
          <q-input
            filled
            v-model="name"
            label="Имя"
            lazy-rules
            class="q-mb-md"
          />
          <q-input
            filled
            v-model="surname"
            label="Фамилия"
            lazy-rules
            class="q-mb-md"
          />
        </q-card-section>

        <q-card-section>
          <q-input
            filled
            v-model="email"
            label="E-mail"
            lazy-rules
            class="q-mb-md"
          />
          <q-input
            filled
            v-model="password"
            label="Пароль"
            type="password"
            lazy-rules
            class="q-mb-md"
          />
        </q-card-section>

        <q-card-actions align="center">
          <q-btn
            :label="isLogin ? 'Войти' : 'Зарегистрироваться'"
            type="submit"
            color="primary"
          />
        </q-card-actions>
      </q-form>

      <q-card-actions align="center">
        <q-btn flat no-caps @click="isLogin = !isLogin">
          {{
            isLogin
              ? "Нет аккаунта? Зарегистрироваться"
              : "Уже есть аккаунт? Войти"
          }}
        </q-btn>
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useQuasar } from "quasar";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const isLogin = ref(true);
const name = ref("");
const surname = ref("");
const email = ref("");
const password = ref("");
const $q = useQuasar();
const router = useRouter();

const register = async () => {
  try {
    await createUserWithEmailAndPassword(auth, email.value, password.value);
    localStorage.setItem("name", name.value);
    localStorage.setItem("surname", surname.value);
    router.push("/");
  } catch (error) {
    console.error("Ошибка регистрации: ", error);
  }
};

const login = async () => {
  try {
    await signInWithEmailAndPassword(auth, email.value, password.value);
    localStorage.setItem("name", name.value);
    localStorage.setItem("surname", surname.value);
    router.push("/");
  } catch (error) {
    console.error("Ошибка входа: ", error);
  }
};
</script>
