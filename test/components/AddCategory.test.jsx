import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components';

describe('Pruebas en <AddCategory/>', () => {
  test('Debe de cambiar el valor de la caja de texto', () => {
    //Se crea lo que probaremos
    render( <AddCategory onNewCategory = { () => {} } /> );
    //Obtemos el objeto que probaremos
    const input = screen.getByRole( 'textbox' );

    //Generamos el evento
    fireEvent.input( input, { target: { value: 'Saitama' } } );

    //Evaluemos que lo mandado en el evento sea correcto
    expect( input.value ).toBe( 'Saitama' );

    //screen.debug();
  });
  

  test('Debe de llamar onNewCategory si el input tiene un valor', () => {
    
    const inputValue = 'Saitama';
    const onNewCategory = jest.fn();

    //Se crea lo que probaremos
    render( <AddCategory onNewCategory = { onNewCategory } /> );

    const input = screen.getByRole( 'textbox' );
    const form = screen.getByRole( 'form' );

    //Generamos el evento
    fireEvent.input( input, { target: { value: 'Saitama' } } );
    fireEvent.submit( form );
    
    expect( input.value ).toBe('');
    expect( onNewCategory ).toHaveBeenCalled();
    expect( onNewCategory ).toHaveBeenCalledTimes(1);
    expect( onNewCategory ).toHaveBeenCalledWith( inputValue );
  });

  test('No debe de llamar el onNewCategory si el input está vació', () => {
    
    const onNewCategory = jest.fn();

    render( <AddCategory onNewCategory = { onNewCategory } /> );

    const form = screen.getByRole( 'form' );
    fireEvent.submit( form );

    expect( onNewCategory ).toHaveBeenCalledTimes(0);
    expect( onNewCategory ).not.toHaveBeenCalled();
  });
  
  
});
