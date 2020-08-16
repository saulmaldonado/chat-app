<template>
  <div class="bubble">
    <div>
      <p>
        {{ message.text }}
      </p>
    </div>
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
}
</script>

<style scoped lang="scss">
@import './styles/MessageBubble.scss';
</style>
