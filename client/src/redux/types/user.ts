export interface User {
  id: string;
  email: string;
  username: string;
}

export interface UserState {
  user: User | null;
  loading: boolean;
  error: boolean;
}
