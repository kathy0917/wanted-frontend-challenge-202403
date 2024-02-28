import React, { useState } from 'react';

export default function AddList({ onAdd }) {
  const [text, setText] = useState('');
  const handleChange = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ id: Date.now(), text });
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="할일을 입력하세요." value={text} onChange={handleChange}></input>
      <button>Add</button>
    </form>
  );
}
