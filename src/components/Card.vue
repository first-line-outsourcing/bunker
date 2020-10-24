<template>
  <div class="card">
    <div class="card-header">
      <h6 class="card-title mb-0">{{ card.title }}</h6>
    </div>
    <div class="card-body">
      <div class="card-text mb-0">{{ card.text }}</div>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import { Card } from '@/components/interfaces';

  @Component
  export default class CardComponent extends Vue {
    @Prop() private card!: Card;
  }
</script>

<style scoped>
  .card {
    height: 100%;
  }
</style>
