import axios, { AxiosError, AxiosInstance } from "axios";
import { TimingData } from "../interfaces/prayers";
import { apiEndpoint, apiURL } from "../views/Constants";

interface UseFetchDataReturnProps{
    getPrayerTimesLocation: (lat: string, lon: string, method?: string) => Promise<TimingData | undefined>;
    getGeoAddress: (lat: string, lon: string) => Promise<void>;
    getCalculationMethods: () => Promise<any>;
}

const useFetchData = (): UseFetchDataReturnProps => {

    const TIMEOUT = 25000;
    // 4 - Umm Al-Qura University, Makkah 
    // 2 - Islamic Society of North America
    const DEFAULT_METHOD = '4'; 
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
    
    const getPrayerTimesLocation = async (lat: string, lon: string, method?: string): Promise<TimingData | undefined> => {
        const api = getApiInstance(apiURL.ADHAN_URL, apiEndpoint.LOCATION_BASE);
        try{
            if(method == null){
                method = DEFAULT_METHOD
            }
            const response = await api.get(date.toString(), { params: {
                latitude: lat,
                longitude: lon,
                method: method
            }});
            
            if(response.status === 200) {
                console.log(response.data.data)
                return response.data.data;
            }
        } catch(err){
            console.error('Error fetching data:', err as AxiosError);
        }
    }
    const getGeoAddress = async(lat: string, lon: string) : Promise<any> => {
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

   const getCalculationMethods = async (): Promise<void> => {
    const api = getApiInstance(apiURL.ADHAN_URL, apiEndpoint.METHODS_BASE);
    try{
        const response = await api.get('');
        if((response).status === 200){
            return response.data.data;
        }
    }
    catch(err){
        console.error('Error fetching google data:', err as AxiosError);
    }
}

    return {getPrayerTimesLocation, getGeoAddress, getCalculationMethods};
}

export default useFetchData;
