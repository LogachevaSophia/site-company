import { useBasketItems } from "../Provider/BasketHooks";

const BasketPage = () => {
  const { addItem, basketItems } = useBasketItems();
  return (
    <div>
      <div className="filter">
        <table style={{ verticalAlign: "middle", textAlign: "center" }}>
          <thead>
            <tr>
              <th>Компания</th>
              <th>Площадь от</th>
              <th>Площадь до</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {basketItems.map((elem) => {
              return (
                <tr key={elem.id}>
                  <td>{elem.title}</td>
                  <td>{elem.squarefrom}</td>
                  <td>{elem.squareto}</td>
                  <td>
                   
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BasketPage;
