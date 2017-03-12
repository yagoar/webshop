import {User} from "../user";
export class ShoppingOrder {
    id?: number;
    user: User;
    date: string;
    paid: boolean;
}
