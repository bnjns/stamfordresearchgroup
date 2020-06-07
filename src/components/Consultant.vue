<template>
  <tr>
    <td class="consultant-image">
      <img :src="imageUrl" :alt="consultant.name">
    </td>
    <td class="consultant-about">
      <h3>{{ consultant.name }}, {{ consultant.title }}</h3>
      <div v-for="(line, index) in consultant.about" :key="index">
        <p v-if="typeof line === 'string'">{{ line }}</p>
        <ul v-if="Array.isArray(line)">
          <li v-for="(item, itemIndex) in line" :key="itemIndex">{{ item }}</li>
        </ul>
      </div>
    </td>
  </tr>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Consultant as ConsultantProps } from '@/types/consultants'

@Component
export default class Consultant extends Vue {
  @Prop() readonly consultant!: ConsultantProps

  get imageUrl(): string {
    return `/images/consultants/${ this.consultant.image }`
  }
}
</script>

<style lang="scss" scoped>
  @import "~bootstrap/scss/functions";
  @import "~bootstrap/scss/variables";
  @import "~bootstrap/scss/mixins";

  h3 {
    font-weight: bold;
  }

  tr:not(:last-child) {
    td {
      padding-bottom: 3em;
    }
  }

  .consultant-image {
    width: 130px;

    img {
      width: 100%;
    }

    @include media-breakpoint-up(md) {
      width: 170px;
    }
    @include media-breakpoint-up(lg) {
      width: 200px;
    }
  }

  .consultant-about {
    padding-left: 1em;

    div {
      margin-bottom: 2em;
    }
  }
</style>
