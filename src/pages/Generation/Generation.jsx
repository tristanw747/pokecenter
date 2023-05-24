import React, { useState } from 'react';
// import useFetch from '../../hooks/useFetch';
// import PokemonList from './PokemonList';
import apiEndpoints from '../../data/apiEndpoints';
import Body from '../../components/Body/Body';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

function Generation({inputGen}) {
  // let id = ''
  // id = useParams().link

  const [gen, setGen] = useState('')

  useEffect(() => {
    setGen(inputGen)
 
  }, [inputGen]);

  // console.log(id)
  return (
    <Body gen={gen} />
  )
}

export default Generation