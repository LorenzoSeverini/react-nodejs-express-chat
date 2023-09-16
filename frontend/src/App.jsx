import { useState } from "react";

import AuthPage from "./components/AuthPage.jsx";
import ChatsPage from "./components/ChatsPage.jsx";

import "./style/index.css";

function App() {
  const [user, setUser] = useState(undefined);

  if (!user) {
    return <AuthPage onAuth={(user) => setUser(user)} />;
  } else {
    return <ChatsPage user={user} />;
  }
}

export default App;