export type TRegister = {
  username: string;
  email: string;
  password: string;
  role?: 'admin';
};

export type TLogin = {
  email: string;
  password: string;
};
