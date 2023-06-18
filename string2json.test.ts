import { assertEquals } from 'https://deno.land/std@0.105.0/testing/asserts.ts'
import { string2json } from './string2json.ts'

Deno.test('string2json', () => {
  const jsObjectString = '{ id: 1, name: "john" }'
  const json = string2json(jsObjectString)

  assertEquals(
    JSON.parse(json),
    { id: 1, name: 'john' },
  )
})
