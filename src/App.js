import React from "react";
import { Header } from "./components/Header/index.tsx";
function App() {
  return (
    <div>
      <header className="">
        <Header
          navOne={"Home"}
          navTwo={"Art"}
          navThree={"About"}
          navFour={"Blog"}
          alt="imagem title"
        />
      </header>
    </div>
  );
}

export default App;
