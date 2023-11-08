import person from '../assets/person.jpg';
import { MdDelete } from 'react-icons/md';

export const Contact = () => {
  return (
    <div className="flex items-center gap-3 text-grayDark font-semibold">
      <div className="flex items-center gap-3 mr-auto cursor-pointer">
        <div className="shrink-0 w-10 h-10 rounded-lg overflow-hidden">
          <img
            src={person}
            alt="user-photo"
            className="w-full h-full object-cover"
          />
        </div>

        <p className="mr-auto break-words break-all line-clamp-2">
          Amanda Mayers
        </p>
      </div>

      <button className="shrink-0 outline-none">
        <MdDelete className="text-xl text-gray hover:text-red transition-colors" />
      </button>
    </div>
  );
};
