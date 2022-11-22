import React from 'react'
import BtnQuoteBox from './BtnQuoteBox'


const QuoteBox = ({ quoteRandom, handleClick, colorRandom }) => {


    const objStyles = {
        color: colorRandom
    }
    const objBtn = {
        color: colorRandom
    }

    return (
        <article className='card' style={objStyles}>
            <i className="card__icons  card__icon fa-solid fa-quote-left"></i>

            <p className='card__quote' >{quoteRandom.quote}</p>
            <h1 className='card__author'>{quoteRandom.author}</h1>
            <BtnQuoteBox objBtn={objBtn}
                handleClick={handleClick} />
        </article>
    )
}

export default QuoteBox