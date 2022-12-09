import React from "react";
import styles from "./Favorites.module.css";
import { NavLink as NavLinkRRD } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import Card from "./Card";
import { orderCards, filterCards } from "../redux/actions";

const NavLink = ({ to, children, ...props }) => {
  return (
    <NavLinkRRD
      {...props}
      className={({ isActive }) => (isActive ? styles.isActive : undefined)}
      to={to}
    >
      {children}
    </NavLinkRRD>
  );
};
function Favorites(props) {


  console.log(props);
  const dispatch = useDispatch();
  const handleOrder = (e) => {
    dispatch(orderCards(e.target.value));
  };
  const handleGender = (e) => {
    dispatch(filterCards(e.target.value));
  };

  return (
    <>
      <div>
        <select name="Order" onChange={handleOrder}>
          <option value="Asendente">Asendente</option>
          <option value="Desendente">Desendente</option>
        </select>
        <select name="Gender" onChange={handleGender}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
        </select>
      </div>
      <div className={styles.Cards}>
        {props.allCharacters.map((el) => (
          <Card
            key={el.detailId}
            detailId={el.detailId}
            name={el.name}
            species={el.species}
            gender={el.gender}
            image={el.image}
          />
        ))}
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
    allCharacters: state.allCharacters
  };
};
export default connect(mapStateToProps, null)(Favorites);
