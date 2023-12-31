import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';
import { Navbar } from '../components/Navbar';
import { Sidebar } from '../components/Sidebar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export const MainLayout = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex flex-col min-h-full">
        <Header />
        <div className="grow flex gap-4 lg:gap-6 px-4 lg:px-6 pb-4 lg:pb-6 bg-bgLight">
          <Navbar />
          <Outlet />
          <Sidebar />
        </div>
      </div>
    </QueryClientProvider>
  );
};
