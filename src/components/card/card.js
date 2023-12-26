import "./card.css";
import { useNavigate } from "react-router-dom";

const Card = ({ id, title, onClick, ...props }) => {
  


  return (
    <div className="card" onClick={onClick}>
      <div className="image">
       <div className="circle">
        <div id={id} className={props?.class}></div>
       </div>
      </div>
      <p>{title}</p>
    </div>
  );
};
export default Card;
