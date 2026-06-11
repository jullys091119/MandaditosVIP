"use client";

import { useContext} from "react";
import AppContext from "../context/carContext";
import CardPopular from "./CardPopular";
import { SimpleGrid } from "@mantine/core";

function SearchingProducts(products) {
   const {handleSaveProducts } = useContext(AppContext);
   console.log(products.products, "products")
  return (
    <SimpleGrid cols={2} spacing="lg">
      {products?.products?.map((p) => (
        <CardPopular
          key={p.code}
          product={p}
          handleSaveProducts={handleSaveProducts}
          img={p?.img_url}
        />
      ))}
    </SimpleGrid>
  );
}

export default SearchingProducts;
