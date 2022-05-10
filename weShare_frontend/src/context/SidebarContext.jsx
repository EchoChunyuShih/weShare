import { createContext, useState } from "react";

const SidebarContext = createContext();

export function SidebarProvider({ children }) {
  //for mobile UI
  const [toggleSidebar, setToggleSidebar] = useState(false);

  return (
    <SidebarContext.Provider value={(toggleSidebar, setToggleSidebar)}>
      {children}
    </SidebarContext.Provider>
  );
}

export default SidebarContext;
