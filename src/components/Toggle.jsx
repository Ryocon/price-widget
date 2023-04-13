import { useState } from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import CoinFetch from './CoinFetch'

function Toggle() {

   let [coinValue, setValue] = useState(localStorage.getItem('coin'))
   let [currency, setCurrency] = useState(localStorage.getItem('currency'))
//    let [currentCoin, setCoin] = useState('')
//    let [currentCurrency, setCurrentCurrency] = useState('')

   const handleChangeCoin = (value) => {
    setValue(value)
    // setCoin(value)
   }

   const handleChangeCurrency = (value) => {
    setCurrency(value)
    // setCurrentCurrency(value)
   }

   console.log(coinValue)
   console.log(currency)
   localStorage.clear()
//    setting local storage
   localStorage.setItem('coin', coinValue)
   localStorage.setItem('currency', currency)

  return (
    <>
      <ToggleButtonGroup type="radio" name="coin-options" id="coin-select" defaultValue={'Etherium'} onChange={handleChangeCoin}>
        <ToggleButton id="coin-radio-1" value={'Etherium'}>
          Etherium
        </ToggleButton>
        <ToggleButton id="coin-radio-2" value={'Bitcoin'}>
          Bitcoin
        </ToggleButton>
      </ToggleButtonGroup>
      <br />
     
      <ToggleButtonGroup type="radio" name="currency" id="currency-select" defaultValue={'GBP'}
      onChange={handleChangeCurrency}>
        <ToggleButton id="currency-radio-1" value={'GBP'}>
          GBP
        </ToggleButton>
        <ToggleButton id="currency-radio-2" value={'USD'}>
          USD
        </ToggleButton>
      </ToggleButtonGroup>

      <CoinFetch 
      coinValue={coinValue}
      currency={currency} />

      
    </>
  );
}

export default Toggle;