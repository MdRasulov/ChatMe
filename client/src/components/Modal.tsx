import { useEffect } from 'react';

export const Modal = ({
  children,
  open,
  onClose,
}: {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
}) => {
  //preventing body from scrolling
  useEffect(() => {
    const body = document.querySelector('body');
    if (open) {
      body && (body.style.overflow = 'hidden');
    } else {
      body && (body.style.overflow = 'auto');
    }
  }, [open]);
  return (
    //backdrop
    <div
      onClick={onClose}
      className={`${
        open ? 'visible bg-black/40' : 'invisible'
      } fixed flex items-center justify-center inset-0  z-50 overflow-hidden transition-colors`}
    >
      {children}
    </div>
  );
};
