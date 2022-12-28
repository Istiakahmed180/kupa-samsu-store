import "./App.css";
import Navbar from "./Pages/Navbar/Navbar";
import Gun from "./Pages/TopGun/Gun";
import { useState } from "react";

function App() {
  const [Count, setCount] = useState(0);
  const [Guns, setGuns] = useState([]);

  const AddToCart = () => {
    setCount(Count + 1);
  };

  return (
    <div>
      <Navbar count={Count} Guns={Guns}></Navbar>
      <Gun AddToCart={AddToCart} Guns={Guns} setGuns={setGuns}></Gun>
    </div>
  );
}

export default App;
