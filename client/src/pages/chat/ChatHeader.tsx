import { FaVideo, FaPhone, FaChevronLeft } from 'react-icons/fa6';
import { MdDelete } from 'react-icons/md';
import person from '../../assets/person.jpg';
import { Link } from 'react-router-dom';

export const ChatHeader = () => {
  return (
    <div className="h-[5rem] bg-white border-b border-grayLight">
      <div className="flex items-center gap-4 sm:gap-6 w-[min(100%-2rem,55rem)] h-full mx-auto">
        <Link
          to={'..'}
          relative="path"
          className="shrink-0 text-lg sm:text-xl text-primary"
        >
          <FaChevronLeft className="hover:text-primaryDark cursor-pointer transition-colors" />
        </Link>

        <img
          src={person}
          alt="user-photo"
          className="w-12 sm:w-14 h-12 sm:h-14 object-cover rounded-full"
        />

        <div className="mr-auto">
          <p className="sm:text-lg font-semibold text-grayDark break-all line-clamp-1">
            Michael
          </p>
          <p className="text-xs sm:text-sm text-gray">Last seen, 2.45pm</p>
        </div>

        <div className="flex items-center gap-4 sm:gap-6 text-gray shrink-0 ">
          <FaPhone className="hidden sm:block text-lg sm:text-xl hover:text-grayDark cursor-pointer transition-colors" />
          <FaVideo className="hidden sm:block text-xl sm:text-2xl hover:text-grayDark cursor-pointer transition-colors" />
          <MdDelete className="text-red hover:text-redDark cursor-pointer transition-colors text-2xl" />
        </div>
      </div>
    </div>
  );
};
