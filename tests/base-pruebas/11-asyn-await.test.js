import { getImagen } from "../../src/base-pruebas/11-async-await"

describe('11-async-await', () => {
  
    test('success on getImage', async () => {

        const apiKey = 'eim24RuezM1Yiad7So8Jz3O6YC5hvzw9';
        const img = await getImagen(apiKey)

        expect(typeof img.url).toBe('string')

    })
    
    test('error on getUrl', async () => {

        const apiKey = 'eim24RuezM1Yiad7So8Jz3O6YC5hvzw9aa';
        const error = await getImagen(apiKey)

        expect(typeof error).toBe('object')
        expect(error).toEqual(new Error('errors.giphy-client'))
    })
})
