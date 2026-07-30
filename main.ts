import { string2json } from './string2json.ts'

// deno compile は build 時の version 注入ができないため、release 時に scripts/release.ts が
// この定数を書き換える。フォーマットを変えると release.ts の正規表現が壊れるので注意
export const VERSION = 'jsonalize 0.1.0'

if (Deno.args.includes('--version')) {
  console.log(VERSION)
  Deno.exit(0)
}

// std の readAll は Deno 2 で削除されたため、Web 標準の Response 経由で stdin を全読みする
const inputString = await new Response(Deno.stdin.readable).text()

try {
  console.log(string2json(inputString))
} catch (error) {
  console.error('Failed to parse input:', error)
  Deno.exit(1)
}
