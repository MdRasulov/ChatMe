import banner from '../../assets/banner.jpg';

export const Banner = () => {
  return (
    <div className="relative h-[15rem] bg-grayLight rounded-lg overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-primary/30"></div>
      <img src={banner} alt="" className="w-full h-full object-cover" />
    </div>
  );
};
