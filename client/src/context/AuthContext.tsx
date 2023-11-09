import {
  createContext,
  useEffect,
  useState,
  useContext,
  PropsWithChildren,
} from 'react';
import { LoginInput, User } from '../types';
import axios from 'axios';

type AuthContextType = {
  currentUser: null | User;
  signin: (inputs: LoginInput) => Promise<void>;
  // setCurrentUser: React.Dispatch<React.SetStateAction<User | null>>;
};

const retrieveUser = (): User | null => {
  const userData = localStorage.getItem('user');

  return userData ? (JSON.parse(userData) as User) : null;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthContextProvider = ({ children }: PropsWithChildren<{}>) => {
  const [currentUser, setCurrentUser] = useState<User | null>(retrieveUser);

  const signin = async (inputs: LoginInput) => {
    const res = await axios.post(
      'http://localhost:8800/api/auth/login',
      inputs,
      {
        withCredentials: true,
      }
    );

    setCurrentUser(res.data);
  };

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, signin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      'useAuthContext must be used inside the AuthContextProvider'
    );
  }

  return context;
};
