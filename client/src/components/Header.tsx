import { FiSearch, FiPlusCircle } from 'react-icons/fi';
import { HiMenuAlt2 } from 'react-icons/hi';
import { Modal } from './modals/Modal';
import { useState } from 'react';
import { SearchModal } from './modals/SearchModal';
import { useAuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import { useModalContext } from '../context/ModalStateContext';

export const Header = () => {
  const { currentUser } = useAuthContext();
  const { setDrawerState } = useModalContext();

  const [openSearch, setOpenSearch] = useState(false);
  return (
    <>
      <header className="sticky top-0 left-0 flex sm:items-stretch gap-3 px-4 lg:px-6 py-4 bg-white border-b border-grayLight shadow-sm z-40">
        <button
          onClick={() => {
            setDrawerState(true);
          }}
          className="md:hidden shrink-0 outline-none"
        >
          <HiMenuAlt2 className="text-2xl sm:text-3xl text-gray" />
        </button>

        <Link
          to={'/'}
          className="mx-auto md:ml-0 text-2xl text-primary font-extrabold"
        >
          <span>ChatMe</span>
        </Link>

        <button
          onClick={() => {
            setOpenSearch(true);
          }}
          className="flex shrink-0 gap-2 items-center px-2 py-1 text-sm font-semibold text-white bg-primary hover:bg-primaryDark rounded-lg outline-none transition-colors"
        >
          <FiSearch className="text-xl sm:text-2xl md:text-xl" />
          <span className="hidden md:inline">Search</span>
        </button>

        <div className="hidden md:block shrink-0 w-8 sm:w-9 h-8 sm:h-9 rounded-lg overflow-hidden">
          <img
            src={`/upload/${currentUser?.profile_pic}`}
            alt="user-photo"
            className="w-full h-full object-cover"
          />
        </div>
      </header>

      <Modal
        open={openSearch}
        onClose={() => {
          setOpenSearch(false);
        }}
      >
        <SearchModal
          open={openSearch}
          onClose={() => {
            setOpenSearch(false);
          }}
        />
      </Modal>
    </>
  );
};
