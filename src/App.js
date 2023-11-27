import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navvbar } from "./compontens/Navvbar";
import { Home } from "./compontens/Home";
import { Footer } from "./compontens/Footer";
import { Menu } from "./compontens/Menu";
import { SingUp } from "./compontens/SingUp";

function App() {
  return (
    <>
      <Navvbar />

      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route path="/menu" element={<Menu />} />
        <Route path="/sinup" element={<SingUp />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
