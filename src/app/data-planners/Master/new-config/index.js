export default {
  name: 'master',

  title: 'master table',

  tabs: [
    {
      name: 'table',

      title: 'Master Data',

      dataSource: {
        table: 'data.master'
      },

      views: [
        {
          name: '',
          title: '',
          fields: [
            { name: 'part_id', title: '零件号' },
            { name: 'part_description', title: '零件描述' }
          ]
        }
      ],

      query: {
        fields: {
          default: [0],
          options: [
            { class: 'input', field: 'part_id', title: 'PNO', operators: ['=', 'like'] },
            { class: 'input', field: 'fitmentpoint', title: 'FP', operators: ['=', 'like'] },
            { class: 'date', field: 'due_time', title: 'Due Time' }
          ]
        },

        radios: [
          {
            field: 'status',
            title: '状态',
            options: [
              { value: 'todo', title: 'todo' },
              { value: 'ongoing', title: 'planning' },
              { value: 'draft', title: 'planned' },
              { value: 'finish', title: 'finish' }
            ]
          }
        ]
      },

      forms: [
        {
          module: 'create',
      
          title: '创建数据',
          button: 'Create',
      
          table: 'data.master',
          columns: [
            { class: 'input', title: 'ID', name: 'id' },
            { class: 'input', title: '零件号', name: 'part_id' },
            { class: 'input', title: '工位', name: 'fitmentpoint' },
            { class: 'input', title: '包装 ID', name: 'a_kolli_id' }
          ]
        },
        {
          module: 'update',
          batch: true,

          title: '数据更新',
          button: '数据更新',

          table: 'data.master',
          columns: [
            { class: 'input', field: 'part_id', name: 'part_id', title: 'PNO' },
            { class: 'input', field: 'fitmentpoint', name: 'fitmentpoint', title: 'fitmentpoint' },
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
            { class: 'input', field: 'a_kolli_id', name: 'a_kolli_id', title: 'A-包装' },
            { class: 'input', field: 'a_kolli_fillings', name: 'a_kolli_fillings', title: '包装数量' },
            { class: 'input', field: 'f_kolli_id', name: 'f_kolli_id', title: 'F-包装' },
            { class: 'input', field: 'f_kolli_fillings', name: 'a_kolli_fillings', title: '包装数量' }
          ]
        }
      ]
    },
    {

    }
  ]
}
