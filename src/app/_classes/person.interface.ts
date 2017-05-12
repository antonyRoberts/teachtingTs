import { Gender } from './gender.enum';

export interface Person {
    firstName: string,
    lastName: string,
    age: number,
    gender: Gender,
    married: Boolean,
    spouseFirstName?: string,
    spouseMaidenName?: string,
    maidenName?: string,
    suffix?: string
}