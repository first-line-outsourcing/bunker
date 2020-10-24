<template>
  <div>
    <Player player="Magic"></Player>
    <span>{{ list }}</span>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Player from "@/components/Player.vue";

@Component({
  components: {
    Player
  }
})
export default class Home extends Vue {
  list = 123;
}
</script>
