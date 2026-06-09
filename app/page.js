"use client";
import { useContext } from "react";
import AppContext from "./context/carContext";
import categories from "./categories";
import HeaderHome from "./components/HeaderHome";
import { Container, Flex, TextInput, Text, Box } from "@mantine/core";
import styles from "@/app/components/componetsStyles.module.css";
import CardCategories from "./components/CardCategories";
import PopularProduct from "./components/PopularProducts";
import CarSales from "./components/CarSales";
import {
  Car,
  FadersHorizontalIcon,
  MagnifyingGlassIcon,
} from "@phosphor-icons/react";

export default function Home() {
  const { product } = useContext(AppContext);

  return (
    <div>
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
        <Box className="py-10 ">
          <Text fw={900}>Productos populares!</Text>
          <Flex className="my-10">
            <PopularProduct />
          </Flex>
        </Box>
      </Container>
    </div>
  );
}
