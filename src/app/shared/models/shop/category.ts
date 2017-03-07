export class Category {
    id: number;
    name: string;
    childCategories: Array<Category>;
    description: string;
}