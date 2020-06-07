<template>
  <b-nav-item exact-active-class="active" :to="{ name: item.route || '#' }" v-if="!hasChildren">
    {{ item.text }}
  </b-nav-item>
  <b-nav-item-dropdown :text="item.text" v-else>
    <menu-item
      :key="index"
      :item="child"
      v-for="(child, index) in item.children"
    />
  </b-nav-item-dropdown>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { MenuItem as MenuItemProps } from '@/types/menu'

@Component({
  components: {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    MenuItem
  }
})
export default class MenuItem extends Vue {
  @Prop() readonly item!: MenuItemProps
  get hasChildren(): boolean {
    return this.item.children !== undefined && this.item.children.length > 0
  }
}
</script>

<style lang="scss" scoped>
  @import "../../assets/css/vars";

  .nav-item {
    &.dropdown {
      &.show {
        background: $menuToggleBgColour;
      }

      & > .dropdown-menu {
        & > .nav-item {
          &:hover {
            background: $menuHoverBgColour;
          }

          & > .nav-link.active {
            color: $colourPrimary;
            font-weight: bold;
          }
        }
      }
    }
  }
</style>
