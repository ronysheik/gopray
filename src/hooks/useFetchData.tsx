import axios, { AxiosError, AxiosInstance } from "axios";
import { useLocation } from "./useLocation";
import { TimingData } from "../interfaces/prayers";
import { GOOGLE_API_KEY } from "../views/Constants";
import { useEffect } from "react";

    
export enum apiURL {
    ADHAN_URL= 'https://api.aladhan.com/',
    GOOGLE_URL= 'https://maps.googleapis.com/',
    OPEN_STREET_URL= 'https://nominatim.openstreetmap.org/'
}

export enum apiEndpoint {
    LOCATION_BASE = 'v1/timings/',
    ADDRESS_BASE  = 'v1/timingsByAddress/',
    GOOGLE_ADDRESS_BASE = 'maps/api/geocode/',
    OPEN_STREET_BASE='reverse?'
}

interface UseFetchDataReturnProps{
    getPrayerTimesLocation: (lat: string, lon: string) => Promise<TimingData | undefined>;
    getGeoAddress: (lat: string, lon: string) => Promise<void>;
}


const useFetchData = (): UseFetchDataReturnProps => {

    const TIMEOUT = 25000;
    const date = Math.floor(Date.now() / 1000);
    
    const getAPIUri = (URL: string,endpoint: string) => {
        if(endpoint != null){
            const uri = URL + endpoint;
            return uri;
        }
        return null;
    }

    const getApiInstance = (url: string, endpoint:string): AxiosInstance =>
        axios.create({
            baseURL: getAPIUri(url, endpoint) ?? undefined,
            timeout: TIMEOUT
        });
    
    const getPrayerTimesLocation = async (lat: string, lon: string): Promise<TimingData | undefined> => {
        const api = getApiInstance(apiURL.ADHAN_URL, apiEndpoint.LOCATION_BASE);
        try{
            const response = await api.get(date.toString(), { params: {
                latitude: lat,
                longitude: lon 
            }});
            
            if(response.status === 200) {
                console.log(response.data.data)
                return response.data.data;
            }
        } catch(err){
            console.error('Error fetching data:', err as AxiosError);
        }
    }
    const getGeoAddress = async(lat: string, lon: string) : Promise<void> => {
        const api = getApiInstance(apiURL.OPEN_STREET_URL, apiEndpoint.OPEN_STREET_BASE);
        try{
            const response = await api.get(`format=json&lat=${lat}&lon=${lon}`);
            if(response.status === 200) {
                return response.data;
            }
        }
        catch(err){
            console.error('Error fetching google data:', err as AxiosError);
        }
    }
    return {getPrayerTimesLocation, getGeoAddress};
}

export default useFetchData;
