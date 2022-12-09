import React from "react";
import styles from "./Error404.module.css";
import {NavLink} from "react-router-dom";

export default function Error404() {
  return (
    <section className={styles.page_404}>
        <div className={styles.four_zero_four_bg}>
            <h1>404</h1>
            
        </div>
        <div className={styles.contant_box_404}> 
            <h2>Look like you're lost!</h2>
            <p>the page you are looking for not avaible!</p>
            <NavLink to = "/" className={styles.link_404}>Go to Home</NavLink>
        </div>
    </section>
  );
}
