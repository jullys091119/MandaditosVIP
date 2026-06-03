"use client";
import { useState, useContext, useEffect } from "react";
import AppContext from "../../context/carContext";
import styles from "../../components/componetsStyles.module.css";
import products from "../../products";
import { Box, Container, Button, SimpleGrid, Card, Text } from "@mantine/core";
import { ShoppingCartSimpleIcon } from "@phosphor-icons/react";
import BadgeCar from "../../components/BudgeCar";
import { PlusCircleIcon, MinusCircleIcon } from "@phosphor-icons/react";
import Image from "next/image";
import HeaderHome from "../../components/HeaderHome";
import { getProducts } from "../../products";
export default function productList({ id }) {
  const {
    setItems,
    items,
    product,
    setProduct,
    removeSales,
    removeProducts,
    allSale,
    setAllSale,
    handleSaveProducts,
    setQuantity,
    setItemSelected,
    itemSelected,
    sale,
  } = useContext(AppContext);

  const [data, setData] = useState();

  useEffect(() => {
    async function getData() {
      const product = await getProducts();
      setData(product);
    }
    getData();
  }, []);

  const filteredProducts = data?.filter((p) => p.categoryId == id);
  return (
    <Container fluid className="px-0" style={{ padding: 0 }}>
      <HeaderHome product={product} />

      <SimpleGrid
        cols={2}
        spacing="lg"
        className="relative mt-10 justify-center"
        style={{ padding: "0 17px" }}
      >
        {filteredProducts?.map((p, i) => {
          return (
            <Card
              shadow="sm"
              padding="xl"
              component="a"
              h={190}
              w={180}
              withBorder
              key={i}
            >
              <Card.Section>
                <Image
                  src={p.img_url}
                  width={100}
                  height={100}
                  className={styles.imgList}
                  alt="picure product"
                />
              </Card.Section>
              <Text fw={500} size="lg" mt="md">
                {p?.name.length > 10 ? p?.name.slice(0, 10) + "..." : p?.name}
              </Text>
              <Text fw={900} className={styles.price}>
                $ {p.price}.00
              </Text>

              <PlusCircleIcon
                size={42}
                color="#24472b"
                className="absolute bottom-3 right-1"
                onClick={() => {
                  handleSaveProducts(p.code);
                }}
              />
            </Card>
          );
          <p>{p.quantity}</p>;
        })}
      </SimpleGrid>
    </Container>
  );
}
