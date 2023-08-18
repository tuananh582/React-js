import { useState } from "react";
import Item from "./Item";

export default function PackingList({ item, onDeleteItems, onToggleItem, onClearList }) {
  const [sortBy, setSort] = useState('packed');
  let sortedItem;
  if (sortBy === 'input') sortedItem = item;
  if (sortBy === 'description') sortedItem = item.slice().sort((a, b) => a.description.localeCompare(b.description.localeCompare()));
  if (sortBy === 'packed') sortedItem = item.slice().sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul className="list">
        {sortedItem.map(item => <Item item={item} onToggleItem={onToggleItem} onDeleteItems={onDeleteItems} key={item.id} />)}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={e => setSort(e.target.value)}>

          <option value="input" key="">Sort by input order</option>
          <option value="description" key="">Sort by description</option>
          <option value="packed" key="">Sort by packed status</option>
        </select>
        <button onClick={onClearList}>Clear List</button>
      </div>


    </div>



  );
}
