import { MdDelete } from 'react-icons/md';
import { Contact as ContactType } from '../types';
import { Link } from 'react-router-dom';
import { Modal } from './modals/Modal';
import { ConfirmModal } from './modals/ConfirmModal';
import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createRequest } from '../api';
import { useModalContext } from '../context/ModalStateContext';

export const Contact = ({ contactData }: { contactData: ContactType }) => {
  const queryClient = useQueryClient();
  const { setDrawerState } = useModalContext();
  const [deleteModalState, setDeleteModalState] = useState(false);

  const mutation = useMutation({
    mutationFn: () => {
      return createRequest.delete(
        '/contacts?contactId=' + contactData.contact_id
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contacts'] });
    },
  });

  const handleDeleteContact = () => {
    mutation.mutate();
    setDeleteModalState(false);
  };
  return (
    <>
      <div className="flex items-center gap-3 text-grayDark font-semibold">
        <Link
          to={`/profile/${contactData?.contact_id}`}
          onClick={() => {
            setDrawerState(false);
          }}
          className="flex items-center gap-3 mr-auto cursor-pointer"
        >
          <div className="shrink-0 w-10 h-10 rounded-lg overflow-hidden">
            <img
              src={`/upload/${contactData?.profile_pic}`}
              alt="user-photo"
              className="w-full h-full object-cover"
            />
          </div>

          <p className="mr-auto break-words break-all line-clamp-2">
            {contactData?.username}
          </p>
        </Link>

        <button
          onClick={() => {
            setDeleteModalState(true);
          }}
          className="shrink-0 outline-none"
        >
          <MdDelete className="text-xl text-gray hover:text-red transition-colors" />
        </button>
      </div>

      <Modal
        open={deleteModalState}
        onClose={() => {
          setDeleteModalState(false);
        }}
      >
        <ConfirmModal
          handleDelete={handleDeleteContact}
          open={deleteModalState}
          onClose={() => {
            setDeleteModalState(false);
          }}
        />
      </Modal>
    </>
  );
};
