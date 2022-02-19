import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import * as React from 'react';
import Axios from 'axios';
import './App.scss';

function App() {
  const [search, setSearch] = useState('');
  const [crypto, setCrypto] = useState([]);

  useEffect(() => {
    Axios.get(`https://api.coinstats.app/public/v1/coins?skip=0&limit=88&currency=EUR`).then(
      (res) => {
        setCrypto(res.data.coins);
      },
    );
  }, []);

  return (
    <div className="App">
      <h1>Cryptocurrency</h1>
      <TextField
        id="standard-basic"
        label="Search..."
        variant="standard"
        size="small"
        onChange={(e) => setSearch(e.target.value)}
      />
      {crypto
        .filter((val) => {
          return val.name.toLowerCase().includes(search.toLowerCase());
        })
        .map((val, id) => {
          return (
            <div className="main-list" id={id}>
              <div className="rank">{val.rank}</div>
              <div className="logo">
                <a href={val.websiteUrl}>
                  <img src={val.icon} alt="logo" width="50px" />
                </a>
                <p className="symbol">{val.symbol} | {val.name}</p>
              </div>
              <div>€{val.marketCap.toFixed(3)}</div>
              <div>€{val.price.toFixed(2)}</div>
              <div>{val.availableSupply.toFixed(2)}</div>
              <div>{val.volume.toFixed(2)}</div>
            </div>
          );
        })}
    </div>
  );
}

export default App;
