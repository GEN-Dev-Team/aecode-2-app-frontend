import { Role } from './role';

export interface User {
  id_profile: number;
  profile_Fullname: string;
  profile_Gender?: string;
  profile_email: string;
  profile_password: string;
  profile_Birthdate?: string;
  profile_image?: string;
  role: Role;
}
