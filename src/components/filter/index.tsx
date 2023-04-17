import React from "react";
import styles from "./filter.module.css";
import { useAppDispatch } from "../../redux/hook";
import { cleanCharacters, filter } from "../../redux/actions";
import Dropdown from "./dropdown";
import { Link } from "react-router-dom";

function Filter() {
  const dispatch = useAppDispatch();
  const Gender = {
    name: "Gender",
    array: ["Male", "Female", "Hermaphrodite", "N/A"],
  };

  const EyesColor = {
    name: "Eye Color",
    array: [
      "Brown",
      "Yellow",
      "Red",
      "Orange",
      "Blue-gray",
      "Blue",
      "Black",
      "Hazel",
    ],
  };

  return (
    <nav id={styles.Filter}>
      <Dropdown name={Gender.name} array={Gender.array} />
      <Dropdown name={EyesColor.name} array={EyesColor.array} />
      <p onClick={() => dispatch(cleanCharacters(true))}>Reset</p>
    </nav>
  );
}

export default Filter;
