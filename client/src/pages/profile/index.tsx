import { useParams } from 'react-router-dom';
import { createRequest } from '../../api';
import { Posts } from '../../components/Posts';
import { ProfileBanner } from './ProfileBanner';
import { useQuery } from '@tanstack/react-query';
import { User } from '../../types';

const Profile = () => {
  const { userId } = useParams();

  const { isPending, error, data } = useQuery({
    queryKey: ['user', userId],
    queryFn: (): Promise<User> =>
      createRequest.get('/users/' + userId).then((res) => {
        return res.data;
      }),
  });

  return (
    <div className="grow">
      <div className="w-[min(100%,50rem)] h-full mx-auto pt-4 lg:pt-6">
        {isPending && (
          <div className="h-full w-full flex items-center justify-center">
            <p className="text-lg font-semibold text-gray">Loading...</p>
          </div>
        )}
        {error && (
          <div className="h-full w-full flex items-center justify-center">
            <p className="text-lg font-semibold text-red">
              Something went wrong!
            </p>
          </div>
        )}

        {data && (
          <>
            <ProfileBanner userData={data} />
            {userId && <Posts ownerId={userId} />}
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;
