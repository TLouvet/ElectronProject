import { useState } from "react";
import { useModalControl } from "../../editor/shared/hooks/useModalControl";

export function useTableControls() {
  const {
    open: deleteModalOpen,
    handleOpen: openDeleteModal,
    handleClose: closeDeleteModal,
  } = useModalControl();

  const {
    open: editModalOpen,
    handleOpen: openEditModal,
    handleClose: closeEditModal,
  } = useModalControl();

  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);

  function onEditModalOpen(id: number | null) {
    setSelectedItemId(id);
    openEditModal();
  }

  function onEditModalClose() {
    setSelectedItemId(null);
    closeEditModal();
  }

  function onDeleteModalOpen(id: number | null) {
    setSelectedItemId(id);
    openDeleteModal();
  }

  function onDeleteModalClose() {
    setSelectedItemId(null);
    closeDeleteModal();
  }

  return {
    deleteModalOpen,
    editModalOpen,
    selectedItemId,
    onEditModalOpen,
    onEditModalClose,
    onDeleteModalOpen,
    onDeleteModalClose,
  };
}
