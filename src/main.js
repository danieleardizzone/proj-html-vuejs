import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

import { faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

import { faFileLines } from '@fortawesome/free-regular-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'

import { faCheck } from '@fortawesome/free-solid-svg-icons'

library.add(faXTwitter, faFacebookF, faInstagram, faLinkedin, faChevronDown, faFileLines, faUser, faCheck)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')