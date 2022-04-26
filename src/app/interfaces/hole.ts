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
    teeBoxes?:     any[];
}