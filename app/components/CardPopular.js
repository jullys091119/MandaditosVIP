import { Card, Image, Text } from "@mantine/core";
import styles from "@/app/components/componetsStyles.module.css";
import { PlusCircleIcon } from "@phosphor-icons/react";

function CardPopular({ product, handleSaveProducts, img }) {
  if (!product?.code) return null;

  return (
    <Card shadow="sm" padding="xl"  withBorder style={{display: "flex", justifyContent: "center", alignItems: "center"}} >
      <Card.Section className="flex column align-center">
        <Image
          src={product?.img || img}
          h={70}
          w={60}
          alt={product?.name || "product"}
          fit="contain"
        />
      </Card.Section>

      <Text fw={500} size="lg" mt="md">
        {product?.name?.length > 9
          ? product.name.slice(0, 9) + "..."
          : product?.name}
      </Text>

      <Text fw={900} className={styles.price}>
        $ {product?.price ?? 0}.00
      </Text>

      <PlusCircleIcon
        size={42}
        color="#24472b"
        style={{
          position: "absolute",
          bottom: 12,
          right: 8,
          cursor: "pointer",
        }}
        onClick={() => handleSaveProducts(product.code)}
      />
    </Card>
  );
}

export default CardPopular;
