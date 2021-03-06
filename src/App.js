import Navbar from "../src/components/navbar";
import { BrowserRouter, Route } from "react-router-dom";
import home from "../src/components/home";
import cart from "../src/components/cart";
import checkout from "../src/components/checkout";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Route exact path="/" component={home} />
        <Route exact path="/cart" component={cart} />
        <Route exact path="/checkout" component={checkout} />
      </BrowserRouter>
    </div>
  );
}

export default App;
