<template>
  <q-page class="chat-wrapper column">
    <q-scroll-area class="chat q-pa-md column">
      <q-chat-message
        v-for="message in messages"
        :key="message.text"
        :name="message.from"
        :text="[message.text]"
        :sent="message.from == 'Клиент' ? true : false"
        bg-color="teal-12"
      />
    </q-scroll-area>
    <q-toolbar class="input-wrapper"
      ><q-form
        @submit="sendMessage"
        @keyup.enter="sendMessage"
        class="full-width"
        ><q-input
          v-model="newMessage"
          bg-color="white"
          outlined
          rounded
          placeholder="Введите сообщение"
          dense
        >
          <template v-slot:after>
            <q-btn
              @click="sendMessage"
              round
              dense
              flat
              color="deep-purple-12"
              type="submit"
              icon="send"
            />
          </template> </q-input
      ></q-form>
    </q-toolbar>
  </q-page>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const newMessage = ref("");
    const messages = ref([
      {
        text: "Есть один вопрос!",
        from: "Клиент",
      },
      {
        text: "Отвечу на любой вопрос!",
        from: "Шук Ассистент",
      },
      {
        text: "Вот такой вопрос!",
        from: "Клиент",
      },
    ]);

    const sendMessage = () => {
      newMessage.value = newMessage.value.trim();
      if (newMessage.value.length === 0) {
        return;
      }

      messages.value.push({
        text: newMessage.value,
        from: "Клиент",
      });
      newMessage.value = "";
      newMessage.focus();
    };

    return {
      newMessage,
      messages,
      sendMessage,
    };
  },
};
</script>

<style>
.chat-wrapper {
  justify-content: space-between;
  max-width: 754px;
  margin: 0 auto;
}
.chat {
  height: 50vh;
}
.input-wrapper {
  max-width: 754px;
  height: 60px;
  background-color: #f0f0f0;
  border-radius: 10px;
}
</style>
