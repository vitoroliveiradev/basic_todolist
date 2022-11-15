import { useState } from "react";
import { Item } from "../../types/Item";
import * as C from "./styles";

type Props = {
  item: Item;
  onChecked: (id: number) => void;
  deleteItem: (id: number) => void;
};

export const ListItem = ({ item, onChecked, deleteItem }: Props) => {
  const [isChecked, setIsChecked] = useState(item.done);

  const handleChecked = (id: number) => {
    onChecked(id);
  }

  const handleDelete = (id: number) => {
    deleteItem(id);
  }

  return (
    <C.Container done={isChecked}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)} 
        onClick={() => handleChecked(item.id)}
      />
      <label>{item.name}</label>
      <button onClick={() => handleDelete(item.id)}>X</button>
    </C.Container>
  );
};
