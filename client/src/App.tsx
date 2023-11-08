import { Navigate, Route, Routes } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Home from './pages/home';
import Chat from './pages/chat';
import { MainLayout } from './layout/MainLayout';
import Profile from './pages/profile';

const App = () => {
  const loggedIn = true;

  const RequireAuth = ({ children }: any) => {
    return loggedIn ? children : <Navigate to="/login" />;
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
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route
          path="chat"
          element={
            <RequireAuth>
              <Chat />
            </RequireAuth>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
