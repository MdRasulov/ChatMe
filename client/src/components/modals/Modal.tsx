import ReactDom from 'react-dom';
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

  return ReactDom.createPortal(
    <div
      onClick={onClose}
      className={`${
        open ? 'visible bg-black/40' : 'invisible'
      } fixed inset-0 flex items-center justify-center overflow-hidden transition-colors z-[100]`}
    >
      {children}
    </div>,
    document.getElementById('portal') as HTMLElement
  );
};
