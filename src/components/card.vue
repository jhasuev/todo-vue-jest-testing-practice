<template>
  <div class="card">
    <slot />
  </div>
</template>

<script>
  export default {
    name: 'Card',
  }
</script>

<style scoped>
  .card {
    max-width: 480px;
    margin: auto;
    padding: 15px;
    box-shadow: 0 0 10px rgba(0,0,0,.25);
    border-radius: 10px;
  }
</style>