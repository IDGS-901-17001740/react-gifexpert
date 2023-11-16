import React, { useState } from 'react'

const AddCategory = ( { onNewCategory } ) => {

    const [inputValue, setInputValue] = useState('');

    const onInpuntChange = ({ target}) => {
        setInputValue( target.value );
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        const input = inputValue.trim();
        if( input.length <= 1) return;
        //setCategories( categories => [ inputValue,...categories ] );
        onNewCategory( input );
        setInputValue('');
    }
    return (
    <form onSubmit={ ( event ) => onSubmit( event )}>
      <input type="text" placeholder='Buscar Gifs' value={ inputValue } onChange={ onInpuntChange }/>
    </form>
  )
}

export default AddCategory
