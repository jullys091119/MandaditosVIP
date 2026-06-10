"use client";
import styles from "../components/componetsStyles.module.css";
import { Flex, Box, Image, Avatar, Text, Title } from "@mantine/core";
import headerImg from "@/app/img/headerimg.jpeg";
import BadgeCar from "./BudgeCar";
import logo2 from "@/app/img/logo2.png";
import BackIcon from "./BackIcon";

function HeaderHome({ product }) {
  
  return (
    <header className={styles.header}>
      <Flex
        align="center"
        gap={10}
        justify="space-between"
        className="px-3 py-4"
      >
      <BackIcon />
        <BadgeCar product={product} />
      </Flex>
      <Flex justify="flex-end" align="center" gap={30}>
        <Title style={{ color: "White", marginBottom: 60 }}>Mandadi-Top</Title>
        <Image src={logo2.src} alt="pic tienda" className={styles.iconStore} />
      </Flex>
    </header>
  );
}

export default HeaderHome;
