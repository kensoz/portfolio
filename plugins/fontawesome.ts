import { NuxtApp } from '#app'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faStar, faUser, faBriefcase, faBook, faCircleNodes, faCube, faCubes, faSeedling } from '@fortawesome/free-solid-svg-icons'

export default defineNuxtPlugin((nuxtApp: NuxtApp) => {
  config.autoAddCss = false
  library.add(faStar, faGithub, faUser, faBriefcase, faBook, faCircleNodes, faCube, faCubes, faSeedling)
  nuxtApp.vueApp.component('fa-icon', FontAwesomeIcon)
})
