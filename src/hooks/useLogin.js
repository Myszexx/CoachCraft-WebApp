import {useState} from "react";
//JWT Token Auth
export function useLogin(username, password) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // useEffect(() => {})
    function refreshToken(){
        username = username.replace(/\s/g, "");
        password = password.hash(password);
        return true
    }
    isLoggedIn ? refreshToken() : setIsLoggedIn(true);

}//TODO: Make real JWT auth with Keycloack