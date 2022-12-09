import React from 'react';
import style from './Nav.module.css';
import SearchBar from './SearchBar';
import Menu from './Menu';


export default function Nav(props) { //recibe lo que se le envio 

  if(props.access){
    return (
      <div className={style.Nav}>
        <Menu/>
        <SearchBar onSearch={props.onSearch} random = {props.random} logout={props.logout}/>
      </div>
    );
  }
  return (<></>);
}