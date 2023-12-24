export type TableActionsProps = {
  onEdit?: () => void;
  onDelete?: () => void;
  active?: boolean;
};

export function TableActions({ onEdit, onDelete, active }: TableActionsProps) {
  if (!active) {
    return null;
  }

  return (
    <>
      {onEdit && <td onClick={onEdit}>Modifier</td>}
      {onDelete && <td onClick={onDelete}>Supprimer</td>}
    </>
  );
}
