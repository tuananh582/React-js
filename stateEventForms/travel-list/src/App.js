import { useState } from "react";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "Charger", quantity: 1, packed: true },
// ];


export default function App(){
  const [items,setItems]=useState([]);
  function handleAddItems(item){
    setItems((items)=>[...items,item])
}
function handleDeleteItem(id){
  console.log(id)
    setItems(items=>items.filter(item=>item.id!==id))
}
function handleToggleItem(id){
  setItems(items=>items.map(item=> item.id===id?{...item,packed:!item.packed}:item))
}
  return (
    <div className="app">
      <Logo/>
      <Form onAddItems={handleAddItems}/>
      <PackingList onToggleItem={handleToggleItem} item={items} onDeleteItems={handleDeleteItem}/>
      <Stats/>
    </div>
  )
}

function Logo(){
  return <h1>🤡 Far away</h1>
}

function Form({onAddItems}){
  const [description,setDescription]=useState("");
  const [quantity,setQuantity]=useState(1);
  function handleSubmit(e){
      e.preventDefault();
      if(!description) return;

    const newItem = {description,quantity,packed:false, id:Date.now()};
    console.log(newItem)

    onAddItems(newItem)
    setDescription('')
    setQuantity(1)
  }


  return <form className="add-form" onSubmit={handleSubmit}>
    <h3>What do u need for u 😍</h3>
    <select value={quantity} onChange={e=>setQuantity(Number(e.target.value))} >
      {Array.from({length:20},(_,i)=>i+1).map(num=>(
        <option value={num} key={num}>{num}</option>
      ))}
    </select>
    <input type="text" placeholder="Item..." value={description} 
    onChange={(e)=>setDescription(e.target.value) } />
    <button>Add</button>
   
  </form>
}

function PackingList({item, onDeleteItems,onToggleItem}){
  return(
  <div className="list"> 
  <ul className="list">
  {item.map(item=><Item item={item} onToggleItem={onToggleItem} onDeleteItems={onDeleteItems}  key={item.id}/>)}
  </ul>
  </div>
  )
}
function Item({item,onDeleteItems,onToggleItem}){
  return <li>
    <input type="checkbox" value={item.checked} onChange={()=>onToggleItem(item.id)} />
    <span style={item.packed ? {textDecoration:"line-through"}:{}}>
      {item.quantity} {item.description}
    </span>
    <button onClick={()=>onDeleteItems(item.id)} >❌&times;</button>
  </li>
}
function Stats(){
  return <footer>
    
    <em> You have X items on your list, and you already packed X (X%)</em>
  </footer>
}