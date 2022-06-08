import React, { useState } from 'react'
import Composer from './Composer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

export default function ComposerList({composers, era}) {
  const [marginLeft, setMarginLeft] = useState(0)
  return (
    <div className='composerList--container'>
      <h1>{era}</h1>
      <div className='composerList--composer' style={{marginLeft: marginLeft}}>
        <div className='composerList--leftArrow'><FontAwesomeIcon icon={faChevronLeft} onClick={handleLeft}/></div>
        <div className='composerList--rightArrow'><FontAwesomeIcon icon={faChevronRight} onClick={handleRight}/></div>
        {composers.map((composer) => {
        return  <Composer key={composer.id} composer={composer}/>
        })}
      </div>
    </div>
  )

  function handleLeft()
  {
    let newMarginLeft = marginLeft + Math.round(window.innerWidth / 2)

    if(newMarginLeft > 0) newMarginLeft = 0

    setMarginLeft(newMarginLeft)
  }

  function handleRight()
  {
    let newMarginLeft = marginLeft - Math.round(window.innerWidth / 2)
    let listWidth = composers.length * 265

    if(window.innerWidth - listWidth > newMarginLeft) newMarginLeft = window.innerWidth - listWidth

    setMarginLeft(newMarginLeft)
  }
}
