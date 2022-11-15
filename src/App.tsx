import { useState } from "react";
import * as C from "./App.styles";
import { AddArea } from "./components/AddArea";
import { ListItem } from "./components/ListItem";
import { Item } from "./types/Item";

export const App = () => {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: "Comprar o pão na padaria", done: false },
    { id: 2, name: "Comprar um bolo na padaria", done: true },
  ]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false,
    });
    setList(newList);
  };

  const onChecked = (id: number) => {
    let newList = [...list];
    newList.filter((item) => {
      if (item.id == id) {
        item.done = !item.done;
      }
    });
    setList(newList);
  };

  const deleteItem = (id: number) => {
    const question = confirm(`Deseja realmente remover está tarefa ${id}: `);

    if(question) {
      setList(list.filter(item => item.id !== id));
    }
  };

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>
        <AddArea onEnter={handleAddTask} />
        {list.map((item, index) => (
          <ListItem
            deleteItem={deleteItem}
            onChecked={onChecked}
            key={index}
            item={item}
          />
        ))}
      </C.Area>
    </C.Container>
  );
};
