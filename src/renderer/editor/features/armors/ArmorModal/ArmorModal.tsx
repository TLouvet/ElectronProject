import React from "react";
import { Input } from "../../../../component/Input";
import { ModalProps } from "../../../shared/types/ModalProps.type";
import { TEditorArmor } from "../../../../../engine/editor/features/armor/model/editorArmor.interface";
import { ModalCancelButton } from "../../../../component/Modal/ModalCancelButton";
import { useFindOne } from "../../../shared/hooks/useFindOne";
import { ARMOR_API_NAME } from "../../../apis";
import { ModalOverlay } from "../../../../component/Modal/ModalOverlay/ModalOverlay";

interface ArmorForm extends HTMLFormElement {
  nom: HTMLInputElement;
  description: HTMLTextAreaElement;
  protection: HTMLInputElement;
  valeur: HTMLInputElement;
}

export function ArmorModal({
  open,
  onCancel,
  onValidation,
  id,
}: ModalProps<TEditorArmor>) {
  const armor = useFindOne<TEditorArmor>(ARMOR_API_NAME, id);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.target as ArmorForm;
    const obj = {
      id: id ?? undefined,
      name: form.nom.value,
      description: form.description.value,
      protection: form.protection.valueAsNumber,
      value: form.valeur.valueAsNumber,
    };

    onValidation(obj);
  }

  return (
    <ModalOverlay
      open={open}
      title={id ? "Modifier une armure" : "Ajouter une armure"}
      key={`armor-mod-${armor?.name ?? "undef"}`}
    >
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
          min={0}
          defaultValue={armor ? armor.protection : 0}
        />
        <Input
          label='Valeur'
          id='valeur'
          name='valeur'
          type='number'
          min={0}
          defaultValue={armor ? armor.value : 0}
        />
        <button type='submit'>{id ? "Modifier" : "Ajouter"}</button>
      </form>
      <ModalCancelButton onClick={onCancel} />
    </ModalOverlay>
  );
}
