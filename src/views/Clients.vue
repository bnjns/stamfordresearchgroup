<template>
  <div>
    <p>Some of the organisations SRG has worked for, either directly or as a subcontractor.</p>
    <b-table striped :items="clients"></b-table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import clients from '@/data/clients'

@Component
export default class Clients extends Vue {
  private readonly clients = clients
}
</script>
