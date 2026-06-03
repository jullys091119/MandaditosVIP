"use client";

import { useState } from "react";
import {
  Stepper,
  Button,
  Group,
  Text,
  NumberInput,
  Input,
} from "@mantine/core";

function StepperCar({ product, total, onSend }) {
  const [active, setActive] = useState(0);
  const [value, setValue] = useState(0);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState(false);

  const safeTotal = Number(total) || 0;

  const isValid = value >= safeTotal;
  const change = isValid ? value - safeTotal : 0;

  const suggestions = [
    safeTotal,
    Math.ceil(safeTotal / 50) * 50,
    Math.ceil(safeTotal / 100) * 100,
  ].filter((v, i, arr) => arr.indexOf(v) === i);

  function handleSend() {
    if (!name || !address) return;

    if (value < safeTotal) {
      setError(true);
      setActive(1);
      return;
    }

    onSend({
      value,
      change,
      name,
      address,
    });
  }

  return (
    <Stepper
      active={active}
      size="xs"
      allowNextStepsSelect={false}
      className="mt-7"
    >
      <Stepper.Step label="Carrito">
        <Text>Total: ${safeTotal}</Text>

        <Button mt={10} onClick={() => setActive(1)}>
          Continuar
        </Button>
      </Stepper.Step>

      <Stepper.Step label="Pago">
        {error && <Text c="red">El pago debe ser mayor o igual al total</Text>}

        <NumberInput
          label="¿Con cuánto paga?"
          value={value}
          onChange={(val) => {
            setValue(val || 0);
            setError(false);
          }}
        />

        <Group mt={10}>
          <Button variant="outline" onClick={() => setValue(safeTotal)}>
            Exacto
          </Button>

          {suggestions.map((n) => (
            <Button key={n} variant="light" onClick={() => setValue(n)}>
              ${n}
            </Button>
          ))}
        </Group>

        <Text mt={5}>Cambio: ${change}</Text>

        <Group mt={10}>
          <Button onClick={() => setActive(0)} variant="light">
            Atrás
          </Button>

          <Button disabled={!isValid} onClick={() => setActive(2)}>
            Continuar
          </Button>
        </Group>
      </Stepper.Step>

      <Stepper.Step label="Datos">
        <Input
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Input
          mt={10}
          placeholder="Dirección"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        <Group mt={10}>
          <Button variant="light" onClick={() => setActive(1)}>
            Atrás
          </Button>

          <Button onClick={handleSend}>Enviar pedido</Button>
        </Group>
      </Stepper.Step>

      <Stepper.Completed>
        <Text>Pedido enviado</Text>
      </Stepper.Completed>
    </Stepper>
  );
}

export default StepperCar;
