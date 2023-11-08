import { BsInstagram, BsFacebook, BsLinkedin, BsTwitter } from 'react-icons/bs';
import person from '../../assets/person.jpg';
import profileBanner from '../../assets/profileBanner.jpg';

export const ProfileBanner = () => {
  return (
    <div className="relative flex items-center justify-center mb-4 lg:mb-6 p-4 lg:p-6 bg-white rounded-lg overflow-hidden shadow-sm">
      <div className="flex flex-col items-center justify-center gap-6 z-10">
        <img
          src={person}
          alt="profile-picture"
          className="w-[12rem] h-[12rem] bg-grayLight rounded-full object-cover"
        />

        <p className="text-3xl font-extrabold">Kurt Williamson</p>

        <div className="flex gap-3 text-gray text-xl">
          <BsInstagram className="cursor-pointer hover:text-grayDark transition-colors" />
          <BsFacebook className="cursor-pointer hover:text-grayDark transition-colors" />
          <BsLinkedin className="cursor-pointer hover:text-grayDark transition-colors" />
          <BsTwitter className="cursor-pointer hover:text-grayDark transition-colors" />
        </div>

        <div className="flex w-full gap-4 font-semibold">
          <button className="w-full p-2 text-primary hover:text-primaryDark border border-primary hover:border-primaryDark rounded-lg outline-none transition-colors">
            Message
          </button>
          <button className="w-full p-2 text-white bg-primary hover:bg-primaryDark border border-primary hover:border-primaryDark rounded-lg outline-none">
            Follow
          </button>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-[45%]">
        <div className="absolute top-0 left-0 w-full h-full bg-black/20"></div>
        <img
          src={profileBanner}
          alt="profile-banner"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};
