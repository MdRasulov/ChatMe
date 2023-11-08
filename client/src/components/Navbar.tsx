import { LuHome, LuUser2, LuUsers2 } from 'react-icons/lu';
import { TbPhoto, TbNews, TbSettingsCode, TbLogout2 } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import person from '../assets/person.jpg';

export const Navbar = () => {
  return (
    <>
      <div className="hidden sm:flex sticky top-[69px] shrink-0 flex-col gap-4 lg:gap-6 w-fit lg:w-[13rem] xl:w-[15rem] h-[calc(100svh-86px)] lg:h-[calc(100svh-94px)] pt-4 lg:pt-6 pb-1 overflow-auto scrollbar-hide">
        <Link
          to={'/profile'}
          className="p-4 lg:p-6 bg-white rounded-lg shadow-sm outline-none"
        >
          <div className="flex items-center gap-3">
            <div className="shrink-0 w-10 h-10 rounded-lg overflow-hidden">
              <img
                src={person}
                alt="user-photo"
                className="w-full h-full object-cover"
              />
            </div>

            <p className="hidden lg:block text-primaryDark font-semibold text-left break-words line-clamp-1">
              Kurt Williamson
            </p>
          </div>
        </Link>

        <nav className="grow">
          <ul className="flex flex-col items-center lg:items-stretch px-4 lg:px-6 lg:py-2 text-base/4 font-semibold text-grayDark bg-white rounded-lg shadow-sm">
            <Link
              to={'/'}
              className="flex items-center gap-2 py-4 cursor-pointer hover:text-primary border-b border-grayLight"
            >
              <LuHome className="text-2xl lg:text-xl text-gray hover:text-grayDark transition-colors" />
              <span className="hidden lg:block">Home</span>
            </Link>
            <Link
              to={'/profile'}
              className="flex items-center gap-2 py-4 cursor-pointer hover:text-primary border-b border-grayLight"
            >
              <LuUser2 className="text-2xl lg:text-xl text-gray hover:text-grayDark transition-colors" />
              <span className="hidden lg:block">Profile</span>
            </Link>
            <li className="flex items-center gap-2 py-4 cursor-pointer hover:text-primary border-b border-grayLight">
              <LuUsers2 className="text-2xl lg:text-xl text-gray hover:text-grayDark transition-colors" />
              <span className="hidden lg:block">Friends</span>
            </li>
            <li className="flex items-center gap-2 py-4 cursor-pointer hover:text-primary border-b border-grayLight">
              <TbPhoto className="text-2xl lg:text-xl text-gray hover:text-grayDark transition-colors" />
              <span className="hidden lg:block">Photos</span>
            </li>
            <li className="flex items-center gap-2 py-4 cursor-pointer hover:text-primary border-b border-grayLight">
              <TbNews className="text-2xl lg:text-xl text-gray hover:text-grayDark transition-colors" />
              <span className="hidden lg:block">News Feed</span>
            </li>
            <li className="flex items-center gap-2 py-4 cursor-pointer hover:text-primary border-grayLight">
              <TbSettingsCode className="text-2xl lg:text-xl text-gray hover:text-grayDark transition-colors" />
              <span className="hidden lg:block">Settings</span>
            </li>
          </ul>
        </nav>

        <div className="flex flex-col items-center lg:items-stretch p-4 lg:p-6 bg-white rounded-lg shadow-sm">
          <div className="flex items-center gap-2 text-grayDark font-semibold hover:text-red cursor-pointer">
            <TbLogout2 className="text-2xl lg:text-xl text-red hover:text-redDark transition-colors" />
            <span className="hidden lg:block">Log out</span>
          </div>
        </div>
      </div>

      
      <div className="fixed sm:hidden bottom-0 left-0 flex gap-2 justify-between w-full p-4 text-lg text-white bg-primary z-40">
        <Link to={'/'} className="flex flex-col items-center">
          <LuHome />
          <span className="text-xs">Home</span>
        </Link>
        <Link to={'/profile'} className="flex flex-col items-center">
          <LuUser2 />
          <span className="text-xs">Profile</span>
        </Link>
        <div className="flex flex-col items-center">
          <TbPhoto />
          <span className="text-xs">Phote</span>
        </div>
        <div className="flex flex-col items-center">
          <TbSettingsCode />
          <span className="text-xs">Settngs</span>
        </div>
      </div>
    </>
  );
};
