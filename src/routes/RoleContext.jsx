import { createContext, useContext, useState, useEffect } from "react";

const RoleContext = createContext(null);

export const RoleProvider = ({ children }) => {
  const [role, setRole] = useState(() => {
    return localStorage.getItem("role") || "CEO";
  });

  useEffect(() => {
    localStorage.setItem("role", role);
  }, [role]);

  return (
    <RoleContext.Provider value={{ role, setRole }}>
      {children}
    </RoleContext.Provider>
  );
};

export const useRole = () => {
  const context = useContext(RoleContext);
  if (!context) {
    throw new Error("useRole must be used inside RoleProvider");
  }
  return context;
};
