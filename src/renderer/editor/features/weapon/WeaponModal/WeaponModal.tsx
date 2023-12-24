import React from "react";
import { Input } from "../../../../component/Input";
import { useGetWeapon } from "../useCase/useGetWeapon";
import { useAddWeapon } from "../useCase/useAddWeapon";
import { useUpdateWeapon } from "../useCase/useUpdateWeapon";
import { ICreateWeapon } from "../../../../../engine/editor/features/weapon/model/createWeapon";
import { IEditorWeapon } from "../../../../../engine/editor/features/weapon/model/editorWeapon.interface";

type WeaponModalProps = {
  open: boolean;
  onValidation: (obj: IEditorWeapon) => void;
  onCancel: () => void;
  id: number | null;
};

interface WeaponForm extends HTMLFormElement {
  nom: HTMLInputElement;
  description: HTMLTextAreaElement;
  degats: HTMLInputElement;
  valeur: HTMLInputElement;
}

export function WeaponModal({
  open,
  onValidation,
  onCancel,
  id,
}: WeaponModalProps) {
  const weapon = useGetWeapon(id);
  const { addWeapon } = useAddWeapon();
  const { updateWeapon } = useUpdateWeapon();
  const method = !!id ? updateWeapon : addWeapon;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.target as WeaponForm;
    const obj = {
      id: id ?? undefined,
      name: form.nom.value,
      description: form.description.value,
      damage: form.degats.valueAsNumber,
      value: form.valeur.valueAsNumber,
    };
    const weapon = await method(obj);

    onValidation(weapon);
  }

  return (
    <dialog open={open}>
      <h2>{id ? "Modifier une arme" : "Ajouter une arme"}</h2>
      <form onSubmit={handleSubmit}>
        <Input
          label='Nom'
          id='nom'
          name='nom'
          defaultValue={weapon ? weapon.name : ""}
        />
        <Input
          label='Description'
          id='description'
          name='description'
          defaultValue={weapon ? weapon.description : ""}
        />
        <Input
          label='Degats'
          id='degats'
          name='degats'
          type='number'
          defaultValue={weapon ? weapon.damage : ""}
        />
        <Input
          label='Valeur'
          id='valeur'
          name='valeur'
          type='number'
          defaultValue={weapon ? weapon.value : ""}
        />
        <button type='submit'>{id ? "Modifier" : "Ajouter"}</button>
      </form>
      <button onClick={onCancel}>Close</button>
    </dialog>
  );
}
