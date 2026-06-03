"use client";

import { useContext } from "react";
import AppContext from "../context/carContext";
import CardPopular from "@/app/components/CardPopular";
import { SimpleGrid } from "@mantine/core";

function PopularProducts() {
  const { allSale = [], handleSaveProducts } = useContext(AppContext);

  const salesFlat = Array.isArray(allSale) ? allSale.flat() : [];

  const grouped = salesFlat.reduce((acc, item) => {
    const exists = acc.find((p) => p.code === item.code);

    if (exists) {
      exists.total += item.quantity;
    } else {
      acc.push({
        code: item.code,
        name: item.name,
        price: item.price,
        total: item.quantity,
      });
    }

    return acc;
  }, []);

  const topProducts = grouped.sort((a, b) => b.total - a.total).slice(0, 5);

  return (
    <SimpleGrid cols={2} spacing="lg">
      {topProducts.map((p) => (
        <CardPopular
          key={p.code}
          product={p}
          handleSaveProducts={handleSaveProducts}
        />
      ))}
    </SimpleGrid>
  );
}

export default PopularProducts;
