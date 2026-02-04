import React from 'react'

const Coin = ({ name, image, symbol, price, volume}) => {
  return (
    <div className='coin-container'>
        <div class="coin-row">
            <div class="coin">
                <img src="{image}" alt="crypto"/>
                <h1>{name}</h1>
                <p class="coin-symbol">{symbol}</p>
            </div>
            <div class="coin-data">
                <p class="coin-price">${price}</p>
                <p class="coin-volume">${volume.toLocaleString}</p>
            </div>
        </div>
    </div>
  )
}

export default Coin