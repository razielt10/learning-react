import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones"

describe('05-funciones test', () => {
  test('should getUser return object', () => {
    const got = getUser();

    const want = {
        uid: 'ABC123',
        username: 'El_Papi1502'
    }
    expect(got).toEqual(want)
  })
  
  test('should getUsuariActivo return a object', () => {
    const got = getUsuarioActivo('JC')
    const want = {
        uid: 'ABC567',
        username: 'JC'
    }
    expect(got).toEqual(want)
  })
  
})
