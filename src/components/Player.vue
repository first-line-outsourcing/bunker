<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title mb-0">{{ player.name }}</h5>
      <h6 class="mb-0">Карты</h6>

      <div class="row">
        <div class="col-md-3 mt-3" v-for="card of player.cards">
          <CardComponent v-bind:card="card"></CardComponent>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import CardComponent from '@/components/Card.vue';
  import { Player } from '@/components/interfaces';
  import { Component, Prop, Vue } from 'vue-property-decorator';

  @Component({
    components: {
      CardComponent,
    },
  })
  export default class PlayerComponent extends Vue {
    @Prop() private player!: Player;
  }
</script>

<style scoped>
  .card {
    height: 100%;
  }
</style>
