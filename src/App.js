import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
  const fetchCoins = async () => {
    try {
      const res = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin&names=Bitcoin&symbols=btc&category=layer-1&price_change_percentage=1h%2C%2024h");
      setCoins(res.data);
      // console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  fetchCoins();
}, []);


  return (
    <div className='coin-app'>
      <div class="coin-search">
        <h1 class="coin-text">Search a currency</h1>
        <form>
          <input type="text" placeholder="Search" class="coin-input"/>
        </form>
      </div>

    </div>
  );
}

export default App;
