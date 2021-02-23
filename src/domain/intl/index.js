import flatten from 'flat'
import { deDE, enUS } from './locales'
import { messages as deDEmessages } from './messages/de_DE'
import { messages as enUSmessages } from './messages/en_US'

const messages = {
  [enUS]: enUSmessages,
  [deDE]: deDEmessages,
}

export const getMessages = locale => flatten(messages[locale])

export const getLocale = () => navigator.language?.match(/^de/) ? deDE : enUS
