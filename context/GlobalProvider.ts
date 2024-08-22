// import React, { createContext, useContext, useEffect, useState } from "react";
// import { useAuth0 } from "react-native-auth0";

// const GlobalContext = createContext(null);
// export const useGlobalContext = () => useContext(GlobalContext);

// const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   // const [user, setUser] = useState(null)
//   const [isLoading, setIsLoading] = useState(true);

//   const { user } = useAuth0();
//   return <GlobalContext.Provider>{children}</GlobalContext.Provider>;
// };
// export default GlobalProvider;
