<template>
  <header class="navigation">
    <img
      src="../assets/images/chevron-left-solid.svg"
      height="15"
      width="7.5"
      class="left-chevron"
    />
    <img
      src="../assets/images/avatar.jpg"
      alt="avatar"
      class="avatar"
    />
    <div class="recipient-info">
      <p class="name">{{ name }}</p>
      <p class="status">{{ status }}</p>
    </div>
    <div class="options"></div>
  </header>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class Navigation extends Vue {
  @Prop() private name!: string;
  @Prop() private status!: string;
}
</script>

<style scoped lang="scss">
@import './styles/Navigation.scss';
</style>
