import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr"

describe('07-deses-arr', () => {
  test('should return string and number', () => {
    const [gotString, gotNumber] = retornaArreglo()
    //const [wantString, wantNumbers] = []

    expect(typeof gotString).toBe('string')
    expect(typeof gotNumber).toBe('number')

    expect(gotString).toEqual(expect.any(String))
  })
  
})
