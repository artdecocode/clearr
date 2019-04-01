/* alanode example/ */
import clearr from '../src'

(async () => {
  const res = await clearr({
    text: 'example',
  })
  console.log(res)
})()