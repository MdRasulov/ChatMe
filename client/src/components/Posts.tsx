import { createRequest } from '../api';
import { Post as PostType } from '../types';
import { NoPosts } from './NoPosts';
import { Post } from './Post';
import { useQuery } from '@tanstack/react-query';

export const Posts = ({ ownerId }: { ownerId?: string }) => {
  const { isPending, error, data } = useQuery({
    queryKey: ['posts'],
    queryFn: (): Promise<PostType[]> =>
      createRequest
        .get('/posts?ownerId=' + ownerId)
        .then((res) => res.data.rows),
  });

  return (
    <div className="flex flex-col gap-4 lg:gap-6 pb-1">
      {isPending && (
        <p className="my-8 text-center text-lg font-semibold text-gray">
          Loading...
        </p>
      )}
      {error && (
        <p className="my-8 text-center text-lg font-semibold text-red">
          Something went wrong!
        </p>
      )}

      {data &&
        (data?.length !== 0 ? (
          data.map((post) => <Post postData={post} key={post.id} />)
        ) : (
          <NoPosts />
        ))}
    </div>
  );
};
