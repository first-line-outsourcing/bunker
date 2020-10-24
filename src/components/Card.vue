<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{ player.name }}</h5>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import { Card } from '@/components/inrefaces';

  @Component
  export default class CardComponent extends Vue {
    @Prop() private card!: Card;
  }
</script>

<style scoped></style>
