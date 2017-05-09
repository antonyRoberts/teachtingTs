import { Person } from './person.interface';

enum Gender {
    "female",
    "male",
    "other"
}

class Greeter {
    constructor(
        public greeting: string,
        public salutations: string
    ) {
        let woodySays = 'There is a Snake In My Boot'
        let runLooky = this.lookyLou(woodySays)
    }

    greet() {
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

        let announcements = "";
        let marriages = "";

        let person1 = { firstName: "Mark", lastName: "Taylor", gender: 1, age: 21, married:false  }
        let person2 = { firstName: "Pam", lastName: "Anderson", gender:0, age: 40, married:false  }


        let makeABaby1 = this.makeABaby(person1, person2)
        let makeABaby2 = this.makeABaby({ firstName: "Steve", lastName: "Irwin", gender: 1, age: 45, married:false }, people[3]);


        let makeBabies = [
            { person: this.makeABaby(person1, person2) },
            { person: this.makeABaby(people[6], people[3]) },
            { person: this.makeABaby(people[10], people[9]) },
            { person: this.makeABaby(people[5], people[4]) },
            { person: this.makeABaby(people[8], people[4]) },
        ]

        let numberOfPeople = people.length;
        let matchMaker = [
            { marriage: this.getMarried(people[4], people[6]) },
            { marriage: this.getMarried(people[Math.floor(numberOfPeople * Math.random())], people[Math.floor(numberOfPeople * Math.random())]) },
            { marriage: this.getMarried(people[Math.floor(numberOfPeople * Math.random())], people[Math.floor(numberOfPeople * Math.random())]) },
        ]


        let getMarriages = matchMaker.map(data => {
            let person1 = data.marriage.person1;
            let person2 = data.marriage.person2;
            let father:Person;
            let mother: Person;

            if (person1.gender == 1) {
                father = person1,
                    mother = person2
            } else {
                father = person2;
                mother = person1;
            }
            let children = data.marriage.children;
            let numOfChildren = children.length;

            let childrenNotices = "";


            
            let mariageNotice = person1.firstName + " and " + person2.firstName + " got married and had " + numOfChildren + " children <br/>";
            for (let i = 0; i < children.length; i++) {
                let baby = children[i];
                let babyAnnouncement = "&nbsp;&nbsp;&nbsp;" + baby.firstName + " an " + baby.age + " year old " + Gender[baby.gender] + " child was born to " + father.firstName + " and  " + mother.firstName + " " + baby.lastName + "<br/>";
                childrenNotices = childrenNotices + babyAnnouncement;
            }

            let family = mariageNotice + childrenNotices;

            marriages = marriages + family;
        })


        let info = makeBabies.map(data => {
            let person = data.person
            let lastName = person.father.lastName;
            let father = person.father.firstName;
            let mother = person.mother.firstName;
            let babyName = person.baby.firstName;
            let babyGender = person.baby.gender;

            let babyNotice = babyName + ", a " + Gender[babyGender] + " child was born to " + father + " and  " + mother + " " + lastName + "<br/>";
            announcements = announcements + babyNotice;

            return babyNotice
        })

        let line1 = "<h1>  This is Line 1.1 </h1> + <br/>";
        let line2 = "<h3>" + this.greeting + " " + this.salutations + "</h3> <br/>";
        let section1 = JSON.stringify(info);

        let htmlText = line1 + line2 + announcements + "<br/><br/>" + marriages

        return JSON.stringify(htmlText)
    }

    lookyLou(passedData: string) {
        // javascript you don't have to type myArray so it could be just written as 
        // let myArray = [1,2,3,4,5,6,7,8,9,10]
        let bees = [1, 2]

        let myArray: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

        // % is aka modulus operator and gives the remainder of the number divided by another.
        // === checks that the value and type are the same.
        //Filter loops through all elements in the array, entry is just the name given, you could call it anything you wanted, and returns those that meet the condition..
        let evens = myArray.filter(entry => entry % 2 === 0)
        console.log('Evens', evens)

    }

