import * as React from 'react';
import { Timings } from '../interfaces/prayers';
import { additional } from './Constants';
import TimeFormatTo12 from '../helpers/TimeFormatTo12';
import { Box, CircularProgress, Typography } from '@mui/material';
import { FetchDataContext } from '../contexts/FetchDataContext';
import Cards from './Cards';

export default function PrayersTable() {
  const fetchDataContext = React.useContext(FetchDataContext);

  if(!fetchDataContext){
    throw new Error("useContext must be used within a FetchDataProvider")
  }

  const timingData = fetchDataContext.data;
  if(!timingData){
    return null;
  }

  const prayerTimes: Timings = timingData.timings;
  console.log('prayer times: ', prayerTimes);
  
  const filteredItems = prayerTimes ? Object.entries(prayerTimes).filter(
      ([prayer]) => !additional.includes(prayer)) : [];
  
  return (
    <div>
      {filteredItems.length > 0 ? (
        <ul style=
            {{ 
                listStyleType: 'none',
                padding: 0, 
                margin: 0, 
                justifyContent: 'center', 
                flexWrap: 'wrap', 
                display: 'flex' 
            }}>
                {filteredItems.map(([prayer, time]) => (
                  <Cards name={prayer} time={TimeFormatTo12(time)}/>
                ))}
        </ul>
          ) : (
            <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '200px',
          }}
        >
          <CircularProgress sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '20px',
            color:'white'
          }}/>
        </Box>
        )
      }
  </div>
  );
}

