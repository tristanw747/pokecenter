import React, { useState } from 'react';
import './Home.scss';
// import useFetch from '../../hooks/useFetch';
// import PokemonList from './PokemonList';
import apiEndpoints from '../../data/apiEndpoints';
import Body from '../../components/Body/Body';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

function Home() {
  const [gen, setGen] = useState(apiEndpoints.gen1)

 

  return (
    <Body gen={gen} setGen={setGen} />
  )

}

export default Home