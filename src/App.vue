<template>
  <div class="app">
    <TodoForm class="form" />
    <TodoList class="list" />
  </div>
</template>

<script>
  import TodoForm from "./components/todoForm"
  import TodoList from "./components/todoList"
  export default {
    name: 'App',
    components: {
      TodoForm,
      TodoList,
    },
  }
</script>

<style scoped>
  .app {
    padding: 15px;
  }

  .form {
    margin-bottom: 15px;
  }
</style>
