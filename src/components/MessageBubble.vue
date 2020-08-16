<template>
  <div class="bubble" :class="direction">
    <p>
      {{ message.text }}
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

export class Message {
  constructor(
    public id: number,
    public text: string,
    public direction: 'outgoing' | 'incoming'
  ) {}
}

@Component
export default class MessageBubble extends Vue {
  @Prop({
    type: Message,
  })
  message!: Message;

  get direction() {
    return this.message.direction === 'outgoing' ? 'outgoing' : 'incoming';
  }
}
</script>

<style scoped lang="scss">
@import './styles/MessageBubble.scss';
</style>
