import {Pipe} from "@angular/core";

@Pipe({
    name: 'AgePipe'
})
export class AgePipe {

    transform(value, args?) {
        // ES6 array destructuring
        let [minAge] = args;
        return value.filter(person => {
            return person.age >= +minAge;
        });
    }

}