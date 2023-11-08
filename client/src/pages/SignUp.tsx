import astronaut from '../assets/astronaut.svg';
import { MdOutlineMail, MdLockOutline } from 'react-icons/md';
import { BiUser } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const SignUp = () => {
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
            id="sign-in-form"
            className="grow md:grow-0 flex flex-col gap-4 my-6 xs:my-8 md:my-10"
          >
            <div className="flex gap-3 w-full px-3 py-2 text-sm font-semibold border border-gray rounded-md">
              <BiUser className="text-xl text-gray" />

              <input
                type="text"
                required
                placeholder="Username"
                className="w-full outline-none"
              />
            </div>

            <div className="flex gap-3 w-full px-3 py-2 text-sm font-semibold border border-gray rounded-md">
              <MdOutlineMail className="text-xl text-gray" />

              <input
                type="email"
                required
                placeholder="Email"
                className="w-full outline-none"
              />
            </div>

            <div className="flex gap-3 w-full px-3 py-2 text-sm font-semibold border border-gray rounded-md">
              <MdLockOutline className="text-xl text-gray" />

              <input
                type="password"
                required
                placeholder="Password"
                className="w-full outline-none"
              />
            </div>

            <div className="flex gap-3 w-full px-3 py-2 text-sm font-semibold border border-gray rounded-md">
              <MdLockOutline className="text-xl text-gray" />

              <input
                type="password"
                required
                placeholder="Repeat password"
                className="w-full outline-none"
              />
            </div>
          </form>

          <button
            type="submit"
            form="sign-in-form"
            className=" w-full p-2 text-white bg-primary rounded-md hover:bg-primaryDark transition-colors"
          >
            Sign up
          </button>

          <div className="mt-4 text-sm ">
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
