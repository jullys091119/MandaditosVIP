import React, { useContext } from "react";
import AppContext from "../context/carContext";
import styles from "@/app/components/componetsStyles.module.css";
import CarSales from "./CarSales";
import { ShoppingCartIcon } from "@phosphor-icons/react";

function BadgeCar({ product }) {
  const { opened, setOpened, setQuantity } = useContext(AppContext);

  const totalItems = product?.reduce((acc, p) => acc + p.quantity, 0);

  return (
    <>
      <CarSales
        opened={opened}
        product={product}
        setQuantity={setQuantity}
        close={() => setOpened(false)}
      >
        <div
          className={styles.badge}
          onClick={() => setOpened((opened) => !opened)}
        >
          <ShoppingCartIcon size={20} />
          {totalItems}
        </div>
      </CarSales>
    </>
  );
}

export default BadgeCar;
