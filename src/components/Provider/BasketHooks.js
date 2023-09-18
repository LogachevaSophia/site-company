import { createContext, useContext, useState } from "react";
const BasketContext = createContext();
export const useBasketItems = () => useContext(BasketContext);
export default function BasketProvider({ children }) {
    const [basketItems, setBasketItems] = useState([]);
  const [price, setPrice] = useState(0);
//   const { sphereItems, allItems, setAllItems, categoryItems, allNetworks } =
    // useSphereItems();

    const addItem = (item)=>{
        basketItems.push(item);
        // console.log(basketItems.find((elem)=>elem.id==item.id)!=-1)
        // console.log(basketItems);
        
    }
    return (
        <BasketContext.Provider
          value={{
            basketItems,
            addItem,
            // removeItem,
            // price,
            // changeBlock,
            // changeAll,
            // setBasketItems,
            // calcPrice,
          }}
        >
          {children}
        </BasketContext.Provider>
      );
    }