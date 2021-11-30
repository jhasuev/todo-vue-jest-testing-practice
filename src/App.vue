<template>
  <navbar />
  <router-view />
</template>

<script>
import Navbar from "@/components/navbar";
export default {
  name: "App",
  components: {
    Navbar,
  },
}
</script>
