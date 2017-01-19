export class User{
    name:string;
    phone:string;
    email:string;
    address= new Address();

}

export class Address{
    city:string;
    street:string;
    suite:string;
    zip:number;
}