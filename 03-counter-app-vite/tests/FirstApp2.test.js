import { render,screen } from '@testing-library/react'
import { FirstApp } from '../src/FirstApp'


describe('tests on FirstApp', () => {

    const title = 'Hello!!!'
    const subTitle = 'The Subtitle'

    test('should be equal an snapshot', () => {
      
        const {container } = render( <FirstApp title={title} /> )

        expect(container).toMatchSnapshot()
    });
    

    test('should be should be title (snapshot)', () => {
      
        render( <FirstApp title={title} /> )

        expect( screen.getByText(title) ).toBeTruthy();
    });

    test('should show title on h1', () => {
        render( <FirstApp title={title} /> )

        expect( screen.getByRole( 'heading', {level:1} ).innerHTML ).toContain(title);
  
    }) 
    
    test('should show subTitle send on propd', () => {
        render( <FirstApp title={title} subTitle={subTitle} /> )

        expect( screen.getAllByText( subTitle ).length ).toBe(2);
  
    }) 
});
