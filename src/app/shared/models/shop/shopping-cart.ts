import {User} from "../user";
import {ItemsAndQuantity} from "./items-quantity";

export interface ShoppingCart {
    id?: number;
    user?: User;
    items: ItemsAndQuantity[];

}
