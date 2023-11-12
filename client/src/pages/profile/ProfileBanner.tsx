import { BsInstagram, BsFacebook, BsLinkedin, BsTwitter } from 'react-icons/bs';
import { RiEdit2Fill } from 'react-icons/ri';
import profileBanner from '../../assets/profileBanner.jpg';
import { Contact, User } from '../../types';
import { useEffect } from 'react';
import { useAuthContext } from '../../context/AuthContext';
import { createRequest } from '../../api';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

export const ProfileBanner = ({ userData }: { userData: User }) => {
  const queryClient = useQueryClient();
  const { currentUser } = useAuthContext();
  const { username, profile_pic, id } = userData;

  const { isPending, error, data } = useQuery({
    queryKey: ['contactsId'],
    queryFn: (): Promise<Contact[]> =>
      createRequest.get('/contacts').then((res) => {
        return res.data;
      }),
  });

  const contactsId = data?.map((contact) => contact.contact_id);

  const mutation = useMutation({
    mutationFn: (isFollowing: boolean | undefined) => {
      if (isFollowing) {
        return createRequest.delete('/contacts?contactId=' + id);
      }

      return createRequest.post('/contacts', { contactId: id });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contactsId'] });
      queryClient.invalidateQueries({ queryKey: ['contacts'] });
    },
  });

  const handeFollow = () => {
    mutation.mutate(contactsId?.includes(id));
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [userData]);

  return (
    <div className="relative flex items-center justify-center mb-4 lg:mb-6 p-4 lg:p-6 bg-white rounded-lg overflow-hidden shadow-sm">
      <div className="flex flex-col items-center justify-center gap-6 z-10">
        <img
          src={`/upload/${profile_pic}`}
          alt="profile-picture"
          className="w-[10rem] sm:w-[12rem] md:w-[10rem] lg:w-[12rem] h-[10rem] sm:h-[12rem] md:h-[10rem] lg:h-[12rem] bg-grayLight rounded-full object-cover"
        />

        <p className="text-3xl font-extrabold">{username}</p>

        <div className="flex gap-3 text-gray text-xl">
          <BsInstagram className="cursor-pointer hover:text-grayDark transition-colors" />
          <BsFacebook className="cursor-pointer hover:text-grayDark transition-colors" />
          <BsLinkedin className="cursor-pointer hover:text-grayDark transition-colors" />
          <BsTwitter className="cursor-pointer hover:text-grayDark transition-colors" />
        </div>

        {currentUser?.id !== id ? (
          <div className="flex w-full gap-4 font-semibold">
            <button className="w-full p-2 text-primary hover:text-primaryDark border border-primary hover:border-primaryDark rounded-lg outline-none transition-colors">
              Message
            </button>
            <button
              onClick={handeFollow}
              className="w-full p-2 text-white bg-primary hover:bg-primaryDark border border-primary hover:border-primaryDark rounded-lg outline-none"
            >
              {contactsId?.includes(id) ? 'Following' : 'Follow'}
            </button>
          </div>
        ) : (
          <button className="py-2 px-4 text-white font-semibold bg-primary hover:bg-primaryDark rounded-lg outline-none transition-colors">
            Edit profile
          </button>
        )}
      </div>

      <div className="absolute top-0 left-0 w-full h-[45%]">
        <div className="absolute top-0 left-0 w-full h-full bg-black/20"></div>
        <img
          src={profileBanner}
          alt="profile-banner"
          className="w-full h-full object-cover"
        />
      </div>

      {currentUser?.id === id && (
        <div className="absolute top-3 right-4 z-10">
          <RiEdit2Fill className="cursor-pointer text-xl text-white hover:text-gray transition-colors" />
        </div>
      )}
    </div>
  );
};
