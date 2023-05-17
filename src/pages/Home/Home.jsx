import React, { useState } from 'react';
import './Home.scss';
import useFetch from '../../hooks/useFetch';
import PokemonList from './PokemonList';


function Home() {

  const [state, setState] = useState([])

  const BASE_URL = "http://pokeapi.co/api/v2/pokemon"
  const FULL_LIST = "/?offset=0&limit=51"
  const { data, loading, error } = useFetch(BASE_URL + FULL_LIST)
  if (loading) return <h1> Loading...</h1>
  if (error) console.log(error)
  const pokemonList = data?.results

  // const arrx = []

  // pokemonList?.map((e) => {
  //   arrx.push(<PokemonList e={e}/>)
  // })

  // setState(arrx)


  return (
    <div className='poke-container'>
      {pokemonList?.map((e) => {
        return (<PokemonList e={e} key={e.name} />)
      })}
    </div>
  )
}

export default Home