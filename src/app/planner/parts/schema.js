export default {
  name: 'parts',

  title: 'master table',

  table: {
    // tab type
    name: 'table',

    key: 'parts',
    title: '零件数据表',

    dataSource: {
      table: 'data.parts'
    },

    views: [
      {
        label: '状态',
        fields: [
          { column: 'id', title: '零件号' },
          { column: 'description', title: '零件描述' },
          { column: 'car_models', title: '车型' },
          { column: 'usage', title: '使用量' },
          { title: '其他', trans: [{type: 'records'}] }
        ]
      }
    ],

    query: {
      fields: {
        default: [0],
        options: [
          { class: 'input', field: 'id', title: 'PNO', operators: ['=', 'like'] }
        ]
      },

      radios: [

      ]
    },

    forms: [
      {
        type: 'create',

        title: '创建零件',
        submit: '提交',
        reset: '确认',
        namespace: 'parts.create',

        table: 'data.parts',

        fields: [
          {
            class: 'input', title: '零件号', name: 'id',
            rules: [
              { name: 'required', message: '零件号必须填写' },
              { name: 'unique:data.data.parts,id', message: '零件号已存在' }
            ]
          },
          { class: 'input', title: '零件描述', name: 'description' },
          { class: 'input', title: '车型', name: 'car_models' },
          { class: 'input', title: '用量', name: 'usage' }
        ]
      },
      {
        type: 'update',
        batch: true,

        title: '更新零件',
        submit: '提交',
        namespace: 'parts.update',

        table: 'data.parts',
        fields: [
          {
            class: 'input', title: '零件描述', name: 'description',
            default: data => data.description
          },
          {
            class: 'input', title: '车型', name: 'car_models',
            default: data => data.car_models
          },
          {
            class: 'input', title: '用量', name: 'usage',
            default: data => data.usage
          }
        ]
      }
    ]
  },

  records: {
    table: 'data.parts',
    columns: [
      { column: 'id', title: '零件号' },
      { column: 'description', title: '零件描述' },
      { column: 'car_models', title: '车型' },
      { column: 'usage', title: '使用量' }
    ]
  }

}
