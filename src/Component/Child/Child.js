import React, { useContext } from 'react'
import { Formcontex } from '../SuperChild/Contexapi';

function Child() {

    const { formdata } = useContext(Formcontex);

  return (
      <>
    <h4>Child</h4>
    <label>Name:{formdata.name}    Age:{formdata.age}</label>
    <p></p>
    </>
  )
}

export default Child