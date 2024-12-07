import React, { useState } from 'react';
import './App.css';
import './styles.css';
import DateTime from './views/DateTime';
import PrayersTable from './views/PrayersTable';
import IslamicCalendar from './views/IslamicCalendar';
import RelatedResources from './views/RelatedResources';
import { Button } from '@mui/material';
import GeoAddress from './views/GeoAddress';
import { FetchDataProvider } from './contexts/FetchDataContext';
import Cards from './views/Cards';


function App() {

  return (
    <div>
      <header>
        <div>
        <h1>Islamic Prayers</h1>
          <DateTime></DateTime>
          <GeoAddress></GeoAddress>
        </div>
      </header>
      <body>
        <li style={{listStyle: 'none'}}>
          <FetchDataProvider>
               <PrayersTable />
              <IslamicCalendar />
          </FetchDataProvider>
          <RelatedResources></RelatedResources>
        </li>
      </body>
    </div>
      
  );
}

export default App;
