import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useFetchData  from '../hooks/useFetchData';
import { Timings } from '../interfaces/prayers';
import { additional } from './Constants';
import TimeFormatTo12 from '../helpers/TimeFormatTo12';

export default function PrayersTable() {
  const {getPrayerTimesLocation} = useFetchData();
  const [prayersTimes, setPrayersTimes] = React.useState<Timings>();

  React.useEffect(() => {
    (async (): Promise<void>  => {
      try {
          const data = await getPrayerTimesLocation();
          const timings: Timings | undefined =  data?.timings;
          if(timings !== undefined){
            setPrayersTimes(timings)
          }
      } catch (error) {
          console.error('Error in fetchPrayerTimes:', error);
      }
  })();
  }, [true])

  console.log('prayer times: ', prayersTimes);
  
  const filteredItems = prayersTimes ? Object.entries(prayersTimes).filter(
      ([prayer]) => !additional.includes(prayer)) : [];
  
  return (
    <TableContainer component={Paper}>
    <Table sx={{ maxWidth: 250 }} aria-label="simple table" align="left">
      <TableHead>
        <TableRow>
          <TableCell>Prayers</TableCell>
          <TableCell align="right">Times</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
      {filteredItems.length > 0? (
        filteredItems.map(([prayer, time]) => (
            <TableRow
                key={prayer}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell component="th" scope="row">
                    {prayer}
                </TableCell>
                <TableCell align="right">{TimeFormatTo12(time)}</TableCell>
            </TableRow>
        ))
    ) : (
        <TableRow>
            <TableCell colSpan={2} align="center">
                Loading prayer times...
            </TableCell>
        </TableRow>
    )}
      </TableBody>
    </Table>
  </TableContainer>
  );
}

