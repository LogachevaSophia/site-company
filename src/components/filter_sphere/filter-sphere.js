import Card from '../card/card'
import { useNavigate } from "react-router-dom";


const Sphere = ({arr}) =>{
  const navigate = useNavigate();
  function redirect(href){
    if (href)
    navigate(href);
  }
  
    return(
        <div className="filter">
        {arr.map(function (el) {
          return <Card title={el.title} id={el.id} href={el.id} key={el.id} onClick={()=>redirect(el.id)}/>;
        })}
        </div>
    )
}
export default Sphere;