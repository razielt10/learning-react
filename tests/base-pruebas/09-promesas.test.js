import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas"
import heores from '../../src/data/heroes'

describe('test for 09-promesas', () => {

  test('success getHeroeByIdAsync return hero with done', (done) => {
    const id = 1
    const want = heores[0]
    getHeroeByIdAsync(id)
        .then( hero  => {
            expect(hero).toEqual(want);
            done();
        })
  })

  test('error getHeroeByIdAsync with done', (done) => {
    const id = 100
    //const want = new Error('No se puedo encontrar el heroe')
    getHeroeByIdAsync(id)
        .catch( error  => {
            //expect(error).toBe('error')
            expect(error).toBe('No se pudo encontrar el héroe');
            done();
        })
  })
  
})
