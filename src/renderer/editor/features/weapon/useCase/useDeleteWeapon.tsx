export function useDeleteWeapon() {
  function deleteWeapon(id: number) {
    return window.editorWeapons.delete(id);
  }

  return deleteWeapon;
}
