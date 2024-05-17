import React, { useState } from "react";

// component
import LoginPage from "./pages/LoginPage";
import UserPage from "./pages/UserPage";

export const AuthContext = React.createContext();

function App () {

  const [Auth, setAuth] = useState('guest');

  return (
      <AuthContext.Provider value={{Auth, setAuth}}>
          {
            Auth == "user" ? <UserPage /> : <LoginPage />
          }
      </AuthContext.Provider>
  );
}


export default App;