import { equal } from 'zoroaster/assert'
import clearR from '../../src'

export default {
  'replaces \\r correctly'() {
    const res = clearR(`hello world
...\r..?\r.!`)
    equal(res, `hello world
.!?`)
  },
}