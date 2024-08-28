import React from 'react';

const Widget = ({ name, text, onRemove }) => {
  return (
    <div className="p-4 bg-white shadow rounded relative">
      <button onClick={onRemove} className="absolute top-2 right-2 text-red-500">X</button>
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <p>{text}</p>
    </div>
  );
};

export default Widget;