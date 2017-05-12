import { Injectable } from '@angular/core';

import { FirstNames } from '../_classes/firstNames.class';
import { LastNames } from '../_classes/lastNames.class';

import { Person } from '../_classes/person.interface';
import { Gender } from '../_classes/gender.enum';

@Injectable()
export class PeopleService {

    constructor(){}

    getFirstNames() {
        let firstNames = new FirstNames;

        console.log('getFirstNames', firstNames)
        return firstNames.names;
    }

    getLastNames(){
        let lastNames = new LastNames;
        return lastNames.lastNames;
    }

    getRandomPerson(gender: Gender) {
        const firstNames = this.getFirstNames();
        const lastNames = this.getLastNames();

        let filteredNames = firstNames.filter(firstName =>{ return firstName.gender === gender})
        console.log('filteredNames', filteredNames)
        let numOfirstNames = filteredNames.length;
        let numOfLastNames = lastNames.length;

        let getRandomNameIndex = Math.floor(numOfirstNames * Math.random());


        let getRandomName = filteredNames[getRandomNameIndex].firstName;
        let firstName = getRandomName;

        let randomLastNameIndex = Math.floor(numOfLastNames * Math.random() );
        let randomLastName = lastNames[randomLastNameIndex].lastName;
        

        //Age for this we will assume the person is between 25 and 50.
        let age = Math.floor(25 + Math.random() * 25)

        let person: Person = {
            firstName: firstName,
            lastName: randomLastName,
            age: age,
            gender: gender,
            married: false
        }

        console.log('Random Person', person)
        return person
    }


    makeABaby(person1, person2) {
        let firstName: string;
        let gender: Gender;
        let lastName: string;
        let father: Person;
        let mother: Person;
        let age: number;

        const firstNames = this.getFirstNames();
        console.log('firstNames', firstNames)
        console.log('person1.gender', person1.gender)


        if (person1.gender === 1) {
            lastName = person1.lastName;
        } else lastName = person2.lastName;

        let randomNum = Math.random();
        console.log('randomNum', randomNum)

        //Math.random returns a Random Number between 0 and 1. 


        // If Number is less than 0.45 get only female names
        if (randomNum < 0.45) {
            let filterFirstNames = firstNames.filter(firstname => firstname.gender === 1)
            //  console.log('filteredFirstNames', filterFirstNames)

            let numOfirstNames = filterFirstNames.length;
            let getRandomNameIndex = Math.floor(numOfirstNames * Math.random())

            //   console.log('getRandomNameIndex', getRandomNameIndex)
            console.log('getRandomNameIndex', getRandomNameIndex)
            console.log('random Guy', filterFirstNames[getRandomNameIndex])

            let getRandomName = filterFirstNames[getRandomNameIndex].firstName;

            gender = Gender.male;

            //    console.log('Random Name ', getRandomName )
            firstName = getRandomName;
        } else if (randomNum >= 0.45 && randomNum <= 0.55) {
            let filterFirstNames = firstNames.filter(firstName => firstName.gender === 2)
            let numOfirstNames = filterFirstNames.length;
            let getRandomNameIndex = Math.floor(numOfirstNames * Math.random())
console.log('getRandomNameIndex', getRandomNameIndex)
            console.log('random Other',filterFirstNames[getRandomNameIndex])
            let getRandomName = filterFirstNames[getRandomNameIndex].firstName;

            gender = 2;

            firstName = getRandomName;

        } else {
            let filterFirstNames = firstNames.filter(firstName => firstName.gender === 0)

            let numOfirstNames = filterFirstNames.length;
            let getRandomNameIndex = Math.floor(numOfirstNames * Math.random())
            console.log('getRandomNameIndex', getRandomNameIndex)
            console.log('random Girl',filterFirstNames[getRandomNameIndex])

            let getRandomName = filterFirstNames[getRandomNameIndex].firstName;
            gender = filterFirstNames[getRandomNameIndex].gender;

            firstName = getRandomName;

        }

        if (person1.lastName === "Bender") {
            let filterFirstNames = firstNames.filter(firstName => firstName.gender === 2)
            //     console.log('filteredFirstNames', filterFirstNames)

            let numOfirstNames = filterFirstNames.length;
            let getRandomNameIndex = Math.floor(numOfirstNames * Math.random())

            //     console.log('getRandomNameIndex', getRandomNameIndex)

            let getRandomName = filterFirstNames[getRandomNameIndex].firstName;

            gender = 2;

            firstName = getRandomName;
        }

        //  console.log('gender', gender)

        if (person1.age < person2.age) {
            let feasible = person1.age - 13;
            console.log('feasible', feasible)

            age = Math.floor(feasible * Math.random())
        } else {
            let feasible = person2.age - 13;
            console.log('feasible', feasible)

            age = Math.floor(feasible * Math.random())
        }

        let baby = {
            firstName: firstName,
            lastName: lastName,
            gender: gender,
            age: age,
            married: false
        }
        console.log('baby', baby)


        if (person1.gender == 1) {
            father = person1,
                mother = person2
        } else {
            father = person2;
            mother = person1;
        }


        return {
            father: person2,
            mother: person1,
            baby: baby,
        }


    };
}