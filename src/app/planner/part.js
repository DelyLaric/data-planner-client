export default {
  namespace: 'parts',

  title: 'master table',

  table: {
    dataSource: {
      table: 'data.Part'
    },

    views: [
      {
        label: '零件信息',
        fields: [
          { key: 'Id', title: '零件号' },
          { key: 'Name', title: '零件名称' },
          { key: 'IsChemical', title: '化学品' },
          { key: 'StorageConditions', title: '存储条件' },
          { key: 'StorageLife', title: '存储周期' },
          { key: 'Weight', title: '零件单重' },
          { key: 'WeightUnit', title: '单位' },
          { key: 'Length', title: '零件长（毫米）' },
          { key: 'Width', title: '零件宽（毫米）' },
          { key: 'Height', title: '零件高（毫米）' },
          { key: 'Material', title: '零件材质' },
          { key: 'Classification', title: '零件ABC分类' },
          { key: 'IsValuable', title: '贵重件' },
          { key: 'IsVulnerable', title: '易损件' }
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
    },

    forms: [
      {
        type: 'create',
        namespace: 'parts.create',

        title: '创建零件',
        submit: '提交',
        reset: '确认',

        table: 'data.Part',

        fields: [
          { type: 'input', key: 'Id', label: '零件号' },
          { type: 'input', key: 'Name', label: '零件名称' },
          { type: 'input', key: 'IsChemical', label: '化学品' },
          { type: 'input', key: 'StorageConditions', label: '存储条件' },
          { type: 'input', key: 'StorageLife', label: '存储周期' },
          { type: 'input', key: 'Weight', label: '零件单重' },
          { type: 'input', key: 'WeightUnit', label: '单位' },
          { type: 'input', key: 'Length', label: '零件长（毫米）' },
          { type: 'input', key: 'Width', label: '零件宽（毫米）' },
          { type: 'input', key: 'Height', label: '零件高（毫米）' },
          { type: 'input', key: 'Material', label: '零件材质' },
          {
            type: 'select', key: 'Classification', label: '零件ABC分类',
            options: [
              { value: 'A', label: 'A' },
              { value: 'B', label: 'B' },
              { value: 'C', label: 'C' }
            ]
          },
          {
            type: 'select', key: 'IsValuable', label: '贵重件',
            options: [
              { value: 'Y', label: 'Y' },
              { value: 'N', label: 'N' }
            ]
          },
          {
            type: 'select', key: 'IsVulnerable', label: '易损件',
            options: [
              { value: 'Y', label: 'Y' },
              { value: 'N', label: 'N' }
            ]
          }
        ]
      },
      {
        type: 'update',
        batch: true,

        title: '更新零件',
        submit: '提交',
        namespace: 'parts.update',

        table: 'data.Part',
        fields: [
          {
            default: data => data.Id,
            type: 'input', key: 'Id', label: '零件号'
          },
          {
            default: data => data.Name,
            type: 'input', key: 'Name', label: '零件名称'
          },
          {
            default: data => data.IsChemical,
            type: 'input', key: 'IsChemical', label: '化学品'
          },
          {
            default: data => data.StorageConditions,
            type: 'input', key: 'StorageConditions', label: '存储条件'
          },
          {
            default: data => data.StorageLife,
            type: 'input', key: 'StorageLife', label: '存储周期'
          },
          {
            default: data => data.Weight,
            type: 'input', key: 'Weight', label: '零件单重'
          },
          {
            default: data => data.WeightUnit,
            type: 'input', key: 'WeightUnit', label: '单位'
          },
          {
            default: data => data.Length,
            type: 'input', key: 'Length', label: '零件长（毫米）'
          },
          {
            default: data => data.Width,
            type: 'input', key: 'Width', label: '零件宽（毫米）'
          },
          {
            default: data => data.Height,
            type: 'input', key: 'Height', label: '零件高（毫米）'
          },
          {
            default: data => data.Material,
            type: 'input', key: 'Material', label: '零件材质'
          },
          {
            default: data => data.Classification,
            type: 'select', key: 'Classification', label: '零件ABC分类',
            options: [
              { value: 'A', label: 'A' },
              { value: 'B', label: 'B' },
              { value: 'C', label: 'C' }
            ]
          },
          {
            default: data => data.IsValuable,
            type: 'select', key: 'IsValuable', label: '贵重件',
            options: [
              { value: 'Y', label: 'Y' },
              { value: 'N', label: 'N' }
            ]
          },
          {
            default: data => data.IsVulnerable,
            type: 'select', key: 'IsVulnerable', label: '易损件',
            options: [
              { value: 'Y', label: 'Y' },
              { value: 'N', label: 'N' }
            ]
          }
        ]
      }
    ]
  },

  records: {
    table: 'data.Part',
    columns: [
      { key: 'Id', title: '零件号' },
      { key: 'Name', title: '零件名称' },
      { key: 'IsChemical', title: '化学品' },
      { key: 'StorageConditions', title: '存储特殊要求' },
      { key: 'StorageLife', title: '存储有效期' },
      { key: 'Weight', title: '零件单重' },
      { key: 'WeightUnit', title: '测量单位' },
      { key: 'Length', title: '零件长(毫米)' },
      { key: 'Width', title: '零件宽(毫米)' },
      { key: 'Height', title: '零件高(毫米)' },
      { key: 'Material', title: '零件材质' },
      { key: 'Classification', title: '零件ABC分类' },
      { key: 'IsValuable', title: '贵重件' },
      { key: 'IsVulnerable', title: '易损件' }
    ]
  },

  upload: {
    table: 'data.Part',
    namespace: 'Part.upload',
    unique: ['Id'],
    columns: [
      { key: 'Id', title: '零件号' },
      { key: 'Name', title: '零件名称' },
      { key: 'IsChemical', title: '化学品' },
      { key: 'StorageConditions', title: '存储特殊要求' },
      { key: 'StorageLife', title: '存储有效期' },
      { key: 'Weight', title: '零件单重' },
      { key: 'WeightUnit', title: '测量单位' },
      { key: 'Length', title: '零件长(毫米)' },
      { key: 'Width', title: '零件宽(毫米)' },
      { key: 'Height', title: '零件高(毫米)' },
      { key: 'Material', title: '零件材质' },
      { key: 'Classification', title: '零件ABC分类' },
      { key: 'IsValuable', title: '贵重件' },
      { key: 'IsVulnerable', title: '易损件' }
    ]
  }

}
