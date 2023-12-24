import React from "react";
import { Input } from "../../../../component/Input";
import { useGetArmor } from "../useCases/useGetArmor";

type WeaponModalProps = {
  open: boolean;
  onClose: () => void;
  id: number | null;
};

interface ArmorForm extends HTMLFormElement {
  nom: HTMLInputElement;
  description: HTMLTextAreaElement;
  protection: HTMLInputElement;
  valeur: HTMLInputElement;
}

export function ArmorModal({ open, onClose, id }: WeaponModalProps) {
  const armor = useGetArmor(id);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.target as ArmorForm;
    if (id) {
      (window as any).editorWeapons.updateArmor({
        id,
        name: form.nom.value,
        description: form.description.value,
        protection: form.protection.valueAsNumber,
        value: form.valeur.valueAsNumber,
      });
    } else {
      (window as any).editorWeapons.addArmor({
        id: id ?? undefined,
        name: form.nom.value,
        description: form.description.value,
        protection: form.protection.valueAsNumber,
        value: form.valeur.valueAsNumber,
      });
    }
    onClose();
  }

  return (
    <dialog open={open}>
      <h2>{id ? "Modifier une armure" : "Ajouter une armure"}</h2>
      <form onSubmit={handleSubmit}>
        <Input
          label='Nom'
          id='nom'
          name='nom'
          defaultValue={armor ? armor.name : ""}
        />
        <Input
          label='Description'
          id='description'
          name='description'
          defaultValue={armor ? armor.description : ""}
        />
        <Input
          label='Protection'
          id='protection'
          name='protection'
          type='number'
          defaultValue={armor ? armor.protection : ""}
        />
        <Input
          label='Valeur'
          id='valeur'
          name='valeur'
          type='number'
          defaultValue={armor ? armor.value : ""}
        />
        <button type='submit'>{id ? "Modifier" : "Ajouter"}</button>
      </form>
      <button onClick={onClose}>Close</button>
    </dialog>
  );
}
