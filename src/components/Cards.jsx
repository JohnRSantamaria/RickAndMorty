//import { useLocation } from "react-router-dom";
import Card from "./Card";
import style from "./Cards.module.css";
import Login from "./Login";
export default function Cards(props) {
  const { characters, onClose, login,access } = props;
  //const {pathname} = useLocation();
  if(access){
    return (
      <div className={style.Cards}>
        {characters.map((el) => (
          <Card
            key={el.id}
            detailId={el.id}
            name={el.name}
            species={el.species}
            gender={el.gender}
            image={el.image}
            onClose={() => onClose(el.id)}
          />
        ))}
      </div>
    );
  }
  return (<Login login={login} className={style.Login}/>);  
}
