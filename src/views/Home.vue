<template>
  <div class="row pr-3 pl-3">
    <div class="col-md-4" v-for="player of players">
      <PlayerComponent v-bind:player="player"></PlayerComponent>
    </div>
  </div>
</template>

<script lang="ts">
  import { Player } from '@/components/inrefaces';
  import PlayerComponent from '@/components/Player.vue';
  import { Component, Vue } from 'vue-property-decorator';

  @Component({
    components: {
      PlayerComponent,
    },
  })
  export default class Home extends Vue {
    private players: Player[] = [
      {
        id: 1,
        name: 'Eugene',
        cards: [],
      },
      {
        id: 2,
        name: 'Andrew',
        cards: [],
      },
      {
        id: 3,
        name: 'Alex',
        cards: [],
      },
    ];
  }
</script>
