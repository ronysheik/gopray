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

export const additionalMethod = [
   "Muslim World League",
   "University of Islamic Sciences, Karachi",
   "Institute of Geophysics, University of Tehran",
   "Kuwait",
   "Qatar",
   "Union Organization islamic de France",
   "Diyanet İşleri Başkanlığı, Turkey",
   "Spiritual Administration of Muslims of Russia",
   "Moonsighting Committee Worldwide (also requires shafaq parameter)",
   "Dubai (experimental)",
   "Jabatan Kemajuan Islam Malaysia (JAKIM)",
   "Tunisia",
   "Algeria",
   "KEMENAG - Kementerian Agama Republik Indonesia",
   "Morocco",
   "Comunidade Islamica de Lisboa",
   "Ministry of Awqaf, Islamic Affairs and Holy Places, Jordan",
   "gyptian General Authority of Survey",
   "Diyanet İşleri Başkanlığı, Turkey (experimental)",
   "Shia Ithna-Ashari, Leva Institute, Qum",
   "Moonsighting Committee Worldwide (Moonsighting.com)",
   "Kementerian Agama Republik Indonesia",
   "Union Organization Islamic de France"
]

export enum prayerCalculationMethods {
    IslamicSocietyOfNorthAmerica = 2, 
    UmmAlQuraUniversityMakkah = 4, 
    EgyptianGeneralAuthorityOfSurvey = 5,
    GulfRegion = 8,
    MajlisUgamaIslamSingapuraSingapore = 12,
}

export const methodMap: Record<string, string> = {
    "Islamic Society of North America (ISNA)": "2",
    "Egyptian General Authority of Survey": "5",
    "Umm Al-Qura University, Makkah": "4",
    "Gulf Region": "8",
    "Majlis Ugama Islam Singapura, Singapore": "12",
};

