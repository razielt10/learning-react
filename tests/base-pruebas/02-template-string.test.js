import { getSaludo } from "../../src/base-pruebas/02-template-string";


describe('on tempatle strings', () => {

    test('success getSaludo', () => {
        const nombre   = 'JC';
        const apellido = 'GL';

        const nombreCompleto = nombre + ' ' + apellido;
        
        const want = 'Hola ' + nombreCompleto
        const got = getSaludo(nombreCompleto)

        expect(got).toBe(want)
    })
})