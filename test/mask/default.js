import makeTestSuite from '@zoroaster/mask'
import Context from '../context'
import clearr from '../../src'

// export default
makeTestSuite('test/result', {
  async getResults(input) {
    const res = await clearr({
      text: input,
    })
    return res
  },
  context: Context,
})