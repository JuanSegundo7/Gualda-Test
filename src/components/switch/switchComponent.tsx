import { Routes, Route } from "react-router-dom";
import Home from "../../pages/home";
import Characters from "../../pages/characters";
import { useEffect } from "react";
import { getFilms } from "../../redux/actions";
import { useAppDispatch } from "../../redux/hook";

const SwitchComponent = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getFilms());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/film/:id/characters" element={<Characters />}></Route>
    </Routes>
  );
};

export default SwitchComponent;
