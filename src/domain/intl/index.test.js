import { getLocale } from './index'
import { deDE, enUS } from './locales'

const frFR = 'fr-FR'
const enGB = 'en-GB'
const deAT = 'de-AT'

let language

beforeEach(() => {
  jest.resetAllMocks()
  language = jest.spyOn(navigator, 'language', 'get')
  language.mockReturnValue(enUS)
})

describe('intl', () => {
  describe('getLocale', () => {
    it('returns default locale when no locale is available', () => {
      language.mockReturnValue(undefined)
      expect(getLocale()).toBe(enUS)
    })

    it('returns default locale when locale is not supported', () => {
      language.mockReturnValue(frFR)
      expect(getLocale()).toBe(enUS)
    })

    it('returns preferred locale when locale is supported', () => {
      language.mockReturnValue(deDE)
      expect(getLocale()).toBe(deDE)
    })

    it('returns similar locale when locale language is supported', () => {
      language.mockReturnValue(enGB)
      expect(getLocale()).toBe(enUS)

      language.mockReturnValue(deAT)
      expect(getLocale()).toBe(deDE)
    })
  })
})
