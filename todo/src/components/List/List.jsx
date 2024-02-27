import React, { useState } from 'react';
import AddList from '../AddList/AddList';

export default function List() {
  const [lists, setlists] = useState([]);
  const handleAdd = (addList) => {
    setlists([...lists, addList]);
  };

  return (
    <div>
      <AddList onAdd={handleAdd} />
      <ul>
        {lists.map((list) => (
          <li key={list.id}>{list.text}</li>
        ))}
      </ul>
    </div>
  );
}
