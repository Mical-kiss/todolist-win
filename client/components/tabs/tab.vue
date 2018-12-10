<script>
export default {
  name: 'Tab',
  props: {
    index: {
      required: true,
      type: [Number, String]
    },
    label: {
      type: String,
      default: 'tab'
    }
  },
  computed: {
    active () {
      return this.$parent.value === this.index
    }
  },
  methods: {
    handleClick () {
      this.$parent.onChange(this.index)
    }
  },
  mounted () {
    this.$parent.panes.push(this)
  },
  render () {
    const tab = this.$slots.label || <span>{this.label}</span>
    const classNames = {
      tab: true,
      active: this.active
    }
    return (
      <li class={classNames} on-click={this.handleClick}>
        {tab}
      </li>
    )
  }
}
</script>

<style lang="stylus">
.tab
  cursor pointer
.active
  background #fff;
  cursor auto
</style>
