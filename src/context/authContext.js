import { useState, createContext } from "react";

let logoutTimer;

const AuthContext =createContext({
    token: '',
    login: () => {},
    logout: () => {},
    userId: null,
});

const calculateRemainingTime = (exp) => {
  const currentTime = new Date().getTime()
  const expTime = exp 
  const remainingTime = expTime - currentTime
  return remainingTime
};

const getLocalData = () => {
  const storedToken = localStorage.getItem('token');
  const storedExp = localStorage.getItem('exp');
  const storeddUserId = localStorage.getItem('userId');

  const remainingTime = calculateRemainingTime(storedExp);

  if (remainingTime <= 1000 * 60 * 30) {
    localStorage.removeItem('token')
    localStorage.removeItem('exp')
    localStorage.removeItem('userId')
    return null
  };

  return {
    token: storedToken,
    duration: remainingTime,
    userId: storeddUserId
  };

};

export const AuthContextProvider = ({children}) => {
  const localData = getLocalData();
  // console.log('local data from AuthContextProvider', localData);

  let initialToken;
  let initialUserId;

  if (localData) {
    initialToken = localData.token
    initialUserId = localData.userId
  };

  const [token, setToken] = useState(initialToken);
  const [userId, setUserId] = useState(initialUserId);

  const logout = () => {
    setToken(null);
    setUserId(null);

    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('exp');

    const localData = getLocalData();
    const remainingTime = localData ? localData.duration : 0;
    if (remainingTime) {
      clearTimeout(logoutTimer)
    }
  };

  const login = (token, exp, userId) => {
    setToken(token);
    setUserId(userId);

    localStorage.setItem('token', token);
    localStorage.setItem('userId', userId);
    localStorage.setItem('exp', exp);

    const remainingTime = calculateRemainingTime(exp);

    logoutTimer = setTimeout(logout, remainingTime);
  }

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