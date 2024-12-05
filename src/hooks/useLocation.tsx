import { useState, useEffect } from "react";

export const useLocation = () => {
    const [latitude, setLatitude] = useState('0');
    const [longitude, setLongitude] = useState('0');
    const [error, setError] = useState('');

    useEffect(() => {
        // Success callback
        const success = (position: GeolocationPosition) => {
            setLatitude(position.coords.latitude.toString());
            setLongitude(position.coords.longitude.toString());
        };

        // Error callback
        const handleError = (error: GeolocationPositionError) => {
            setError(error.message);
        };

        // Check if geolocation is available
        if (!navigator.geolocation) {
            setError("Geolocation is not supported by your browser.");
        } else {
            navigator.geolocation.getCurrentPosition(success, handleError, {
                enableHighAccuracy: true,
                timeout: 10000,
                maximumAge: 60000,
            });
        }
    }, []); // Empty dependency array ensures this runs once on mount

    return { latitude, longitude, error };
};
