import { equal, ok } from 'zoroaster/assert'
import Context from '../context'
import clearr from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof clearr, 'function')
  },
  async 'calls package without error'() {
    await clearr()
  },
  async 'gets a link to the fixture'({ FIXTURE }) {
    const res = await clearr({
      text: FIXTURE,
    })
    ok(res, FIXTURE)
  },
}

export default T