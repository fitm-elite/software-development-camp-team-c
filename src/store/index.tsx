import { createContext, useContext, useState, ReactNode } from "react";

interface PriceItem {
  price: number;
}

interface InitialState {
  prices: PriceItem[];
  setPrices: (price: number) => void;
  finalPrice: number;
  setFinalPrice: (price: number) => void;
}

// Initial state with functions that don't perform any actions
const initialState: InitialState = {
  prices: [],
  setPrices: () => {},
  finalPrice: 0,
  setFinalPrice: () => {},
};

// Create Context with the initial state
const Store = createContext<InitialState>(initialState);

export const Provider = ({ children }: { children: ReactNode }) => {
  const [prices, setPricesState] = useState<PriceItem[]>([]);
  const [finalPrice, setFinalPriceState] = useState<number>(0);

  // Wrap the setter function to add new prices
  const setPrices = (price: number) => {
    setPricesState((prevPrices) => [...prevPrices, { price }]);
  };

  return (
    <Store.Provider
      value={{
        prices,
        setPrices,
        finalPrice,
        setFinalPrice: setFinalPriceState,
      }}
    >
      {children}
    </Store.Provider>
  );
};

export const usePayment = () => useContext(Store);

export default Store;
