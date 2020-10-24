<template>
  <div class="card">
    <div class="card-header">
      <h5 class="card-title mb-0">{{ card.title }}</h5>
    </div>
    <div class="card-body">
      <h6 class="card-title mb-0">{{ card.text }}</h6>
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
