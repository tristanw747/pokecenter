import React from 'react';
import useFetch from '../../hooks/useFetch';
import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Card from '../../components/Card/Card';
import Body from '../../components/Body/Body';

function PokemonList({ e }) {

  const { data, loading, error } = useFetch(e.url)
  // if (loading) return <span></span>
  if (error) console.log(error)
  if(!data || loading) {return null}
  const pokemonObj = {
    id: "#" + data?.id,
    name: data?.name,
    type: [data?.types[0]?.type.name, data?.types[1]?.type.name],
    height: data?.height,
    weight: data?.weight,
    stats: {
      hp: data?.stats[0].base_stat,
      attack: data?.stats[1].base_stat,
      defense: data?.stats[2].base_stat,
      special_attack: data?.stats[3].base_stat,
      special_defense: data?.stats[4].base_stat,
      speed: data?.stats[5].base_stat,
    }
  }

return (
    <>
    <Routes>
      <Route  path={`/${pokemonObj.name}`} element={<Card pokemonID={pokemonObj.name}/>} />
    </Routes>
   <Link to={`${pokemonObj.name}`}>
    <div className={`card-container type-${pokemonObj.type[0]}`}>
      {data?.sprites?.other.dream_world?.front_default ?
        <img className="pokemon-img" src={data?.sprites?.other?.dream_world?.front_default} alt={`${pokemonObj.name}`} /> :
        <img className="pokemon-img" src={data?.sprites?.other['official-artwork'].front_default} alt={`${pokemonObj.name}`} style={{width: "65%", height: "50%"}}/>
      }
      <div className="pokemon-id" >  {pokemonObj.id}</div>
      <div className="pokemon-name" > {pokemonObj.name} </div>
      <div className="pokemon-type"> {pokemonObj.type[0]} </div>
      {pokemonObj.type[1] && <div className="pokemon-type">{pokemonObj.type[1]}</div>}



      {/* {pokemonObj.stats.hp}
      {pokemonObj.stats.attack}
      {pokemonObj.stats.defense}
      {pokemonObj.stats.speed} */}





    </div>
    </Link>
    </>
  )
}

export default PokemonList