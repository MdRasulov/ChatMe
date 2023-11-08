import { Banner } from './Banner';
import { NewPost } from './NewPost';
import { Posts } from '../../components/Posts';

const Home = () => {
  return (
    <div className="home grow">
      <div className="w-[min(100%,50rem)] mx-auto pt-4 lg:pt-6 pb-16 sm:pb-0">
        <Banner />
        <NewPost />
        <Posts />
      </div>
    </div>
  );
};

export default Home;
