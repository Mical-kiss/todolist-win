<template>
    <section class="real-app">
        <input type="text" class="add-input" autofocus placeholder="做什么？" @keyup.enter="addTo">
        <item @del="deleteTodo" :todo="todo" v-for="(todo,index) in filteredTodos" :key="index"></item>
        <tabs :filter="filter" :todos="todos" @toggle="toggleFilter" @clearAllComplete="clearAllComplete"></tabs>
    </section>
</template>
<script>
import Item from "./item.vue";
import Tabs from "./tabs.vue";
let id = 0;
export default {
  data() {
    return {
      todos: [],
      filter: "all"
    };
  },
  components: {
    Item,
    Tabs
  },
  methods: {
    addTo(e) {
      this.todos.unshift({
        id: id++,
        content: e.target.value,
        completed: false
      });
      e.target.value = "";
    },
    deleteTodo(id) {
      this.todos.splice(this.todos.findIndex(todo => todo.id === id), 1);
    },
    toggleFilter(state) {
      console.log(234);
      this.filter = state;
    },
    clearAllComplete() {
      this.todos = this.todos.filter(todo => !todo.completed);
    }
  },
  computed: {
    filteredTodos() {
      if (this.filter === "all") {
        return this.todos;
      }
      const completed = this.filter === "completed";
      return this.todos.filter(todo => completed === todo.completed);
    }
  }
};
</script>

<style lang="scss">
  .add-input {
    height: 40px;
    display: block;
    margin: 0 auto;
    margin-bottom: 28px;
    margin-top: 50px;
    outline: 0;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 0 16px;
    transition: background 0.3s ease-in-out;
    text-align: center;
    &:focus {
      background: #f5f5f5;
    }
  }
</style>

