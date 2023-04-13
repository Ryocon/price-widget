import React from "react";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { TbReload } from "react-icons/tb";

function CoinFetch(props) {
  let [coinPrice, setPrice] = useState("loading..");

  let coinValue = props.coinValue;
  let currency = props.currency;

  let [currencyData, setCurrencyData] = useState(currency);
  let [coinData, setCoinData] = useState(coinValue);

  let [symbol, setSymbol] = useState("");

  // second useeffect to remove selection lag
  useEffect(() => {
    setCurrencyData(currency);
    setCoinData(coinValue);
    console.log(currency, coinValue);
  });

  console.log(currency, coinValue);
  console.log(currencyData, coinData);

  useEffect(() => {
    // setCurrencyData(currency)
    // setCoinData(coinValue)

    console.log("Set to fetch: " + coinData + currencyData);

    //! Uncomment to ensure API fetch
    // ! This works to bring back the previous search but does not display what the previous search was
    // attempt at dynamically fetching the data based on the checked radio boxes
    // the state always loaded the previous input and I have not as yet fixed this bug
    if (coinData === "Etherium") {
      ethFetch(currencyData);
    } else {
      btcFetch(currencyData);
    }
  }, [props]);

  // if eth
  function ethFetch(currencyData) {
    console.log("You are in ethFetch " + currencyData);

    fetch("https://api.coinpaprika.com/v1/tickers/eth-ethereum?quotes=GBP,USD")
      .then((response) => response.json())
      .then((data) => {
        if (currencyData === "GBP") {
          console.log(data.quotes.GBP.price);
          setPrice(data.quotes.GBP.price);
          setSymbol("£");
          // setCurrencyData('GBP')
        } else {
          console.log(data.quotes.USD.price);
          setPrice(data.quotes.USD.price);
          setSymbol("$");
          // setCurrencyData('USD')
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  // if btc
  function btcFetch() {
    console.log("You are in btcFetch " + currencyData);

    fetch("https://api.coinpaprika.com/v1/tickers/btc-bitcoin?quotes=GBP,USD")
      .then((response) => response.json())
      .then((data) => {
        if (currencyData === "GBP") {
          console.log(data.quotes.GBP.price);
          setPrice(data.quotes.GBP.price);
          setSymbol("£");
          // setCurrencyData('GBP')
        } else {
          console.log(data.quotes.USD.price);
          setPrice(data.quotes.USD.price);
          setSymbol("$");
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  // fetch/refresh
  const handleClick = () => {
    if (coinData === "Etherium") {
      ethFetch(currencyData);
    } else {
      btcFetch(currencyData);
    }
  };

  return (
    <div className="fetch">
      <Button className="btn-fetch" onClick={handleClick}>
        Fetch <TbReload />
      </Button>
      <h4>
         {symbol}{parseFloat(coinPrice).toFixed(2)}
      </h4>
    </div>
  );
}

export default CoinFetch;
