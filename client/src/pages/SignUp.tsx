import { MdOutlineMail, MdLockOutline } from 'react-icons/md';
import { BiUser } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';
import { ChangeEvent, useState } from 'react';
import { getErrorMessage, uploadImg } from '../utils';
import astronaut from '../assets/astronaut.svg';
import { useAuthContext } from '../context/AuthContext';
import { createRequest } from '../api';
import { FaImages } from 'react-icons/fa';
import { FiCheckSquare } from 'react-icons/fi';

const DEFAULT_INPUTS = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUp = () => {
  const navigate = useNavigate();
  const { signin } = useAuthContext();

  const [err, setErr] = useState('');
  const [formInput, setFormInput] = useState(DEFAULT_INPUTS);
  const [userImg, setUserImg] = useState<File | undefined>(undefined);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormInput({ ...formInput, [name]: value });
  };

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErr('');

    try {
      if (formInput.username.split(' ').join('').length === 0) {
        throw new Error('Username can not be empty');
      }
      if (formInput.password !== formInput.confirmPassword) {
        throw new Error('Password  mismatch');
      }

      //upload user image and get link
      let userImageLink = userImg
        ? await uploadImg(userImg)
        : 'default-image.jpg';

      //sign up
      await createRequest.post('auth/register', {
        ...formInput,
        profile_pic: userImageLink,
      });

      //sign in
      await signin({ email: formInput.email, password: formInput.password });

      navigate('/');
      setFormInput(DEFAULT_INPUTS);
    } catch (error) {
      setErr(getErrorMessage(error));
    }
  };

  return (
    <div className="sign-in flex h-full">
      <div className="form-container shrink-0 flex md:items-center justify-center w-full md:w-[25rem] lg:w-[35rem] py-8">
        <div className="flex flex-col w-4/5 sm:w-2/3 md:w-3/4 lg:w-2/3">
          <h4 className="hidden md:block text-3xl font-semibold">
            Sign Up to{' '}
            <span className="text-primary font-extrabold">ChatMe</span>
          </h4>

          <div className="flex md:hidden flex-col items-center">
            <div className="relative w-28 h-28">
              <div className="absolute top-[40%] left-1/2 w-full h-full bg-primary rounded-full -translate-x-1/2 -translate-y-1/2"></div>
              <img
                src={astronaut}
                alt="austronaut"
                className="absolute w-full h-full object-contain"
              />
            </div>

            <h4 className="text-2xl xs:text-3xl font-extrabold text-center">
              Get Started
            </h4>

            <p className="text-gray text-sm text-center">
              by creating a free account.
            </p>
          </div>

          <form
            onSubmit={handleSignUp}
            id="sign-in-form"
            className="flex flex-col gap-4 mt-6 xs:mt-8 md:mt-10"
          >
            <div className="flex gap-3 w-full px-3 py-2 text-sm font-semibold border border-gray rounded-md">
              <BiUser className="text-xl text-gray" />

              <input
                className="w-full outline-none"
                type="text"
                placeholder="Username"
                name="username"
                minLength={3}
                maxLength={25}
                required
                value={formInput.username}
                onChange={handleChange}
              />
            </div>

            <div className="flex gap-3 w-full px-3 py-2 text-sm font-semibold border border-gray rounded-md">
              <MdOutlineMail className="text-xl text-gray" />

              <input
                type="email"
                required
                placeholder="Email"
                maxLength={40}
                className="w-full outline-none"
                name="email"
                value={formInput.email}
                onChange={handleChange}
              />
            </div>

            <div className="flex gap-3 w-full px-3 py-2 text-sm font-semibold border border-gray rounded-md">
              <MdLockOutline className="text-xl text-gray" />

              <input
                type="password"
                required
                placeholder="Password"
                className="w-full outline-none"
                name="password"
                minLength={5}
                value={formInput.password}
                onChange={handleChange}
              />
            </div>

            <div className="flex gap-3 w-full px-3 py-2 text-sm font-semibold border border-gray rounded-md">
              <MdLockOutline className="text-xl text-gray" />

              <input
                type="password"
                required
                placeholder="Repeat password"
                className="w-full outline-none"
                name="confirmPassword"
                minLength={5}
                value={formInput.confirmPassword}
                onChange={handleChange}
              />
            </div>
          </form>

          <div className="grow md:grow-0 my-4">
            <input
              type="file"
              id="post-image"
              accept="image/*"
              className="hidden"
              onChange={(e) => setUserImg(e?.target?.files?.[0])}
            />
            <label
              htmlFor="post-image"
              className={`${
                userImg ? 'text-black' : 'text-gray'
              } flex items-center gap-2 w-fit text-sm font-semibold cursor-pointer`}
            >
              <div className="shrink-0 flex items-center justify-center h-full px-6 py-2 text-xl text-white bg-primary hover:bg-primaryDark rounded-lg outline-none transition-colors">
                {userImg ? <FiCheckSquare /> : <FaImages />}
              </div>
              {userImg ? 'Image selected' : 'Select image'}
            </label>

            <p className="h-4 mt-4 text-sm text-red font-semibold">
              {err && err}
            </p>
          </div>

          <button
            type="submit"
            form="sign-in-form"
            className=" w-full p-2 text-white bg-primary rounded-md hover:bg-primaryDark transition-colors"
          >
            Sign up
          </button>

          <div className="mt-4 text-sm">
            Already a member?{' '}
            <Link to={'/login'}>
              <span className="text-primary font-semibold">Log In</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="welcome hidden md:flex grow flex-col items-center justify-center bg-primary text-white">
        <div className="relative w-40 lg:w-60 h-40 lg:h-60">
          <div className="absolute top-[40%] left-1/2 w-full h-full bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <img
            src={astronaut}
            alt="austronaut"
            className="absolute w-full h-full object-contain"
          />
        </div>

        <h1 className="text-4xl lg:text-5xl font-extrabold mt-4 mb-1">
          Get Started
        </h1>
        <span className="font-light">by creating a free account</span>
      </div>
    </div>
  );
};

export default SignUp;
