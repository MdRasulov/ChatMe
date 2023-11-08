import person from '../../assets/person.jpg';
import { FaImages } from 'react-icons/fa';

export const NewPost = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:gap-4 my-4 lg:my-6 p-4 lg:p-6 bg-white rounded-lg shadow-sm">
      <div className="grow flex gap-4 items-center">
        <div className="shrink-0 w-10 h-10 rounded-lg overflow-hidden">
          <img
            src={person}
            alt="user-photo"
            className="w-full h-full object-cover"
          />
        </div>

        <input
          type="text"
          placeholder="What is new?"
          required
          className="w-full outline-none"
        />
      </div>

      <div className="lg:hidden w-full my-3 border-t border-grayLight"></div>

      <div className="flex gap-2 ml-auto">
        <input type="file" id="post-image" className="hidden" />
        <label htmlFor="post-image" className="shrink-0">
          <div className="flex items-center justify-center h-full px-4 py-2 text-sm font-semibold text-white bg-primary hover:bg-primaryDark rounded-lg outline-none transition-colors">
            <FaImages className="text-xl text-white" />
          </div>
        </label>

        <button className="px-4 py-2 text-sm font-semibold text-white bg-primary hover:bg-primaryDark rounded-lg outline-none transition-colors">
          Post
        </button>
      </div>
    </div>
  );
};
