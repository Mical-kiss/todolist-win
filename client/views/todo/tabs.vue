<template>
  <div class="helper">
    <span class="left">
      {{unFinishedTodoLength}} items left
    </span>
    <span class="tabs">
      <span v-for="state in states" :key="state" :class="[state, filter === state ? 'actived' : '']" @click="toggleFilter(state)">
        {{state}}
      </span>
    </span>
    <span class="clear" @click="clearAllComplete">删除已完成</span>
  </div>
</template>

<script>
export default {
  props: {
    filter: {
      type: String,
      required: true
    },
    todos: {
      type: Array
    }
  },
  data () {
    return {
      states: ['all', 'active', 'completed']
    }
  },
  computed: {
    unFinishedTodoLength () {
      return this.todos.filter(todo => !todo.completed).length
    }
  },
  methods: {
    clearAllComplete () {
      this.$emit('clearAllComplete')
    },
    toggleFilter (state) {
      this.$emit('toggle', state)
    }
  }
}
</script>

<style lang="scss" >
.helper {
  display: flex;
  justify-content: space-between;
  background-color: #f5f5f5;
  margin-bottom: 50px;
  margin-top: 20px;
  padding: 10px 8px;
  .clear {
    cursor: pointer;
  }
  .tabs {
    span {
      margin: 8px;
      cursor: pointer;
    }
  }
}
.actived {
  color: red;
}
</style>

