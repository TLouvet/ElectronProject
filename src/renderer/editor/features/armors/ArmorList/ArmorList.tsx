import { DeletionModal } from "../../../../component/DeletionModal";
import { ArmorModal } from "../ArmorModal";
import { ARMOR_LIST_COLUMNS } from "./armor-list.columns";
import { Table } from "../../../../component/Table";
import { useTableControls } from "../../../../component/Table/useTableControls";
import { IEditorArmor } from "../../../../../engine/editor/features/armor/model/editorArmor.interface";

type WeaponListProps = {
  armors: Readonly<IEditorArmor[]>;
};

export function ArmorList({ armors }: WeaponListProps) {
  const {
    deleteModalOpen,
    editModalOpen,
    selectedItemId,
    onEditModalOpen,
    onEditModalClose,
    onDeleteModalOpen,
    onDeleteModalClose,
  } = useTableControls();

  return (
    <>
      <Table
        columns={ARMOR_LIST_COLUMNS}
        rows={armors}
        withActions
        actionsCallbacks={{
          onDelete: onDeleteModalOpen,
          onEdit: onEditModalOpen,
        }}
      />

      <button onClick={() => onEditModalOpen(null)}>Add Armor</button>
      <ArmorModal
        open={editModalOpen}
        onClose={onEditModalClose}
        id={selectedItemId}
      />

      <DeletionModal
        open={deleteModalOpen}
        onCancel={onDeleteModalClose}
        onConfirm={onDeleteModalClose}
      />
    </>
  );
}
