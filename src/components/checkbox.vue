<template>
  <label class="checkbox">
    <input
      type="checkbox"
      class="checkbox__field"
      :checked="modelValue"
      @change="$emit('update:modelValue', $event.target.checked)"
    />
    <i class="checkbox__icon" />
  </label>
</template>

<script>
export default {
  name: "Checkbox",
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss">
.checkbox {
  position: relative;
  font-size: 0;
  display: block;
  cursor: pointer;

  &__field {
    position: absolute;
    z-index: -1;
    opacity: 0;
    pointer-events: none;
  }

  &__icon {
    position: relative;
    z-index: 1;
    display: inline-block;
    width: 13px;
    height: 13px;
    border: 1px solid #999;
    border-radius: 3px;
    transition: background-color 0.2s;

    &:after {
      content: "";
      position: absolute;
      left: 2px;
      bottom: 4px;
      transform: rotate(-45deg);
      width: 8px;
      height: 5px;
      border: 2px solid #fff;
      border-top: transparent;
      border-right: transparent;
      opacity: 0;
      transition: opacity 0.2s;
    }
  }

  &__field:checked ~ &__icon {
    background-color: #097fce;
    border-color: #097fce;
    &:after {
      opacity: 1;
    }
  }
}
</style>