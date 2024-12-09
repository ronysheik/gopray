import React, { ReactNode, useState } from "react";
import {  createContext } from "react";
import { TimingData } from "../interfaces/prayers";
import useFetchData from "../hooks/useFetchData";
import { useLocation } from "../hooks/useLocation";


interface FecthDataContextProps {
    data: TimingData | undefined;
    methods: any;
}

export const FetchDataContext = createContext<FecthDataContextProps | undefined>(undefined);

interface FetchDataProviderProps{
    children: ReactNode
}

export function FetchDataProvider({children}: FetchDataProviderProps) {
    const {latitude, longitude } = useLocation(); 
    const {getPrayerTimesLocation, getCalculationMethods} = useFetchData();
    
    const [data, SetData] = useState<TimingData>();
    const [methods, SetMethods] = useState<any>();

    console.log('lat', latitude);
   
    React.useEffect(() => {
        (async (): Promise<void>  => {
            try {
                const data = await getPrayerTimesLocation(latitude, longitude);
                const methods =  await getCalculationMethods();
                console.log('from Ctx: ', methods);
                if (data !== undefined || methods !== undefined) {
                  SetData(data);
                  SetMethods(methods);
                }
            } catch (error) {
                console.error('Error in fetchPrayerTimes:', error);
            }
      })();
      }, [latitude, longitude])

    return (
        <FetchDataContext.Provider value={{data, methods}}>
            {children}
        </FetchDataContext.Provider>
    );
}
