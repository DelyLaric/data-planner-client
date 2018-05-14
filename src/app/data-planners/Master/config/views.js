export default [
  /*
   * view.title 唯一
   * field.column 唯一
   */
  {
    title: '数据',
    fields: [
      { column: 'part_id', title: '零件号' },
      { column: 'part_description', title: '零件描述' },
      { column: 'car_models', title: '车型' },
      { column: 'line_id', title: '生产线' },
      { column: 'line_tact', title: 'Tact' },
      { column: 'line_side', title: 'Side' },
      { column: 'fitmentpoint', title: '工位' },
      { column: 'lsp', title: '规划员' },
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
  },
  {
    title: '状态',
    fields: [
      { column: 'part_id', title: '零件号' },
      { column: 'car_models', title: '车型' },
      { column: 'line_id', title: 'Line' },
      { column: 'a_kolli_id', title: 'A Kolli' },
      { column: 'f_kolli_id', title: 'F-Kolli' },
      { column: 'status', title: 'Status', trans: {
        type: 'tag',
        map: {
          draft: 'warning',
          ongoing: 'info',
          todo: 'danger',
          finish: 'success'
        },
        options: [
          { value: 'todo', color: 'danger' },
          { value: 'draft', color: 'warning' },
          { value: 'ongoing', color: 'info' },
          { value: 'finish', color: 'success' }
        ]
      }},
      { column: 'duetime', title: 'Due Time' }
    ]
  },
  {
    title: '包装',
    fields: [
      { column: 'part_id', title: '零件号' },
      { column: 'a_kolli_id', title: 'A-Kolli' },
      { column: 'a_kolli_fillings', title: 'A-Kolli-Fillings' },
      { column: 'a_kolli_length', title: 'A-Kolli Length' },
      { column: 'a_kolli_width', title: 'A-Kolli Wdith' },
      { column: 'a_kolli_height', title: 'A-Kolli Height' },
      { column: 'f_kolli_id', title: 'F-Kolli' },
      { column: 'f_kolli_fillings', title: 'F-Kolli-Fillings' },
      { column: 'f_kolli_length', title: 'F-Kolli Length' },
      { column: 'f_kolli_width', title: 'F-Kolli Wdith' },
      { column: 'f_kolli_height', title: 'F-Kolli Height' }
    ]
  }
]
