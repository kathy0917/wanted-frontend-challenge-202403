import React, { useState } from 'react';
import AddList from '../AddList/AddList';

export default function List() {
  const [lists, setLists] = useState([]);

  const handleAdd = (addList) => {
    setLists([...lists, addList]);
  };

  const handleDelete = (deleteListId) => {
    setLists(lists.filter((list) => list.id !== deleteListId));
  };

  return (
    <div>
      <AddList onAdd={handleAdd} />
      <ul>
        {lists.map((list) => (
          <li key={list.id}>
            {list.text}
            <button onClick={() => handleDelete(list.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
