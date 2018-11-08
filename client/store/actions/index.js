export default {
  asyncUpdateCount ({ state }, data) {
    setTimeout(() => {
      state.count = data
    }, 2000)
  }
}
