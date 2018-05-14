import Button from './Button'
import ButtonList from './Button/ButtonList'
import ButtonListItem from './Button/ButtonListItem'
import Checkbox from './Checkbox'
import Container from './Container'
import DatePicker from './DatePicker'
import Divider from './Divider'
import Icon from './Icon'
import Input from './Form/Input'
import Modal from './Modal'
import MultiSelect from './Form/MultiSelect'
import Pagination from './Pagination'
import Tabs from './Tabs'
import Title from './Title'

import Select from './Form/Select'
import Option from './Form/Option'

import Field from './Form/Field'
import Control from './Form/Control'
import Label from './Form/Label'
import FieldBody from './Form/FieldBody'
import FieldLabel from './Form/FieldLabel'
import FieldError from './Form/Error'

import Loading from './Loading'
import Message from './Message'

export default {
  install (Vue, opts = {}) {
    Vue.component('AsyncButton', Button.Async)
    Vue.component('Button', Button.Base)
    Vue.component('Checkbox', Checkbox)
    Vue.component('Container', Container)
    Vue.component('DatePicker', DatePicker)
    Vue.component('Divider', Divider)
    Vue.component('Icon', Icon)
    Vue.component('Input', Input)
    Vue.component('Modal', Modal)
    Vue.component('MultiSelect', MultiSelect)
    Vue.component('Pagination', Pagination)
    Vue.component('Tabs', Tabs.Tabs)
    Vue.component('TabItem', Tabs.TabItem)
    Vue.component('Title', Title)

    Vue.component('ButtonList', ButtonList)
    Vue.component('ButtonListItem', ButtonListItem)

    Vue.component('Select', Select)
    Vue.component('Option', Option)

    Vue.component('Control', Control)
    Vue.component('Error', FieldError)
    Vue.component('Field', Field)
    Vue.component('FieldBody', FieldBody)
    Vue.component('FieldLabel', FieldLabel)
    Vue.component('Label', Label)

    Vue.prototype.$loading = Loading
    Vue.prototype.$message = Message
  }
}
