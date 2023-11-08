import { FiPaperclip } from 'react-icons/fi';
import { FaRegSmile } from 'react-icons/fa';
import { BiSolidSend } from 'react-icons/bi';

export const ChatInput = () => {
  return (
    <div className="h-[4rem] bg-white">
      <div className="w-[min(100%-2rem,55rem)] flex items-center gap-4 sm:gap-6 mx-auto h-full">
        <div className="shrink-0">
          <FiPaperclip className="text-xl sm:text-2xl text-gray hover:text-grayDark cursor-pointer transition-colors" />
        </div>

        <form className="grow text-sm sm:text-base">
          <input
            type="text"
            placeholder="Type your message here..."
            required
            className="w-full outline-none"
          />
        </form>

        <div className="flex items-center gap-4 sm:gap-6 text-xl sm:text-2xl shrink-0">
          <FaRegSmile className="text-gray hover:text-grayDark cursor-pointer transition-colors" />
          <BiSolidSend className="text-primary hover:text-primaryDark cursor-pointer transition-colors" />
        </div>
      </div>
    </div>
  );
};
