<template>
  <div id="root">
      <Header></Header>
      <div>
        {{count}}
      </div>
      <div>
        <router-link to="/app">app</router-link>
        <router-link to="/login">login</router-link>
      </div>
      <!-- <Todo></Todo> -->
      <router-view></router-view>
      <Footer></Footer>
  </div>
</template>
<script>
import Header from './layout/header.vue'
import Footer from './layout/footer.jsx'
// import Todo from './views/todo/todo.vue'
export default {
  data () {
    return {
      text: 'abcdef'
    }
  },
  mounted () {
    console.log(this.$store)
    setTimeout(() => {
      // this.$store.commit('updateCount', 222)
    }, 4000)
    this.$store.dispatch('asyncUpdateCount', 1234567)
  },
  computed: {
    count () {
      return this.$store.state.count
    }
  },
  components: {
    Header,
    Footer
    // Todo
  }
}
</script>

<style lang="stylus">
#root {
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

