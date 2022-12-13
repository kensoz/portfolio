import { createApp } from 'vue'
import './style/index.css'
import App from './App.vue'

/* import and use the fontawesome */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faUser,
  faBriefcase,
  faEnvelope,
  faCircleNodes,
  faCube,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons'
library.add(faGithub, faUser, faBriefcase, faEnvelope, faCircleNodes, faCube, faLocationDot)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
