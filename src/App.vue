<template>
  <div id="app">
    <app-menu/>
    <main>
      <b-container id="header">
        <img :src="`/images/headers/${headerImage}`" alt="">
        <h1 v-if="!!headerText">{{ headerText }}</h1>
      </b-container>
      <b-container id="content">
        <router-view/>
      </b-container>
    </main>
    <app-footer/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { AppFooter, AppMenu } from '@/layout'

@Component({
  components: {
    AppMenu,
    AppFooter
  }
})
export default class App extends Vue {
  get headerImage(): string | undefined {
    return this.$route.meta.headerImage
  }

  get headerText(): string | undefined {
    return this.$route.meta.header
  }
}
</script>

<style lang="scss">
  @import "assets/css/app";

  #app {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    flex: 1;
    align-items: stretch;
    width: 100%;

    main {
      display: flex;
      flex: 1;
      flex-direction: column;
      margin-top: $menuHeight + $menuBorderHeight;

      #header {
        padding: 0;
        position: relative;

        h1 {
          background: rgba(255, 255, 255, 0.75);
          bottom: 0;
          color: #004040;
          font-size: 40px;
          font-weight: 900;
          margin: 0;
          padding: 0.25em 0.25em;
          position: absolute;
          width: 100%;
        }
        img {
          width: 100%;
        }
      }

      #content {
        background: #fff;
        flex: 1;
        padding: 1.5em;
      }
    }

    menu {
      margin: 0;
      padding: 0;
    }
  }
</style>
