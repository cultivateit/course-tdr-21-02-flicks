/* eslint-disable no-console */

import fs from 'fs'
import './loadBuildInfo.js'
import config from './config.js'

const WRAPPER_HTML = '../build/index.html'
const ENCODING = 'utf8'

console.log('********************************* BUILD CONFIG *********************************')
console.log(config)
console.log('********************************************************************************')

const oldContent = fs.readFileSync(WRAPPER_HTML, ENCODING)
const match = /<script>window\.env=([^<]*)<\/script>/g
const replacement = `<script>window.env=${JSON.stringify(config)}</script>`
const newContent = oldContent.replace(match, replacement)
fs.writeFileSync(WRAPPER_HTML, newContent, ENCODING)
