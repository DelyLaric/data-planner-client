<template>
  <div class="file is-link has-name is-fullwidth" style="width: 400px">
    <label class="file-label">
      <input
        @change="inputFile"
        class="file-input"
        type="file"
      >
      <span class="file-cta">
        <Icon name="upload"/>
        <a class="button is-loading" v-if="false"></a>

        <span class="file-label">

        </span>
      </span>
      <span class="file-name">
        {{fileName}}
      </span>
    </label>
  </div>
</template>

<script>
export default {
  inject: ['upload'],

  data () {
    return {
      file: {},
      fileName: ''
    }
  },

  methods: {
    inputFile (event) {
      this.fileName = event.target.value
      this.file = event.target.files[0]
      this.file && this.handleFile()
    },

    handleFile () {
      this.checkFileType() &&
      this.readFile()
    },

    checkFileType () {
      if (this.file.type === 'text/csv') return true
      this.handleErrorMessage()
      return false
    },

    readFile () {
      let reader = new FileReader()
      reader.readAsText(this.file, 'gbk')
      reader.onloadend = () => {
        this.$emit('input', reader.result)
      }
    },

    handleErrorMessage () {
      this.$message.error('必须选择 .csv 文件')
    }
  }
}
</script>
