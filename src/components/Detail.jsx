import React from "react";
import { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import styles from "./Detail.module.css";

export default function Detail() {
  const params = useParams();
  let id = params.detailId;
  const [character, setCharacter] = useState("");
  const { name, status, species, gender, image, location} = character;

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });

    return setCharacter({});
  }, [id]);

  return (
    <>
      <div className={styles.Container}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? styles.isActive : undefined)}
        >
          {name}
        </NavLink>
        <div className={styles.Names}>
          <div className={styles.Image}>
            <img src={image} alt="name" />
          </div>
          <div className={styles.Labels}>
            <h4>{`Status: ${status}`}</h4>
            <h4>{`Species: ${species}`}</h4>
            <h4>{`Gender: ${gender}`}</h4>
            {/* <h4>{`Origin: ${origin?.name}`}</h4> */}
            <h4>{`Location: ${location?.name}`}</h4>
          </div>
        </div>
      </div>
    </>
  );
}
