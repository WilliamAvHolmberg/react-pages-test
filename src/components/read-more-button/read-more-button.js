import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import './read-more-button.scss'

function ReadMoreButton (props) {
  return (
    <div className='read-more-button-container'>
      <button onClick={() => {
        var elmnt = document.getElementById(props.targetElement)
        elmnt.scrollIntoView({
          behavior: 'smooth'
        })
      }}className={'read-more-button'}>{props.text || 'Get To Know More'} <FontAwesomeIcon icon={faArrowDown} style={{ marginLeft: '5px' }} />
      </button>
    </div>
  )
}

export default ReadMoreButton
