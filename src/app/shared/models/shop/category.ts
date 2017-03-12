export interface Category {
    id?: number;
    name: string;
    childCategories?: Array<Category>;
    description?: string;

}