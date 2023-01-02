// Define a type user for usability.

import { Role } from "./role";

export type User = {
  role?: Role;
  userName: string;
  password: string;
  phone?: string;
  simSerialNumber?: string;
};
