import { useState } from "react";

export const useLocation = () => {

    const [latitude, setLatitude] = useState(49.25917422678888);
    const [longitude, setLongitude] = useState(-122.88797293263566);

    // Get current location 
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(( position: GeolocationPosition) => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
        },
        (err: GeolocationPositionError) => {
            console.log(err);
        },
        {
            enableHighAccuracy: true,
            timeout: 9000,
            maximumAge: 60000,
        })
    }
    console.log('latitude', latitude);
    console.log('longitude', longitude);
    return [latitude, longitude];
}