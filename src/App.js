import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';
import Coin from './Components/Coin';

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const res = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin&names=Bitcoin&symbols=btc&category=layer-1&price_change_percentage=1h%2C%2024h");
        setCoins(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchCoins();
  }, []);

  const handleChange = e => {
    setSearch(e.target.value);
  }

  const filteredCoins = coins.filter(coin => 
    coin.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className='coin-app'>
      <div class="coin-search">
        <h1 class="coin-text">Search a currency</h1>
        <form>
          <input type="text" placeholder="Search" 
          class="coin-input" onChange={handleChange}/>
        </form>
      </div>
      {filteredCoins.map(coin => {
        return (
          <Coin 
            key={coin.id} 
            name={coin.name} 
            image={coin.image} 
            symbol={coin.symbol} 
            price={coin.current_price} 
            volume={coin.total_volume}
            priceChange={coin.price_change_percentage_24h}
            marketcap={coin.market_cap}
          />
        )
      })}

    </div>
  );
}

export default App;
