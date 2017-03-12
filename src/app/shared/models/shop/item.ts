import {Category} from "./category";

export interface Item {
    id: number;
    dtype: string;
    articleNumber: number;
    stock: number;
    name: string;
    category: Category;
    description: string;
    price: number;
    pictureLink: string;

    //single item
    brand?: string;
    color?: string;
    weight?: number;
    material?: string;

    //multiple item
    items?: Array<Item>;
}
