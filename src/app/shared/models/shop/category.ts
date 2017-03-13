export interface Category {
    c_id?: number;
    name: string;
    childCategories?: Array<Category>;
    description?: string;

}