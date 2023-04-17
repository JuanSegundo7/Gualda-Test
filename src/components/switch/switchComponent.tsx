import { Routes, Route } from "react-router-dom";
import Home from "../../pages/home";
import Characters from "../../pages/characters";

const SwitchComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/film/:id/characters" element={<Characters />}></Route>
    </Routes>
  );
};

export default SwitchComponent;
