import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { addCharacter, removeCharacter } from "../redux/actions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function Card(props) {
  const { pathname } = useLocation();
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    props.myFavorites.map((fav) => {
      if (fav.detailId === props.detailId) {
        setIsFav(true);
      }
    });
    return props.myFavorites;
  }, [props.myFavorites]);

  function handleFavorite() {
    if (isFav) {
      setIsFav(false);

      props.removeCharacter(props);
    } else {
      setIsFav(true);
      props.addCharacter(props);
    }
  }

  return (
    <div className={styles.Card}>
      <Link to={`/detail/${props.detailId}`}>
        <img src={props.image} alt={props.name} />
        <h2>{`Name: ${props.name}`}</h2>
        <h2>{`Species: ${props.species}`}</h2>
        <h2>{`Gender: ${props.gender}`}</h2>
      </Link>
      <div className={styles.botones}>
        {isFav ? (
          <button onClick={handleFavorite}>❤️</button>
        ) : (
          <button onClick={handleFavorite}>🤍</button>
        )}
        {pathname !== "/favorites" ? (
          <button onClick={props.onClose}>Close</button>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCharacter: function (id) {
      dispatch(addCharacter(id));
    },
    removeCharacter: function (id) {
      dispatch(removeCharacter(id));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
