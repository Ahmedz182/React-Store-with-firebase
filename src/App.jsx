import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Account from "./pages/Account/Account";
import Home from "./pages/home/Home";
import Shop from "./pages/Shop/Shop";

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Account" element={<Account />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
