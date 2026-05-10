export type UserRoleType = 'UNAUTHENTICATED' | 'USER' | 'ADMIN' | 'ROOT';

export interface UserType {
  id: number;
  email: string;
  name: string;
  role: UserRoleType;
}
