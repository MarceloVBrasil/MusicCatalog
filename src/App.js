import React from 'react'
import ComposerList from "./components/ComposerList";
import data from './data/data'
import './css/App.css'
import SelectedComposer from "./SelectedComposer";
import { useState } from "react";

export const MusicContext = React.createContext()

function App() {
  const musicData = data
  const [selectedComposerId, setSelectedComposerId] = useState(1)
  const [autoPlay, setAutoPlay] = useState(false)
  const selectedComposer = musicData.find(composer => composer.id === selectedComposerId)
  const medievalEra = musicData.filter(composer => composer.era === 'Medieval')
  const renaissanceEra = musicData.filter(composer => composer.era === 'Renaissance')
  const baroqueEra = musicData.filter(composer => composer.era === 'Baroque')
  const classicalEra = musicData.filter(composer => composer.era === 'Classicism')
  const romanticEra = musicData.filter(composer => composer.era === 'Romanticism')
  const modernismEra = musicData.filter(composer => composer.era === 'Modernism')

  const musicContextValue = 
  {
    handleSelectedComposer,
    autoPlay,
    setAutoPlay
  }

  function handleSelectedComposer(id)
  {
    setSelectedComposerId(id)
    setAutoPlay(false)
  }

  return (
    <MusicContext.Provider value={musicContextValue}>
        <SelectedComposer composer={selectedComposer}/>
        <ComposerList composers={medievalEra} era={'Medieval'}/>
        <ComposerList composers={renaissanceEra} era={'Renaissance'}/>
        <ComposerList composers={baroqueEra} era={'Baroque'}/>
        <ComposerList composers={classicalEra} era={'Classicism'}/>
        <ComposerList composers={romanticEra} era={'Romanticism'}/>
        <ComposerList composers={modernismEra} era={'Modernism'} />
    </MusicContext.Provider>
  );
}

export default App;
