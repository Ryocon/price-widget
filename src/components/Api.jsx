import React from "react";
import { useState, useEffect } from "react"

function coinFetch () {
    let [ethData, setEth] = useState('')
    let [userCoin, setCoin] = useState('Etherium')

    function ethFetch() {
        fetch('https://api.coinpaprika.com/v1/tickers/eth-ethereum?quotes=GBP,USD')
        .then((response) => response.json())
        .then((data) => {
            console.log(data.quotes.GBP.price)
            setEth(data)
        })
        .catch((err) => {
            console.log(err.message)
        })
        
    }

    console.log(ethData.quotes)


    useEffect(() => {
        ethFetch(ethData)
    }, [])

    return (
        <div>
            {/* price: {ethData.quotes.GBP.price} */}
        </div>
    )
}

export default coinFetch