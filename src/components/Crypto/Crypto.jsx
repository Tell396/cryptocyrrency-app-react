import { useEffect, useState } from 'react';
import * as React from 'react';
import Axios from 'axios';

// MUI
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Popper from '@mui/material/Popper';
import PopupState, { bindToggle, bindPopper } from 'material-ui-popup-state';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';

export default function Crypto() {
  // Crypto API
  const [search, setSearch] = useState('');
  const [crypto, setCrypto] = useState([]);

  useEffect(() => {
    Axios.get(`https://api.coinstats.app/public/v1/coins?skip=0&limit=88&currency=USD`).then(
      (res) => {
        setCrypto(res.data.coins);
      },
    );
  }, []);

  // Popover
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <TextField
        id="standard-basic"
        label="Search..."
        variant="standard"
        size="small"
        onChange={(e) => setSearch(e.target.value)}
      />
      {crypto
        .filter((val) => val.name.toLowerCase().includes(search.toLowerCase()))
        .map((val, id) => {
          return (
            <div className="main-list" id={id}>
              <div className="rank">{val.rank}</div>
              <div className="logo">
                <a href={val.websiteUrl}>
                  <img src={val.icon} alt="logo" width="60px" />
                </a>
                <p className="symbol">
                  {val.symbol} | {val.name}
                </p>
              </div>
              <div className="price">${val.price.toFixed(2)}</div>
              <div className="changes">
                <p>
                  <span>1 week: </span>
                  {val.priceChange1w}
                </p>
                <hr />
                <p>
                  <span>1 day: </span>
                  {val.priceChange1d}
                </p>
                <hr />
                <span>1 hour: </span>
                {val.priceChange1h}
              </div>

              <PopupState variant="popper">
                {(popupState) => (
                  <div>
                    <Button variant="contained" {...bindToggle(popupState)} className='more-button'>
                      ...
                    </Button>
                    <Popper {...bindPopper(popupState)} transition>
                      {({ TransitionProps }) => (
                        <Fade {...TransitionProps} timeout={350}>
                          <Paper>
                            <Typography sx={{ p: 2 }}>
                              Available Supply: {val.availableSupply}
                              <br />
                              Total Supply: {val.totalSupply}
                            </Typography>
                          </Paper>
                        </Fade>
                      )}
                    </Popper>
                  </div>
                )}
              </PopupState>
            </div>
          );
        })}
    </>
  );
}
