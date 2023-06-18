export const string2json = (input = '') => {
  const evalResult = Function('"use strict";return (' + input + ')')()
  const jsonString = JSON.stringify(evalResult, null, 2)

  return jsonString
}
