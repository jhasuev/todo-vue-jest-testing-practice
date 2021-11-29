<template>
  <label class="checkbox">
    <input type="checkbox" class="checkbox__input" :checked="checked" @change="$emit('onChange', $event.target.checked)">
    <i class="checkbox__icon" />
  </label>
</template>

<script>
  export default {
    name: 'Checkbox',
    props: {
      checked: {
        type: Boolean,
        default: false,
      },
    },
  }
</script>

<style lang="scss" scoped>
  .checkbox {
    position: relative;
    z-index: 1;
    display: block;

    &__input {
      position: absolute;
    }

    &__icon {
      position: relative;
      z-index: 1;

      display: block;
      width: 13px;
      height: 13px;
      border: 1px solid #999;
      border-radius: 2px;
      transition: .2s;

      &:after {
        content: "";
        position: absolute;
        top: 2px;
        left: 1px;
        transform: rotate(-52deg);
        width: 9px;
        height: 5px;
        border: 2px solid #fff;
        border-top: none;
        border-right: none;
        opacity: 0;
        transition: inherit;
      }
    }
    
    &__input:checked ~ &__icon {
      background-color: #097FCE;
      border-color: #097FCE;
      
      &:after {
        opacity: 1;
      }
    }
  }
</style>