import { THUNKS as INIT } from './init'
import { THUNKS as ROUTING } from './routing'

export const THUNKS = {
  ...INIT,
  ...ROUTING,
}
