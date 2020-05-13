<template>
  <div class="msg-tpl-ctor" ref="msgTplCtor">
    <div class="left">
      <p>编辑区域：</p>
      <div
        class="msg-tpl-ctor-input"
        ref="msgTplCtorContent"
        :id="contentId"
        @input="handleInput"
      />
      <p>预览区域： </p>
      <div class="msg-tpl-ctor-view">
        {{ viewContent }}
      </div>
    </div>
    <div class="right">
      <p>标签列表：</p>
      <div class="msg-tpl-ctor-tools">
        <button
          v-for="item in tagList"
          :key="item"
          class="btn"
          @click="addTag(item)"
        >{{ item }}</button>
      </div>
    </div>
  </div>
</template>

<script>
import { getUuid, html2Text } from './helper'
export default {
  name: 'MessageTemplateCreator',
  props: {
    value: {
      type: String,
      default: ''
    },
    tagList: {
      type: Array,
      default: () => []
    },
    tagInputCls: {
      type: String,
      default: ''
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
      return html2Text(this.value)
    }
  },
  mounted () {
    // 初始化数据
    this.currentText && (this.$refs.msgTplCtorContent.innerHTML = this.currentText)
    document.addEventListener('selectionchange', this.handleSelect)
  },
  beforeDestroy () {
    // 卸载事件
    document.removeEventListener('selectionchange', this.handleSelect)
  },
  methods: {
    addTag (text) {
      const node = document.createElement('input')
      node.setAttribute('type', 'button')
      node.setAttribute('class', this.tagInputCls ? `tag-input ${this.tagInputCls}` : 'tag-input')
      node.setAttribute('readonly', true)
      node.setAttribute('value', text)
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
    handleInput (e) {
      this.updateData(e.target.innerHTML)
      this.currentText = e.target.innerText
    }
  }
}
</script>

<style lang="scss">
.tag-input {
  cursor: default !important;
  background-color: #ecf5ff;
  display: inline-block;
  padding: 0 3px;
  margin: 0 3px;
  line-height: 1.5;
  font-size: 12px;
  color: #409eff;
  border-radius: 4px;
  box-sizing: border-box;
  border: 0;
  outline: 0;
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
      display: inline-block;
      line-height: 1;
      white-space: nowrap;
      cursor: pointer;
      background: #FFF;
      border: 1px solid #DCDFE6;
      color: #606266;
      -webkit-appearance: none;
      text-align: center;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      outline: 0;
      margin: 5px;
      -webkit-transition: .1s;
      transition: .1s;
      font-weight: 500;
      -moz-user-select: none;
      -webkit-user-select: none;
      -ms-user-select: none;
      padding: 9px 15px;
      font-size: 12px;
      border-radius: 3px;
      &:focus, &:hover {
        color: #409EFF;
        border-color: #c6e2ff;
        background-color: #ecf5ff;
      }
      &:active {
        color: #3a8ee6;
        border-color: #3a8ee6;
        outline: 0;
      }
    }
  }
}
</style>
