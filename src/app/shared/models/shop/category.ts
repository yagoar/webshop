export interface Category {
    c_id?: number;
    name: string;
    parentCategory?: number;
    childrenCategories?: Array<Category>;
    description?: string;
    deleted?: boolean;

}