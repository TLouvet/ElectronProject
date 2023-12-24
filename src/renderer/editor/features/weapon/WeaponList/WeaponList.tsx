import { DeletionModal } from "../../../../component/DeletionModal";
import { WeaponModal } from "../WeaponModal";
import { WEAPON_LIST_COLUMNS } from "./weapon-list.columns";
import { Table } from "../../../../component/Table";
import { useWeaponListLogic } from "./useWeaponListLogic";

export function WeaponList() {
  const {
    editModalOpen,
    deleteModalOpen,
    weapons,
    selectedItemId: currentWeaponId,
    onDeleteModalClose,
    onDeleteConfirmation,
    onDeleteModalOpen,
    onEditModalOpen,
    onEditModalClose,
    onItemCreation,
  } = useWeaponListLogic();

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
        onValidation={onItemCreation}
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
