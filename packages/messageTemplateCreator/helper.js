/**
 *  按照一定格式将html转成纯文本
 * eg:
 *   <input type="button" class="tag-input" readonly="true" value="法院名称"/>这是文本
 *   =>
 *   [法院名称]这是文本
 */
export function html2Text (str) {
  return str.replace(/\<input([^\>]+)\>/g, item => {
    const divNode = document.createElement('div')
    divNode.innerHTML = item
    return `[${divNode.firstChild.value}]`
  })
}

// 生成随机的长度为10的字符串
export function getUuid () {
  return Math.random().toString(36).substr(2)
}
