import { Role } from './role';

export interface User {
  id_profile?: number;
  profile_Fullname: string;
  username: string;
  profile_Gender?: string;
  profile_email: string;
  profile_password: string;
  profile_Birthdate: string;
  role: Role;
}
