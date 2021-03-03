import { THUNKS as INIT } from './init'
import { THUNKS as ROUTING } from './routing'
import { THUNKS as MOVIE } from './movie'

export const THUNKS = {
  ...INIT,
  ...ROUTING,
  ...MOVIE,
}
