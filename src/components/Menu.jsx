import React from "react";
import styles from "./Menu.module.css";
import {NavLink as NavLinkRRD} from "react-router-dom";

const NavLink = ({to,children,...props})=>{
    return (
        <NavLinkRRD
        {...props}
        className={({isActive})=> (isActive?styles.isActive:undefined)}
        to={to}
        >
            {children}
        </NavLinkRRD>
    );
}


export default function Menu() {
  return (
    <div className={styles.list} >
        <NavLink to = {"/"}>Home</NavLink>
        <NavLink to ={"/about"}>About</NavLink>
        <NavLink to = {"/favorites"}>Favorites</NavLink>
    </div>
  );
}
