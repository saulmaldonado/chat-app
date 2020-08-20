<template>
  <div class="frame">
    <div class="content">
      <Navigation :name="name" :status="status" />
      <Chat :messages="messages" />
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
// import images from './base64Images';

type SocketConnectionConfig = {
  hostname: string;
  sendMessageEvent: string;
};

type SocketSendMessagePayload = {
  message: string;
  id: string;
};

@Component({
  components: { Navigation, InputField, MessageBubble, Chat },
})
export default class ChatApp extends Vue {
  @Prop() private name!: string;
  @Prop() private status!: string;
  @Prop() private socket!: SocketConnectionConfig;

  mockIncrementingID = 1;

  io?: SocketIOClient.Socket;
  socketID?: string;

  mounted() {
    this.io = socketio(this.socket.hostname);

    this.io.on('connect', (socket: any) => {
      this.socketID = this.io!.id;
    });

    this.io.on(
      this.socket.sendMessageEvent,
      ({ message, id }: SocketSendMessagePayload) => {
        const direction =
          id === this.socketID ? 'outgoing' : 'incoming';
        this.addMessage(
          new Message(this.mockIncrementingID++, message, direction)
        );
      }
    );
  }

  sendMessage(message: string) {
    this.io!.emit(this.socket.sendMessageEvent, message);
  }

  addMessage(message: Message) {
    this.messages.push(message);
  }

  messages: Message[] = [];
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import './styles/ChatApp.scss';
</style>
