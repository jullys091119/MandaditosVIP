"use client";

import { createContext, useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import { getProducts } from "../products";

const AppContext = createContext(null);

export function CarContext({ children }) {
  const [items, setItems] = useState([]);
  const [opened, setOpened] = useState(false);
  const [itemSelected, setItemSelected] = useState(false);
  const [send, setSend] = useState(false);
  const [error, setError] = useState(false);

  const [product, setProduct, { removeItem: removeProducts }] =
    useLocalStorageState("cart", {
      defaultValue: [],
    });

  async function handleSaveProducts(code) {
    const products = await getProducts();
    const selectedProduct = products.find((p) => p.code === code);

    setProduct((prev) => {
      const exists = prev.find((p) => p.code === code);

      if (exists) {
        return prev.map((p) =>
          p.code === code ? { ...p, quantity: p.quantity + 1 } : p,
        );
      }

      return [...prev, { ...selectedProduct, quantity: 1 }];
    });

    setItemSelected(true);
  }

  function setQuantity(code, type) {
    setProduct((prev) =>
      prev
        .map((p) => {
          if (p.code === code) {
            const newQty =
              type === "add" ? p.quantity + 1 : Math.max(p.quantity - 1, 0);

            return { ...p, quantity: newQty };
          }
          return p;
        })
        .filter((p) => p.quantity > 0),
    );
  }

  function sale() {
    if (!Array.isArray(product) || product.length === 0) return;
    removeProducts();
  }

  return (
    <AppContext.Provider
      value={{
        items,
        setItems,
        product,
        setProduct,
        handleSaveProducts,
        setQuantity,
        setItemSelected,
        itemSelected,
        sale,
        opened,
        setOpened,
        send,
        setSend,
        error,
        setError,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;
