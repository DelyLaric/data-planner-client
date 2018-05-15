export default {
  name: 'master',

  title: 'master table',

  table: {
    // tab type
    name: 'table',

    key: 'master',
    title: '主数据表',

    dataSource: {
      table: 'data.master_view'
    },

    views: [
      {
        label: '状态',
        fields: [
          { column: 'part_id', title: '零件号' },
          { column: 'car_models', title: '车型' },
          { column: 'line_id', title: '生产线' },
          { column: 'a_kolli_id', title: '包装代码' },
          { column: 'status', title: '状态', trans: [{
            type: 'tag',
            map: {
              null: { value: '未设置', color: 'light' },
              todo: { value: '待规划', color: 'danger' },
              finish: { value: '已弃用', color: 'light' },
              ongoing: { value: '规划中', color: 'info' },
              draft: { value: '已规划', color: 'success' }
            }
          } ] },
          { column: 'duetime', title: '截止日期' },
          { title: '其他', trans: [{type: 'records'}] }
        ]
      },
      {
        label: '零件信息',
        fields: [
          { column: 'part_id', title: '零件号' },
          { column: 'part_description', title: '零件描述' },
          { column: 'car_models', title: '车型' },
          { column: 'usage', title: '用量' }
        ]
      },
      {
        label: '包装信息',
        fields: [
          { column: 'part_id', title: '零件号' },
          { column: 'a_kolli_id', title: '包装代码' },
          { column: 'a_kolli_fillings', title: '数量' },
          { column: 'a_kolli_length', title: '长' },
          { column: 'a_kolli_width', title: '宽' },
          { column: 'a_kolli_height', title: '高' }
        ]
      },
      {
        label: '全部信息',
        fields: [
          { column: 'part_id', title: '零件号' },
          { column: 'part_description', title: '零件描述' },
          { column: 'car_models', title: '车型' },
          { column: 'line_id', title: '生产线' },
          { column: 'line_tact', title: 'Tact' },
          { column: 'line_side', title: 'Side' },
          { column: 'fitmentpoint', title: '工位' },
          { column: 'lsp', title: '负责人' },
          { column: 'a_kolli_id', title: '包装代码' },
          { column: 'a_kolli_fillings', title: '包装数量' },
          { column: 'a_kolli_length', title: '长' },
          { column: 'a_kolli_width', title: '宽' },

          // { column: 'a_kolli_id', title: 'A-Kolli' },
          // { column: 'a_kolli_fillings', title: 'A-Kolli-Fillings' },
          // { column: 'a_kolli_length', title: 'A-Kolli Length' },
          // { column: 'a_kolli_width', title: 'A-Kolli Wdith' },
          // { column: 'a_kolli_height', title: 'A-Kolli Height' },
          // { column: 'f_kolli_id', title: 'F-Kolli' },
          // { column: 'f_kolli_fillings', title: 'F-Kolli-Fillings' },
          // { column: 'f_kolli_length', title: 'F-Kolli Length' },
          // { column: 'f_kolli_width', title: 'F-Kolli Wdith' },
          // { column: 'f_kolli_height', title: 'F-Kolli Height' },
          // { column: 'kcsq_id', title: 'KCSQ' },
          // { column: 'kcsq_english_name', title: 'KCSQ English Name' },
          // { column: 'kcsq_chinese_name', title: 'KCSQ Chinese Name' },

          { column: 'a_kolli_height', title: '高' }
        ]
      }
    ],

    query: {
      fields: {
        default: [0],
        options: [
          { class: 'input', field: 'part_id', title: '零件号', operators: ['=', 'like'] },
          { class: 'input', field: 'fitmentpoint', title: '工位', operators: ['=', 'like'] },
          { class: 'date', field: 'due_time', title: '截止日期', operators: ['='] }
        ]
      },

      radios: [
        {
          field: 'status',
          title: '状态',
          options: [
            { value: undefined, title: '所有' },
            { value: 'todo', title: '待规划' },
            { value: 'ongoing', title: '规划中' },
            { value: 'draft', title: '已规划' },
            { value: 'finish', title: '已完成' }
          ]
        }
      ]
    },

    forms: [
      {
        type: 'create',

        title: '创建数据',
        submit: '创建数据',
        reset: '重置',
        namespace: 'master.create',

        table: 'data.master',

        fields: [
          { class: 'input', title: 'ID', name: 'id' },
          { class: 'input', title: '零件号', name: 'part_id', rules: [
            { name: 'required', message: '零件号必须填写' },
            { name: 'exists:data.data.parts,id', message: '该零件号不存在' }
          ] },
          { class: 'input', title: '工位', name: 'fitmentpoint' },
          { class: 'input', title: '包装 ID', name: 'a_kolli_id' }
        ]
      },
      {
        type: 'update',
        batch: true,

        title: '数据更新',
        submit: '数据更新',
        namespace: 'master.update',

        table: 'data.master',
        fields: [
          {
            default: data => data.part_id,
            class: 'input', name: 'part_id', title: '零件号'
          },
          {
            default: data => data.fitmentpoint,
            class: 'input', name: 'fitmentpoint', title: '工位'
          },
          {
            default: data => data.a_kolli_id,
            class: 'input', name: 'a_kolli_id', title: '包装 ID'
          },
          {
            default: data => data.a_kolli_fillings,
            class: 'input', name: 'a_kolli_fillings', title: '包装数量'
          },
          {
            default: data => data.duetime,
            class: 'date', name: 'duetime', title: '截止日期'
          },
          {
            default: data => data.status,
            class: 'select', column: 'status', name: 'status', title: '状态',
            options: [
              { value: 'todo', title: 'todo' },
              { value: 'ongoing', title: 'onGoing' },
              { value: 'draft', title: 'draft' },
              { value: 'finish', title: 'finish' }
            ]
          }
        ]
      }
    ]
  },

  import: {
    table: 'data.master',
    columns: [
      { column: 'part_id', title: '零件号' },
      { column: 'fitmentpoint', title: '工位' },
      { column: 'a_kolli_id', title: '包装代码' },
      { column: 'a_kolli_fillings', title: '包装数量' }
    ]
  },

  records: {
    table: 'data.master',
    columns: [
      { column: 'part_id', title: '零件号' },
      { column: 'fitmentpoint', title: '工位' },
      { column: 'a_kolli_id', title: '包装代码' },
      { column: 'a_kolli_fillings', title: '包装数量' },
      { column: 'duetime', title: '截止日期' },
      { column: 'status', title: '状态', trans: [{
        type: 'tag',
        map: {
          null: { value: '未设置', color: 'light' },
          todo: { value: '待规划', color: 'danger' },
          finish: { value: '已弃用', color: 'light' },
          ongoing: { value: '规划中', color: 'info' },
          draft: { value: '已规划', color: 'success' }
        }
      }] }
    ]
  }

}
