require('./')

const test = require('tape')

test('push if true', t => {
  t.plan(1)

  const arr = ['a', 'b', 'c']
  arr.pushIf(true, 'd')
  t.deepEqual(arr, ['a', 'b', 'c', 'd'])
})

test('dont push if false', t => {
  t.plan(1)
  
  const arr = ['a', 'b', 'c']
  arr.pushIf(false, 'd')
  t.deepEqual(arr, ['a', 'b', 'c'])
})
