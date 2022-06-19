import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import CakeView from "./features/cake/CakeView";
import IcecreamView from "./features/icecream/icecreamView";
import UserView from "./features/user/UserView";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <CakeView />
      <IcecreamView />
      <UserView />
    </div>
  );
}

export default App;
