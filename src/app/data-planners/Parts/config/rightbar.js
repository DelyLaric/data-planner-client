/*
 * type 为模块名
 * title 必须是 所有模块中的 唯一值
 * table.name 为 数据表 的名
 */
export default [
  {
    module: 'create',

    title: '添加零件',
    button: '提交',

    table: 'data.master',
    columns: [
      { class: 'input', title: '零件号', name: 'id' },
      { class: 'input', title: '零件描述', name: 'part_id' },
      { class: 'input', title: '车型', name: 'fitmentpoint' }
    ]
  },
  {
    module: 'update',
    batch: true,

    title: '修改信息',
    button: '数据更新',

    table: 'data.master',
    columns: [
      { class: 'input', type: 'string', field: 'part_id', name: 'part_id', title: '零件描述' },
      { class: 'input', type: 'string', field: 'fitmentpoint', name: 'fitmentpoint', title: '车型' }
    ]
  }
]
