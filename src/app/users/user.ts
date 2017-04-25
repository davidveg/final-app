import {Address} from './address';

export class User {
    id : number;
    name : string;
    email : string;
    phone: string;
    address = new Address();
}