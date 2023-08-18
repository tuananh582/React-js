 export default function Item({ item, onDeleteItems, onToggleItem }) {
  return <li>
    <input type="checkbox" value={item.checked} onChange={() => onToggleItem(item.id)} />
    <span style={item.packed ? { textDecoration: "line-through" } : {}}>
      {item.quantity} {item.description}
    </span>
    <button onClick={() => onDeleteItems(item.id)}>❌&times;</button>
  </li>;
}
