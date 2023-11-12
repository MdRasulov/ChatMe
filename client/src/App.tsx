import { Navigate, Route, Routes } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Home from './pages/home';
import Chat from './pages/chat';
import { MainLayout } from './layout/MainLayout';
import Profile from './pages/profile';
import { useAuthContext } from './context/AuthContext';
import { NotFound } from './pages/NotFound';

const App = () => {
  const { currentUser } = useAuthContext();

  const RequireAuth = ({ children }: any) => {
    return currentUser ? children : <Navigate to="/login" />;
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route
          path="/"
          element={
            <RequireAuth>
              <MainLayout />
            </RequireAuth>
          }
        >
          <Route index element={<Home />} />
          <Route
            path="profile"
            element={<Navigate to={`/profile/${currentUser?.id}`} />}
          />
          <Route path="profile/:userId" element={<Profile />} />
        </Route>
        <Route
          path="chat"
          element={
            <RequireAuth>
              <Chat />
            </RequireAuth>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
