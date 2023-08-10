import useList from "../hooks/useList";
import useInput from "../hooks/useInput";

const initialItems = ['apple', 'berry', 'carrot'];

const List = () => {
  const {items, addItem, removeItem} = useList(initialItems);
  const newItemInput = useInput('');

  const handleClick = () => {
    addItem(newItemInput.value);
    newItemInput.clear();
  };

  const mappedItems = items.map((item, index) => {
    return (
      <p key={index}>{item} <button onClick={() => removeItem(item)}>❌</button></p>
    );
  });

  return (
    <div>
      <h2>List of Items</h2>

      <div>
        <input
          value={newItemInput.value}
          onChange={newItemInput.onChange}
        />
        <button onClick={handleClick}>Add!</button>
      </div>

      { mappedItems }
    </div>
  );
};

export default List;
