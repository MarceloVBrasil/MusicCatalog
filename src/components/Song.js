import React from 'react'

export default function Song({song, selectSong}) {
  return (
    <div className='song--container' onClick={handleSelectSong}>
      <p className='song--song'>{song.name}</p>
    </div>
  )

  function handleSelectSong()
  {
      selectSong(song.id)
  }
}
