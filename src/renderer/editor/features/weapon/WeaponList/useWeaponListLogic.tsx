import { IEditorWeapon } from "../../../../../engine/editor/features/weapon/model/editorWeapon.interface";
import { useTableControls } from "../../../../component/Table/useTableControls";
import { useDeleteWeapon } from "../useCase/useDeleteWeapon";
import { useGetWeapons } from "../useCase/useGetWeapons";

export function useWeaponListLogic() {
  const { weapons, addWeaponToList, removeWeaponFromList } = useGetWeapons();
  const deleteWeapon = useDeleteWeapon();

  const {
    deleteModalOpen,
    editModalOpen,
    selectedItemId,
    onEditModalOpen,
    onEditModalClose,
    onDeleteModalOpen,
    onDeleteModalClose,
  } = useTableControls();

  function onItemCreation(weapon: IEditorWeapon) {
    addWeaponToList(weapon);
    onEditModalClose();
  }

  function onDeleteConfirmation(id: number) {
    deleteWeapon(id);
    removeWeaponFromList(id);
    onDeleteModalClose();
  }

  return {
    deleteModalOpen,
    editModalOpen,
    selectedItemId,
    weapons,
    addWeaponToList,
    onDeleteModalClose,
    onDeleteConfirmation,
    onDeleteModalOpen,
    onEditModalOpen,
    onItemCreation,
    onEditModalClose,
  };
}
