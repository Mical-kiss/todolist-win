<template>
  <header :class="$style.mainHeader">
      <h1>JToDo</h1>
  </header>
</template>

<style lang="scss" module>
.main-header {
  display: block;
  width: 100%;
  height: 100px;
  text-align: center;
  margin-top: 40px;
  h1 {
    display: inline;
    line-height: 100px;
    color: rgba(175, 47, 47, 0.4);
    font-size: 100px;
    margin: 20px;
  }
}
</style>

