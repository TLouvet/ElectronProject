export type ModalProps<T> = {
  open: boolean;
  onValidation: (obj: Partial<T>) => void;
  onCancel: () => void;
  id: number | null;
};
