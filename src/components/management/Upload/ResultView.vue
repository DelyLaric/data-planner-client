<template>
  <Container>
    <Container v-show="view === 'result'" padding="6px">
      <Field>
        <Title level="4" style="margin-bottom: 18px; margin-top: 10px">
          上传结果
        </Title>
        <Control>
          <div class="table-content">
            <table class="table is-bordered is-fullwidth is-centered is-nowraped">
              <tbody>
                <tr>
                  <td>全部数据</td>
                  <td style="min-width: 150px">
                    <strong>
                      {{excelData.length}}
                    </strong>
                    条
                  </td>
                </tr>
                <tr>
                  <td>上传成功</td>
                  <td>
                    <strong>
                      {{successData.length}}
                    </strong>
                    条
                  </td>
                </tr>
                <tr>
                  <td>上传失败</td>
                  <td>
                    <u>
                      <a @click="view = 'error'">
                        {{excelData.length - successData.length}} 条
                      </a>
                    </u>
                  </td>
                </tr>
                <!-- <tr>
                  <td>忽略数据</td>
                  <td>
                    <u>
                      <a class="has-text-danger">
                        {{excelData.length - successData.length}} 条
                      </a>
                    </u>
                  </td>
                </tr> -->
                <!-- <tr>
                  <td>Excel 重复</td>
                  <td>
                    <a>
                      {{ignoredData.length}}
                      条
                    </a>
                  </td>
                </tr> -->
              </tbody>
            </table>
          </div>
        </Control>
        <Divider height="6px" />
        <Button @click="container.$commit('selectUploadView', 'form')">
          <Icon name="arrow-double-left" />
          <span>
            返回
          </span>
        </Button>
      </Field>
    </Container>

    <DataTable
      v-show="view === 'error'"
      :header="excelHeader"
      :data="errorData"
      @close="view = 'result'"
    />
  </Container>
</template>

<script>
import DataTable from './DataTable'

export default {
  components: {
    DataTable
  },

  inject: ['container', 'upload'],

  data () {
    return {
      'view': 'result'
    }
  },

  computed: {
    excelHeader () {
      return this.upload.$state('headers')
    },

    successData () {
      return this.upload.$state('data.success')
    },

    uploadData () {
      return this.upload.$state('data.upload')
    },

    errorData () {
      return this.upload.$state('data.error')
    },

    excelData () {
      return this.upload.$state('data.excel')
    },

    ignoredData () {
      return this.upload.$state('data.ignored')
    }
  }
}
</script>
