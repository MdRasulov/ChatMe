import { FiMoreHorizontal } from 'react-icons/fi';
import {
  AiOutlineHeart,
  AiOutlineComment,
  AiOutlineShareAlt,
  AiFillHeart,
} from 'react-icons/ai';
import person from '../assets/person.jpg';
import banner from '../assets/banner.jpg';
import { useState } from 'react';

export const Post = () => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="flex flex-col gap-4 lg:gap-6 p-4 lg:p-6 bg-white rounded-lg shadow-sm">
      <div className="flex gap-3 items-center">
        <div className="shrink-0 w-10 h-10 rounded-lg overflow-hidden">
          <img
            src={person}
            alt="user-photo"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="mr-auto">
          <p className="text-base font-semibold text-grayDark">Laura Fisher</p>
          <p className="text-sm/4 text-gray">
            <span>12</span> hours ago
          </p>
        </div>

        <button className="outline-none">
          <FiMoreHorizontal className="text-xl text-gray" />
        </button>
      </div>

      <p>
        This was one of the most epic journeys, that I've got myself involved
        in. Maybe one of the most memorizable journeys of my entire life.
      </p>

      <img
        src={banner}
        alt=""
        className="w-full max-h-[30rem] object-cover rounded-lg"
      />

      <div className="flex gap-4 items-center text-2xl text-gray">
        <button
          className="outline-none"
          onClick={() => {
            setLiked(!liked);
          }}
        >
          {liked ? (
            <AiFillHeart className="text-primary" />
          ) : (
            <AiOutlineHeart />
          )}
        </button>
        <button className="outline-none">
          <AiOutlineComment />
        </button>
        <button className="outline-none">
          <AiOutlineShareAlt />
        </button>
      </div>
    </div>
  );
};
