export const additional = [
    "Sunrise",
    "Imsak",
    "Midnight",
    "Sunset",
    "Firstthird",
    "Lastthird",
]

export enum apiURL {
    ADHAN_URL= 'https://api.aladhan.com/',
    GOOGLE_URL= 'https://maps.googleapis.com/',
    OPEN_STREET_URL= 'https://nominatim.openstreetmap.org/'
}

export enum apiEndpoint {
    LOCATION_BASE = 'v1/timings/',
    ADDRESS_BASE  = 'v1/timingsByAddress/',
    METHODS_BASE = 'v1/methods',
    GOOGLE_ADDRESS_BASE = 'maps/api/geocode/',
    OPEN_STREET_BASE='reverse?'
}

