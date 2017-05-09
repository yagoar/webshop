import {Address} from "./address";

export interface User {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    dateOfBirth: Date;
    gender: string;
    admin: boolean;
    addresses: Array<Address>
}