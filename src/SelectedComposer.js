import React, { useContext, useState } from 'react'
import ReactPlayer from 'react-player'
import Song from './components/Song'
import { MusicContext } from './App'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faCross } from '@fortawesome/free-solid-svg-icons'

export default function SelectedComposer({composer}) {
    const { autoPlay, setAutoPlay } = useContext(MusicContext)
    const [selectedSongId, setSelectedSongId] = useState(0)
    const selectedSong = composer.songs.find(song => song.id === selectedSongId) || composer.songs[0]
  return (
      <>
      <p id='selected-composer' className='selectedComposer--name'>{composer.name}</p>
      <div className='selectedComposer--header' >
          <p>(<FontAwesomeIcon icon={faStar}/> {composer.born} -- <FontAwesomeIcon icon={faCross} /> {composer.died})</p>
          <p>{composer.nationality}</p>
      </div>      
      <div className='selectedComposer--container'>
        <img src={composer.pic} className='selectedComposer--picture'/>
        <ReactPlayer url={selectedSong.video} controls={true} className='selectedComposer--video' onEnded={handleVideoEnded} 
            playing={autoPlay} onStart={handleVideoStart}/>
        
        <div className='selectedComposer--songs-container'>
            {composer.songs.map((song) => {
                return <Song key={song.id} song={song} selectSong={setSelectedSongId}/>
            })}
        </div>
    </div>
    </>
  )

  function handleVideoEnded()
  {
    if(composer.songs[selectedSongId+1]) setSelectedSongId(prev => prev + 1)
    else setSelectedSongId(0)
  }

  function handleVideoStart()
  {
      setAutoPlay(true)
  }
}
