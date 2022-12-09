import './App.css'
import Nav from './components/Nav'
import Cards from './components/Cards.jsx'
import React, {useEffect} from 'react';
import About from "./components/About";
import Detail from './components/Detail';
import Error404 from './components/Error404';
import { Routes, Route, useNavigate} from "react-router-dom";
import Favorites from './components/Favorites';




let arr = [];

function App() {

  const [characters, setCharacters] = React.useState([]);
  
  const [access, setAccess] = React.useState(false);
  const username = "";
  const password = "";
  const navigate = useNavigate();

  async function onSearch(character) {


    if (arr.includes(character)) return;
    arr.push(character);

    await fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {


        if (data.name) {

          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          throw TypeError
        }

      })
      .catch((err) => {
        window.alert(`ID not found: "${character}"`)
      });
  }

  function random() {

    onSearch(Math.floor(Math.random() * 826) + 1);

  }

  function onClose(id) {
    setCharacters(characters.filter(character => character.id !== id));
  }

  function login(userData){
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate('/');
   }else{
    alert("datos incorrectos");
   }
  }

  function logout(){
     setAccess(false);
     navigate("/");
  }


  useEffect(() => {
    !access && navigate('/');
 }, [access]);


  return (
    <>
    <Nav onSearch={onSearch} random={random} access= {access} logout ={logout}/>
    <div className='App'>
      <Routes>
        <Route path={"/"} element={<Cards characters={characters} onClose={onClose} login={login} access={access}/>} />

        <Route path={"about"} element={<About />} />

        <Route path={"detail/:detailId"} element={<Detail />} />
        <Route path={"/favorites"} element= {<Favorites/>}/>

        <Route path={"*"} element={<Error404 />} errorElement={<Error404 />} />
      </Routes>
    </div>
    </>
  )
}

export default App;