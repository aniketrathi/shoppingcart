
import { useState } from "react";
import Basket from "./components/basket";
import Header from "./components/header";
import Main from "./components/main";
import  Data  from "./data";
function App() {
const [cartItems, setCartItems] = useState([]);
const [count, setcount] = useState(0);
const onnAdd = (product) => {
  const exist = cartItems.find((x) => x.id === product.id);
  if(exist) {
    setCartItems(
      cartItems.map((x) =>
      x.id === product.id ? {...exist, qty: exist.qty + 1} : x
      )
    );
  }
  else{
    setCartItems([...cartItems, {...product,qty : 1}]);
  }
  console.log(cartItems);
  setcount(count+1);
}

const onnRemove = (product) => {
  const exist = cartItems.find((x) => x.id === product.id);
  if(exist.qty > 1) {
    setCartItems(
      cartItems.map((x) =>
      x.id === product.id ? {...exist, qty: exist.qty - 1} : x
      )
    );
  }
  else{
    setCartItems(cartItems.filter((x) => x.id !== product.id));
  }
  setcount(count-1);
}

  return (
    <div>
      <Header count={count}/>
      <div className="row">
        <Main products = { Data } onnAdd = {onnAdd} />
        <Basket cartItems={cartItems}  onnAdd = {onnAdd} onnRemove = {onnRemove} />
      </div>
    </div>
  );
}

export default App;
