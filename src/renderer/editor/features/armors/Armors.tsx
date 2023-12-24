import { useGetArmors } from "./useCases/useGetArmors";
import { ArmorList } from "./ArmorList";

export function ArmorsScreen() {
  const { armors } = useGetArmors();

  return (
    <>
      <h1>Armors</h1>
      <ArmorList armors={armors} />
    </>
  );
}
