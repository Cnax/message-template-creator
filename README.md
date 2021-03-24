# message-template-creator

### 安装
```
npm i message-template-creator -S
```

### 使用

一、全局使用
``` javaScript
import MessageTemplateCreator from 'message-template-creator'

Vue.use(MessageTemplateCreator)
```

二、按需引入

``` javaScript
<template>
  <div class="home">
    <p>一个简单消息模板的配置：</p>
    <message-template-creator v-model="value" :tag-list="tagList" />
  </div>
</template>

<script>
import MessageTemplateCreator from 'message-template-creator'
export default {
  name: 'MessageTemplateCreatorPage',
  components: { MessageTemplateCreator },
  data () {
    return {
      value: '这是一条信息模板',
      tagList: ['人物', '时间', '地点']
    }
  }
}
</script>

```

Props

| 方法名       | 说明 |         备注 |
| :--------- | :--: | -----------: |
| value     |  当前输入框中的html字符串  |      |
| tagList   |  右侧标签选择区中的标签列表  |   |
| tagInputCls |  输入框中包裹标签的元素上的class名称  | 可以用来自定义包裹标签的样式 |

### demo 
[demo](https://cnax.github.io/cnax.github.io-mtc/)

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
