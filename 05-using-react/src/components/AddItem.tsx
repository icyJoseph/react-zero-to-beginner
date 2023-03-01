import { ReactNode, useId } from "react";

export const AddItem = ({ addItem }: { addItem: (item: string) => void }) => {
  const id = useId();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <label htmlFor={id}>Add item</label>

      <input id={id} type="text" />

      <button type="submit">Add</button>
    </form>
  );
};
