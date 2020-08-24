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
    <div class="options" tabindex="0">
      <div class="tooltip">
        <a
          href="https://github.com/saulmaldonado"
          rel="noopener"
          target="_blank"
        >
          <GithubIcon alt="github" class="github-icon" />
        </a>

        <a
          href="https://saulmaldonado.tech"
          rel="noopener"
          target="_blank"
        >
          <PortfolioIcon alt="portfolio" class="portfolio-icon" />
        </a>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import GithubIcon from '../assets/images/github-brands.svg';
import PortfolioIcon from '../assets/images/user-alt-solid.svg';

@Component({ components: { GithubIcon, PortfolioIcon } })
export default class Navigation extends Vue {
  @Prop() private name!: string;
  @Prop() private status!: string;
}
</script>

<style scoped lang="scss">
@import './styles/Navigation.scss';
</style>
