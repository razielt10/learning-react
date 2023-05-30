import { render } from '@testing-library/react'
import { FirstApp } from '../src/FirstApp'


describe('tests on FirstApp', () => {
  
    test('should be equal an snapshot', () => {
      
        render( <FirstApp title="algo" /> )
    });
    

});
