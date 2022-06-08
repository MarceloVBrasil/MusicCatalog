import React, { useContext } from 'react'
import { MusicContext } from '../App'

export default function Composer({composer}) {
  const { handleSelectedComposer } = useContext(MusicContext)
  return (
    <div className='composer--container'>
      <a href='#selected-composer'>
        <img src={composer.pic} className='composer--img' onClick={() => handleSelectedComposer(composer.id)}/>
      </a>
      <h3>{composer.name}</h3>
    </div>
  )
}
