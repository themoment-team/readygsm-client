export type UserRoleType = 'ADMIN' | 'STUDENT';

export interface UserType {
  id: number;
  email: string;
  name: string;
  role: UserRoleType;
}
