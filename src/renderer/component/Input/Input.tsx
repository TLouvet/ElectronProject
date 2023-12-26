import { InputHTMLAttributes, useId } from "react";
import style from "./Input.module.scss";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export function Input({ label, ...props }: InputProps) {
  const id = useId();

  return (
    <div className={style.container}>
      <label htmlFor={id} style={{ display: "block" }}>
        {label}
      </label>
      <input type='text' id={id} className={style.input} {...props} />
    </div>
  );
}
