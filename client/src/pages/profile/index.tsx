import { Posts } from '../../components/Posts';
import { ProfileBanner } from './ProfileBanner';

const Profile = () => {
  return (
    <div className="grow">
      <div className="w-[min(100%,50rem)] mx-auto pt-4 lg:pt-6">
        <ProfileBanner />
        <Posts />
      </div>
    </div>
  );
};

export default Profile;
