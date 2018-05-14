export default {
  /*
   ＊ 单选条件，根据某一字段的值预先给定的分类查询
   * 系统将默认一个 不限 选项作为初始值
   * 可给定任意多个值作为 options
   */
  radios: [
    {
      field: 'status',
      title: '状态',
      options: [
        { value: 'todo', title: 'todo' },
        { value: 'ongoing', title: 'onGoing' },
        { value: 'draft', title: 'draft' },
        { value: 'finish', title: 'finish' }
      ]
    }
  ],

  checkboxes: [
    /* bug: 存在 and/or 的问题，暂时关闭该功能
     * 多选条件，每个 option 将绑定指定字段的某个值
     * check 即以该值作为查询条件，uncheck 则不选择
     */
    // {
    //   title: '多选状态1',
    //   items: [
    //     { field: 'status', title: 'todo', value: 'todo' },
    //     { field: 'status', title: 'onGoing', value: 'ongoing' },
    //     { field: 'status', title: 'draft', value: 'draft' },
    //     { field: 'status', title: 'finish', value: 'finish' }
    //   ]
    // }
  ],

  /*
   * 可选查询条件
   * fixed 为 true 则将查询条件默认固定到表单
   * type 为字段值的类型，为 number 或 string 两种
   * operators 为支持的操作符类型，包括 = | > | < | like 四种
   */
  optional: {
    default: [0],

    items: [
      {
        field: 'part_id', title: '零件号', type: 'number',
        operators: [ '=' ]
      },
      {
        field: 'fitmentpoint', title: '工位', type: 'string',
        operators: [ '=', '>' ]
      },
      {
        field: 'package_id', title: '包装代码', type: 'string',
        operators: [ '=' ]
      },
      {
        field: 'lsp', title: 'LSP', type: 'string',
        operators: [ '=', '>', '<', 'like' ]
      }
    ]
  }
}
