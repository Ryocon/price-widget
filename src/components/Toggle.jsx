import { useState } from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';

function Toggle() {

   let [coinValue, setValue] = useState('Etherium')
   let [currency, setCurrency] = useState('GBP')

   const handleChangeCoin = (value) => {
    setValue(value)
   }

   const handleChangeCurrency = (value) => {
    setCurrency(value)
   }

   console.log(coinValue)
   console.log(currency)
   localStorage.setItem(coinValue, currency)

  return (
    <>
      <ToggleButtonGroup type="radio" name="coin-options" defaultValue={'Etherium'} onChange={handleChangeCoin}>
        <ToggleButton id="coin-radio-1" value={'Etherium'}>
          Etherium
        </ToggleButton>
        <ToggleButton id="coin-radio-2" value={'Bitcoin'}>
          Bitcoin
        </ToggleButton>
      </ToggleButtonGroup>
      <br />
      <ToggleButtonGroup type="radio" name="currency" defaultValue={'GBP'}
      onChange={handleChangeCurrency}>
        <ToggleButton id="currency-radio-1" value={'GBP'}>
          GBP
        </ToggleButton>
        <ToggleButton id="currency-radio-2" value={'USD'}>
          USD
        </ToggleButton>
      </ToggleButtonGroup>
    </>
  );
}

export default Toggle;