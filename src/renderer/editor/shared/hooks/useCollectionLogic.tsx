import { DynamicTableItem } from "../../../component/Table";
import { useTableControls } from "../../../component/Table/useTableControls";
import { useCollection } from "./useCollection";

export function useCollectionLogic<T extends DynamicTableItem>(
  apiName: keyof Window
) {
  const { items, addOne, deleteOne, updateOne } = useCollection<T>(apiName);

  const {
    deleteModalOpen,
    editModalOpen,
    selectedItemId,
    onEditModalOpen,
    onEditModalClose,
    onDeleteModalOpen,
    onDeleteModalClose,
  } = useTableControls();

  function onEditConfirmation(item: Partial<T>) {
    const addOrEdit = items.find((w) => w.id === item.id) ? updateOne : addOne;
    addOrEdit(item as T);
    onEditModalClose();
  }

  function onDeleteConfirmation(id: number) {
    deleteOne(id);
    onDeleteModalClose();
  }

  return {
    deleteModalOpen,
    editModalOpen,
    selectedItemId,
    items,
    onDeleteModalClose,
    onDeleteConfirmation,
    onDeleteModalOpen,
    onEditModalOpen,
    onEditConfirmation,
    onEditModalClose,
  };
}
