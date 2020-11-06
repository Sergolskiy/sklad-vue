import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

import en from './en'

const messages = {
  en: {
    message: en
  },
}

export const i18n = new VueI18n({
  locale: 'en', // set locale
  messages, // set locale messages
})