    getMarried(person1: Person, person2: Person) {
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
                console.log('Here I am');
                let baby = this.makeABaby(person1, person2)
                console.log('Baby', baby)
                children.push(baby.baby)
            }

        } else {
            let lastName = person1.lastName + "-" + person2.lastName
            let lastNameClean = lastName.replace(' ', '');
            person1.lastName = lastNameClean;
            person2.lastName = lastNameClean;
        }


        return {
            person1: person1,
            person2: person2,
            children: children
        }

    }

    makeABaby(person1: Person, person2: Person) {
        let firstName: string;
        let gender: Gender;
        let lastName: string;
        let father: Person;
        let mother: Person;
        let age: number;

        console.log('person1.gender', person1.gender)
        if (person1.gender === 1) {
            lastName = person1.lastName;
        } else lastName = person2.lastName;

        let randomNum = Math.random();
        console.log('randomNum', randomNum)

        let firstNames = [
            { name: "Samantha", gender: 0 },
            { name: "Marie", gender: 0 },
            { name: "Sarah", gender: 0 },
            { name: "Tim", gender: 1 },
            { name: "Lilith", gender: 0 },
            { name: "Shaniqua", gender: 0 },
            { name: "Mark", gender: 1 },
            { name: "Joaquin", gender: 1 },
            { name: "RuPaul", gender: 2 },
            { name: "Joe", gender: 1 },
            { name: "Juan", gender: 1 },
            { name: "Katelyn", gender: 2 },
            { name: "John", gender: 1 },
            { name: "Tom", gender: 1 },
            { name: "Gina", gender: 0 },
            { name: "Tony", gender: 1 },
            { name: "Bill", gender: 1 },
            { name: "George", gender: 1 },
            { name: "Mary", gender: 0 },
            { name: "Elizabeth", gender: 0 },
            { name: "Abmer", gender: 0 },
            { name: "Sue", gender: 0 },
            { name: "Chuck", gender: 1 },
            { name: "Syd", gender: 1 },
            { name: "Ed", gender: 1 },
            { name: "Julian", gender: 1 },
            { name: "Bill", gender: 1 },
            { name: "Ted", gender: 1 },
            { name: "Rufus", gender: 1 },
            { name: "Chelsea", gender: 2 },
            { name: "Natalie", gender: 0 },
            { name: "Natasha", gender: 0 },
            { name: "Naomi", gender: 0 }
        ]

        //Math.random returns a Random Number between 0 and 1. 

        // If Number is less than 0.45 get only female names
        if (randomNum < 0.45) {
            let filterFirstNames = firstNames.filter(firstname => firstname.gender === 1)
            //  console.log('filteredFirstNames', filterFirstNames)

            let numOfirstNames = filterFirstNames.length;
            let getRandomNameIndex = Math.floor(numOfirstNames * Math.random())

            //   console.log('getRandomNameIndex', getRandomNameIndex)

            let getRandomName = filterFirstNames[getRandomNameIndex].name;

            gender = Gender.male;

            //    console.log('Random Name ', getRandomName )
            firstName = getRandomName;
        } else if (randomNum >= 0.45 && randomNum <= 0.55) {
            let filterFirstNames = firstNames.filter(firstname => firstname.gender === 2)
            let numOfirstNames = filterFirstNames.length;
            let getRandomNameIndex = Math.floor(numOfirstNames * Math.random())
            let getRandomName = filterFirstNames[getRandomNameIndex].name;

            gender = 2;

            firstName = getRandomName;

        } else {
            let filterFirstNames = firstNames.filter(firstname => firstname.gender === 0)

            let numOfirstNames = filterFirstNames.length;
            let getRandomNameIndex = Math.floor(numOfirstNames * Math.random())

            let getRandomName = filterFirstNames[getRandomNameIndex].name;
            gender = filterFirstNames[getRandomNameIndex].gender;

            firstName = getRandomName;

        }

        if (person1.lastName === "Bender") {
            let filterFirstNames = firstNames.filter(firstname => firstname.gender === 2)
            //     console.log('filteredFirstNames', filterFirstNames)

            let numOfirstNames = filterFirstNames.length;
            let getRandomNameIndex = Math.floor(numOfirstNames * Math.random())

            //     console.log('getRandomNameIndex', getRandomNameIndex)

            let getRandomName = filterFirstNames[getRandomNameIndex].name;

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

let salutations = "Some people are more verbose in their introductions"
var greeter = new Greeter("Hello, world 1.0 !", salutations);

document.body.innerHTML = greeter.greet();
