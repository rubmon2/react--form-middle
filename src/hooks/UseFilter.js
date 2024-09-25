import React from 'react'

export const UseFilter = (array,inputValue) => {

    const filter = array.filter(filt => {
        const searchLowerCase = inputValue.toLowerCase();
        const nameMatch = filt.name.toLowerCase().includes(searchLowerCase);
        const usernameMatch = filt.username.toLowerCase().includes(searchLowerCase);
      
        console.log(filt.name, filt.username, nameMatch, usernameMatch); // Verificar los valores aquí
      
        return nameMatch || usernameMatch;
      })


  return {
    filter
  }
}
