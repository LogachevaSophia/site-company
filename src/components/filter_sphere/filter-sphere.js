import Card from "../card/card";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useBasketItems } from "../Provider/BasketHooks";

const Sphere = ({ arr, main=false }) => {
  const navigate = useNavigate();
  function redirect(href) {
    if (href) navigate(href);
  }
  const { addAllItems,basketItems } = useBasketItems();
  const buyAll = () => {
    axios.get('./api/getAllCompanies').then((response)=>{
      addAllItems(response?.data?.companies);
      navigate('/basket');
    })

  }

  return (
    <>
      <div className="filter">
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            gap: "20%",
          }}
        >
          {!main &&
          <button onClick={() => {
            

            const a = window.location.pathname.split('/');
            const b = a.slice(1,-1).join('/');
            navigate(`../${b}`, {replace:true})
            // window.location.pathname=b    
          }} className="basket">
            Назад
          </button> }
          {main &&  
          <button onClick={buyAll} className="basket">
            Купить всю базу
          </button>}
          <button onClick={() => navigate("/basket")} className="basket">
            В корзину
          </button>
        </div>
        {arr.map(function (el) {
          return (
            <Card
              title={el.title}
              id={el.id}
              href={el.id}
              key={el.id}
              onClick={() => redirect(el.id)}
              class={el?.class}
            />
          );
        })}
      </div>
    </>
  );
};
export default Sphere;
