import { PropsWithChildren } from "react";
import style from "./ModalOverlay.module.scss";

type ModalOverlayProps = {
  open: boolean;
  title: string;
};

export function ModalOverlay({
  open,
  children,
  title,
}: PropsWithChildren<ModalOverlayProps>) {
  if (!open) {
    return null;
  }

  return (
    <div className={style.overlay}>
      <dialog open={open} className={style.modal}>
        <h2>{title}</h2>
        {children}
      </dialog>
    </div>
  );
}
