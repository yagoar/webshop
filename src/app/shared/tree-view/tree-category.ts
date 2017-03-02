export class TreeCategory{

    name: string;
    categories: Array<TreeCategory>;
    expanded:boolean;

    constructor(name,categories) {
        this.name = name;
        this.categories = categories;
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