export interface LoginData {
  login: string;
  password: string;
}

// possibility to extend props for User creation, like: role, email etc.
export interface UserCreationProps extends LoginData {}

export interface User extends UserCreationProps {
  id: number;
}
