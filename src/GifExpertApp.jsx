import { useState } from "react";
import { AddCategory, GifGrid } from "./components/index";


const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = ( newCategory ) => {

        //Convertimos a mayusculas la entrada
        const cleanCategory = newCategory.toUpperCase();
        
        //Convertimos el arreglo a mayusculas
        const categoriesUpper = categories.map( propiedad => propiedad.toUpperCase());
        
        if( categoriesUpper.includes( cleanCategory )) return;

        setCategories([newCategory,...categories]);
    };

  return (
    <>
      {/* titulo */}
      <h1>GifExpertApp</h1>

      {/* Input */}
      <AddCategory 
      //setCategories = { setCategories }
        onNewCategory = { (event) => onAddCategory(event)}/>
      {/* Listado de Gif */}

        { 
        categories.map( category => {
            return (
              <GifGrid key= { category } category={ category }/>
            );
        })
        }
    </>
  );
}

export default GifExpertApp
