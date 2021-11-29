<template>
  <Card v-if="getTodoList.length">
    <h2 class="title">All list:</h2>
    <div class="list">
      <TodoListItem
        v-for="(todo, i) in getTodoList"
        :key="i"
        :index="i"
        :todo="todo"
        class="list__item"
      />
    </div>
  </Card>
</template>

<script>
  import Card from "./card"
  import TodoListItem from "./todoListItem"
  import { mapGetters } from "vuex"
  export default {
    name: 'TodoList',
    components: {
      Card,
      TodoListItem,
    },
    computed: {
      ...mapGetters([ "getTodoList" ])
    },
  }
</script>

<style lang="scss" scoped>
  .title {
    text-align: center;
    font-size: 22px;
  }

  .list {
    &__item {
      border-bottom: 1px solid #ddd;

      &:last-child {
        border-bottom-color: transparent;
      }
    }
  }
</style>