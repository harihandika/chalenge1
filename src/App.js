import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Account from "./components/DetailAccount";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route />

        <Route path="/" element={<Home />} />
        <Route path="/account/:id" element={<Account />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
