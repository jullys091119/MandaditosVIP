import { Alert } from "@mantine/core";
import { InfoIcon } from "@phosphor-icons/react";
function AlertError({ onClose }) {
  return (
    <Alert
      variant="light"
      color="red"
      title="Error"
      icon={<InfoIcon />}
      withCloseButton
      onClose={onClose}
    >
      El pago debe ser mayor al total.
    </Alert>
  );
}

export default AlertError;
