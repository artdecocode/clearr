const { debuglog } = require('util');

const LOG = debuglog('clearr')

/**
 * Updates The String To Remove R (Carriage Return) Just Like The Terminal Would Do.
 * @param {Config} [config] Options for the program.
 * @param {boolean} [config.shouldRun=true] A boolean option. Default `true`.
 * @param {string} config.text A text to return.
 */
               async function clearr(config = {}) {
  const {
    shouldRun = true,
    text,
  } = config
  if (!shouldRun) return
  LOG('clearr called with %s', text)
  return text
}

/* documentary types/index.xml */
/**
 * @typedef {Object} Config Options for the program.
 * @prop {boolean} [shouldRun=true] A boolean option. Default `true`.
 * @prop {string} text A text to return.
 */


module.exports = clearr