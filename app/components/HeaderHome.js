"use client";
import { useContext, useEffect, useState } from "react";
import AppContext from "../context/carContext";
import styles from "../components/componetsStyles.module.css";
import { Flex, Box, Image, Avatar, Text, Title } from "@mantine/core";
import headerImg from "@/app/img/headerimg.jpeg";
import BadgeCar from "@/app/components/BudgeCar";
import logo2 from "@/app/img/logo2.png";

function HeaderHome({ product }) {
  
  return (
    <header className={styles.header}>
      <Flex
        align="center"
        gap={10}
        justify="space-between"
        className="px-3 py-4"
      >
        <Flex align="center" gap={10}>
          <Avatar size="md">
            {<Image src={headerImg.src} width={10} height={10} />}
          </Avatar>
          <Flex direction="column">
            <Text className={styles.welcome} fw={900}>
              Buenos días.
            </Text>
            <Text className={styles.welcome} fw={400}>
              ¿Qué quieres comprar hoy ?.
            </Text>
          </Flex>
        </Flex>
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
