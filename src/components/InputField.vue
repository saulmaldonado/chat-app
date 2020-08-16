<template>
  <form v-on:submit.prevent="onSubmit">
    <input name="message" type="text" placeholder="Type a message..." />
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
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class InputField extends Vue {}
</script>

<style scoped lang="scss">
@import './styles/InputField.scss';
</style>
