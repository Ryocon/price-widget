import React from "react";
import { useState, useEffect } from "react"
import Toggle from './Toggle'

function CoinFetch (props) {
    let [coinPrice, setPrice] = useState('loading..')

    let coinValue = props.coinValue
    let currency = props.currency
    
    let [currencyData, setCurrencyData] = useState(currency)
    let [coinData, setCoinData] = useState(coinValue)
    
    

    

    console.log(currencyData, coinData)

    console.log(currency, coinValue)


    useEffect(() => {
        // ethFetch(ethData)
        
        // console.log(props.currency)
        setCurrencyData(currency)
        setCoinData(coinValue)

        console.log('Set to fetch: ' + coinData)

        if (coinData == 'Etherium') {
            ethFetch(currencyData)
        } else {
            btcFetch(currencyData)
        }

    }, [props])


    // if eth
    function ethFetch(currencyData) {

        console.log('You are in ethFetch ' + currencyData)

        fetch('https://api.coinpaprika.com/v1/tickers/eth-ethereum?quotes=GBP,USD')
        .then((response) => response.json())
        .then((data) => {
            if (currencyData == 'GBP') {
                console.log(data.quotes.GBP.price)
                setPrice(data.quotes.GBP.price)
            } else {
                console.log(data.quotes.USD.price)
                setPrice(data.quotes.USD.price)
            }
        })
        .catch((err) => {
            console.log(err.message)
        })
        
    }

    // if btc
    function btcFetch() {

        console.log('You are in btcFetch ' + currencyData)

        fetch('https://api.coinpaprika.com/v1/tickers/btc-bitcoin?quotes=GBP,USD')
        .then((response) => response.json())
        .then((data) => {
            if (currencyData == 'GBP') {
                console.log(data.quotes.GBP.price)
                setPrice(data.quotes.GBP.price)
            } else {
                console.log(data.quotes.USD.price)
                setPrice(data.quotes.USD.price)
            }
        })
        .catch((err) => {
            console.log(err.message)
        })
        
    }

    


    
    

    return (
        <div>
            Price: {parseFloat(coinPrice).toFixed(2)}
        </div>
    )
}

export default CoinFetch