<template>
  <div id="root">
    <div class="warp">
      <div class="content">
        <Header></Header>
        <div>
          {{count}}
        </div>
        <div>
          <router-link to="/app">app</router-link>
          <router-link to="/login">login</router-link>
        </div>
        <router-view></router-view>
      </div>
    </div>
    <notification :content="`hello world222`"></notification>
    <Footer class="footer"></Footer>
  </div>
</template>
<script>
import Header from './layout/header.vue'
import Footer from './layout/footer.jsx'
export default {
  metaInfo: {
    title: 'RootApp'
  },
  data () {
    return {
      text: 'abcdef'
    }
  },
  mounted () {
    console.log(this.$store)
    setTimeout(() => {
      this.$store.commit('updateCount', 222)
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
  }
}
</script>

<style lang="stylus">
#root {
  height: 100%;
  width: 80%;
  margin: 0 auto;
  .warp {
    height: auto;
    min-height: 100%;
    .content {
      padding-bottom: 80px
    }
  }
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
    text-align center;
    position: relative;
    margin-top: -80px;
    height: 80px;
    word-wrap: break-word;
  }
}
</style>

