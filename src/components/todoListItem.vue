<template>
  <div :class="['item', { ready }]" ref="item">
    <Checkbox
      class="item__checkbox"
      :checked="todo.done"
      @onChange="onDone"
    />
    <div
      class="item__text"
      :class="{
        'item__text--done': todo.done
      }"
    >{{ todo.text }}</div>
    <Btn class="item__btn" text="Remove" color="red" @click="remove()" />

    <div :style="{height: `${maxHeight}px`}" />
  </div>
</template>

<script>
  import Checkbox from "./checkbox"
  import Btn from "./btn"
  import { mapMutations } from "vuex"
  export default {
    name: 'TodoListItem',
    props: {
      todo: {
        type: Object,
        default: () => ({}),
      },
      index: {
        type: Number,
        default: -1,
      },
    },
    components: {
      Checkbox,
      Btn,
    },
    data() {
      return {
        ready: false,
        maxHeight: 0,
      }
    },
    mounted() {
      Array.from(this.$refs.item.children).forEach(child => {
        this.maxHeight = Math.max(this.maxHeight, parseFloat(getComputedStyle(child).height))
      })

      this.ready = true
    },
    methods: {
      ...mapMutations([
        "REMOVE_ITEM",
        "DONE_ITEM",
      ]),
      remove() {
        this.REMOVE_ITEM(this.index)
      },
      onDone(done) {
        this.DONE_ITEM({ index: this.index, done});
      },
    },
  }
</script>

<style lang="scss" scoped>

  .item {
    display: flex;
    align-items: center;
    padding: 5px 0;

    &__checkbox {
      margin-right: 10px;
    }

    &__text {
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      margin-right: 10px;
      font-size: 18px;

      &--done {
        text-decoration: line-through;
      }
    }

    &__btn {
      margin-left: auto;
    }

    &.ready &__btn {
      display: none;
    }

    &.ready:hover &__btn {
      display: block;
    }
  }

</style>