/*
 * type 为模块名
 * title 必须是 所有模块中的 唯一值
 * table.name 为 数据表 的名
 */
export default [
  {
    module: 'create',

    title: '创建数据',
    button: 'Create',

    table: 'data.master',
    columns: [
      { class: 'input', type: 'string', title: 'ID', name: 'id' },
      { class: 'input', type: 'string', title: '零件号', name: 'part_id' },
      { class: 'input', type: 'string', title: '工位', name: 'fitmentpoint' },
      { class: 'input', type: 'string', title: '包装 ID', name: 'a_kolli_id' }
    ]
  },
  {
    module: 'update',
    batch: true,

    title: '数据更新',
    button: '数据更新',

    table: 'data.master',
    columns: [
      { class: 'input', type: 'string', field: 'part_id', name: 'part_id', title: 'PNO' },
      { class: 'input', type: 'string', field: 'fitmentpoint', name: 'fitmentpoint', title: 'fitmentpoint' },
      { class: 'date', field: 'duetime', name: 'duetime', title: 'Due Time' },
      { class: 'select', name: 'status', field: 'status', title: 'Status', options: [
        { value: 'todo', title: 'todo' },
        { value: 'ongoing', title: 'onGoing' },
        { value: 'draft', title: 'draft' },
        { value: 'finish', title: 'finish' }
      ] }
    ]
  },
  {
    module: 'update',

    batch: true,

    title: '更新包装',
    button: 'Update',

    table: 'data.master',
    columns: [
      { class: 'input', type: 'string', field: 'a_kolli_id', name: 'a_kolli_id', title: 'A-包装' },
      { class: 'input', type: 'string', field: 'a_kolli_fillings', name: 'a_kolli_fillings', title: '包装数量' },
      { class: 'input', type: 'number', field: 'f_kolli_id', name: 'f_kolli_id', title: 'F-包装' },
      { class: 'input', type: 'string', field: 'f_kolli_fillings', name: 'a_kolli_fillings', title: '包装数量' }
    ]
  }
]
