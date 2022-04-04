export interface City {
    "continent": {
        "code": string,
        "geonameId": number,
        "names": NameTranslations
    },
    "country": {
        "geonameId": number,
        "isoCode": string,
        "names": NameTranslations
    },
    "registeredCountry": {
        "geonameId": number,
        "isoCode": string,
        "names": NameTranslations,
        "isInEuropeanUnion": boolean
    },
    "traits": {
        "isAnonymous": boolean,
        "isAnonymousProxy": boolean,
        "isAnonymousVpn": boolean,
        "isHostingProvider": boolean,
        "isLegitimateProxy": boolean,
        "isPublicProxy": boolean,
        "isResidentialProxy": boolean,
        "isSatelliteProvider": boolean,
        "isTorExitNode": boolean,
        "ipAddress": string,
        "network": string
    },
    "city": {
        "geonameId": number,
        "names": NameTranslations
    },
    "location": {
        "accuracyRadius": number,
        "latitude": number,
        "longitude": number,
        "timeZone": string
    },
    "postal": {
        "code": string
    },
    "subdivisions": [{
        "geonameId": number,
        "isoCode": string,
        "names": NameTranslations
    }]
}

interface NameTranslations {
    "de"?: string,
    "en": string,
    "es"?: string,
    "fr"?: string,
    "ja"?: string,
    "pt-BR"?: string,
    "ru"?: string,
    "zh-CN"?: string
}