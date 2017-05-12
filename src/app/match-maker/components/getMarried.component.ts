import {
    Component,
    OnInit
} from '@angular/core';

import { PeopleService } from '../../_services/people.service';
import { Person } from '../../_classes/person.interface';
import { Family } from '../../_classes/family.interface';
import { Gender } from '../../_classes/gender.enum';

@Component({
    selector: 'get-married',
    templateUrl: '../templates/getMarried.component.html',
    styleUrls: ['../templates/getMarried.component.scss']
})
export class GetMarriedComponent implements OnInit {
    public child:any;
    private person1: Person;
    private person2: Person;
    private marriages: Array<Family> = [];
    private selectedFamily: Family;

    constructor(private peopleService: PeopleService
    ) {
        let meGet = this.peopleService.getFirstNames();

    }
    ngOnInit() { 
        let people: Array<Person> = [
            { firstName: 'Barbra', lastName: "Bush", married: true, gender: 0, age: 86, spouseFirstName: "George", maidenName: "Thick" },
            { firstName: 'George', lastName: "Bush", married: true, gender: 1, age: 90, spouseMaidenName: "Thick", spouseFirstName: "Barbara" },
            { firstName: 'Tim', lastName: "Taylor", married: true, gender: 1, age: 55, spouseMaidenName: "Patterson", spouseFirstName: "Jill" },
            { firstName: 'Jill', lastName: "Taylor", married: true, gender: 0, age: 55, spouseMaidenName: "Taylor", spouseFirstName: "Tim", maidenName: "Patterson" },
            { firstName: 'Heidi', lastName: "Keppert", married: false, gender: 0, age: 30 },
            { firstName: 'Bill', lastName: "Bender", married: false, gender: 1, age: 40 },
            { firstName: 'Al', lastName: "Borland", married: false, gender: 1, age: 40 },
            { firstName: 'Wilson', lastName: 'Wilson', married: false, gender: 1, age: 70 },
            { firstName: 'Richard', lastName: 'Pryor', married: false, gender: 1, age: 60 },
            { firstName: 'Rihanna', lastName: 'Fenty', married: false, gender: 0, age: 29 },
            { firstName: 'Patrick', lastName: 'Carney', married: false, gender: 1, age: 37 },
            { firstName: "Mary Anne", lastName: "Rose", married: false, gender: 0, age: 36 },
            { firstName: "GIlligan", lastName: "Gump", married: false, gender: 1, age: 60 },
            { firstName: "Ginger", lastName: "Star", married: false, gender: 0, age: 40 },
            { firstName: "Sue", lastName: "TRex", married: false, gender: 0, age: 35 }
        ]


        //this.child = this.peopleService.makeABaby(people[2], people[4])

    }

    getPerson(person){
        //Get Random Gender
            let gender = this.getRandomGender.toString();
            let getGender = Gender[gender];
        if(person === 1){
            let person1 = this.peopleService.getRandomPerson(1);
            console.log('person1',person1)

            this.person1 = person1
        }else if(person === 2){
            let person2 = this.peopleService.getRandomPerson(0)
            this.person2 = person2;
        }

    }

        
    getMarried() {
        let person1 = this.person1;
        let person2 = this.person2;

        //Check to see if the two people are of opposite genders.
        let lastName: String;
        var children: Array<Person> = [];

        if (person1.gender === 1 && person2.gender === 0 || person1.gender === 0 && person2.gender === 1) {

            if (person1.gender == 1) {
                person2.lastName = person1.lastName;

            } else {
                person1.lastName = person2.lastName;
            }

            const madeBabies: number = Math.floor(8 * Math.random());

            console.log('madeBabies', madeBabies);

            for (let i = 0; i < madeBabies; i++) {
                console.log('Here I am Making A Baby');
                let baby = this.peopleService.makeABaby(person1, person2)
                console.log('Baby', baby)
                children.push(baby.baby)
            }

        } else {
            let lastName = person1.lastName + "-" + person2.lastName
            let lastNameClean = lastName.replace(' ', '');
            person1.lastName = lastNameClean;
            person2.lastName = lastNameClean;
        }


        let marriage = {
            father: person1,
            mother: person2,
            children: children
        }
        this.marriages.push(marriage)

    }

    getFamily(i){
        console.log('index', i )
        this.selectedFamily = this.marriages[i]
        console.log(' this.selectedFamily ',  this.selectedFamily )
    }


    getRandomGender(){
        let gender:number;
        let randomGender = Math.random();
        
        if( randomGender <= 0.475 ){ gender = 0 }
        else if( randomGender >= 0.475 && randomGender <= 0.525 ){gender = 2 }
        else{ gender = 1}

        return gender
    }

}