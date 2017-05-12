import { Component,
         OnInit, EventEmitter } from '@angular/core';

import { PeopleService } from '../../_services/people.service';
import { Person } from '../../_classes/person.interface';
 
@Component({
    selector: 'make-baby',
    templateUrl: '../templates/makeABaby.component.html'
})
export class MakeABabyComponent implements OnInit {
    public babies: Array<Person> = [];

    constructor(private peopleService: PeopleService) { }
    
    ngOnInit() { 
        let person1 = { firstName: "Nick", lastName: "Kringle", age: 42, gender: 1, married: false };
        let person2 = { firstName: "Emmie", lastName: "Schnoodle", age: 35, gender: 1, married: false };

        let getABaby = this.peopleService.makeABaby(person1, person2)
        
        this.babies.push(getABaby.baby)
        
    }

    makeABabyButton(){
        let person1 = this.peopleService.getRandomPerson(0);
        let person2 = this.peopleService.getRandomPerson(1);

        let getABaby = this.peopleService.makeABaby(person1, person2);
        this.babies.push(getABaby.baby)


       // let getABaby = this.peopleService.makeABaby(person1, person2)
        
      //  this.babies.push(getABaby.baby)
    }
}