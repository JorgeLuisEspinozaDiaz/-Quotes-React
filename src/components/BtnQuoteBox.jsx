import React from 'react'

const BtnQuoteBox = ({ objBtn, handleClick }) => {
    return (
        <button className='card__btn' style={objBtn} onClick={handleClick}> <i class="fa fa-angle-double-right" aria-hidden="true"></i>
        </button>
    )
}

export default BtnQuoteBox