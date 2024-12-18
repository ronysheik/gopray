import React, { ReactNode, useState } from "react";
import {  createContext } from "react";
import { TimingData } from "../interfaces/prayers";
import useFetchData from "../hooks/useFetchData";
import { useLocation } from "../hooks/useLocation";
import { additionalMethod, methodMap } from "../views/Constants";


interface FecthDataContextProps {
    data: TimingData | undefined;
    methods: any;
    updatePrayer (method: string) : Promise<void>;
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

    React.useEffect(() => {
        (async (): Promise<void>  => {
            try {
                const data = await getPrayerTimesLocation(latitude, longitude);
                const methods =  await getCalculationMethods();
                if (data !== undefined || methods !== undefined) {
                    const filteredMethods = Object.values(methods).filter(
                        (method : any) => !additionalMethod.includes(method.name)
                      );
                  SetData(data);
                  SetMethods(filteredMethods);
                }
            } catch (error) {
                console.error('Error in fetchPrayerTimes:', error);
            }
      })();
      }, [latitude, longitude])

     const updatePrayer = async (method: string): Promise<void> => {
        try{
            method = methodMap[method];
            const data = await getPrayerTimesLocation(latitude, longitude, method);
            if (data !== undefined ) {
                SetData(data);
            }
        }
        catch(error){
            console.error('Error in fetchPrayerTimes:', error);
        }
     }

    return (
        <FetchDataContext.Provider value={{data, methods, updatePrayer}}>
            {children}
        </FetchDataContext.Provider>
    );
}
