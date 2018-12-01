<template>
  <transition name="fade" @after-leave="afterLeave">
    <div class="notification"
    :style="style"
    v-show="visible">
      <span class="content">
        {{content}}
      </span>
      <a class="btn" @click="handleClose">
        {{btn || '关闭'}}
      </a>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Notification',
  data () {
    return {
      visible: true
    }
  },
  props: {
    content: {
      type: String,
      required: true
    },
    btn: {
      type: String,
      required: false
    }
  },
  computed: {
    style () {
      return {}
    }
  },
  methods: {
    handleClose (e) {
      e.preventDefault()
      this.$emit('close')
    },
    afterLeave () {
      this.$emit('closed')
    }
  }
}
</script>

<style lang="stylus">
.notification
  position fixed
  bottom 0
  right 0
  background rgba(111, 111, 111, .6)
  padding 20px
  transition all .3s
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
