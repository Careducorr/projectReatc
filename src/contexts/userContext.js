import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserStore = ({ children }) => {

    const [send, setSend] = useState(false);

    return(
        <UserContext.Provider value={{send, setSend}}>
            {children}
        </UserContext.Provider>
    )
}

