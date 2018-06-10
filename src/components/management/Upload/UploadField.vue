<template>
  <Field>
    <Label>
      文件上传
    </Label>
    <Control>
      <div class="file has-name is-primary">
        <label class="file-label">
          <input
            type="file"
            class="file-input"
            @click="$event.target.value = null"
            @input="handleFileChange"
          >
          <span class="file-cta">
            <Icon name="upload" />
            <div style="width: 8px"></div>
            <span class="file-label">
              选择文件
            </span>
          </span>
          <span
            class="file-name"
            style="min-width: 200px; max-width: 1000px"
          >
            {{fileName}}
          </span>
        </label>
      </div>
      <Error v-show="fileTypeError">
        必须选择 csv 文件
      </Error>
    </Control>
  </Field>
</template>

<script>
export default {
  inject: ['upload'],

  data () {
    return {
      file: false,
      fileName: '',
      fileTypeError: false
    }
  },

  methods: {
    handleFileChange (event) {
      // console.log(event)
      this.fileName = event.target.value
      this.file = event.target.files[0]
      this.checkFileType() && this.readFile()
      event.target.value = null
    },

    checkFileType () {
      if (this.file.type === 'text/csv') {
        this.fileTypeError = false
        return true
      }

      this.fileTypeError = true
      return false
    },

    readFile () {
      let reader = new FileReader()
      reader.readAsText(this.file, 'gbk')
      reader.onloadend = () => {
        this.handleFileData(reader.result)
      }
    },

    handleFileData (data) {
      let result = data.split('\r\n')

      for (let i = 0, L = result.length; i < L; i++) {
        result[i] = result[i].split(',')
      }

      this.upload.$commit('setHeaders', result[0])

      result.splice(0, 1)

      this.upload.$commit('setExcelData', result)
    }
  }
}
</script>
