import { X } from "lucide-react";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { cn } from "../../../app/utils/cn";

interface ModalProviderProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  resetData?: () => void;
}

interface ModalCtxProps {
  onClose: () => void;
}

const ModalCtx = createContext<ModalCtxProps | null>(null);

export function Modal({
  children,
  isOpen,
  onClose,
  resetData,
}: ModalProviderProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else if (!isOpen && resetData) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        resetData();
      }, 300);
      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
    }
  }, [isOpen, resetData]);

  useEffect(() => {
    if (isOpen) {
      function handleClickOutside(e: MouseEvent) {
        const target = e.target as Node;

        if (wrapperRef.current && !wrapperRef.current.contains(target)) {
          onClose();
        }
      }

      function handleKeyDown(e: KeyboardEvent) {
        if (e.key === "Escape") {
          onClose();
        }
      }

      window.addEventListener("mousedown", handleClickOutside);
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        window.removeEventListener("mousedown", handleClickOutside);
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isOpen, onClose]);

  if (!isVisible) {
    return null;
  }

  return (
    <ModalCtx.Provider value={{ onClose }}>
      <div
        className={cn(
          "absolute inset-0 flex items-center justify-center",
          isOpen ? "bg-white/5" : "bg-app-bg/5",
        )}
      >
        <div
          ref={wrapperRef}
          className={cn(
            "flex w-full max-w-xl flex-col gap-5 rounded-lg bg-app-bg p-5 transition-all duration-300",
            isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
          )}
        >
          {children}
        </div>
      </div>
    </ModalCtx.Provider>
  );
}

function Header({ children }: { children: ReactNode }) {
  const ctx = useContext(ModalCtx);

  if (!ctx) {
    console.error("Modal.Header deve ser utilizado dentro de um Modal.");
    return null;
  }

  return (
    <header className="mb-5 flex w-full items-center justify-between">
      <h2>{children}</h2>
      <button onClick={ctx.onClose}>
        <X />
      </button>
    </header>
  );
}

function Content({ children }: { children: ReactNode }) {
  return children;
}

Modal.Header = Header;
Modal.Content = Content;
