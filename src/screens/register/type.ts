import {RoleAccount} from '@utils/constant';

export type RegisterForm = {
  role: RoleAccount | null;
  numberPhone?: string | null;
  username: string;
  password: string;
};
