<template>
  <div :class="['todo-item', todo.completed ? 'completed' : '']">
    <input type="checkbox"
    class="toggle"
    v-model="todo.completed">
    <label for="">{{todo.content}}</label>
    <button @click="deleteTodo">删除</button>
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  methods: {
    deleteTodo () {
      this.$emit('del', this.todo.id)
    }
  }
}
</script>

<style lang="scss" >
.todo-item {
  display: flex;
  line-height: 2.1;
  border-bottom: 1px solid #000;
  &:last-child {
    border: 0;
  }
  input {
    align-self: center;
  }
  label {
    flex: 1;
    padding-left: 10px;
  }
  button {
    background: #f19191;
    border-radius: 10px;
    display: inline-block;
    padding: 0 12px;
    align-self: center;
  }
}
.completed {
  text-decoration: line-through;
}
</style>

