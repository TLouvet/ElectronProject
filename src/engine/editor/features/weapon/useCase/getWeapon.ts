import { getWeapons } from "./getWeapons";

export function getWeapon(id: number | null) {
  if (!id) {
    return null;
  }

  const weapons = getWeapons();
  return weapons.find((weapon) => weapon.id === id);
}
