/* eslint-disable import/no-extraneous-dependencies */

import * as os from 'os'
import * as path from 'path'
import * as exec from 'child_process'

const { EOL } = os
const chalk = require('chalk')

export const haveChanged = () => {
  const GIT_DIR = process.env.GIT_DIR || path.resolve(__dirname, '..', '..', '.git')
  const output = exec.execSync(`git diff HEAD@{1} --stat -- ${GIT_DIR}/../yarn.lock`).toString()

  return output.indexOf('yarn.lock') > -1
}

export const showWarningBanner = () => {
  const c = chalk.bgYellow.black
  const b = c.bold

  const cmd = chalk.blue.bold('yarn install')
  process.stdout.write(`${b(' Project dependencies have changed             ')}${EOL}`)
  process.stdout.write(`${c(` You should run ${cmd} before continuing `)}${EOL}`)
  process.stdout.write(EOL)
}

export default {
  haveChanged,
  showWarningBanner
}
