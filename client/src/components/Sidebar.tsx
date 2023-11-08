import person from '../assets/person.jpg';
import { Contact } from './Contact';

export const Sidebar = () => {
  return (
    <div className="hidden md:block sticky top-[69px] shrink-0 w-[18rem] xl:w-[20rem] pt-4 lg:pt-6 pb-1 h-[calc(100svh-86px)] lg:h-[calc(100svh-94px)] overflow-auto scrollbar-hide">
      <div className="mb-4 lg:mb-6">
        <div className="flex justify-between mb-2 px-4 lg:px-6 text-sm font-semibold">
          <span className="text-gray">REQUESTS</span>
          <span className="px-2 py-[0.1rem] text-white bg-primaryLight rounded-full">
            1
          </span>
        </div>

        <div className="p-4 lg:p-6 text-sm bg-white rounded-lg shadow-sm">
          <div className="flex gap-3 items-center mb-4">
            <div className="shrink-0 w-10 h-10 rounded-lg overflow-hidden">
              <img
                src={person}
                alt="user-photo"
                className="w-full h-full object-cover"
              />
            </div>

            <p className="line-clamp-2">
              <span className=" font-semibold text-primaryDark">
                Tyrell Barrows
              </span>{' '}
              wants to add you to the friends
            </p>
          </div>

          <div className="flex gap-4 font-semibold">
            <button className="w-full p-2 text-white bg-primary hover:bg-primaryDark rounded-lg outline-none transition-colors">
              Accept
            </button>
            <button className="w-full p-2 text-grayDark hover:text-white bg-grayLight hover:bg-gray rounded-lg outline-none transition-colors">
              Decline
            </button>
          </div>
        </div>
      </div>

      <div>
        <div className="flex justify-between mb-2 px-4 lg:px-6 text-sm font-semibold">
          <span className="text-gray">CONTACTS</span>
          <span className="px-2 py-[0.1rem] text-white bg-primaryLight rounded-full">
            15
          </span>
        </div>

        <div className="flex flex-col gap-4 p-4 lg:p-6 bg-white rounded-lg shadow-sm">
          <Contact />
          <Contact />
          <Contact />
          <Contact />
        </div>
      </div>
    </div>
  );
};
