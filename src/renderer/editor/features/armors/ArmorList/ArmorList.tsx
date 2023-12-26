import { DeletionModal } from "../../../../component/DeletionModal";
import { ArmorModal } from "../ArmorModal";
import { ARMOR_LIST_COLUMNS } from "./armor-list.columns";
import { Table } from "../../../../component/Table";
import { useCollectionLogic } from "../../../shared/hooks/useCollectionLogic";
import { TEditorArmor } from "../../../../../engine/editor/features/armor/model/editorArmor.interface";
import { ARMOR_API_NAME } from "../../../apis";

export function ArmorList() {
  const {
    items: armors,
    deleteModalOpen,
    editModalOpen,
    selectedItemId: currentArmorId,
    onEditModalOpen,
    onEditModalClose,
    onEditConfirmation,
    onDeleteConfirmation,
    onDeleteModalOpen,
    onDeleteModalClose,
  } = useCollectionLogic<TEditorArmor>(ARMOR_API_NAME);

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
        onValidation={onEditConfirmation}
        onCancel={onEditModalClose}
        id={currentArmorId}
      />

      <DeletionModal
        open={deleteModalOpen}
        onCancel={onDeleteModalClose}
        onConfirm={() => onDeleteConfirmation(currentArmorId as number)}
      />
    </>
  );
}
