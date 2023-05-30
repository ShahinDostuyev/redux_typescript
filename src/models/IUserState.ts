import { IUser } from "./IUser";

export interface IUserState {
  data: null | IUser[];
  error: null | string;
  loading: boolean;
}
