// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

import { md1 } from 'vuetify/blueprints'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

// Your own translation file
// import sv from './i18n/vuetify/sv'

// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify({
  defaults: {
    global: {
      ripple: false,
    },
    VSheet: {
      elevation: 4,
    },
  },
  theme: {
    defaultTheme: 'dark'
  },
  blueprint: md1,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    }
  },
})
