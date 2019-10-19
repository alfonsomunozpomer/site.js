//////////////////////////////////////////////////////////////////////
//
// Command: disable
//
// Disables the web server daemon (stops it and removes it
// from startup items).
//
//////////////////////////////////////////////////////////////////////

const _disable = require('../lib/disable')
const ensure = require('../lib/ensure')
const Site = require('../../index')

function disable () {
  ensure.systemctl()
  ensure.root('disable')

  Site.logAppNameAndVersion()

  try {
    // Disable and stop the web server.
    _disable()
  } catch (error) {
    process.exit(1)
  }
}

module.exports = disable
