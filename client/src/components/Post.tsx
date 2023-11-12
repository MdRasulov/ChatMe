import { MdDelete } from 'react-icons/md';
import {
  AiOutlineHeart,
  AiOutlineComment,
  AiOutlineShareAlt,
  AiFillHeart,
} from 'react-icons/ai';
import { useState } from 'react';
import { Post as PostType } from '../types';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import moment from 'moment';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createRequest } from '../api';
import { Modal } from './modals/Modal';
import { ConfirmModal } from './modals/ConfirmModal';

export const Post = ({ postData }: { postData: PostType }) => {
  const queryClient = useQueryClient();
  const { currentUser } = useAuthContext();
  const [liked, setLiked] = useState(false);
  const [deletePostModal, setDeletePostModal] = useState(false);
  const { profile_pic, username, img, description, created_at, user_id, id } =
    postData;

  const mutation = useMutation({
    mutationFn: (postId: number) => {
      return createRequest.delete('/posts?postId=' + postId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    },
  });

  const handlePostDelete = () => {
    mutation.mutate(id);
    setDeletePostModal(false);
  };

  return (
    <>
      <div className="flex flex-col gap-4 lg:gap-6 p-4 lg:p-6 bg-white rounded-lg shadow-sm">
        <div className="flex gap-3 items-center">
          <Link to={`/profile/${user_id}`}>
            <div className="shrink-0 w-10 h-10 rounded-lg overflow-hidden">
              <img
                src={`/upload/${profile_pic}`}
                alt="user-photo"
                className="w-full h-full object-cover"
              />
            </div>
          </Link>

          <Link to={`/profile/${user_id}`}>
            <div>
              <p className="text-base font-semibold text-grayDark">
                {username}
              </p>
              <p className="text-sm/4 text-gray">
                {moment(created_at).fromNow()}
              </p>
            </div>
          </Link>

          {currentUser?.id === user_id && (
            <button
              onClick={() => setDeletePostModal(true)}
              className="ml-auto outline-none"
            >
              <MdDelete className="text-xl text-gray hover:text-red transition-colors" />
            </button>
          )}
        </div>

        <p>{description}</p>

        <img
          src={`/upload/${img}`}
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

      <Modal
        open={deletePostModal}
        onClose={() => {
          setDeletePostModal(false);
        }}
      >
        <ConfirmModal
          handleDelete={handlePostDelete}
          open={deletePostModal}
          onClose={() => {
            setDeletePostModal(false);
          }}
        />
      </Modal>
    </>
  );
};
