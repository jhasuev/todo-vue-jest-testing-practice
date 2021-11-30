<template>
  <router-link class="navbar-item" :to="route">
    {{ route.label }}
  </router-link>
</template>

<script>
export default {
  name: "NavbarItem",
  props: {
    route: { type: Object, default: () => ({}) },
  },
};
</script>

<style lang="scss">
.navbar-item {
  margin: 0 20px;
  text-decoration: none;
  color: #999;

  &.router-link-active {
    text-decoration: underline;
    color: #000;
  }
}
</style>
