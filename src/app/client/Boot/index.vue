<template>
  <div>
    <AdaptiveScreen />
    <AxiosConfiger />
    <StorageLoader />
    <UserLoader />
    <RouterInterceptor />
  </div>
</template>

<script>
import AdaptiveScreen from './AdaptiveScreen'
import StorageLoader from './StorageLoader'
import AxiosConfiger from './AxiosConfiger'
import UserLoader from './UserLoader'
import RouterInterceptor from './RouterInterceptor'

export default {
  components: {
    AxiosConfiger,
    AdaptiveScreen,
    StorageLoader,
    UserLoader,
    RouterInterceptor
  }
}
</script>
