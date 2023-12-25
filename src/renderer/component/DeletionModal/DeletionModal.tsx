import { ModalCancelButton } from "../Modal/ModalCancelButton";

type DeletionModalProps = {
  open: boolean;
  onCancel: () => void;
  onConfirm: () => void;
};

export function DeletionModal({
  open,
  onCancel,
  onConfirm,
}: DeletionModalProps) {
  return (
    <dialog open={open}>
      <h1>Suppression</h1>
      <p>Êtes-vous sûr de vouloir supprimer cet élément ?</p>
      <button onClick={onConfirm}>Supprimer</button>
      <ModalCancelButton onClick={onCancel} />
    </dialog>
  );
}
