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
import { useStore } from '../stores/user'

const store = useStore();

const isLogin = ref(true);
const name = ref("");
const surname = ref("");
const email = ref("");
const password = ref("");
const $q = useQuasar();
const router = useRouter();

const register = async () => {
try {
    const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
    const user = userCredential.user;
    await user.updateProfile({
        displayName: `${name.value} ${surname.value}`,
    });
    store.setUser({
        name: name.value,
        surname: surname.value,
        email: email.value,
        id: user.uid,
    });
    router.push('/');
    } catch (error) {
    console.error('Ошибка регистрации: ', error);
    }
};

const login = async () => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email.value, password.value);
        const user = userCredential.user;
    store.setUser({
        name: user.displayName.split(' ')[0],
        surname: user.displayName.split(' ')[1],
        email: user.email,
        id: user.uid,
    });
    router.push('/personal');
    } catch (error) {
    console.error('Ошибка входа: ', error);
    }
};
</script>
