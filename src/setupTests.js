// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect'

// Refer to release notes of version 7.0.0 option 3 regarding removal of MutationObserver shim
// https://github.com/testing-library/dom-testing-library/releases/tag/v7.0.0
import MutationObserver from '@sheerun/mutationobserver-shim'

window.MutationObserver = MutationObserver

// localStorage mock
const localStorageMock = { getItem: jest.fn(), setItem: jest.fn(), removeItem: jest.fn(), clear: jest.fn() }
global.localStorage = localStorageMock

// fetch mock
global.fetch = require('jest-fetch-mock')
