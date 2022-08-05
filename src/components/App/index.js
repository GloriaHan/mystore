import React, { useState} from "react";
import Routing from "../Routing";

export const Context = React.createContext();
export function App(props) {
  const [productsInCart,setProductsInCart] = useState([]);
  return (
    <Context.Provider value={{ productsInCart,setProductsInCart }}>
      <Routing />
    </Context.Provider>
  );
}

export default App;
