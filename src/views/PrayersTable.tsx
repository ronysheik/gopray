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
import { Box, CircularProgress, Typography } from '@mui/material';
import { useLocation } from '../hooks/useLocation';

export default function PrayersTable() {
  const {latitude, longitude } = useLocation(); 
  const {getPrayerTimesLocation} = useFetchData();
  const [prayersTimes, setPrayersTimes] = React.useState<Timings>();

  React.useEffect(() => {
    (async (): Promise<void>  => {
      try {
          const data = await getPrayerTimesLocation(latitude, longitude);
          const timings: Timings | undefined =  data?.timings;
          if(timings !== undefined){
            setPrayersTimes(timings)
          }
      } catch (error) {
          console.error('Error in fetchPrayerTimes:', error);
      }
  })();
  }, [latitude, longitude])

  console.log('prayer times: ', prayersTimes);
  
  const filteredItems = prayersTimes ? Object.entries(prayersTimes).filter(
      ([prayer]) => !additional.includes(prayer)) : [];
  
  return (
    <TableContainer component={Paper}>
    <Table sx={{ maxWidth: 250 }} aria-label="simple table" align="left">
      <TableHead>
        <TableRow>
          <TableCell >
            <Typography sx={{fontWeight: 'bold'}}>Prayers</Typography>
          </TableCell>
          <TableCell align="right">
            <Typography sx={{fontWeight: 'bold'}}>Times</Typography>
            </TableCell>
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
              <Box sx={{ display: 'flex' }}>
                  <CircularProgress />
              </Box>
            </TableCell>
        </TableRow>
    )}
      </TableBody>
    </Table>
  </TableContainer>
  );
}

