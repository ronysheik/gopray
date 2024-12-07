import React, { ReactNode, useState } from "react";
import {  createContext } from "react";
import { TimingData } from "../interfaces/prayers";
import useFetchData from "../hooks/useFetchData";
import { useLocation } from "../hooks/useLocation";


interface FecthDataContextProps {
    data: TimingData | undefined;
}

export const FetchDataContext = createContext<FecthDataContextProps | undefined>(undefined);

interface FetchDataProviderProps{
    children: ReactNode
}

export function FetchDataProvider({children}: FetchDataProviderProps) {
    const {latitude, longitude } = useLocation(); 
    const {getPrayerTimesLocation} = useFetchData();
    
    const [data, SetData] = useState<TimingData>();

    console.log('lat', latitude);
   
    React.useEffect(() => {
        (async (): Promise<void>  => {
            try {
                const data = await getPrayerTimesLocation(latitude, longitude);
                if (data !== undefined) {
                  SetData(data);
                }
            } catch (error) {
                console.error('Error in fetchPrayerTimes:', error);
            }
      })();
      }, [latitude, longitude])

    return (
        <FetchDataContext.Provider value={{data}}>
            {children}
        </FetchDataContext.Provider>
    );
}
