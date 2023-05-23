import React, { useState } from 'react';
import './Home.scss';
// import useFetch from '../../hooks/useFetch';
// import PokemonList from './PokemonList';
import apiEndpoints from '../../data/apiEndpoints';
import Body from '../../components/Body/Body';


function Home() {
  const [gen, setGen] = useState(apiEndpoints.gen1)

  return (
    <Body gen={gen} setGen={setGen} />
  )

  // const { data, loading, error } = useFetch(apiEndpoints.baseUrl+apiEndpoints.gen1)
  // if (loading) return <h1> Loading...</h1>
  // if (error) console.log(error)
  // const pokemonList = data?.results

  // return (
  //   <div className='poke-container'>
  //     {pokemonList?.map((e) => {
  //       return (<PokemonList e={e} key={e.name} />)
  //     })}
  //   </div>
  // )
}

export default Home