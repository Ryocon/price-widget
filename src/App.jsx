import { useState } from 'react'
// import './App.css'
import CoinFetch from './components/CoinFetch'
import Toggle from './components/Toggle'

function App() {

  let [coinChoice, setCoin] = useState('Select a Coin')

  return (
    <div className="App">


      <Toggle />
      
    </div>
  )
}

export default App
