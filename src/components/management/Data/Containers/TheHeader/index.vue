<template>
  <div
    style="white-space: nowrap; padding-bottom: 4px; display: flex"
  >
    <ButtonList>
      <DataRefreshButton />

      <DataQueryButton />
      <DataExportButton />
    </ButtonList>

    <TheRightbarButtons />
  </div>
</template>

<script>
import DataQueryButton from './DataQueryButton'
import DataExportButton from './DataExportButton'
import ViewSelectButton from './ViewSelectButton'
import TheRightbarButtons from './RightbarButtons'
import DataRefreshButton from './DataRefreshButton'

export default {
  components: {
    DataQueryButton,
    DataExportButton,
    ViewSelectButton,
    DataRefreshButton,
    TheRightbarButtons
  },

  inject: ['rightbar', 'query']
}
</script>
