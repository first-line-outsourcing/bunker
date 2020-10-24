<template>
  <div class="fixed-bottom m-3">
    <div class="row">
      <div class="col" v-for="card of player.cards">
        <CardComponent v-bind:card="card"></CardComponent>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import CardComponent from '@/components/Card.vue';
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import { Player } from './interfaces';

  @Component({
    components: {
      CardComponent,
    },
  })
  export default class PlayerPanelComponent extends Vue {
    @Prop() private player!: Player;
  }
</script>

<style scoped>

</style>
