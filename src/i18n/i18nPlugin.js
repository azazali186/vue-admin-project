import { createI18n } from 'vue-i18n'
import messages from './index'

export default createI18n({
  legacy: false,
  locale: 'en',
  globalInjection: true,
  messages
})