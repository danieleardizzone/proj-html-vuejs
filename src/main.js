import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

import { faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

library.add(faXTwitter, faFacebookF, faInstagram, faLinkedin, faChevronDown)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
