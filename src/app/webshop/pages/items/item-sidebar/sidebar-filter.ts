export class SideBarFilter {

    name: string;
    options: Array<string>;
    expanded: boolean;

    constructor(name:string, options:Array<string>) {
        this.name = name;
        this.options = options;
        this.expanded = false;
    }

    toggle(){
        this.expanded = !this.expanded;
    }

    getIcon(){

        if(this.expanded){
            return '-';
        }

        return '+';
    }
}
