export default {
  namespace: 'Line',

  title: 'Line Manage',

  table: {
    dataSource: {
      table: 'data.Line'
    },

    views: [
      {
        label: '工位信息',
        fields: [
          { key: 'Id', title: '工位编码' },
          { key: 'Name', title: '线体' },
          { key: 'LinesidePlanner', title: '线边规划工程师' }
        ]
      }
    ],

    forms: [
      {
        type: 'create',

        title: '添加工位',

        submit: '确定',
        reset: '重置',

        namespace: 'Line.Create',

        table: 'data.Line',

        fields: [
          { type: 'input', key: 'Id', label: '工位编号' },
          { type: 'input', key: 'Name', label: '线体' },
          { type: 'input', key: 'LinesidePlanner', label: '线边规划工程师' }
        ]
      },
      {
        type: 'update',
        batch: true,

        title: '工位维护',

        submit: '确定',
        reset: '重置',

        namespace: 'Line.Create',

        table: 'data.Line',

        fields: [
          {
            default: data => data['Id'],
            type: 'input', key: 'Id', label: '工位编号'
          },
          {
            default: data => data['Name'],
            type: 'input', key: 'Name', label: '线体'
          },
          {
            default: data => data['LinesidePlanner'],
            type: 'input', key: 'LinesidePlanner', label: '线边规划工程师'
          }
        ]
      }
    ],

    query: {
      fields: {
        default: [0],
        options: [
          { class: 'input', field: 'Id', title: '零件号', operators: ['=', 'like'] }
        ]
      },

      radios: [

      ]
    }
  },

  records: {
    table: 'data.parts',
    columns: [
      { column: 'id', title: '零件号' },
      { column: 'description', title: '零件描述' },
      { column: 'car_models', title: '车型' },
      { column: 'usage', title: '使用量' }
    ]
  },

  upload: {
    table: 'data.Line',
    namespace: 'Line.upload',
    unique: ['Id'],
    columns: [
      { name: 'Id', title: '工位编号' },
      { name: 'Name', title: '线体' },
      { name: 'LinesidePlanner', title: '线边规划工程师' }
    ]
  }

}
