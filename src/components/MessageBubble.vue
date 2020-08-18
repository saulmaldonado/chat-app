<template>
  <div class="bubble" :class="[direction, isImage, isCheckbox]">
    <div v-if="Array.isArray(message.text)">
      <img
        v-for="(image, index) in message.text"
        :src="image"
        :key="index"
      />
    </div>
    <label v-else-if="message.price" :for="'select-' + message.id">
      <div>
        <input
          type="checkbox"
          :name="'select-' + message.id"
          :id="'select-' + message.id"
        />
        <span class="checkbox-message">{{ message.text }}</span>
      </div>
      <span class="checkbox-price">${{ message.price }}</span>
    </label>
    <p v-else>{{ message.text }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

export class Message {
  constructor(
    public id: number,
    public text: string | string[],
    public direction: 'outgoing' | 'incoming',
    public price?: number
  ) {}
}

@Component
export default class MessageBubble extends Vue {
  @Prop({
    type: Message,
  })
  message!: Message;

  //methods declare bubble styles
  get direction() {
    return this.message.direction === 'outgoing'
      ? 'outgoing'
      : 'incoming';
  }

  get isImage() {
    return Array.isArray(this.message.text) ? 'image' : '';
  }

  get isCheckbox() {
    return this.message.price ? 'checkbox' : '';
  }
}
</script>

<style scoped lang="scss">
@import './styles/MessageBubble.scss';
</style>
