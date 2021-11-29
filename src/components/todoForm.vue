<template>
  <Card>
    <form @submit.prevent="add()">
      <h1 class="title">Todo List | Vue.JS</h1>
      <InputText class="form-field" v-model="text" />
      <Btn class="add-btn" color="blue" text="Add" />
    </form>
  </Card>
</template>

<script>
  import Card from "./card"
  import InputText from "./inputText"
  import Btn from "./btn"
  import { mapMutations } from "vuex";
  export default {
    name: 'TodoForm',
    components: {
      Card,
      InputText,
      Btn,
    },
    data(){
      return {
        text: "",
      }
    },
    methods: {
      ...mapMutations([
        'ADD_ITEM'
      ]),
      
      add() {
        if (this.text.trim()) {
          this.ADD_ITEM(this.text)
          this.text = ""
        }
      }
    },
  }
</script>

<style scoped>
  .title {
    font-size: 27px;
    text-align: center;
    margin-bottom: 1em;
  }

  .form-field {
    margin-bottom: 10px;
  }

  .add-btn {
    display: block;
    width: 100%;
  }
</style>