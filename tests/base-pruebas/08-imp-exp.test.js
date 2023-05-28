import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp"
import heores from '../../src/data/heroes'

describe('08-imp-exp', () => {
  test('success getHeroeById return Hero', () => {
    
    const id = 1
    const got = getHeroeById(id)
    const want = heores[0]

    expect(got).toEqual(want)

  })

  test('error getHeroeById return undefined', () => {
    
    const id = 112322
    const got = getHeroeById(id)
    const want = undefined

    expect(got).toEqual(want)
    expect(got).toBeFalsy() // null undefined or false

  })

  test('success getHeroesByOwner for DC', () => {
    
    const owner = 'DC'
    const got = getHeroesByOwner(owner)
    const want = [heores[0], heores[2], heores[3]]

    expect(got).toEqual(want)
    expect(got.length).toBe(3)

  })


  test('success getHeroesByOwner for Marvel', () => {
    
    const owner = 'Marvel'
    const got = getHeroesByOwner(owner)
    const want = [heores[1], heores[4]]

    expect(got).toEqual(want)
    expect(got.length).toBe(2)

  })
  
})
