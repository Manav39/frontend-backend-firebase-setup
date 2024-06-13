import { createContext, useContext, useState } from "react";

const PracContext = createContext(null);

export const useContract = () => useContext(PracContext);

export const PracProvider = (props) => {
  const [userType, setUserType] = useState("");
  const [authData, setAuthData] = useState([]);

  return (
    <PracContext.Provider
      value={{
        userType,
        setUserType,
        setAuthData,
        authData,
      }}
    >
      {props.children}
    </PracContext.Provider>
  );
};
