import React from "react";
import { Input } from "../../../../component/Input";
import { TEditorWeapon } from "../../../../../engine/editor/features/weapon/model/editorWeapon.interface";
import { ModalCancelButton } from "../../../../component/Modal/ModalCancelButton";
import { ModalProps } from "../../../shared/types/ModalProps.type";
import { useFindOne } from "../../../shared/hooks/useFindOne";

interface WeaponForm extends HTMLFormElement {
  nom: HTMLInputElement;
  description: HTMLTextAreaElement;
  dmg: HTMLInputElement;
  valeur: HTMLInputElement;
}

export function WeaponModal({
  open,
  onValidation,
  onCancel,
  id,
}: ModalProps<TEditorWeapon>) {
  const weapon = useFindOne<TEditorWeapon>("editorWeapons", id);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.target as WeaponForm;
    const obj = {
      id: id ?? undefined,
      name: form.nom.value,
      description: form.description.value,
      damage: form.dmg.valueAsNumber,
      value: form.valeur.valueAsNumber,
    };

    onValidation(obj);
  }

  return (
    <dialog open={open} key={`weap-mod-${weapon?.name ?? "undef"}`}>
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
          id='dmg'
          name='dmg'
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
      <ModalCancelButton onClick={onCancel} />
    </dialog>
  );
}
