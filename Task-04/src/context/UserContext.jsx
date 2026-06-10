import React, {
  createContext,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";

export const UserDataContext = createContext();

const UserContext = (props) => {
  const [user, setuser] = useState([]);

  //Function naming->camle case
  useEffect(() => {
    const userFetch = async () => {
      const response = await fetch("https://dummyjson.com/users");

      const data = await response.json();

      setuser(data.users);
    };

    userFetch();
  }, []);

  return (
    <div>
      <UserDataContext.Provider value={[user, setuser]}>
        {props.children}
      </UserDataContext.Provider>
    </div>
  );
};

export default UserContext;
