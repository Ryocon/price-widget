import { useState } from 'react'
// import './App.css'
import Api from './components/Api'
import Toggle from './components/Toggle'

function App() {

  let [coinChoice, setCoin] = useState('Select a Coin')

  return (
    <div className="App">



    

      hello

      <Toggle />
      <Api />
    </div>
  )
}

export default App
