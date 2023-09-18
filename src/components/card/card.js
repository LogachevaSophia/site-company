import "./card.css";
import { useNavigate } from "react-router-dom";

const Card = ({ id, title, onClick }) => {
  


  return (
    <div className="card" onClick={onClick}>
      <div className="image">
       <div className="circle">
        <div id={id}></div>
       </div>
      </div>
      <p>{title}</p>
    </div>
  );
};
export default Card;
