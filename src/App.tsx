import React, { useState } from 'react';
import './App.css';
import './styles.css';
import DateTime from './views/DateTime';
import PrayersTable from './views/PrayersTable';
import IslamicCalendar from './views/IslamicCalendar';
import RelatedResources from './views/RelatedResources';
import { Button } from '@mui/material';
import GeoAddress from './views/GeoAddress';

const content = [
  [
    <PrayersTable></PrayersTable>
  ],
  [
    <IslamicCalendar></IslamicCalendar>
  ],
  [
    <RelatedResources></RelatedResources>
  ],
];

function App() {

  const [activeContentIdx, setActiveContentIdx] = useState(0);
  return (
    <div>
      <header>
        <div>
        <h1>Islamic Prayers</h1>
        <DateTime></DateTime>
        <GeoAddress></GeoAddress>
        </div>
      </header>
      <div id='tabs'>
        <menu>
          <Button 
              className={activeContentIdx === 0 ? "active" : ""}
              onClick={() => setActiveContentIdx(0)}
          >
            Prayer Times
          </Button>
          <Button 
              className={activeContentIdx === 0 ? "active" : ""}
              onClick={() => setActiveContentIdx(1)}
          >
            Islamic Calendar
          </Button>
          <Button 
              className={activeContentIdx === 0 ? "active" : ""}
              onClick={() => setActiveContentIdx(2)}
          >
            Related Resources
          </Button>
        </menu>
        <div id="tab-content">
            <ul>
              {content[activeContentIdx].map((item) => 
                <li id= "tab-content li" style={{listStyle: "none"}}> 
                    {item}
                </li>
              )}
            </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
