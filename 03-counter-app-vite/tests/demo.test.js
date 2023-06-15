
describe('aprendiento jest', () => {
    test('primera prueba', () => {
        // inicializacion
        const msg1 = 'Hola Mundo'
    
        // estimulo
        const msg2 = msg1.trim()
    
        // observar el comportamiento... esperado
        expect(msg1).toBe(msg2)
    
    })
})
