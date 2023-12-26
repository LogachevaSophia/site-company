import { createContext, useContext, useState } from "react";
const BasketContext = createContext();
export const useBasketItems = () => useContext(BasketContext);
export default function BasketProvider({ children }) {
  const [basketItems, setBasketItems] = useState([]);
  const [price, setPrice] = useState(0);


  const addItem = (item) => {
    if (!basketItems.some(e => e.id === item.id))
    basketItems.push(item);


  };
  const deleteItem = (item) => {
    const basketItems2 = basketItems.filter((el) => el?.id !== item?.id);
    setBasketItems(basketItems2);
  };

  const addAllItems = (items) => {
    for (let i=0;i<items.length;i++){
      if (!basketItems.some(e => e.id === items[i].id))
      basketItems.push(items[i])
    }
  }


  return (
    <BasketContext.Provider
      value={{
        basketItems,
        addItem,
        deleteItem,
        addAllItems
      }}
    >
      {children}
    </BasketContext.Provider>
  );
}
