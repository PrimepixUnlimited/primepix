#!/usr/bin/env node

import dependencies from './_dependencies'

if (dependencies.haveChanged()) {
  dependencies.showWarningBanner()
}
