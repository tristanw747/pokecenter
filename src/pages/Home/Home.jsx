import React, { useState } from 'react';
import './Home.scss';
import useFetch from '../../hooks/useFetch';
import Api from './Api';


function Home() {

  // const [state, setState]= useState([])

  const BASE_URL = "https://pokeapi.co/api/v2/pokemon"
  const FULL_LIST = "/?offset=0&limit=151"
  const { data, loading, error } = useFetch(BASE_URL + FULL_LIST)
  if (loading) return <h1> Loading...</h1>
  if (error) console.log(error)
  const pokemonList = data?.results

  // console.log(pokemonList?.length)
  const arrx = []

  pokemonList?.map((e) => {
    arrx.push(<Api e={e} />)
  })
 
  // setState()
  
  return (
    <div>{arrx}</div>
  )
}

export default Home