
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";



function App() {
  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 5000,
    },
    {
      id:2,
      name: "Mobile",
      price: 7000,
    
    },
  ];     
  
  

  return ( 
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
        
        <Route path="/products" element={<Products />}></Route></Routes>
        </BrowserRouter>
  );
}

export default App;
