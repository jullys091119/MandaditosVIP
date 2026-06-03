"use client";

import styles from "@/app/components/componetsStyles.module.css";
import { useContext, useMemo } from "react";
import AppContext from "../context/carContext";
import { MinusIcon, PlusIcon } from "@phosphor-icons/react";
import Image from "next/image";
import { Popover, Group, Flex, Text, Paper, Divider, Box } from "@mantine/core";
import StepperCar from "@/app/components/StepperCar";
import { setProducts, setItemsProducts } from "../products";

function CarSales({ opened, children, product, setQuantity }) {
  const { setOpened, sale } = useContext(AppContext);

  const total = useMemo(() => {
    return (
      product?.reduce((acc, item) => acc + item.price * item.quantity, 0) || 0
    );
  }, [product]);

  const clean = (text) =>
    new TextDecoder("utf-8")
      .decode(new TextEncoder().encode(text ?? ""))
      .normalize("NFC");

  async function handleSend(data) {
    try {
      const message = [
        "🛒 PEDIDO",
        "",
        "----------------------",
        "PRODUCTOS",
        "----------------------",
        ...product.map(
          (p) =>
            `- ${clean(p.name)} x${p.quantity} piezas = $${(
              p.price * p.quantity
            ).toFixed(2)}`,
        ),
        "----------------------",
        "",
        `💰 TOTAL: $${total.toFixed(2)}`,
        `💵 PAGO:  $${Number(data?.value || 0).toFixed(2)}`,
        `💸 CAMBIO: $${Number(data?.change || 0).toFixed(2)}`,
        "",
        "----------------------",
        "CLIENTE:",
        clean(data?.name),
        "",
        "DIRECCIÓN:",
        clean(data?.address),
        "----------------------",
        "",
        "GRACIAS POR SU COMPRA",
      ].join("\n");

      await setProducts(total, "julian", data?.address);
      console.log(product, "product");
      await setItemsProducts(product);

      const url = `https://wa.me/526692396324?text=${encodeURIComponent(
        message,
      )}`;

      window.open(url, "_blank");

      sale();
      setOpened(false);
    } catch (err) {
      console.error("Error al procesar venta:", err);
      alert("Error al guardar la venta");
    }
  }

  return (
    <Popover
      opened={opened}
      onClose={() => setOpened(false)}
      closeOnClickOutside
      trapFocus={false}
      withArrow
      shadow="md"
      width="97%"
    >
      <Popover.Target>{children}</Popover.Target>

      <Popover.Dropdown className={styles.popoverContent}>
        {!product || product.length === 0 ? (
          <Text ta="center" c="dimmed" py={20}>
            🛒 No hay productos en el carrito
          </Text>
        ) : (
          <>
            {product.map((p) => (
              <Flex key={p.code}>
                <Paper shadow="xs" className={styles.paperSales}>
                  <Group>
                    <Image
                      src={p.img_url}
                      alt={p.name}
                      width={110}
                      height={100}
                      className={styles.imgCar}
                    />
                    <Box>
                      <Text>{p.name}</Text>
                      <Text>$ {p.price}.00</Text>
                    </Box>
                  </Group>

                  <Flex justify="flex-end" gap={10}>
                    <Box className={styles.circleMinusQuantity}>
                      <MinusIcon
                        onClick={() => setQuantity(p.code, "remove")}
                        size={20}
                        color="#9EC5A6"
                      />
                    </Box>

                    <Text>{p.quantity}</Text>

                    <Box className={styles.circlePlusQuantity}>
                      <PlusIcon
                        onClick={() => setQuantity(p.code, "add")}
                        size={20}
                        color="white"
                      />
                    </Box>
                  </Flex>
                </Paper>
                <Divider />
              </Flex>
            ))}

            <StepperCar product={product} total={total} onSend={handleSend} />
          </>
        )}
      </Popover.Dropdown>
    </Popover>
  );
}

export default CarSales;
