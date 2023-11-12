import astronaut from '../assets/astronaut.svg';

export const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="relative w-32 md:w-40 h-32 md:h-40">
        <div className="absolute top-[40%] left-1/2 w-full h-full bg-primary border-[3px] border-primaryDark rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <img
          src={astronaut}
          alt="austronaut"
          className="absolute w-full h-full object-contain"
        />
      </div>

      <h1 className="mb-2 md:mb-6 text-6xl md:text-8xl font-extrabold text-gray">
        404
      </h1>
      <p className="text-xl md:text-3xl font-semibold text-primary">
        PAGE NOT FOUND
      </p>
    </div>
  );
};
