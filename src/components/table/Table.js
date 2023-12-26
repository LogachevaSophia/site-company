import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useBasketItems } from "../Provider/BasketHooks";
import "./Table.css";
import axios from "axios";

const Table = () => {
  const { addItem, basketItems, deleteItem, addAllItems } = useBasketItems();
  const [arr, setarr] = useState([
    
  ]);

  const get = async () => {
    axios
      .get(`/api/${window.location.pathname}`)
      .then((res) => setarr(res?.data?.companies));
    // return res?.data;
  };
  useEffect(() => {
    const res = get();
    // console.log(res)
    //setarr(get());
  }, []);

  const [dop, setdop] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="filter">
      <div style={{ width: "100%", display: "flex", justifyContent: "space-between", gap:"20%" }}>
      <button onClick={() => {
        const a = window.location.pathname.split('/');
        const b = a.slice(1,-1).join('/');
        navigate(`../${b}`, {replace:true})

        }} className="basket">
          Назад
        </button>
        <button onClick={() => {addAllItems(arr); setdop(!dop)}} className="basket">
          Купить весь список
        </button>
        <button onClick={() => navigate("/basket")} className="basket">
          В корзину
        </button>
      </div>
      <table className="table">
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
              <tr key={elem?.id}>
                <td>{elem?.title}</td>
                <td>{elem?.["area-min"] ? elem?.["area-min"] : 0}</td>
                <td>{elem?.["area-max"] ? elem?.["area-max"] : 0}</td>
                <td>
                  <button
                    className={
                      basketItems.findIndex(
                        (element) => element.id === elem.id
                      ) > -1
                        ? "notdis"
                        : "dis"
                    }
                    onClick={(event) => {
                      if (
                        basketItems.findIndex(
                          (element) => element.id === elem.id
                        ) > -1
                      ) {
                        //если найдено в баскете, то удаляем
                        deleteItem(elem);
                      } else {
                        addItem(elem);
                      }

                      setdop(dop + 1);
                    }}
                    //disabled={basketItems.findIndex((element) => element.id === elem.id)>-1}
                  ></button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
