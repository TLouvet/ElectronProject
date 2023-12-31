import { useState } from "react";

export function useModalControl() {
  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return { open, handleOpen, handleClose };
}
