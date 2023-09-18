import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useBasketItems } from "../Provider/BasketHooks";

const Table = () => {


  const {addItem,basketItems} = useBasketItems();
  const [arr, setarr] = useState([
    { id: 1, title: "буквоед", squareto: 500, squarefrom: 20 },
    { id: 2, title: "буквоед", squareto: 500, squarefrom: 20 },
  ]);
  const [dop,setdop] = useState(0);
  const navigate = useNavigate();
  

  return (
    <div className="filter">
      <table style={{verticalAlign:'middle',textAlign:'center'}}>
        <thead>
          <tr>
            <th>Компания</th>
            <th>Площадь от</th>
            <th>Площадь до</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {arr.map((elem) => {
            return (
              <tr key={elem.id}>
                <td>{elem.title}</td>
                <td>{elem.squarefrom}</td>
                <td>{elem.squareto}</td>
                <td>
                  <button onClick={()=>{addItem(elem); setdop(dop+1)}} disabled={basketItems.findIndex((element) => element.id === elem.id)>-1}>Купить</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button onClick={()=>navigate('/basket')}>
        Корзина
      </button>
    </div>
    
  );
};

export default Table;
