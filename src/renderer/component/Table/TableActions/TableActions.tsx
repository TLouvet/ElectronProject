import style from "../Table.module.scss";

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
      {onEdit && (
        <td className={style.tcell} onClick={onEdit}>
          Modifier
        </td>
      )}
      {onDelete && (
        <td className={style.tcell} onClick={onDelete}>
          Supprimer
        </td>
      )}
    </>
  );
}
