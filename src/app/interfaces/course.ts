export interface course {
    id?:                       string;
    includes?:                 string;
    courseId?:                 number;
    statusId?:                 number;
    status?:                   string;
    courseTypeId?:             number;
    courseType?:               string;
    practiceAreaId?:           null;
    measurementTypeId?:        number;
    measurementType?:          string;
    mediaId?:                  number;
    holeCount?:                number;
    lat?:                      number;
    lng?:                      number;
    popularityOneWeek?:        number;
    popularityThreeMonth?:     number;
    distanceFromMeKilometers?: number;
    distanceFromMeMiles?:      number;
    localRankOneWeek?:         number;
    localRankThreeMonth?:      number;
    globalRankOneWeek?:        number;
    globalRankThreeMonth?:     number;
    localMaxRank?:             number;
    globalMaxRank?:            number;
    name?:                     string;
    addr1?:                    string;
    addr2?:                    null;
    city?:                     string;
    stateOrProvince?:          string;
    country?:                  string;
    zipCode?:                  string;
    phone?:                    string;
    website?:                  string;
    courseDesigner?:           null;
    courseArchitect?:          null;
    accomodations?:            null;
    hours?:                    null;
    fax?:                      null;
    fees?:                     null;
    description?:              null;
    thumbnail?:                string;
    holes?:                    Hole[];
}

export interface Hole {
    hole?:         number;
    courseHoleId?: number;
    courseId?:     number;
    greenLat?:     number;
    greenLng?:     number;
    frontLat?:     number;
    frontLng?:     number;
    backLat?:      number;
    backLng?:      number;
    pinLat?:       null;
    pinLng?:       null;
    pinExpires?:   null;
    teeBoxes?:     TeeBox[];
}

export interface TeeBox {
    courseHoleTeeBoxId?: number;
    courseHoleId?:       number;
    teeTypeId?:          number;
    teeType?:            TeeType;
    teeColorTypeId?:     number | null;
    teeColorType?:       TeeColorType | null;
    lat?:                number;
    lng?:                number;
    par?:                number;
    yards?:              number;
    meters?:             number;
    hcp?:                number;
    hcp2?:               null;
    teeHexColor?:        TeeHexColor | null;
}

export enum TeeColorType {
    Black = "black",
    Blue = "blue",
    Red = "red",
    White = "white",
}

export enum TeeHexColor {
    Ff0000 = "#ff0000",
    Ffffff = "#ffffff",
    The443C30 = "#443C30",
    The6E869E = "#6e869e",
}

export enum TeeType {
    AutoChangeLocation = "auto change location",
    Champion = "champion",
    Men = "men",
    Pro = "pro",
    Women = "women",
}
