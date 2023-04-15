import { createContext } from "react";

let logoutTimer;

const AuthContext =createContext({
    token: '',
    login: () => {},
    // logout: () => {},
    userId: null,
});

export const AuthContextProvider = (props) => {

    // const [token, setToken] = useState("");
    // const [userId, setUserId] = useState();
    // const [lastAuthTime, setLastAuthTime] = useState(null);

    // const login = (token, exp, userId) => {
    //     setToken(token);
    //     setUserId(userId);
    // }
    
    return (
        <AuthContext.Provider>
          {props.children}
        </AuthContext.Provider>
      )
}


export default AuthContext;    