<template>
  <div class="msg-tpl-ctor" ref="msgTplCtor">
    <div class="left">
      <div
        class="msg-tpl-ctor-input"
        ref="msgTplCtorContent"
        :id="contentId"
        @click="handleInputDelete"
        @input="handleInput"
      />
      <div class="msg-tpl-ctor-view">
        {{ viewContent }}
      </div>
    </div>
    <div class="right">
      <div class="msg-tpl-ctor-tools">
        <el-button
          v-for="item in tagList"
          :key="item"
          class="btn"
          @click="addTag(item)"
        >{{ item }}</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { Button } from 'element-ui'

// 生成随机的长度为10的字符串
function getUuid () {
  return Math.random().toString(36).substr(2)
}
export default {
  name: 'MessageTemplateCreator',
  components: { [Button.name]: Button },
  props: {
    tag: {
      type: String,
      default: 'yj'
    },
    value: {
      type: String,
      default: ''
    },
    tagList: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      // 记录currentText以计算长度
      currentText: this.value,
      // 为input区域生成随机id，当在页面上有多个组件时，用于监听光标的变化
      contentId: `content${getUuid()}`,
      savedRange: {}
    }
  },
  computed: {
    viewContent () {
      return this.value.replace(/\<yj\>/gi, '{').replace(/\<\/yj\>/gi, '}').replace(/<\/?.+?>/g, '')
    }
  },
  mounted () {
    // 初始化数据
    this.currentText && (this.$refs.msgTplCtorContent.innerHTML = this.currentText)
    // 创建模版标签的style
    this.createStyle()
    document.addEventListener('selectionchange', this.handleSelect)
  },
  beforeDestroy () {
    // 卸载事件
    document.removeEventListener('selectionchange', this.handleSelect)
  },
  methods: {
    // 为自定义的模版标签添加样式，使之不可编辑
    createStyle () {
      let style = document.createElement('style')
      style.innerHTML = `.msg-tpl-ctor ${this.tag} {
        cursor: default;
        -webkit-user-modify: read-only !important;
        background-color: #ecf5ff;
        display: inline-block;
        padding: 0 10px;
        margin: 0 5px;
        line-height: 1.5;
        font-size: 12px;
        color: #409eff;
        border: 1px solid #d9ecff;
        border-radius: 4px;
        box-sizing: border-box;
        white-space: nowrap;
        position: relative;
      }`
      this.$refs.msgTplCtor.appendChild(style)
    },
    addTag (text) {
      // 创建模版标签
      let node = document.createElement(this.tag)
      node.innerHTML = `${text}<i class="el-tag__close el-icon-close yj-close"></i>`
      // 添加id便于删除
      // node.id = getUuid()
      this.insertNode(node)
    },
    // 在内容中插入标签
    insertNode (node) {
      // 删掉选中的内容（如有）
      this.savedRange.deleteContents()
      // 插入标签
      this.savedRange.insertNode(node)
      // 更新双向绑定数据
      let target = this.$refs.msgTplCtorContent
      this.updateData(target.innerHTML)
      this.currentText = target.innerText
    },
    updateData (text) {
      this.$emit('input', text)
    },
    handleSelect () {
      // 监听选定文本的变动
      let sel = window.getSelection()
      let range = sel.rangeCount > 0 ? sel.getRangeAt(0) : null
      if (
        range &&
        range.commonAncestorContainer.ownerDocument.activeElement.id ===
        this.contentId
      ) {
        this.savedRange = range
      }
    },
    // 输入区域内的删除事件
    handleInputDelete (e) {
      // 命中当前标签的删除按钮时，移除当前标签
      if (e.target && e.target.className.includes('yj-close')) {
        e.target.parentNode.parentNode.removeChild(e.target.parentNode)
        setTimeout(() => {
          // 更新双向绑定
          let target = this.$refs.msgTplCtorContent
          this.updateData(target.innerHTML)
          this.currentText = target.innerText
        }, 0)
      }
    },
    handleInput (e) {
      this.updateData(e.target.innerHTML)
      this.currentText = e.target.innerText
    }
  }
}
</script>

<style lang="scss">
.el-icon-close.yj-close {
  position: absolute;
  top: -7px;
  right: -7px;
  border-radius: 50%;
  color: #fff;
  cursor: pointer;
  background-color: #409eff;
  border: 1px solid #409eff;
}
</style>

<style scoped lang="scss">
$borderColor: #dcdfe6;

.msg-tpl-ctor {
  width: 100%;
  box-sizing: border-box;
  border-radius: 4px;
  margin-bottom: 15px;
  overflow: hidden;
  position: relative;
  display: flex;
  .left {
    width: 80%;
  }
  .right {
    width: 18%;
    padding-left: 15px;
  }
  &-input {
    width: 100%;
    min-height: 100px;
    box-sizing: border-box;
    padding: 10px;
    border: 1px solid $borderColor;
    line-height: 1.5;
    word-break: break-word;
    // 允许编辑，禁止富文本
    -webkit-user-modify: read-write-plaintext-only !important;
    &:focus {
      outline: none;
    }
  }
  &-view {
    margin-top: 15px;
    width: 100%;
    min-height: 100px;
    box-sizing: border-box;
    padding: 10px;
    border: 1px solid $borderColor;
    line-height: 1.5;
    word-break: break-word;
  }
  &-tools {
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    border: 1px solid $borderColor;
    .btn {
      margin: 5px;
    }
  }
}
</style>
