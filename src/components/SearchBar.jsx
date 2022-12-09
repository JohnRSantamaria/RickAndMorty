import style from './SearchBar.module.css'
import React, { useState } from 'react';


export default function SearchBar(props) {
   
   const {onSearch, random,logout} = props;
   
   const [userInput, setUserInput] = useState("");

   function handleChange(e){
      /*Cuando ocurra un cambio en el value del input, tomar ese value
        y guadarlo en el estado userInput
      */
      setUserInput(e.target.value)
   }

   
   return (
      <div className={style.Search}>
         <input value={userInput} onChange ={handleChange}/>
         <button onClick={()=> onSearch(userInput)}>ADD</button>
         <button onClick={()=>random()}>Random</button>
         <button onClick={()=>logout()} className={style.logout}>Loguot</button>
      </div>
   );
}
