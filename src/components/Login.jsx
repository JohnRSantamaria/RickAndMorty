import React from "react";
import { useLocation } from "react-router-dom";
import styles from "./Login.module.css";
import Validation from "./validation";


const Login = ({login} ) => {
  const { pathname } = useLocation();
  const [userData, setUserData] = React.useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = React.useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setErrors(
      Validation({
        ...userData,
        [e.target.name]: e.target.value,
      })
    );

    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  
  const handleSubmint = (e)=> {
    e.preventDefault();

    login(userData);
  }


  


  
  
  if (pathname === "/" && true) {
    return (
      <>
      <h1 className={styles}>Rick And MORTY</h1>
      <div className={styles.container}>
        <h2>LOGIN</h2>
        <form onSubmit = {handleSubmint}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            name="username"
            placeholder="Ingresa tu email..."
            value={userData.username}
            key="username"
            id="username"
            onChange={handleInputChange}
            className = {errors.username && styles.warning}
          /><p>{errors.username}</p>

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            placeholder="Ingresa tu password..."
            value={userData.password}
            key="password"
            id="password"
            onChange={handleInputChange}
            className = {errors.password && styles.warning}
          /><p>{errors.password}</p>

          <button type="submit">Login</button>
        </form>
      </div>
      </>

    );
  }

  return <></>;
};

export default Login;
