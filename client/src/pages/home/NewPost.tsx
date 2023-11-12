import { useState } from 'react';
import { FaImages } from 'react-icons/fa';
import { FiCheckSquare } from 'react-icons/fi';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createRequest } from '../../api';
import { CreatePost } from '../../types';
import { useAuthContext } from '../../context/AuthContext';
import { uploadImg } from '../../utils';

export const NewPost = () => {
  const queryClient = useQueryClient();
  const { currentUser } = useAuthContext();

  const [postDescription, setPostDescription] = useState('');
  const [postImg, setPostImg] = useState<File | undefined>(undefined);

  const mutation = useMutation({
    mutationFn: (newPost: CreatePost) => {
      return createRequest.post('/posts', newPost);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    },
  });

  const handlePost = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    if (postDescription || postImg) {
      //upload img
      let imgURL = postImg ? await uploadImg(postImg) : null;

      mutation.mutate({ description: postDescription, img: imgURL });
      setPostDescription('');
      setPostImg(undefined);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row lg:gap-4 my-4 lg:my-6 p-4 lg:p-6 bg-white rounded-lg shadow-sm">
      <div className="grow flex gap-4 items-center">
        <div className="shrink-0 w-10 h-10 rounded-lg overflow-hidden">
          <img
            src={`/upload/${currentUser?.profile_pic}`}
            alt="user-photo"
            className="w-full h-full object-cover"
          />
        </div>

        <input
          type="text"
          placeholder="What is new?"
          required
          className="w-full outline-none"
          value={postDescription}
          onChange={(e) => setPostDescription(e.target.value)}
        />
      </div>

      <div className="lg:hidden w-full my-3 border-t border-grayLight"></div>

      <div className="flex gap-2 ml-auto">
        <input
          type="file"
          id="post-image"
          accept="image/*"
          className="hidden"
          onChange={(e) => setPostImg(e?.target?.files?.[0])}
        />
        <label htmlFor="post-image" className="shrink-0">
          <div className="flex items-center justify-center h-full px-4 py-2 text-xl text-white bg-primary hover:bg-primaryDark rounded-lg outline-none transition-colors">
            {postImg ? <FiCheckSquare /> : <FaImages />}
          </div>
        </label>

        <button
          onClick={handlePost}
          className="px-4 py-2 text-sm font-semibold text-white bg-primary hover:bg-primaryDark rounded-lg outline-none transition-colors"
        >
          Post
        </button>
      </div>
    </div>
  );
};
