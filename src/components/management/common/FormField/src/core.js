// 输入转入 field 的管道
// 保证用户输入能够按正确的值传递
export function changeValue (val) {
  if (val === '') this.field.$value = undefined
  else this.field.$value = val
  // console.log(this.field.$value)
}

// 为 create 模块中的字段 自动设置默认值
export function setDefault () {
  if (this.page.module === 'create') {
    this.field.$value = this.field.default
  }
}

export function isActive () {
  return (
    this.page.module === 'update' &&
    (this.field.$oldValue !== this.field.$value)
  )
}
