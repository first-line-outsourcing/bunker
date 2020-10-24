<template>
  <div class="text-center w-100">
    <button class="btn btn-lg btn-success font-weight-bold">Новая игра</button>
  </div>
</template>

<script lang="ts">
import { Player } from "@/components/interfaces";
import { PLAYERS } from "@/components/mock/mock.service";
import PlayerComponent from "@/components/Player.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    PlayerComponent
  }
})
export default class Home extends Vue {
  private players: Player[] = PLAYERS;
}
</script>
