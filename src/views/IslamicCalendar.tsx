import { useEffect, useState } from "react";
import { DateInfo } from "../interfaces/prayers";
import useFetchData from "../hooks/useFetchData";
import SimpleStack from "./Stack";
import { Box, CircularProgress } from "@mui/material";
import { useLocation } from "../hooks/useLocation";

const IslamicCalendar = () => {
    const {latitude, longitude } = useLocation(); 
    const {getPrayerTimesLocation} = useFetchData();
    const [hijriInfo, SetHijriInfo] = useState<string[]>([])
   
    const getHiJriInfo = async (): Promise<void>  => {
          try {
              const data = await getPrayerTimesLocation(latitude, longitude);
              const hijDateInfo: DateInfo | undefined =  data?.date;
              if (hijDateInfo !== undefined) {
                const info = [
                    hijDateInfo.hijri.year,
                    hijDateInfo.hijri.month.en,
                    hijDateInfo.hijri.day,
                    hijDateInfo.hijri.weekday.en,
                ];
                SetHijriInfo(info);
              }
          } catch (error) {
              console.error('Error in fetchPrayerTimes:', error);
          }
      }

    useEffect(() => {
            getHiJriInfo();
    }, [latitude, longitude])

    return (
        <div>
        {hijriInfo.length > 0 ? (
           <SimpleStack items={hijriInfo}/>
        ) : (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px'}}>
                <CircularProgress sx={{alignItems: 'center'}}/>
            </Box>
        )}
    </div>
    );
}


export default IslamicCalendar;
