<template>
  <div class="frame">
    <div class="content">
      <Navigation :name="name" :status="status" :profileImage="profileImage" />
      <Chat :messages="messages" ref="chatWindow" />
      <InputField :sendMessage="sendMessage" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import socketio from 'socket.io-client';

import Navigation from './Navigation.vue';
import InputField from './InputField.vue';
import MessageBubble, { Message } from './MessageBubble.vue';
import Chat from './Chat.vue';

type SocketConnectionConfig = {
  hostname: string;
  sendMessageEvent: string;
};

type SocketSendMessagePayload = {
  message: string | ArrayBuffer;
  id: string;
  price?: number | null;
};

@Component({
  components: { Navigation, InputField, MessageBubble, Chat },
})
export default class ChatApp extends Vue {
  @Prop() private name!: string;
  @Prop() private status!: string;
  @Prop() private socket!: SocketConnectionConfig;
  @Prop() private profileImage!: string;

  $refs!: {
    chatWindow: Chat;
  };

  mockIncrementingID = 1;

  io?: SocketIOClient.Socket;
  socketID?: string;

  ArrayBufferToURL(message: ArrayBuffer): string {
    const uint = new Uint8Array(message);
    const blob = new Blob([uint], { type: 'image/jpeg' });
    const urlCreator = URL;
    return urlCreator.createObjectURL(blob);
  }

  mounted() {
    this.io = socketio(this.socket.hostname, {
      path: '/chat-server',
    });

    this.io.on('connect', () => {
      this.socketID = this.io!.id;
    });

    this.io.on(
      this.socket.sendMessageEvent,
      ({ message, id, price }: SocketSendMessagePayload) => {
        const direction =
          id === this.socketID ? 'outgoing' : 'incoming';
        if (typeof message === 'string') {
          this.addMessage(
            new Message(
              this.mockIncrementingID++,
              message,
              direction,
              price
            )
          );
        } else {
          const imageURL = this.ArrayBufferToURL(message);
          this.addMessage(
            new Message(
              this.mockIncrementingID++,
              [imageURL],
              direction
            )
          );
        }
      }
    );
  }

  sendMessage(message: string | ArrayBuffer, price?: number | null) {
    this.io!.emit(this.socket.sendMessageEvent, message, price);
  }

  async addMessage(message: Message) {
    if (Array.isArray(message.text)) {
      const lastItem: Message | undefined = this.messages[
        this.messages.length - 1
      ];

      if (
        lastItem &&
        Array.isArray(lastItem.text) &&
        lastItem.direction === message.direction
      ) {
        return lastItem.text.push(...message.text);
      }
    }
    this.messages.push(message);

    // wait until DOM updates with newest message bubble to scroll down
    await this.$nextTick();
    this.$refs.chatWindow.scrollDown();
  }

  messages: Message[] = [];
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import './styles/ChatApp.scss';
</style>
