import { assertEquals } from '@std/assert'
import { string2json } from './string2json.ts'

Deno.test('string2json', () => {
  const jsObjectString = '{ id: 1, name: "john" }'
  const json = string2json(jsObjectString)

  assertEquals(
    JSON.parse(json),
    { id: 1, name: 'john' },
  )
})
