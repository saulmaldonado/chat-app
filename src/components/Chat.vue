<template>
  <div class="messages">
    <div v-for="message in messages" :key="message.id">
      <MessageBubble :message="message" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Message } from './MessageBubble.vue';
import MessageBubble from './MessageBubble.vue';

@Component({
  components: { MessageBubble },
})
export default class Chat extends Vue {
  @Prop({
    type: Array,
    validator: (value: unknown[]) => value.every(v => v instanceof Message),
  })
  messages!: Message[];
}
</script>

<style scoped lang="scss">
@import './styles/Chat.scss';
</style>
