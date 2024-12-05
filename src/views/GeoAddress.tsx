import React, { useState } from "react";
import useFetchData from "../hooks/useFetchData";
import { useLocation } from "../hooks/useLocation";

const GeoAddress = () => {
  const [address, SetAddress] = useState(''); 
  const {latitude, longitude} = useLocation();
  const {getGeoAddress} = useFetchData();

  React.useEffect(() => {
    (async (): Promise<void>  => {
      try {
          const data = await getGeoAddress(latitude, longitude);
          if(data !== undefined){
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(data, "application/xml");
  
            // Extract the city name
            const cityNode = xmlDoc.querySelector("city");
            const cityName = cityNode?.textContent || "";
            SetAddress(cityName);
        }
      } catch (error) {
          console.error('Error in fetching google data:', error);
      }
  })();
  }, [latitude, longitude])

  return (
    <div>
        {address.length > 1? (
            <p>{`Location: ${address}`}</p>
        ) : (
            <p>Location: Loading...</p>
        )}
    </div>
  )
}

export default GeoAddress;