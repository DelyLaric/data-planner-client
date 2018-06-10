export default {
  namespace: 'supplier',

  title: 'master table',

  table: {
    dataSource: {
      table: 'data.Supplier'
    },

    views: [
      {
        label: '供应商信息',
        fields: [
          { key: 'Id', title: '供应商代码' },
          { key: 'Name', title: '供应商名称' },
          { key: 'Address', title: '供应商出货地址' },
          { key: 'Nationality', title: '供应商出货地址-国家' },
          { key: 'ShippingCity', title: '供应商出货地址-市' },
          { key: 'DeliveryType', title: '交付方式' },
          { key: 'SupplyCycle', title: '供货周期(自然日)' },
          { key: 'ShippingTime', title: '运输时间（小时）' },
          { key: 'ShippingType', title: '运送方式' },
          { key: 'EmergencyResponseTime', title: '紧急响应时间（小时）' },
          { key: 'MinimumOrder', title: '最小起定量' },
          { key: 'Unit', title: '单位(个／桶／瓶)' },
          { key: 'SafetyStock', title: '安全库存' }
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

        title: '新增供应商',
        submit: '确定',

        reset: '重置',
        namespace: 'Supplier.create',

        table: 'data.Supplier',

        fields: [
          { type: 'input', key: 'Id', label: '供应商代码' },
          { type: 'input', key: 'Name', label: '供应商名称' },
          { type: 'input', key: 'Address', label: '供应商出货地址' },
          { type: 'input', key: 'Nationality', label: '供应商出货地址-国家' },
          { type: 'input', key: 'ShippingCity', label: '供应商出货地址-市' },
          { type: 'input', key: 'DeliveryType', label: '交付方式' },
          { type: 'input', key: 'SupplyCycle', label: '供货周期(自然日)' },
          { type: 'input', key: 'ShippingTime', label: '运输时间（小时）' },
          { type: 'input', key: 'ShippingType', label: '运送方式' },
          { type: 'input', key: 'EmergencyResponseTime', label: '紧急响应时间（小时）' },
          { type: 'input', key: 'MinimumOrder', label: '最小起定量' },
          { type: 'input', key: 'Unit', label: '单位(个／桶／瓶)' },
          { type: 'input', key: 'SafetyStock', label: '安全库存' }
        ]
      },
      {
        type: 'update',

        title: '供应商维护',
        submit: '确定',

        reset: '重置',
        namespace: 'master.create',

        table: 'data.Supplier',

        fields: [
          {
            default: data => data.Id,
            type: 'input', key: 'Id', label: '供应商代码'
          },
          {
            default: data => data.Name,
            type: 'input', key: 'Name', label: '供应商名称'
          },
          {
            default: data => data.Address,
            type: 'input', key: 'Address', label: '供应商出货地址'
          },
          {
            default: data => data.Nationality,
            type: 'input', key: 'Nationality', label: '供应商出货地址-国家'
          },
          {
            default: data => data.ShippingCity,
            type: 'input', key: 'ShippingCity', label: '供应商出货地址-市'
          },
          {
            default: data => data.DeliveryType,
            type: 'input', key: 'DeliveryType', label: '交付方式'
          },
          {
            default: data => data.SupplyCycle,
            type: 'input', key: 'SupplyCycle', label: '供货周期(自然日)'
          },
          {
            default: data => data.ShippingTime,
            type: 'input', key: 'ShippingTime', label: '运输时间（小时）'
          },
          {
            default: data => data.ShippingType,
            type: 'input', key: 'ShippingType', label: '运送方式'
          },
          {
            default: data => data.EmergencyResponseTime,
            type: 'input', key: 'EmergencyResponseTime', label: '紧急响应时间（小时）'
          },
          {
            default: data => data.MinimumOrder,
            type: 'input', key: 'MinimumOrder', label: '最小起定量'
          },
          {
            default: data => data.Unit,
            type: 'input', key: 'Unit', label: '单位(个／桶／瓶)'
          },
          {
            default: data => data.SafetyStock,
            type: 'input', key: 'SafetyStock', label: '安全库存'
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
  },

  upload: {
    table: 'data.Supplier',
    namespace: 'Supplier.upload',
    unique: ['Id'],
    columns: [
      { name: 'Id', title: '供应商代码' },
      { name: 'Name', title: '零部件供应商' },
      { name: 'Address', title: '供应商出货地址' },
      { name: 'Nationality', title: '供应商地址-国家' },
      { name: 'ShippingCity', title: '供应商出货地址-市' },
      { name: 'Distance', title: '出货地—收货地距离（公里）' },
      { name: 'DeliveryType', title: '交付方式' },
      { name: 'SupplyCycle', title: '供货周期（自然日）' },
      { name: 'ShippingTime', title: '运输时间（小时）' },
      { name: 'ShippingType', title: '运送方式' },
      { name: 'EmergencyResponseTime', title: '紧急响应时间（小时）' },
      { name: 'MinimumOrder', title: '最小起订量' },
      { name: 'Unit', title: '单位(个／桶／瓶)' },
      { name: 'SafetyStock', title: '安全库存' }
    ]
  }

}
