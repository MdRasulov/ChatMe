import { FiSearch } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';

export const SearchModal = ({
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
        open ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-50'
      } w-[calc(100%-2rem)] p-4 bg-white rounded-lg shadow-sm transition ease-in-out duration-200`}
    >
      <div className="flex justify-between items-center gap-4 mb-4">
        <p className="text-primary font-semibold">Find a friend</p>
        <button
          onClick={onClose}
          className="outline-none shrink-0 text-2xl text-gray hover:text-grayDark transition-colors"
        >
          <MdClose />
        </button>
      </div>

      <div className="flex text-sm border border-grayLight rounded-lg overflow-hidden">
        <form className="grow">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-4 py-2 outline-none"
          />
        </form>

        <button className="shrink-0 bg-primary text-white px-4 text-xl">
          <FiSearch />
        </button>
      </div>
    </div>
  );
};
