import { InputHTMLAttributes, useId } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export function Input({ label, ...props }: InputProps) {
  const id = useId();

  return (
    <div>
      <label htmlFor={id} style={{ display: "block" }}>
        {label}
      </label>
      <input type='text' id={id} {...props} />
    </div>
  );
}
