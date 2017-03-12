import {FilterOption} from "./filter-option";
export class SideBarFilter {

    name: string;
    options: Array<FilterOption>;
    expanded: boolean;

    constructor(name:string, options:Array<FilterOption>) {
        this.name = name;
        this.options = options;
        this.expanded = false;
    }

    toggle(){
        this.expanded = !this.expanded;
    }

}
