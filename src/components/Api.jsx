import React from "react";
import { useState, useEffect } from "react"

function coinFetch () {
    let [ethData, setEth] = useState(0.00)

    function ethFetch() {
        fetch('https://api.coinpaprika.com/v1/tickers/eth-ethereum?quotes=GBP,USD')
        .then((response) => response.json())
        .then((data) => {
            console.log(data.quotes.GBP.price)
            setEth(data.quotes.GBP.price)
        })
        .catch((err) => {
            console.log(err.message)
        })
        
    }


    useEffect(() => {
        ethFetch(ethData)
    }, [])

    return (
        <div>
            price: {ethData.toFixed(2)}
        </div>
    )
}

export default coinFetch