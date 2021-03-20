import { createContext, useState, useContext } from "react";

const OpenModalContext = createContext();

export default function OpenModalProvider({ children }) {
  const [open, setOpen] = useState(false);
  return (
    <OpenModalContext.Provider
      value={{
        open,
        setOpen,
      }}
    >
      {children}
    </OpenModalContext.Provider>
  );
}

export function useOpen() {
  const context = useContext(OpenModalContext);
  const { open, setOpen } = context;
  return { open, setOpen };
}
