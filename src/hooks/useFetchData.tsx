import axios, { AxiosError, AxiosInstance } from "axios";
import { useLocation } from "./useLocation";
import { TimingData } from "../interfaces/prayers";

    
export enum apiURL  {
    LOCATION_BASE = '/v1/timings/',
    ADDRESS_BASE  = '/v1/timingsByAddress/'
}

interface UseFetchDataReturnProps{
    getPrayerTimesLocation: () => Promise<TimingData | undefined>;
}


const useFetchData = (): UseFetchDataReturnProps => {

    const TIMEOUT = 25000;
    const [lat, long] = useLocation();
    const date = Math.floor(Date.now() / 1000);

    const getAPIUri = (endpoint: string) => {
        if(endpoint != null){
            const uri = 'https://api.aladhan.com/' + endpoint;
            return uri;
        }
        return null;
    }

    const getApiInstance = (endpoint: apiURL | string): AxiosInstance =>
        axios.create({
            baseURL: getAPIUri(endpoint) ?? undefined,
            timeout: TIMEOUT
        });
    
    const getPrayerTimesLocation = async (): Promise<TimingData | undefined> => {
        const api = getApiInstance(apiURL.LOCATION_BASE);
        try{
            const response = await api.get(date.toString(), { params: {
                latitude: lat,
                longitude: long 
            }});
            
            if(response.status === 200) {
                console.log(response.data.data)
                return response.data.data;
            }
        } catch(err){
            console.error('Error fetching data:', err as AxiosError);
        }
    }
    return {getPrayerTimesLocation};
}

export default useFetchData;
