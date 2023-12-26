import { useBasketItems } from "../Provider/BasketHooks";
import axios from "axios";
import { useEffect, useState } from "react";
import "./BasketPage.css";
import { useNavigate } from "react-router-dom";

const BasketPage = () => {
  const { addItem, basketItems, deleteItem } = useBasketItems();
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [countAll, setCountAll] = useState(0);
  const [status, setStatus] = useState("");
  const [price, setprice] = useState(0);
  useEffect(() => {
    buyAll();
    setprice(pay());
  }, []);

  useEffect(() => {
    if (email.length > 0) {
      setStatus("");
    }
  }, [email]);

  useEffect(()=>{
    setprice(pay());
  }, [basketItems, countAll])


  

  const postbuy = async () => {
    const result = basketItems.map((item) => item.id);
    const data = { items: result, email: email };
    if (email.length == 0 || basketItems.length == 0) {
      setStatus("Неверное число выбранных компаний или email");
    } else {
      setStatus("");
      await axios
        .post(`/api/buy`, data)
        .then((respons) => {
          setStatus("");
          window.location.replace(respons.data.paymentLink);
        })
        .catch(() => {
          setStatus("Произошла ошибка, обратитесь в поддержку");
        });
    }
  };
  const buyAll = () => {
    axios.get("./api/getAllCompanies").then((response) => {
      setCountAll(response?.data?.count);
    });
  };
  const pay = () =>{
    return basketItems.length == countAll
      ? basketItems.length * 150
      : basketItems.length < 5
      ? basketItems.length * 500
      : basketItems.length < 10
      ? basketItems.length * 400
      : basketItems.length < 50
      ? basketItems.length * 300
      : basketItems.length * 250;
    }

  return (
    <div className="filter">
      <div style={{ display: "flex", justifyContent: "start", width: "100%" }}>
        <button
          className="buy"
          onClick={() => {
            navigate(-1);
          }}
        >
          {" "}
          Назад
        </button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Компания</th>
            <th>Площадь от</th>
            <th>Площадь до</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {basketItems.map((elem) => {
            return (
              <tr key={elem.id}>
                <td>{elem.title}</td>
                <td>{elem?.["area-min"] ? elem?.["area-min"] : 0}</td>
                <td>{elem?.["area-min"] ? elem?.["area-max"] : 0}</td>
                <td>
                  <button
                    className="basketdis"
                    onClick={() => {
                      //если найдено в баскете, то удаляем
                      deleteItem(elem);

                      //setdop(dop + 1);
                    }}
                    //disabled={basketItems.findIndex((element) => element.id === elem.id)>-1}
                  ></button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span>Стоимость: {price}</span>
        <br></br>
        <input
          name="email"
          className="buy"
          placeholder="email"
          onChange={(event) => setEmail(event.target.value)}
        ></input>
        <br />
        <button onClick={postbuy} className="buy">
          Оплатить
        </button>
        {status}
      </div>
    </div>
  );
};

export default BasketPage;
