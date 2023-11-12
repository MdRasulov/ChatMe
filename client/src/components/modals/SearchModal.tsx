import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { User } from '../../types';
import { createRequest } from '../../api';

export const SearchModal = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  const [username, setUserName] = useState('');
  const [searchResult, setSearchResult] = useState<User[] | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await createRequest.get('/search?username=' + username);
      setSearchResult(res.data);
    } catch (error) {
      console.error(error);
    }

    setUserName('');
  };

  const handleClose = () => {
    setSearchResult(null);
    onClose();
  };

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className={`${
        open ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-50'
      } relative w-[min(100%-2rem,40rem)] p-4 md:p-6 bg-white rounded-lg shadow-sm transition ease-in-out duration-200`}
    >
      <div className="flex justify-between items-center gap-4">
        <p className="text-primary font-semibold md:text-xl">Find a friend</p>
        <button
          onClick={handleClose}
          className="outline-none shrink-0 text-3xl text-gray hover:text-grayDark transition-colors"
        >
          <MdClose />
        </button>
      </div>

      <div className="flex my-4 text-sm border border-grayLight rounded-lg overflow-hidden">
        <form onSubmit={handleSubmit} id="search-form" className="grow">
          <input
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            value={username}
            type="text"
            placeholder="Search"
            className="w-full px-4 py-2 outline-none"
          />
        </form>

        <button
          form="search-form"
          className="shrink-0 bg-primary text-white px-4 text-xl"
          type="submit"
        >
          <FiSearch />
        </button>
      </div>

      {/* Displaying results */}
      {searchResult &&
        (searchResult.length > 0 ? (
          <div className="h-[15rem] sm:h-[18rem] md:h-[20rem] overflow-scroll flex flex-col">
            {searchResult.map((user) => (
              <Link
                to={`/profile/${user.id}`}
                onClick={handleClose}
                key={user.id}
                className="flex items-center gap-4 w-full mr-auto px-2 sm:px-4 py-1 sm:py-2 text-grayDark font-semibold cursor-pointer group hover:bg-primary rounded-md"
              >
                <div className="shrink-0 w-12 h-12 rounded-lg overflow-hidden bg-grayLight">
                  <img
                    src={`/upload/${user.profile_pic}`}
                    alt="user-photo"
                    className="w-full h-full object-cover"
                  />
                </div>

                <p className="break-words break-all line-clamp-2 group-hover:text-white">
                  {user.username}
                </p>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-sm text-gray">{`User not found`}</p>
        ))}
    </div>
  );
};
