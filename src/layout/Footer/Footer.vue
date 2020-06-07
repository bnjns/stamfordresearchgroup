<template>
  <footer>
    <b-container>
      <b-row>
        <b-col cols="12" md="6" class="text-center text-md-left">
          <p>Tel: +44 20 8742 6668</p>
          <p>Mob: +44 7721 672 739</p>
          <p>
            <a href="mailto:info@stamfordresearchgroup.co.uk">
              info@stamfordresearchgroup.co.uk
            </a>
          </p>
        </b-col>
        <b-col cols="12" md="6" class="text-center text-md-right">
          <p>Copyright &copy; {{ currentYear }} Stamford Research Group.</p>
          <p>All Rights Reserved.</p>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Footer extends Vue {
  private readonly currentYear = new Date().getFullYear()
}
</script>

<style lang="scss" scoped>
  @import "../../assets/css/vars";

  footer {
    background: $footerBg;
    color: $footerText;
    font-size: 0.813rem;
    padding: 1em 0 2em;

    .row > div {
      padding: 0.5em 0;
    }

    p {
      line-height: 1.5em;
      margin: 0;
      padding: 0;
    }
    a {
      color: inherit;
    }
  }
</style>
