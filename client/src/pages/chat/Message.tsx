import person from '../../assets/person.jpg';
import person_2 from '../../assets/person_2.jpg';

export const Message = ({ owner }: { owner: boolean }) => {
  return (
    <div
      className={`flex items-end gap-3 ${
        owner ? 'flex-row-reverse' : 'flex-row'
      }`}
    >
      <img
        src={owner ? person : person_2}
        alt=""
        className="hidden sm:block shrink-0 w-10 h-10 object-cover rounded-full"
      />

      <div
        className={`w-full flex flex-col ${
          owner ? 'items-end' : 'items-start'
        }`}
      >
        <p className="text-xs sm:text-sm text-gray">22.54 pm</p>
        <div
          className={`${
            owner
              ? 'rounded-l-lg rounded-t-lg bg-primaryLight text-white'
              : 'rounded-r-lg rounded-t-lg bg-grayLight'
          } w-fit max-w-full sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] px-4 py-2 overflow-hidden break-words`}
        >
          <p>Hello there! How are you?</p>
        </div>
      </div>
    </div>
  );
};
