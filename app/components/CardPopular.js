import { Card, Image, Text } from "@mantine/core";
import styles from "@/app/components/componetsStyles.module.css";
import { PlusCircleIcon } from "@phosphor-icons/react";

function CardPopular({ product, handleSaveProducts }) {
  if (!product?.code) return null;

  return (
    <Card shadow="sm" padding="xl" h={190} w={180} withBorder>
      <Card.Section>
        <Image
          src="https://www.proquimsadesaltillo.com.mx/assets/imagenes/_LIMPIADORES_MARCA_ENSUE%C3%91O.jpg"
          h={100}
          alt={product?.name || "product"}
          fit="contain"
        />
      </Card.Section>

      <Text fw={500} size="lg" mt="md">
        {product?.name?.length > 10
          ? product.name.slice(0, 10) + "..."
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
