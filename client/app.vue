<template>
  <div id="app">
      <!-- <div id="cover"></div> -->
      <Header></Header>
      <Todo></Todo>
      <Footer></Footer>
  </div>
</template>
<script>
import Header from './layout/header.vue'
import Footer from './layout/footer.jsx'
import Todo from './views/todo/todo.vue'
export default {
  data () {
    return {
      text: 'abcdef'
    }
  },
  components: {
    Header,
    Footer,
    Todo
  }
}
</script>

<style lang="stylus">
#app {
  width: 80%;
  margin: 0 auto;
  #cover {
    color: rgb(238, 39, 39);
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: #999;
    z-index: -1;
    opacity: 0.9;
  }
  #footer {
    text-align center
  }
}
</style>

