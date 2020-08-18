<template>
  <div class="frame">
    <div class="content">
      <Navigation :name="name" :status="status" />
      <Chat :messages="messages" />
      <InputField :addMessage="addMessage" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Navigation from './Navigation.vue';
import InputField from './InputField.vue';
import MessageBubble, { Message } from './MessageBubble.vue';
import Chat from './Chat.vue';
import images from './base64Images';

@Component({
  components: { Navigation, InputField, MessageBubble, Chat },
})
export default class ChatApp extends Vue {
  @Prop() private name!: string;
  @Prop() private status!: string;

  addMessage(message: Message) {
    this.messages.push(message);
  }

  messages = [
    new Message(1, "That sounds great. I'd be happy with that.", 'incoming'),
    new Message(
      2,
      'Could you send over some pictures of your dog, please?',
      'incoming'
    ),
    new Message(9, [images.image1, images.image2, images.image3], 'outgoing'),
    new Message(4, "Here are a few pictures. She's a happy girl!", 'outgoing'),
    new Message(5, 'Can you make it?', 'outgoing'),
    new Message(
      6,
      'She looks so happy! The time we discussed works. How long shall I take her out for?',
      'incoming'
    ),
    new Message(8, '30 minute walk', 'incoming', 29),
    new Message(10, '1 hour walk', 'incoming', 49),
  ];
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import './styles/ChatApp.scss';
</style>
