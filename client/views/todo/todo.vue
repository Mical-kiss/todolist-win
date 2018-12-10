<template>
    <section class="real-app">
      <div class="tab-container">
        <tabs :value="filter" @change="handleChange">
          <!-- <tab label="tab1" index="1">
            <span>
              tabcontent1
            </span>
          </tab>
          <tab label="tab2" index="2">
            <span>
              tabcontent2
            </span>
          </tab>
          <tab label="tab3" index="3">
            <span>
              tabcontent3
            </span>
          </tab> -->
          <tab v-for="tab in states" :key="tab" :index="tab" :label="tab"></tab>
        </tabs>
      </div>
      <input type="text" class="add-input" autofocus placeholder="做什么？" @keyup.enter="addTo">
      <item @del="deleteTodo" :todo="todo" v-for="(todo,index) in filteredTodos" :key="index"></item>
      <helper :filter="filter" :todos="todos" @clearAllComplete="clearAllComplete"></helper>
    </section>
</template>
<script>
import Item from './item.vue'
import Helper from './helper.vue'
let id = 0
export default {
  metaInfo: {
    title: 'TODO'
  },
  data () {
    return {
      todos: [],
      filter: 'all',
      states: ['all', 'active', 'completed']
    }
  },
  components: {
    Item,
    Helper
  },
  methods: {
    handleChange (value) {
      this.filter = value
    },
    addTo (e) {
      this.todos.unshift({
        id: id++,
        content: e.target.value,
        completed: false
      })
      e.target.value = ''
    },
    deleteTodo (id) {
      this.todos.splice(this.todos.findIndex(todo => todo.id === id), 1)
    },
    clearAllComplete () {
      this.todos = this.todos.filter(todo => !todo.completed)
    }
  },
  computed: {
    filteredTodos () {
      if (this.filter === 'all') {
        return this.todos
      }
      const completed = this.filter === 'completed'
      return this.todos.filter(todo => completed === todo.completed)
    }
  }
}
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

