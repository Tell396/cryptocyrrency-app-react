import * as React from 'react';
import { useEffect, useState } from 'react';
import Crypto from './components/Crypto/Crypto';
import News from './components/News/News';
import './App.scss';


// MUI 
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import Button from '@mui/material/Button';

export default function App() {
  const [search, setSearch] = useState('');

  // Tabs
  const [value, setValue] = React.useState('1');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const blue = {
    50: '#F0F7FF',
    100: '#C2E0FF',
    200: '#80BFFF',
    300: '#66B2FF',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    700: '#0059B2',
    800: '#004C99',
    900: '#003A75',
  };

  const Tab = styled(TabUnstyled)`
    font-family: IBM Plex Sans, sans-serif;
    color: white;
    cursor: pointer;
    font-size: 0.875rem;
    font-weight: bold;
    background-color: transparent;
    width: 100%;
    padding: 12px 16px;
    margin: 6px 6px;
    border: none;
    border-radius: 5px;
    display: flex;
    justify-content: center;

    &:hover {
      background-color: ${blue[400]};
    }

    &:focus {
      color: #fff;
      border-radius: 3px;
      outline: 2px solid ${blue[200]};
      outline-offset: 2px;
    }

    &.${tabUnstyledClasses.selected} {
      background-color: ${blue[50]};
      color: ${blue[600]};
    }

    &.${buttonUnstyledClasses.disabled} {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `;

  const TabPanel = styled(TabPanelUnstyled)`
    width: 100%;
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
  `;

  const TabsList = styled(TabsListUnstyled)`
    min-width: 320px;
    background-color: ${blue[500]};
    border-radius: 8px;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: space-between;
  `;

  return (
    <div className="App">
      <h1>Cryptocurrency</h1>
      <Button
        variant="outlined"
        onClick={() => window.location.reload()}
        sx={{ mb: '10px' }}
      >Refresh</Button>

      <TabsUnstyled defaultValue={0}>
        <TabsList >
          <Tab>Crypto</Tab>
          <Tab>News</Tab>
        </TabsList>

        <TabPanel value={0}>
          <Crypto />
        </TabPanel>
        <TabPanel value={1}>
          <News />
        </TabPanel>
      </TabsUnstyled>

    </div>
  );
}
