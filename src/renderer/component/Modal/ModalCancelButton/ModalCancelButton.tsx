type ModalCancelButtonProps = {
  onClick: () => void;
};

export function ModalCancelButton({ onClick }: ModalCancelButtonProps) {
  return <button onClick={onClick}>Annuler</button>;
}
