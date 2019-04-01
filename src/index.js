/**
 * Clears the carriage return like the terminal would.
 * @param {string} string The string with the `\r`.
 * @example
 * const res = clearR(`...\r..?\r.!`)
 * // output: .!?
 */
const clearR = (string) => {
  const st = string.split('\n').map(l => {
    const r = l.split('\r')
    const t = r.reduce((acc, current, i) => {
      if (!i) return acc
      const { length } = current
      const after = acc.slice(length)
      return `${current}${after}`
    }, r[0])
    return t
  }).join('\n')
  return st
}

export default clearR