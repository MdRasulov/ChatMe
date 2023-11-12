import { createContext, useState, useContext, PropsWithChildren } from 'react';

type ModalContextType = {
  drawerState: boolean;
  setDrawerState: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ModalContext = createContext<ModalContextType | null>(null);

export const ModalContextProvider = ({ children }: PropsWithChildren<{}>) => {
  const [drawerState, setDrawerState] = useState(false);

  return (
    <ModalContext.Provider value={{ drawerState, setDrawerState }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error('useModalContext must be used inside the useModalContext');
  }

  return context;
};
