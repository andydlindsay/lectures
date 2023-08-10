import { useState } from 'react';

const useList = (initialItems) => {
  const [items, setItems] = useState(initialItems);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  const removeItem = (itemToRemove) => {
    const updatedItems = items.filter((item) => item !== itemToRemove);
    setItems(updatedItems);
  };

  return { items, addItem, removeItem };
}

export default useList;
