import React from "react";
import { useEffect, useState } from "react";
import { DateInfo } from "../interfaces/prayers";
import useFetchData from "../hooks/useFetchData";

const IslamicCalendar = () => {
    const {getPrayerTimesLocation} = useFetchData();
    const [islamicDate, SetIslamicDate] = useState<string>();

    useEffect(() => {
        (async (): Promise<void>  => {
          try {
              const data = await getPrayerTimesLocation();
              const islamicDateInfo: DateInfo | undefined =  data?.date;
              if(islamicDateInfo !== undefined){
                SetIslamicDate(islamicDateInfo.hijri.date)
              }
          } catch (error) {
              console.error('Error in fetchPrayerTimes:', error);
          }
      })();
      }, [true])

    useEffect(() => {
        const id = setInterval(() => {
            //SetIslamicDate(new Date());
        }, 1000)

        return () => clearInterval(id);
    }, [])

    return (
        <h1 className="Time date">
        {
            islamicDate
        }
        </h1>
    )
}

export default IslamicCalendar;
