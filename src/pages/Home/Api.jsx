import React from 'react';
import useFetch from '../../hooks/useFetch';

function Api({e}) {

  const { data, loading, error } = useFetch(e.url)
  // if (loading) return <h1> Loading...</h1>
  if (error) console.log(error)
// console.log(data)
  return (
    // <div key={data?.id}>{data?.sprites.other.dream_world.front_default}</div>
    <img key={data?.id} src={data?.sprites.other.dream_world.front_default} alt="images" />
  )
}

export default Api