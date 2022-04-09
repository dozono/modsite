import PrimeVue from 'primevue/config'
import Tooltip from 'primevue/tooltip'
import { type UserModule } from '~/types'

export const install: UserModule = ({ app }) => {
  app.use(PrimeVue)
  app.directive('tooltip', Tooltip)
}
