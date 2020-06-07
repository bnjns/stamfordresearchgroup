<template>
  <div>
    <table style="width: 100%" aria-describedby="Our consultants">
      <tr class="sr-only">
        <th scope="col">Picture</th>
        <th scope="col">Details</th>
      </tr>
      <consultant v-for="(consultant, index) in consultants" :key="index" :consultant="consultant"/>
    </table>
    <p>SRG has acted as a virtual consultancy for the past twenty years, working with an extended network of independent
      expert consultants with different associated expertise in the freight transport sector: these include for example
      financiers, operations and port managers, and civil engineers. SRG’s principal associates are members of
      Independent Port Consultants:</p>
    <p class="text-center">
      <a href="http://www.port-consultants.com">www.port-consultants.com</a>
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import consultants from '@/data/consultants'
import Consultant from '@/components/Consultant.vue'

@Component({
  components: {
    Consultant
  }
})
export default class Consultants extends Vue {
  private readonly consultants = consultants
}
</script>

<style lang="scss" scoped>
  table {
    margin: 1em 0;
  }
</style>
