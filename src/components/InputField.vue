<template>
  <form @submit.prevent="onSubmit">
    <input v-model="text" name="message" type="text" placeholder="Type a message..." />
    <input type="file" id="pictures" name="pictures" accept="image/jpeg" ref="pictures" multiple />
    <div class="price-select" ref="dollarIcon" tabindex="0" @focus="focusPriceInput">
      <div class="price-popup">
        $
        <input
          type="number"
          min="1"
          max="999"
          v-model="price"
          ref="priceInput"
          v-on:blur="unFocusPriceInput"
        />
      </div>
      <div class="dollar-icon">
        <div class="price-counter" :style="{ display: price ? 'block' : 'none' }">${{ price }}</div>
        <img src="../assets/images/dollar-sign-solid.svg" alt="add-price" class="add-price" />
      </div>
    </div>
    <div class="picture-select">
      <div
        class="image-counter"
        :style="{ display: picturesCount ? 'block' : 'none' }"
      >{{ picturesCount }}</div>
      <img
        src="../assets/images/camera-solid.svg"
        alt="upload-pictures"
        class="upload-pictures"
        @click="promptFileUpload"
      />
    </div>

    <button type="submit" :disabled="text || picturesCount ? false : true">
      <img src="../assets/images/chevron-right-solid.svg" alt="submit" class="submit-chevron" />
    </button>
  </form>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class InputField extends Vue {
  @Prop({ type: Function }) sendMessage!: (
    message: string | ArrayBuffer,
    price?: number | null
  ) => void;

  mounted() {
    this.$refs.pictures.onchange = () => {
      this.picturesCount = this.$refs.pictures.files?.length ?? 0;
    };
  }

  $refs!: {
    pictures: HTMLInputElement;
    priceInput: HTMLInputElement;
    dollarIcon: HTMLButtonElement;
  };

  promptFileUpload() {
    this.$refs.pictures.click();
  }

  async uploadFiles(files: FileList | null) {
    if (files) {
      for (let i = 0; i < files.length; i++) {
        this.sendMessage(await files.item(i)!.arrayBuffer());
      }
      // cleanup
      this.$refs.pictures.value = '';
      this.picturesCount = 0;
    }
  }

  picturesCount = 0;
  text = '';
  price = null;

  async onSubmit() {
    if (this.text) {
      this.sendMessage(this.text, this.price);
      this.text = '';
      this.price = null;
    }
    const files = this.$refs.pictures.files;
    await this.uploadFiles(files);
  }

  focusPriceInput() {
    this.$refs.dollarIcon.classList.add('active');
    this.$refs.priceInput.focus();
  }

  unFocusPriceInput() {
    this.$refs.dollarIcon.classList.remove('active');
  }
}
</script>

<style scoped lang="scss">
@import './styles/InputField.scss';
</style>
