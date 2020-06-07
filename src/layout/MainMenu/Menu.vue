<template>
  <menu>
    <b-navbar data-qa-id="mainMenu" fixed="top" toggleable="lg" type="light" variant="light">
      <b-container>
        <!-- Brand -->
        <b-navbar-brand :to="{ name: 'home' }">
          <img alt="Stamford Research Group Logo" src="/images/logo_full.png">
        </b-navbar-brand>

        <!--  Toggler  -->
        <b-navbar-toggle target="menu--main"></b-navbar-toggle>

        <b-collapse id="menu--main" is-nav>
          <!--  Menu  -->
          <b-navbar-nav class="ml-auto">
            <menu-item :key="item.link" v-for="item in menu" :item="item"/>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </menu>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import mainMenu from '@/data/menu'
import MenuItem from './MenuItem.vue'

@Component({
  components: {
    MenuItem
  }
})
export default class Menu extends Vue {
  private readonly menu = mainMenu
}
</script>

<style lang="scss" scoped>
  @import "../../assets/css/vars";
  @import "~bootstrap/scss/functions";
  @import "~bootstrap/scss/variables";
  @import "~bootstrap/scss/mixins";

  menu {
    nav {
      background-color: $menuBgColour !important;
      border-bottom: $menuBorderHeight solid $menuBorderColour;
      box-sizing: content-box;
      height: $menuHeight;
      padding: 0;

      .navbar-brand {
        img {
          max-height: $menuHeight - 8px;
        }
      }

      ul, li {
        margin: 0;
      }

      #menu--main {
        align-self: stretch;
      }

      ::v-deep .navbar-nav {
        align-self: stretch;

        & > .nav-item {
          display: table;
          height: 100%;

          & > .nav-link {
            display: table-cell;
            padding: 0 1.5em;
            vertical-align: middle;

            &:hover {
              background: $menuHoverBgColour;
            }

            &.active {
              background: $colourPrimary;
              color: #FFF;
              text-shadow: 0 1px 0 rgba(0, 0, 0, .25);
              box-shadow: inset 0 3px 9px rgba(0, 0, 0, .075);
            }
          }
        }
      }
    }

    @include media-breakpoint-up(md) {
      nav > .container {
        padding-left: 0;
        padding-right: 0;
      }
    }
  }
</style>
