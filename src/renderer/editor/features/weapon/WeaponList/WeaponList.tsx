import { DeletionModal } from "../../../../component/DeletionModal";
import { WeaponModal } from "../WeaponModal";
import { WEAPON_LIST_COLUMNS } from "./weapon-list.columns";
import { Table } from "../../../../component/Table";
import { useCollectionLogic } from "../../../shared/hooks/useCollectionLogic";
import { TEditorWeapon } from "../../../../../engine/editor/features/weapon/model/editorWeapon.interface";

export function WeaponList() {
  const {
    editModalOpen,
    deleteModalOpen,
    items: weapons,
    selectedItemId: currentWeaponId,
    onDeleteModalClose,
    onDeleteConfirmation,
    onDeleteModalOpen,
    onEditModalOpen,
    onEditModalClose,
    onEditConfirmation,
  } = useCollectionLogic<TEditorWeapon>("editorWeapons");

  return (
    <>
      <Table
        columns={WEAPON_LIST_COLUMNS}
        rows={weapons}
        withActions
        actionsCallbacks={{
          onDelete: onDeleteModalOpen,
          onEdit: onEditModalOpen,
        }}
      />

      <button onClick={() => onEditModalOpen(null)}>Add Weapon</button>
      <WeaponModal
        open={editModalOpen}
        onValidation={onEditConfirmation}
        onCancel={onEditModalClose}
        id={currentWeaponId}
      />

      <DeletionModal
        open={deleteModalOpen}
        onCancel={onDeleteModalClose}
        onConfirm={() => onDeleteConfirmation(currentWeaponId as number)}
      />
    </>
  );
}
