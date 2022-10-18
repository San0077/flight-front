import React, { createContext, useState, useEffect } from "react";

export const MyContext = createContext("");

const AppContext = ({ children }) => {
  const [user, setUser] = useState("");

  


 

  return (
    <MyContext.Provider
      value={{ user, setUser}}
    >
          {children}
    </MyContext.Provider>
  );
};

export default AppContext;