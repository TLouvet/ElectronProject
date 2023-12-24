import { getArmors } from "./getArmors";

export function getArmor(id: number | null) {
  if (!id) {
    return null;
  }

  const armors = getArmors();
  return armors.find((a) => a.id === id);
}
