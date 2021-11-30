<template>
  <button :class="['btn', type ? `btn--${type}` : '']">{{ text }}</button>
</template>

<script>
export default {
  name: "Btn",
  props: {
    type: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: "",
    },
  },
}
</script>

<style lang="scss">
.btn {
  position: relative;
  z-index: 1;
  display: inline-block;
  padding: 10px;
  background-color: #333;
  color: #fff;

  cursor: pointer;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;
    z-index: -1;
    opacity: 0;

    transition: opacity 0.2s;
  }

  &:hover:after {
    opacity: 0.2;
  }

  &:focus:after {
    opacity: 0.1;
  }

  &--blue {
    background-color: #097fce;
  }

  &--red {
    background-color: #af1623;
  }
}
</style>
