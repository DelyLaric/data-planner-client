export default {
  namespace: 'Master',

  title: 'Master Manage',

  table: {
    dataSource: {
      table: 'data.Master'
    },

    views: [
      {
        label: '状态信息',
        fields: [
          { key: 'PartId', title: '零件号' },
          { key: 'PartName', title: '零件名称' },
          { key: 'LineId', title: '工位编号' },

          { key: 'Duetime', title: '截止日期' },
          { key: 'Status', title: '规划状态', trans: [{
            type: 'tag',
            map: {
              null: { value: '未设置', color: 'light' },
              todo: { value: '待规划', color: 'danger' },
              finish: { value: '已弃用', color: 'light' },
              ongoing: { value: '规划中', color: 'info' },
              draft: { value: '已规划', color: 'success' }
            }
          } ] },
          {
            title: '其他',
            trans: [{
              type: 'link',
              label: '历史纪录',
              event: 'show-records'
            }]
          }
        ]
      },
      {
        label: '基本信息',
        fields: [
          { key: 'PartId', title: '零件号' },
          { key: 'PartName', title: '零件名称' },

          { key: 'Version', title: '版本号' },
          { key: 'ModuleId', title: '分装模块编号' },
          { key: 'ModuleName', title: '模块化名称' },
          { key: 'SubpackComment', title: '分装备注' },
          { key: 'EcnSubstitute', title: 'ECN替代零件' },
          { key: 'PartSource', title: '零件来源' }
        ]
      },
      {
        label: '零件信息',
        fields: [
          { key: 'PartId', title: '零件号' },
          { key: 'PartName', title: '零件名称' },

          { key: 'PorcurementStatus', title: '采购状态' },
          { key: 'PartIsChemical', title: '化学品' },
          { key: 'PartStorageLife', title: '存储有效期' },
          { key: 'PartStorageConditions', title: '存储特殊要求' },
          { key: 'PartWeight', title: '零件单重' },
          { key: 'PartWeightUnit', title: '测量单位' },
          { key: 'PartLehgth', title: '零件长（毫米）' },
          { key: 'PartWidth', title: '零件宽（毫米）' },
          { key: 'PartHeight', title: '零件高（毫米）' },
          { key: 'CarModel', title: '车型' },
          { key: 'workshop', title: '使用车间' },
          { key: 'CarCategory', title: '整车分类' },
          { key: 'PartMaterial', title: '零件材质' },
          { key: 'PartClassification', title: '零件ABC分类' },
          { key: 'PartIsValuable', title: '贵重件' },
          { key: 'PartIsVulnerable', title: '易损件' }
        ]
      },
      {
        label: '工位信息',
        fields: [
          { key: 'PartId', title: '零件号' },
          { key: 'PartName', title: '零件名称' },

          { key: 'LinesidePlanner', title: '线边规划工程师' },
          { key: 'LineName', title: '线体' },
          { key: 'LineId', title: '工位编号' },
          { key: 'Lineside', title: '工位左右' },
          { key: 'LineNumber', title: '工位数量' },
          { key: 'LineUsage', title: '工位使用量' },
          { key: 'LineCarUsage', title: '单车用量' },
          { key: 'LineSelectRate', title: '选装比率' }
        ]
      },
      {
        label: '供应商信息',
        fields: [
          { key: 'PartId', title: '零件号' },
          { key: 'PartName', title: '零件名称' },

          { key: 'SupplierDomesticSign', title: '国产化标识' },
          { key: 'SupplierId', title: '供应商代码' },
          { key: 'SupplierName', title: '零部件供应商' },
          { key: 'SupplierAddress', title: '供应商出货地址' },
          { key: 'SupplierNationality', title: '供应商地址－国家' },
          { key: 'SupplierShippingCity', title: '供应商出货地址' },
          { key: 'SupplierDistance', title: '供应商距离' },
          { key: 'SupplierDeliveryType', title: '交付方式' },
          { key: 'SupplierSupplyCycle', title: '供货周期（自然日）' },
          { key: 'SupplierShippingTime', title: '运输时间' },
          { key: 'SupplierShippingType', title: '运输方式' },
          { key: 'SupplierEmergencyResponseTime', title: '紧急响应时间（小时）' },
          { key: 'SupplierMinimumOrder', title: '最小起定量' },
          { key: 'SupplierUnit', title: '单位（个/桶/瓶子）' },
          { key: 'SupplierSafetyStock', title: '安全库存' }
        ]
      },
      {
        label: '包装信息',
        fields: [
          { key: 'PartId', title: '零件号' },
          { key: 'PartName', title: '零件名称' },

          { key: 'PackingId', title: '包装代码' },
          { key: 'PackingNumber', title: '包装收容数' },
          { key: 'PackingContainerType', title: '容器类型' },
          { key: 'PackingLength', title: '长（毫米）' },
          { key: 'PackingWidth', title: '宽（毫米）' },
          { key: 'PackingHeight', title: '高' },
          { key: 'PackingType', title: '包装类型' },
          { key: 'PackingArrivalType', title: '到货包装类型' }
        ]
      },
      {
        label: '入厂物流',
        fields: [
          { key: 'PartId', title: '零件号' },
          { key: 'PartName', title: '零件名称' },

          { key: 'CargoCrossing', title: '收货道口' },
          { key: 'CargoWarehouseId', title: '库房' },
          { key: 'CargoSupplyPath', title: '零件上线路径' },
          { key: 'CargoSupplyPathId', title: '零件上线路径代码' }
        ]
      },
      {
        label: '存储信息',
        fields: [
          { key: 'PartId', title: '零件号' },
          { key: 'PartName', title: '零件名称' },

          { key: 'StoreWarehouseId', title: '库区号' },
          { key: 'StoreLocationId', title: '库位号' },
          { key: 'StoreStackingNumber', title: '堆高数（层）' },
          { key: 'StoreMinNumber', title: '最小值（件）' },
          { key: 'StoreMaxNumber', title: '最大值（件）' }
        ]
      },
      {
        label: '翻包信息',
        fields: [
          { key: 'PartId', title: '零件号' },
          { key: 'PartName', title: '零件名称' },

          { key: 'RepackWarehouseId', title: '库区号' },
          { key: 'RepackLocationId', title: '库位号' },
          { key: 'RepackId', title: '翻包器具代码' },
          { key: 'RepackNumber', title: '翻包数量' },
          { key: 'RepackLength', title: '长（毫米）' },
          { key: 'RepackWidth', title: '宽（毫米）' },
          { key: 'RepackHeight', title: '高（毫米）' },
          { key: 'RepackMinNumber', title: '最小值（件）' },
          { key: 'RepackMaxNumber', title: '最大值（件）' },
          { key: 'RepackSupplyComment', title: '上线包装说明' }
        ]
      },
      {
        label: 'SPS/SQ信息',
        fields: [
          { key: 'PartId', title: '零件号' },
          { key: 'PartName', title: '零件名称' },

          { key: 'SpsSqWarehouseId', title: '库区号' },
          { key: 'SpsSqId', title: 'SPS/SQ编号' },
          { key: 'SpsSqUtensilId', title: 'SPS/SQ器具编号' },
          { key: 'SpsSqPositionId', title: 'SPS/SQ位置编号' },
          { key: 'SpsSqLocationId', title: '库位号' },
          { key: 'SpsSqMinNumber', title: '最小值（件）' },
          { key: 'SpsSqMaxNumber', title: '最大值（件）' }
        ]
      },
      {
        label: '线边信息',
        fields: [
          { key: 'PartId', title: '零件号' },
          { key: 'PartName', title: '零件名称' },

          { key: 'LinesidePullMethod', title: '拉动方式' },
          { key: 'LinesideStoreMethod', title: '线边存储方式' },
          { key: 'LinesideDollyType', title: 'Dolly类型' },
          { key: 'LinesideMinNumber', title: '最小值（件）' },
          { key: 'LinesideMaxNumber', title: '最大值（件）' },
          { key: 'LinesideMaterialRackId', title: '料架编号' },
          { key: 'LinesidePackingId', title: '线边包装代码' },
          { key: 'LinesidePackingNumber', title: '线边包装数量' },
          { key: 'LinesidePackingLength', title: '长（毫米）' },
          { key: 'LinesidePackingWidth', title: '宽（毫米）' },
          { key: 'LinesidePackingHeight', title: '高（毫米）' }
        ]
      }
    ],

    query: {
      fields: {
        default: [0],
        options: [
          {
            class: 'input', field: 'part_id',
            title: '零件号', operators: ['=', 'like']
          },
          {
            class: 'input', field: 'fitmentpoint',
            title: '工位', operators: ['=', 'like']
          },
          {
            class: 'date', field: 'duetime',
            title: '截止日期', operators: ['=']
          }
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

        title: '新增规划',

        submit: '确定',
        reset: '重置',

        namespace: 'Plan.Create',

        table: 'data.Plan',

        fields: [
          { type: 'input', key: 'PartId', label: '零件号' },
          { type: 'input', key: 'LineId', label: '工位编码' },
          { type: 'select', key: 'Lineside', label: '工位左右', options: [
            { value: '0', label: '0' },
            { value: '1', label: '1' }
          ] },
          { type: 'input', key: 'Version', label: '版本号', default: '1' },
          { type: 'input', key: 'ModuleId', label: '分装模块编号' },
          { type: 'input', key: 'ModuleName', label: '模块化名称' },
          { type: 'auto', key: 'Status', value: 'todo' }
        ]
      },
      {
        type: 'update',
        batch: true,

        title: '状态管理',

        submit: '确认',

        namespace: 'Plan.UpdateState',

        table: 'data.Plan',
        fields: [
          {
            default: data => data['Status'],
            type: 'select', key: 'Status', label: '规划状态',
            options: [
              { value: 'todo', label: '待规划' },
              { value: 'ongoing', label: '规划中' },
              { value: 'draft', label: '已规划' },
              { value: 'finish', label: '已弃用' }
            ]
          },
          {
            default: data => data['Duetime'],
            type: 'date', key: 'Duetime', label: '截止日期'
          }
        ]
      },
      {
        type: 'update',
        batch: true,

        title: '零件规划',

        submit: '确认',

        namespace: 'Plan.UpdatePart',

        table: 'data.Plan',
        fields: [
          {
            default: data => data['PartId'],
            type: 'input', key: 'PartId', label: '零件号'
          },
          {
            default: data => data['Version'],
            type: 'input', key: 'Version', label: '版本号'
          },
          {
            default: data => data['ModuleId'],
            type: 'input', key: 'ModuleId', label: '分装模块编号'
          },
          {
            default: data => data['ModuleName'],
            type: 'input', key: 'ModuleName', label: '模块化名称'
          },
          {
            default: data => data['SubpackComment'],
            type: 'input', key: 'SubpackComment', label: '分装备注'
          },
          {
            default: data => data['EcnSubstitute'],
            type: 'input', key: 'EcnSubstitute', label: 'ECN替代零件'
          },
          {
            default: data => data['PartSource'],
            type: 'input', key: 'PartSource', label: '零件来源'
          }
        ]
      },
      {
        type: 'update',
        batch: true,

        title: '工位规划',

        submit: '确认',

        namespace: 'Plan.UpdateLine',

        table: 'data.Plan',
        fields: [
          {
            default: data => data['LinesidePlanner'],
            type: 'input', key: 'LinesidePlanner', label: '线边规划工程师'
          },
          {
            default: data => data['LineId'],
            type: 'input', key: 'LineId', label: '工位编号'
          },
          {
            default: data => data['Lineside'],
            type: 'select', key: 'Lineside', label: '工位左右',
            options: [
              { value: '0', label: '0' },
              { value: '1', label: '1' }
            ]
          },
          {
            default: data => data['LineNumber'],
            type: 'input', key: 'LineNumber', label: '工位数量'
          },
          {
            default: data => data['LineUsage'],
            type: 'input', key: 'LineUsage', label: '工位用量'
          },
          {
            default: data => data['LineCarUsage'],
            type: 'input', key: 'LineCarUsage', label: '单车用量'
          },
          {
            default: data => data['LineSelectRate'],
            type: 'input', key: 'LineSelectRate', label: '选装比率'
          }
        ]
      },
      {
        type: 'update',
        batch: true,

        title: '供应商',

        submit: '确认',

        namespace: 'Plan.UpdateSupplier',

        table: 'data.Plan',
        fields: [
          {
            default: data => data['SupplierDomesticSign'],
            type: 'select', key: 'SupplierDomesticSign', label: '国产化标识',
            options: [
              { value: 'D', label: 'D' },
              { value: 'K', label: 'K' }
            ]
          },
          {
            default: data => data['SupplierId'],
            type: 'input', key: 'SupplierId', label: '供应商代码',
            rules: [
              { name: 'required', message: '供应商不能为空' },
              { name: 'exists:data.data.Supplier,Id', message: '供应商代码不存在' }
            ]
          }
        ]
      },
      {
        type: 'update',
        batch: true,

        title: '包装管理',

        submit: '确认',

        namespace: 'Plan.UpdatePacking',

        table: 'data.Plan',
        fields: [
          {
            default: data => data['PackingId'],
            type: 'input', key: 'PackingId', label: '包装代码'
          },
          {
            default: data => data['PackingNumber'],
            type: 'input', key: 'PackingNumber', label: '包装收容数'
          },
          {
            default: data => data['PackingContainerType'],
            type: 'input', key: 'PackingContainerType', label: '容器类型'
          },
          {
            default: data => data['PackingLength'],
            type: 'input', key: 'PackingLength', label: '长（毫米）'
          },
          {
            default: data => data['PackingWidth'],
            type: 'input', key: 'PackingWidth', label: '宽（毫米）'
          },
          {
            default: data => data['PackingHeight'],
            type: 'input', key: 'PackingHeight', label: '高（毫米）'
          },
          {
            default: data => data['PackingType'],
            type: 'input', key: 'PackingType', label: '包装类型'
          },
          {
            default: data => data['PackingArrivalType'],
            type: 'input', key: 'PackingArrivalType', label: '到货包装类型'
          }
        ]
      }
    ]
  },

  records: {
    table: 'data.Plan',
    columns: [
      { key: 'PartId', title: '零件号' },
      { key: 'Version', title: '新版本号' },
      { key: 'ModuleId', title: '模块分装编号' },
      { key: 'ModuleName', title: '模块化名称' },
      { key: 'SubpackComment', title: '分装备注' },
      { key: 'EcnSubstitute', title: 'ECN替代零件' },
      { key: 'PartSource', title: '零件来源' },
      { key: 'PorcurementStatus', title: '采购状态' },

      { key: 'CarModel', title: '车型' },
      { key: 'Workshop', title: '使用车间' },
      { key: 'CarCategory', title: '整车分类' },

      { key: 'LinesidePlanner', title: '线边规划工程师' },
      { key: 'LineId', title: '工位编号' },
      { key: 'Lineside', title: '工位左右' },
      { key: 'LineNumber', title: '工位数量' },
      { key: 'LineUsage', title: '工位用量' },
      { key: 'LineCarUsage', title: '单车用量' },
      { key: 'LineSelectRate', title: '选装比率' },

      { key: 'SupplierDomesticSign', title: '国产化标识' },
      { key: 'SupplierId', title: '供应商代码' },

      { key: 'PackingId', title: '包装代码' },
      { key: 'PackingNumber', title: '包装收容数' },
      { key: 'PackingContainerType', title: '容器类型' },
      { key: 'PackingLength', title: '长（毫米）' },
      { key: 'PackingWidth', title: '宽（毫米）' },
      { key: 'PackingHeight', title: '高（毫米）' },
      { key: 'PackingType', title: '包装类型' },
      { key: 'PackingArrivalType', title: '到货包装类型' },

      { key: 'CargoCrossing', title: '收货道口' },
      { key: 'CargoWarehouseId', title: '库房' },
      { key: 'CargoSupplyPath', title: '零件上线路径' },
      { key: 'CargoSupplyPathId', title: '零件上线路径代码' },

      { key: 'StoreWarehouseId', title: '库区号' },
      { key: 'StoreLocationId', title: '库位号' },
      { key: 'StoreStackingNumber', title: '堆高（层数）' },
      { key: 'StoreMinNumber', title: '最小值（件）' },
      { key: 'StoreMaxNumber', title: '最大值（件）' },

      { key: 'RepackWarehouseId', title: '库区号' },
      { key: 'RepackLocationId', title: '库位号' },
      { key: 'RepackId', title: '翻包器具代码' },
      { key: 'RepackNumber', title: '翻包数量' },
      { key: 'RepackLength', title: '长（毫米）' },
      { key: 'RepackWidth', title: '宽（毫米）' },
      { key: 'RepackHeight', title: '高（毫米）' },
      { key: 'RepackMinNumber', title: '最小值（件）' },
      { key: 'RepackMaxNumber', title: '最大值（件）' },
      { key: 'RepackSupplyComment', title: '上线包装说明' },

      { key: 'SpsSqWarehouseId', title: '库区号' },
      { key: 'SpsSqId', title: 'SPS/SQ编号' },
      { key: 'SpsSqUtensilId', title: 'SPS/SQ器具编号' },
      { key: 'SpsSqPositionId', title: 'SPS/SQ位置编号' },
      { key: 'SpsSqLocationId', title: '库位号' },
      { key: 'SpsSqMinNumber', title: '最小值（件）' },
      { key: 'SpsSqMaxNumber', title: '最大值（件）' },

      { key: 'LinesidePullMethod', title: '拉动方式' },
      { key: 'LinesideStoreMethod', title: '线边存储方式' },
      { key: 'LinesideDollyType', title: 'Dolly类型' },
      { key: 'LinesideMinNumber', title: '最小值（件）' },
      { key: 'LinesideMaxNumber', title: '最大值（件）' },
      { key: 'LinesideMaterialRackId', title: '线边料架编号' },
      { key: 'LinesidePackingId', title: '线边包装代码' },
      { key: 'LinesidePackingNumber', title: '线边包装量' },
      { key: 'LinesidePackingLength', title: '长（毫米）' },
      { key: 'LinesidePackingWidth', title: '宽（毫米）' },
      { key: 'LinesidePackingHeight', title: '高（毫米）' }
    ]
  },

  upload: {
    table: 'data.Plan',
    namespace: 'master.upload',
    unique: ['PartId', 'LineId'],
    columns: [
      { key: 'PartId', title: '零件号' },
      { key: 'Version', title: '新版本号' },
      { key: 'ModuleId', title: '模块分装编号' },
      { key: 'ModuleName', title: '模块化名称' },
      { key: 'SubpackComment', title: '分装备注' },
      { key: 'EcnSubstitute', title: 'ECN替代零件' },
      { key: 'PartSource', title: '零件来源' },
      { key: 'PorcurementStatus', title: '采购状态' },

      { key: 'CarModel', title: '车型' },
      { key: 'Workshop', title: '使用车间' },
      { key: 'CarCategory', title: '整车分类' },

      { key: 'LinesidePlanner', title: '线边规划工程师' },
      { key: 'LineId', title: '工位编号' },
      { key: 'Lineside', title: '工位左右' },
      { key: 'LineNumber', title: '工位数量' },
      { key: 'LineUsage', title: '工位用量' },
      { key: 'LineCarUsage', title: '单车用量' },
      { key: 'LineSelectRate', title: '选装比率' },

      { key: 'SupplierDomesticSign', title: '国产化标识' },
      { key: 'SupplierId', title: '供应商代码' },

      { key: 'PackingId', title: '包装代码' },
      { key: 'PackingNumber', title: '包装收容数' },
      { key: 'PackingContainerType', title: '容器类型' },
      { key: 'PackingLength', title: '长（毫米）' },
      { key: 'PackingWidth', title: '宽（毫米）' },
      { key: 'PackingHeight', title: '高（毫米）' },
      { key: 'PackingType', title: '包装类型' },
      { key: 'PackingArrivalType', title: '到货包装类型' },

      { key: 'CargoCrossing', title: '收货道口' },
      { key: 'CargoWarehouseId', title: '库房' },
      { key: 'CargoSupplyPath', title: '零件上线路径' },
      { key: 'CargoSupplyPathId', title: '零件上线路径代码' },

      { key: 'StoreWarehouseId', title: '库区号' },
      { key: 'StoreLocationId', title: '库位号' },
      { key: 'StoreStackingNumber', title: '堆高（层数）' },
      { key: 'StoreMinNumber', title: '最小值（件）' },
      { key: 'StoreMaxNumber', title: '最大值（件）' },

      { key: 'RepackWarehouseId', title: '库区号' },
      { key: 'RepackLocationId', title: '库位号' },
      { key: 'RepackId', title: '翻包器具代码' },
      { key: 'RepackNumber', title: '翻包数量' },
      { key: 'RepackLength', title: '长（毫米）' },
      { key: 'RepackWidth', title: '宽（毫米）' },
      { key: 'RepackHeight', title: '高（毫米）' },
      { key: 'RepackMinNumber', title: '最小值（件）' },
      { key: 'RepackMaxNumber', title: '最大值（件）' },
      { key: 'RepackSupplyComment', title: '上线包装说明' },

      { key: 'SpsSqWarehouseId', title: '库区号' },
      { key: 'SpsSqId', title: 'SPS/SQ编号' },
      { key: 'SpsSqUtensilId', title: 'SPS/SQ器具编号' },
      { key: 'SpsSqPositionId', title: 'SPS/SQ位置编号' },
      { key: 'SpsSqLocationId', title: '库位号' },
      { key: 'SpsSqMinNumber', title: '最小值（件）' },
      { key: 'SpsSqMaxNumber', title: '最大值（件）' },

      { key: 'LinesidePullMethod', title: '拉动方式' },
      { key: 'LinesideStoreMethod', title: '线边存储方式' },
      { key: 'LinesideDollyType', title: 'Dolly类型' },
      { key: 'LinesideMinNumber', title: '最小值（件）' },
      { key: 'LinesideMaxNumber', title: '最大值（件）' },
      { key: 'LinesideMaterialRackId', title: '线边料架编号' },
      { key: 'LinesidePackingId', title: '线边包装代码' },
      { key: 'LinesidePackingNumber', title: '线边包装量' },
      { key: 'LinesidePackingLength', title: '长（毫米）' },
      { key: 'LinesidePackingWidth', title: '宽（毫米）' },
      { key: 'LinesidePackingHeight', title: '高（毫米）' },

      { key: 'TotalDemand', title: '总需求量demand' }
    ]
  }
}
