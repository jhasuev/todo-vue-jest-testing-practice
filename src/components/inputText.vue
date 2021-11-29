<template>
  <div>
    <input
      type="text"
      class="field"
      placeholder="Enter todo"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    >
  </div>
</template>

<script>
  export default {
    name: 'InputText',
    props: ["modelValue"],
  }
</script>

<style lang="scss" scoped>
  .field {
    display: block;
    width: 100%;
    border: 1px solid #eee;
    padding: 4px 10px;
    transition: box-shadow .2s;

    &:focus {
      box-shadow:0 0 5px rgba(0,0,0,.2)
    }
  }
</style>