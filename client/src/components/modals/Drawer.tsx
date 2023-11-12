import { TbLogout2 } from 'react-icons/tb';
import { MdClose } from 'react-icons/md';
import { Contact } from '../Contact';
import { Contact as ContactType } from '../../types';
import { useAuthContext } from '../../context/AuthContext';
import { createRequest } from '../../api';

export const Drawer = ({
  open,
  onClose,
  contacts,
}: {
  open: boolean;
  onClose: () => void;
  contacts: ContactType[] | undefined;
}) => {
  const { currentUser, setCurrentUser } = useAuthContext();

  const handleLogOut = async () => {
    try {
      await createRequest.post('/auth/logout');
      setCurrentUser(null);
      onClose();
    } catch (error) {
      console.error(error);
    }
  };
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
              src={`/upload/${currentUser?.profile_pic}`}
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
            {currentUser?.username}
          </p>

          <div onClick={handleLogOut}>
            <TbLogout2 className="shrink-0 text-2xl text-primary hover:text-primaryDark transition-colors" />
          </div>
        </div>
      </div>

      <p className="p-4 text-gray font-semibold bg-bgLight border-t border-grayLight">
        CONTACTS
      </p>

      <div className="grow flex flex-col gap-2 px-4 pb-4 bg-bgLight border-b border-grayLight overflow-auto scrollbar-hide">
        {contacts &&
          (contacts.length !== 0 ? (
            contacts.map((contact) => (
              <Contact key={contact.id} contactData={contact} />
            ))
          ) : (
            <p className="text-sm">No Following Contacts</p>
          ))}
      </div>
    </div>
  );
};
