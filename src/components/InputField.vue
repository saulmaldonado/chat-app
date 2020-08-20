<template>
  <form @submit.prevent="onSubmit">
    <input
      v-model="text"
      name="message"
      type="text"
      placeholder="Type a message..."
    />
    <input
      type="file"
      id="pictures"
      name="pictures"
      accept="image/jpeg"
      ref="pictures"
      multiple
    />
    <div class="picture-select">
      <div
        class="image-counter"
        :style="{ display: picturesCount ? 'block' : 'none' }"
      >
        {{ picturesCount }}
      </div>
      <img
        src="../assets/images/camera-solid.svg"
        alt="upload-pictures"
        class="upload-pictures"
        v-on:click="promptFileUpload"
      />
    </div>

    <button type="submit">
      <img
        src="../assets/images/chevron-right-solid.svg"
        alt="submit"
        class="submit-chevron"
      />
    </button>
  </form>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class InputField extends Vue {
  @Prop({ type: Function }) sendMessage!: (
    message: string | ArrayBuffer
  ) => void;

  mounted() {
    this.$refs.pictures.onchange = () => {
      this.picturesCount = this.$refs.pictures.files?.length ?? 0;
    };
  }

  $refs!: {
    pictures: HTMLInputElement;
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

  async onSubmit() {
    if (this.text) {
      this.sendMessage(this.text);
      this.text = '';
    }
    const files = this.$refs.pictures.files;
    await this.uploadFiles(files);
  }
}
</script>

<style scoped lang="scss">
@import './styles/InputField.scss';
</style>
