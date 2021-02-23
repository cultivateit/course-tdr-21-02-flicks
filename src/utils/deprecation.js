// More information can be found here:
//
// Articles:
// https://medium.com/trabe/deprecation-warnings-in-legacy-javascript-code-using-es2015-proxies-8e50f338b46e
// https://www.sitepoint.com/getting-started-with-codemods/
//
// ESLint plugins:
// https://www.npmjs.com/package/eslint-plugin-deprecate
//
// Libraries:
// https://www.npmjs.com/package/util-deprecate
// https://www.npmjs.com/package/depd
// https://www.npmjs.com/package/deprecation
// https://www.npmjs.com/package/deprecate
// https://www.npmjs.com/package/deprecated
//
// Automated Migrations:
// https://github.com/facebook/codemod
// https://github.com/facebook/jscodeshift

export const deprecationWarning = process.env.NODE_ENV === 'production' ? () => {} : console.warn

// eslint-disable-next-line max-params
export const deprecate = (fn, name, since, replacement) => (...args) => {
  deprecationWarning(`Calling deprecated function "${name}"!`,
    since ? `It is deprecated since ${since}.` : '',
    replacement ? `Use "${replacement}" instead.` : '')
  return fn.apply(this, args)
}
