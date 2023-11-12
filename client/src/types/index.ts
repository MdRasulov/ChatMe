export type User = {
  id: number;
  username: string;
  email: string;
  profile_pic: string;
};

export type LoginInput = {
  email: string;
  password: string;
};

export type CreatePost = {
  description: string;
  img?: string;
};

export type Post = {
  id: number;
  user_id: number;
  username: string;
  profile_pic: string;
  description: string;
  img: string | null;
  created_at: string;
};

export type Contact = {
  contact_id: number;
  email: string;
  id: number;
  profile_pic: string;
  username: string;
};
