<template>
  <div class="container-fluid">
    <div class="row pr-3 pl-3">
      <div class="col-lg-4 col-md-6 mb-3" v-for="player of players">
        <PlayerComponent v-bind:player="player"></PlayerComponent>
      </div>
    </div>
    <PlayerPanelComponent v-bind:player="activePlayer"></PlayerPanelComponent>
  </div>
</template>

<script lang="ts">
import { Player } from "@/components/interfaces";
import { ACTIVE_PLAYER, PLAYERS } from "@/components/mock/mock.service";
import PlayerComponent from "@/components/Player.vue";
import PlayerPanelComponent from "@/components/PlayerPanel.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    PlayerPanelComponent,
    PlayerComponent
  }
})
export default class Game extends Vue {
  private players: Player[] = PLAYERS;
  private activePlayer: Player = ACTIVE_PLAYER;
}
</script>
