import { Admin } from "./admin";
import { HoursOfOperation } from "./hours-of-operation";

export class Provider {
    firstName: string;
    lastName: string;
    salutation: string;
    providerId: string;
    location: string;
    admin: Admin;
    hoursOfOperation: HoursOfOperation[];
}