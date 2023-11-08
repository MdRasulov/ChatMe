import { Post } from './Post';

export const Posts = () => {
  return (
    <div className="flex flex-col gap-4 lg:gap-6 pb-1">
      <Post />
      <Post />
    </div>
  );
};
