import { createContext, useState, ReactNode } from "react";

interface InitialState {
  prices: number[];
  setPrices: (price: number) => void;
  finalPrice: number;
  setFinalPrice: (price: number) => void;
  removePrice: (price: number) => void;
}

// Initial state with functions that don't perform any actions
const initialState: InitialState = {
  prices: [],
  setPrices: () => {},
  finalPrice: 0,
  setFinalPrice: () => {},
  removePrice: () => {},
};

// Create Context with the initial state
const Store = createContext<InitialState>(initialState);

export const Provider = ({ children }: { children: ReactNode }) => {
  const [prices, setPricesState] = useState<number[]>([]);
  const [finalPrice, setFinalPriceState] = useState<number>(0);

  // Wrap the setter function to add new prices
  const setPrices = (price: number) => {
    setPricesState((prevPrices) => [...prevPrices, price]);
  };

  // Function to remove a price from the list
  const removePrice = (price: number) => {
    setPricesState((prevPrices) => prevPrices.filter((p) => p !== price));
  };

  return (
    <Store.Provider
      value={{
        prices,
        setPrices,
        finalPrice,
        setFinalPrice: setFinalPriceState,
        removePrice,
      }}
    >
      {children}
    </Store.Provider>
  );
};

export default Store;