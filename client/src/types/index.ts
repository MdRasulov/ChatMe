export type User = {
  id: number;
  username: string;
  email: string;
  profile_pic: string | null;
};

export type LoginInput = {
  email: string;
  password: string;
};
