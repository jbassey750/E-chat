import { useState } from "react";
import { ModeratorContext } from "./ModeratorContextStore";

export const ModeratorProvider = ({ children }) => {
  const [isConnected, setIsConnected] = useState(false);
  const [toast, setToast] = useState(null);

  return (
    <ModeratorContext.Provider
      value={{
        isConnected,
        setIsConnected,
        toast,
        setToast,
      }}
    >
      {children}
    </ModeratorContext.Provider>
  );
};