export class FilterOption {

    filter: string;
    name: string;
    checked: boolean;

    constructor(name:string, filter:string) {
        this.name = name;
        this.filter = filter;
        this.checked = false;
    }

    check() {
        this.checked = !this.checked;
    }
}