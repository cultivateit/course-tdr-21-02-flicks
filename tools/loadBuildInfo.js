import { spawnSync } from 'child_process'
import fs from 'fs'
import moment from 'moment'

const packageDotJson = JSON.parse(fs.readFileSync('../package.json', 'utf8'))

process.env.BUILD_INFO_ARTIFACT_NAME = packageDotJson.name
process.env.BUILD_INFO_ARTIFACT_VERSION = packageDotJson.version
process.env.BUILD_INFO_BUILD_DATE = moment().toString()
process.env.BUILD_INFO_COMMIT_ID = spawnSync('git', [ 'rev-parse', 'HEAD' ]).stdout.toString().trim()
process.env.BUILD_INFO_COMMIT_DATE = moment(spawnSync('git', [ 'show', '-s', '--format=%cI' ]).stdout.toString().trim())
  .toString()
