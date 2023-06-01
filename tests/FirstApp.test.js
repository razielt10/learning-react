import { render } from '@testing-library/react'
import { FirstApp } from '../src/FirstApp'


describe('tests on FirstApp', () => {
  
    test('should be equal an snapshot', () => {
      
        const title = 'Hello!!!'
        const {container } = render( <FirstApp title={title} /> )

        expect(container).toMatchSnapshot()
    });
    

    test('should be should be title (snapshot)', () => {
      
        const title = 'Hello!!!'
        const { getByText, getByTestId } = render( <FirstApp title={title} /> )

        expect( getByText(title) ).toBeTruthy()
        expect( getByTestId('test-title').innerHTML).toContain(title)
    });

    test('should show subtitle send on props', () => {
        const title = 'Hello!!!'
        const subTitle = 'Suntiltulo'
        const { getByText, getAllByText } = render( 
        <FirstApp 
            title={title}
            subTitle={subTitle}
        />
        )

        //hacemos una prueba para un array de elementos con e mismo texto
        expect( getAllByText(subTitle) ).toBeTruthy()
        expect( getAllByText(subTitle).length ).toBe(2)
  
    })
    
    
});
