import React from 'react';
import "./Coin.css";

const Coin = ({ name, image, symbol, price, volume, priceChange, marketcap}) => {
  return (
    <div className='coin-container'>
        <div class="coin-row">
            <div class="coin">
                <img src={image} alt="crypto"/>
                <h1>{name}</h1>
                <p class="coin-symbol">{symbol}</p>
            </div>
            <div class="coin-data">
                <p class="coin-price">${price}</p>
                <p class="coin-volume">${volume.toLocaleString}</p>
                {priceChange < 0 ? (
                    <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
                ) : (
                    <p className="coin-percent green">{priceChange.toFixed(2)}%</p>
                )
                }
                <p class="coin-marketcap">
                    Mkt Cap: ${marketcap.toLocaleString()}
                </p>
            </div>
        </div>
    </div>
  )
}

export default Coin