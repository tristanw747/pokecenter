import React from 'react';
import useFetch from '../../hooks/useFetch';
import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Card from '../../components/Card/Card';
import Body from '../../components/Body/Body';
import Loading from '../../components/Loading/Loading';
import Generation from '../Generation/Generation';
import { useState, useEffect } from 'react';

function PokemonList({ e }) {
  const [pokeNameState, setPokeNameState] = useState(false)

  const toggleModal = () => {
    setPokeNameState(!pokeNameState);
  };

  useEffect(() => {
    pokeNameState
      ? document.body.classList.add('active-modal')
      : document.body.classList.remove('active-modal')
  }, [pokeNameState])


  const { data, loading, error } = useFetch(e.url)
  // if (loading) return <span></span>
  if (!data || loading) { return null }
  // if(!data || loading) {return <Loading/>}
  if (error) console.log(error)





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
      <div className={`card-container type-${pokemonObj.type[0]}`} onClick={toggleModal}>
        {data?.sprites?.other.dream_world?.front_default ?
          <img className="pokemon-img" src={data?.sprites?.other?.dream_world?.front_default} alt={`${pokemonObj.name}`} /> :
          <img className="pokemon-img" src={data?.sprites?.other['official-artwork'].front_default} alt={`${pokemonObj.name}`} style={{ width: "150px", height: "150px", margin: "10px 10px" }} />
        }

        <div className="pokemon-id" >  {pokemonObj.id}</div>
        <div className="pokemon-name" > {pokemonObj.name} </div>
        <div className="pokemon-ball"></div>
        <div className="pokemon-type"> {pokemonObj.type[0]} </div>
        {pokemonObj.type[1] && <div className="pokemon-type">{pokemonObj.type[1]}</div>}

      </div>


      {pokeNameState && (
        <div className="modal-container">
          <div onClick={toggleModal} className="modal-transparent-back" ></div>
          <div className="modal-content">
            <div className={`card-modal-container type-${pokemonObj.type[0]}`}>
              {data?.sprites?.other.dream_world?.front_default ?
                <img className="pokemon-img" src={data?.sprites?.other?.dream_world?.front_default} alt={`${pokemonObj.name}`} /> :
                <img className="pokemon-img" src={data?.sprites?.other['official-artwork'].front_default} alt={`${pokemonObj.name}`} style={{ width: "150px", height: "150px", margin: "10px 10px" }} />
              }

              <div className="pokemon-id" >  {pokemonObj.id}</div>
              <div className="pokemon-name" > {pokemonObj.name} </div>
              <div className="pokemon-ball"></div>
              <div className="pokemon-type"> {pokemonObj.type[0]} </div>
              {pokemonObj.type[1] && <div className="pokemon-type">{pokemonObj.type[1]}</div>}
            </div>
          </div>
        </div>
      )
      }
















    </>
  )
}

export default PokemonList