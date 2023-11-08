import person from '../assets/person.jpg';
import { TbLogout2 } from 'react-icons/tb';
import { MdClose } from 'react-icons/md';
import { Contact } from './Contact';

export const Drawer = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className={`${
        open ? 'translate-x-0' : '-translate-x-full'
      } fixed left-0 flex flex-col w-[90%] xs:w-[85%] sm:w-[80%] h-full pb-4 bg-white transition-transform duration-200`}
    >
      <div className="bg-white p-4">
        <div className="flex justify-between items-start">
          <div className="shrink-0 w-24 h-24 rounded-full overflow-hidden bg-gray">
            <img
              src={person}
              alt="profile picture"
              className="w-full h-full object-cover"
            />
          </div>
          <button
            onClick={onClose}
            className="outline-none shrink-0 text-2xl text-gray hover:text-grayDark transition-colors"
          >
            <MdClose />
          </button>
        </div>

        <div className="flex gap-4 items-end mt-4 ">
          <p className="mr-auto font-extrabold line-clamp-2 break-words">
            Kurt Williamson
          </p>

          <TbLogout2 className="shrink-0 text-2xl text-primary hover:text-primaryDark transition-colors" />
        </div>
      </div>

      <p className="p-4 text-gray font-semibold bg-bgLight border-t border-grayLight">
        CONTACTS
      </p>

      <div className="grow flex flex-col gap-2 px-4 pb-4 bg-bgLight border-b border-grayLight overflow-auto scrollbar-hide">
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
      </div>
    </div>
  );
};
