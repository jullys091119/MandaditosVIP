"use client";
import { useContext, useEffect, useState } from "react";
import AppContext from "./context/carContext";
import categories from "./categories";
import HeaderHome from "./components/HeaderHome";
import { Container, Flex, TextInput, Text, Box } from "@mantine/core";
import styles from "@/app/components/componetsStyles.module.css";
import CardCategories from "./components/CardCategories";
import PopularProduct from "./components/PopularProducts";
import { searchProducts } from "./products";
import SearchingProducts from "./components/SearchingProducts"

import {
  FadersHorizontalIcon,
} from "@phosphor-icons/react";
import CarSales from "./components/CarSales";

export default function Home() {
  const { product } = useContext(AppContext);
  const [value, setValue] = useState("")
  const [data, setData] = useState([])

useEffect(() => {
  let isActive = true; // 1. Bandera para controlar peticiones viejas

  const loadData = async () => {
    // 2. CORTE INMEDIATO: Si está vacío, limpia el estado y NO va a Supabase
    if (!value || value.trim() === "") {
      setData([]); 
      return;
    }

    const data = await searchProducts(value);

    // 3. Solo guarda los datos si esta sigue siendo la última búsqueda que hizo el usuario
    if (isActive) {
      setData(data);
    }
  };

  loadData();

  // 4. Limpieza: cancela el guardado de datos si el usuario escribe una nueva letra
  return () => {
    isActive = false;
  };
}, [value]);

  return (
    <div style={{ minHeight: "100vh", position: "relative" }}>
      <HeaderHome product={product} />
      <Container fluid>
        <Flex className={[styles.containerInput, "gap-4 mb-4 mt-10"]}>
          <TextInput
            inputSize={60}
            size="lg"
            rightSectionPointerEvents="none"
            rightSection={<FadersHorizontalIcon size={19} weight="bold" />}
            placeholder="Busca tu producto"
            pointer={true}
            radius={30}
            onChange={(txt) => setValue(txt.target.value)}
            value={value}
          />
        </Flex>
        <Text size="md" fw={900} className="mb-4">
          Categorías
        </Text>
        <div
          style={{
            display: "flex",
            overflowX: "auto",
            gap: "10px",
            marginTop: 20,
          }}
        >
          {categories.map((p) => (
            <Flex key={p.id} style={{ minWidth: "90px" }}>
              <CardCategories id={p.id} name={p.name} img={p.img} />
            </Flex>
          ))}
        </div>
        {
          value ? (
            <Box className="py-10 ">
              <Text fw={900}>Productos Encontrados</Text>
              <Flex className="my-10">
                <SearchingProducts products={data} />
              </Flex>
            </Box>
          ) : (
            <Box className="py-10 ">
              <Text fw={900}>Productos populares!</Text>
              <Flex className="my-10">
                <PopularProduct />
              </Flex>
            </Box>
          )
        }
      </Container>
    </div>
  );
}
