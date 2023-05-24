import React from 'react'
import useFetch from '../../hooks/useFetch'
import apiEndpoints from '../../data/apiEndpoints'
import PokemonList from '../../pages/Home/PokemonList'

function Body({ gen }) {


  
  const { data, loading, error } = useFetch(apiEndpoints.baseUrl + gen)
  if (loading) return <h1> Loading...</h1>
  if (error) console.log(error)
  const pokemonList = data?.results

  return (
    <div className='poke-container'>
      {
        pokemonList?.map((e) => {
          return (<PokemonList e={e} key={e.name} />)
        })
      }
    </div>
  )
}

export default Body