<template>
  <div id="app">
    <MessageTemplateCreator
      v-model="value"
      :tag-list="tagList"
    />
  </div>
</template>

<script>
import pkg from '../packages'

export default {
  name: 'app',
  components: {
    [pkg.MessageTemplateCreator.name]: pkg.MessageTemplateCreator
  },
  data () {
    return {
      value: '这是一条信息模板',
      tagList: [
        'button--one',
        'button--two',
        'button--three',
        'button--four',
        'button--five',
        'button--six',
        'button--seven'
      ]
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
