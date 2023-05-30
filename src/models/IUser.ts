import { IAddress } from "./IAddress";
import { ICompany } from "./ICompany";

export interface IUser {
  id: number;
  username: string;
  email: string;
  address: IAddress
  company: ICompany
}
