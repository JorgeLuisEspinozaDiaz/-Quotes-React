
import quotes from './json/quotes.json'
import './App.css'
import QuoteBox from './components/QuoteBox'
import { useState } from 'react'
import color from './json/color.json'
import BtnQuoteBox from './components/BtnQuoteBox'



function App() {

  const getRandomFromArray = arr => {
    const indexRandom = Math.floor(arr.length * Math.random())
    return arr[indexRandom]
  }

  const [quoteRandom, getRandom] = useState(getRandomFromArray(quotes))
  const [colorRandom, setColorRandom] = useState(getRandomFromArray(color))

  const handleClick = () => {

    getRandom(getRandomFromArray(quotes))
    setColorRandom(getRandomFromArray(color))

  }




  const objStyles = {
    backgroundColor: colorRandom
  }


  return (
    <div className="App" style={objStyles}>
      <QuoteBox
        quoteRandom={quoteRandom}
        handleClick={handleClick}
        colorRandom={colorRandom}
      />


    </div >
  )
}

export default App
