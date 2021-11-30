<template>
  <div class="nav">
    <navbar-item
      class="nav__item"
      v-for="(route, i) in routes"
      :key="i"
      :route="route"
    />
  </div>
</template>

<script>
import NavbarItem from "./navbar-item"
export default {
  name: "Navbar",
  components: {
    NavbarItem,
  },
  data() {
    return {
      routes: [
        {
          name: "todos",
          label: "Задачи",
        },
        {
          name: "add",
          label: "Добавить",
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.nav {
  text-align: center;
  &__item {
    margin: 0 20px;
  }
}
</style>
