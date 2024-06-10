import React, {
  cloneElement,
  createContext,
  useContext,
  useState,
} from "react";
import Button from "./Button";
import { IoClose } from "react-icons/io5";
import { createPortal } from "react-dom";
import useOuterClick from "../../hooks/useOuterClick";

interface ModalContextType {
  isOpen: string;
  close: () => void;
  open: (openName: string) => void;
}
const ModalContext = createContext<ModalContextType>({} as ModalContextType);

const Modal = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState("");
  const close = () => setIsOpen("");
  const open = (openName: string) => setIsOpen(openName);

  return (
    <ModalContext.Provider value={{ isOpen, open, close }}>
      {children}
    </ModalContext.Provider>
  );
};

interface Props {
  children: React.ReactElement;
  openName: string;
}

const Open = ({ children, openName }: Props) => {
  const { open } = useContext<ModalContextType>(ModalContext);

  return cloneElement(children, { onClick: () => open(openName) });
};

const Window = ({ children, openName }: Props) => {
  const { close, isOpen } = useContext<ModalContextType>(ModalContext);
  const { ref } = useOuterClick(close);

  if (openName !== isOpen) return null;

  return createPortal(
    <div className="paragraph-text-color fixed inset-0 bg-black/25 px-2 pt-20 backdrop-blur-sm">
      <div
        ref={ref}
        className="bg-color-theme border-color-theme flex w-full max-w-xl 
        flex-col overflow-hidden rounded-2xl border sm:mx-auto"
      >
        <div className=" mb-3 px-2 py-1">
          <Button className="text-3xl" onClick={() => close()}>
            <IoClose />
          </Button>
        </div>
        <div>{cloneElement(children, { onClick: () => close() })}</div>
      </div>
    </div>,
    document.body,
  );
};

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
