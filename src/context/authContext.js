import { useState, createContext } from "react";

// const { data: { user } } = await supabase.auth.getUser()
// console.log("user data", user)
// let logoutTimer;

const AuthContext =createContext({
    token: '',
    login: () => {},
    logout: () => {},
    userId: null,
});

export const AuthContextProvider = ({children}) => {
  // const localData = localData();
  // console.log('local data from AuthContextProvider', localData);

  let initialToken;
  let initialUserId;

  // if (localData) {
  //   initialToken = localData.token
  //   initialUserId = localData.userId
  // };

  const [token, setToken] = useState(initialToken);
  const [userId, setUserId] = useState(initialUserId);

  const login = (token, userId) => {
    setToken(token);
    setUserId(userId);

    localStorage.setItem('token', token);
    localStorage.setItem('userId', userId);
  }

  const logout = () => {
    setToken(null);
    setUserId(null);

    localStorage.removeItem('token');
    localStorage.removeItem('userId');

  };

  const contextValue = {
    token,
    login,
    logout,
    userId
  };
   
  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  )
};

export default AuthContext;    