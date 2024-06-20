import React from 'react'
import "./meetTheFounderBanner.css";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

function MeetTheFounderBanner() {
  return (
    <div className='meetTheFounderBanner'>
        <div className='imgDtlBox'>
            <div className='quoteIcon' ><FormatQuoteIcon /></div>
            <h2>One of the worst things you could do to a human being is take away their hope of a better future.</h2>
            <p>RamGopal Verma</p>
        </div>
        <div className='imgBox'>
            <img src="./images/meetTheFounderBanner.png" alt="" />
        </div>
    </div>
  )
}

export default MeetTheFounderBanner