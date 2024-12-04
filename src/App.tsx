import React, { useState } from 'react';
import './App.css';
import './styles.css';
import DateTimeAPI from './views/DateTime';
import PrayersTable from './views/PrayersTable';
import IslamicCalendar from './views/IslamicCalendar';
import RelatedResources from './views/RelatedResources';
import { useLocation } from './hooks/useLocation';
import { Button } from '@mui/material';

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
  const currentLocation = useLocation();
  console.log(currentLocation)

  return (
    <div>
      <header>
        <div>
        <h1>Prayers Timetable</h1>
        <DateTimeAPI></DateTimeAPI>
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
                <li style={{listStyle: "none"}}> 
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
