<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{ player }}</h5>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

export interface Player {
  id: number;
  name: string;
}

@Component
export default class HelloWorld extends Vue {
  @Prop() private player!: string;
}
</script>

<style scoped></style>
