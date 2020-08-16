<template>
  <div class="frame">
    <div class="content">
      <Navigation :name="name" :status="status" />
      <Chat :messages="messages" />
      <InputField />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Navigation from './Navigation.vue';
import InputField from './InputField.vue';
import MessageBubble, { Message } from './MessageBubble.vue';
import Chat from './Chat.vue';

@Component({
  components: { Navigation, InputField, MessageBubble, Chat },
})
export default class ChatApp extends Vue {
  @Prop() private name!: string;
  @Prop() private status!: string;

  messages = [
    new Message(1, "That sounds great. I'd be happy with that.", 'incoming'),
    new Message(
      2,
      'Could you send over some pictures of your dog, please?',
      'incoming'
    ),
    new Message(3, '', 'outgoing'),
    new Message(4, "That sounds great. I'd be happy with that. ", 'outgoing'),
    new Message(5, "That sounds great. I'd be happy with that.", 'outgoing'),
    new Message(6, "That sounds great. I'd be happy with that.", 'incoming'),
    new Message(7, "That sounds great. I'd be happy with that.", 'incoming'),
    new Message(8, "That sounds great. I'd be happy with that.", 'incoming'),
  ];
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import './styles/ChatApp.scss';
</style>
