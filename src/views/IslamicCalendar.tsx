import { DateInfo } from "../interfaces/prayers";
import { Box, CircularProgress, Typography } from "@mui/material";
import { useContext } from "react";
import { FetchDataContext } from "../contexts/FetchDataContext";

export default function IslamicCalendar() {
    const fetchDataContext = useContext(FetchDataContext);

    if (!fetchDataContext) {
        throw new Error("useContext must be used within a FetchDataProvider")
      }

    const timingData = fetchDataContext.data;
    console.log('timing data', timingData);
    if(!timingData){
        return null;
    }
    
    const hijriInfo: DateInfo | undefined =  timingData?.date;

    return (
        <div style=
            {{
                marginTop: '15px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                {hijriInfo.hijri.date.length > 0 ? (
                    <Typography sx={{fontWeight: 'bold', fontSize: '25px'}}>
                        {'AH '}{hijriInfo.hijri.year} {hijriInfo.hijri.day} {hijriInfo.hijri.month.en} {', '}{hijriInfo.hijri.weekday.en}
                    </Typography>
            ) : (
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px'}}>
                        <CircularProgress sx={{alignItems: 'center'}}/>
                    </Box>
            )}
    </div>
    );
}
