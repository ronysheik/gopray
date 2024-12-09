import React, { useState } from 'react';
import './App.css';
import './styles.css';
import DateTime from './views/DateTime';
import PrayersTable from './views/PrayersTable';
import IslamicCalendar from './views/IslamicCalendar';
import RelatedResources from './views/RelatedResources';
import GeoAddress from './views/GeoAddress';
import { FetchDataProvider } from './contexts/FetchDataContext';
import Dropdowns from './views/DropDowns';
import CalculationMethod from './views/CalculationMethods';

function App() {

  return (
    <div>
      <header>
        <div>
        <h1>Islamic Prayers</h1>
          <DateTime></DateTime>
        </div>
      </header>
      <body>
        <li style={{listStyle: 'none'}}>
          <FetchDataProvider>
              <PrayersTable />
              <IslamicCalendar />
              <CalculationMethod />
          </FetchDataProvider>
          <GeoAddress></GeoAddress>
          <RelatedResources></RelatedResources>
        </li>
      </body>
    </div>
  );
}

export default App;
