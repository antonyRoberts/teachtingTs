import { Gender } from './gender.enum';
import { Person } from './person.interface';

export interface Family {
    father: Person,
    mother: Person,
    children: Array<Person>
}