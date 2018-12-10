<script>
export default {
  name: 'Tabs',
  props: {
    value: {
      type: [String, Number],
      required: true
    }
  },
  data () {
    return {
      panes: []
    }
  },
  methods: {
    onChange (index) {
      this.$emit('change', index)
    }
  },
  render () {
    const contents = this.panes.map((pane) => {
      return pane.active ? pane.$slots.default : null
    })
    return (
      <div class="tabs">
        <ul class="tabs-header">
          {this.$slots.default}
        </ul>
        <div class="tab-content">
          {contents}
        </div>
      </div>
    )
  }
}
</script>
