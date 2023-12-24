import { ArmorsScreen } from "./editor/features/armors/Armors";
import { WeaponsScreen } from "./editor/features/weapon";

export function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <WeaponsScreen />
        <ArmorsScreen />
      </header>
    </div>
  );
}
