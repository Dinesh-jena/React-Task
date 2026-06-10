import React, { useState, createContext } from "react";

export const LoginContextData = createContext();

const LoginContext = (props) => {
  const [loginConfirm, setloginConfirm] = useState(false);

  return (
    <LoginContextData.Provider value={[loginConfirm, setloginConfirm]}>
      {props.children}
    </LoginContextData.Provider>
  );
};

export default LoginContext;
