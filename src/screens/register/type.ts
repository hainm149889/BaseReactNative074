import {RoleAccount} from '@utils/constant';

export type RegisterForm = {
  role: RoleAccount | null;
  numberPhone?: string | null;
  fullname: string;
  username: string;
  password: string;
};
