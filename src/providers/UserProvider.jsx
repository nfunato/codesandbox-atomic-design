import React, { useState, createContext } from "react";
export const UserContext = createContext({});

export const UserProvider = (props) => {
  const { children } = props;
  const [userInfo, setUserInfo] = useState(null);
  //  const contextName = "わしじゃ";
  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};
