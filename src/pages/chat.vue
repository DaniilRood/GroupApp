<template>
  <q-page class="flex column">
    <div class="q-pa-md column justify-end">
      <q-chat-message
        v-for="message in messages"
        :key="message.text"
        :name="message.from"
        :text="[message.text]"
        :sent="message.from == 'Клиент' ? true : false"
        bg-color="teal-12"
      />
    </div>

    <q-form @submit="sendMessage" @keyup.enter="sendMessage" class="full-width"
      ><q-input
        v-model="newMessage"
        bg-color="white"
        outlined
        rounded
        label="Message"
        dense
      >
        <template v-slot:after>
          <q-btn
            round
            dense
            flat
            color="deep-purple-12"
            type="submit"
            icon="send"
          />
        </template> </q-input
    ></q-form>
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
    };

    return {
      newMessage,
      messages,
      sendMessage,
    };
  },
};
</script>
