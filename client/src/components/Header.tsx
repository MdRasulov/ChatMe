import { FiSearch, FiPlusCircle } from 'react-icons/fi';
import { HiMenuAlt2 } from 'react-icons/hi';
import person from '../assets/person.jpg';
import { Drawer } from './Drawer';
import { Modal } from './Modal';
import { useState } from 'react';
import { SearchModal } from './SearchModal';

export const Header = () => {
  const [drawerState, setDrawerState] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  return (
    <>
      <header className="sticky top-0 left-0 flex items-center sm:items-stretch gap-3 px-4 lg:px-6 py-4 bg-white border-b border-grayLight shadow-sm z-40">
        <button
          onClick={() => {
            setDrawerState(true);
          }}
          className="md:hidden shrink-0 outline-none"
        >
          <HiMenuAlt2 className="text-2xl sm:text-3xl text-gray" />
        </button>

        <span className="mx-auto md:ml-0 text-xl sm:text-2xl text-primary font-extrabold">
          ChatMe
        </span>

        <form className="hidden md:flex items-center gap-3 ml-3 w-[25rem] px-3 py-2 text-sm font-semibold bg-bgLight rounded-lg">
          <button type="submit" className="outline-none">
            <FiSearch className="text-xl text-gray" />
          </button>
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-transparent outline-none"
          />
        </form>

        <button
          onClick={() => {
            setOpenSearch(true);
          }}
          className="md:hidden shrink-0 outline-none"
        >
          <FiSearch className="text-2xl sm:text-3xl text-gray" />
        </button>

        <button className="hidden sm:flex shrink-0 gap-2 items-center px-2 py-1 text-sm font-semibold text-white bg-primary hover:bg-primaryDark rounded-lg outline-none transition-colors">
          <FiPlusCircle className="text-xl" />
          <span className="hidden md:inline">Create</span>
        </button>

        <div className="hidden md:block shrink-0 w-8 sm:w-9 h-8 sm:h-9 rounded-lg overflow-hidden">
          <img
            src={person}
            alt="user-photo"
            className="w-full h-full object-cover"
          />
        </div>
      </header>

      <Modal
        open={drawerState}
        onClose={() => {
          setDrawerState(false);
        }}
      >
        <Drawer
          open={drawerState}
          onClose={() => {
            setDrawerState(false);
          }}
        />
      </Modal>

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
