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
import BackIcon from "../../components/BackIcon"
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
    <Container fluid className="px-0" style={{ padding: 0, position: "relative" }}>
      <HeaderHome product={product} />
      <Box className="px-2">
        <SimpleGrid
          cols={2}
          className="flex mt-2 py-10"

        >
          {filteredProducts?.map((p, i) => {
            return (
              <Card
                shadow="sm"
                padding="xl"
                component="a"
                style={{ maxWidth: 200, maxHeight: 200 }}
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
                  {p?.name.length > 9 ? p?.name.slice(0, 9) + "..." : p?.name}
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
      </Box>
    </Container>
  );
}
