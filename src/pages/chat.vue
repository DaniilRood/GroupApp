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
export default {
  data() {
    return {
      newMessage: "",
      messages: [
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
      ],
    };
  },
  methods: {
    sendMessage() {
      this.newMessage = this.newMessage.trim();
      if (this.newMessage.length === 0) {
        return;
      }

      this.messages.push({
        text: this.newMessage,
        from: "Клиент",
      });
      this.newMessage = "";
    },
  },
};
</script>
