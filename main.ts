import { readAll } from 'https://deno.land/std@0.105.0/io/util.ts'
import { string2json } from './string2json.ts'
;(async () => {
  const decoder = new TextDecoder()
  const inputData = await readAll(Deno.stdin)
  const inputString = decoder.decode(inputData)

  try {
    console.log(string2json(inputString))
  } catch (error) {
    console.error('Failed to parse input:', error)
  }
})()
