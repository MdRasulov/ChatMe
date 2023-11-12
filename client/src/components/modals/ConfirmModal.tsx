import { MdClose } from 'react-icons/md';
import { AiOutlineCloseCircle } from 'react-icons/ai';

export const ConfirmModal = ({
  open,
  onClose,
  handleDelete,
}: {
  open: boolean;
  onClose: () => void;
  handleDelete: () => void;
}) => {
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className={`${
        open ? 'scale-100 opacity-100' : 'scale-90 opacity-50'
      } max-w-[calc(100%-2rem)] w-[30rem] p-4 sm:p-6 bg-white rounded-lg shadow-sm transition ease-in-out duration-200`}
    >
      <div className="flex flex-col justify-center items-center gap-4">
        <button
          onClick={onClose}
          className="ml-auto outline-none shrink-0 text-2xl text-gray hover:text-grayDark transition-colors"
        >
          <MdClose />
        </button>

        <AiOutlineCloseCircle className="shrink-0 text-6xl sm:text-7xl text-red" />

        <p className="text-xl sm:text-2xl font-semibold text-grayDark">
          Are you sure?
        </p>

        <div className="w-full sm:w-[70%] flex gap-4 mt-4 font-semibold">
          <button
            onClick={handleDelete}
            className="w-full p-2 sm:px-4 text-white bg-red hover:bg-redDark border border-red hover:border-redDark rounded-lg outline-none transition-colors"
          >
            Delete
          </button>
          <button
            onClick={onClose}
            className="w-full p-2 sm:px-4 text-white bg-grayLight hover:bg-gray border border-grayLight hover:border-gray rounded-lg outline-none transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
