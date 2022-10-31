import { NuxtApp } from '#app'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faUser, faBriefcase, faEnvelope, faCircleNodes, faCube, faLocationDot } from '@fortawesome/free-solid-svg-icons'

export default defineNuxtPlugin((nuxtApp: NuxtApp) => {
  config.autoAddCss = false
  library.add(faGithub, faUser, faBriefcase, faEnvelope, faCircleNodes, faCube, faLocationDot)
  nuxtApp.vueApp.component('fa-icon', FontAwesomeIcon)
})
