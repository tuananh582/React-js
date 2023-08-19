import './index.css'
import { useState } from 'react';
const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];
function Button({children,onClick}){
  return <button className='button' onClick={onClick} >{children}</button>
 } 
function App() {
  const [showAddFriend,setShowAddFriend]=useState(false)
  function handleShowAddFriend(){
    setShowAddFriend(show=>!show)
  }

  return (

    <div className='app'>
   <div className='sidebar'>
     <FriendsSList/>
     {showAddFriend&&<FormAddFriend/>}
     <Button onClick={handleShowAddFriend}> {showAddFriend ? 'Close' :'Add Friend'} </Button>
   </div>
   <FormSplitBill/>
   </div>
  )
}



 function FriendsSList(){
  const friends = initialFriends;

  return <ul>
    {friends.map(friend=><Friend friend={friend} key={friend.id}/>)}
  </ul>
 }

 function Friend({friend,children}){
    return<li>
          <img src={friend.image}  alt={friend.name} />
          <h3>{friend.name}</h3>
          {friend.balance<0&&<p  className='red'>You owe {friend.name} {Math.abs (friend.balance)}</p>}
          {friend.balance>0&&<p  className='green'> {friend.name} owe you {Math.abs (friend.balance)}</p>}
          {friend.balance===0&&<p  className=''>You and {friend.name} are even </p>}

          <Button>Select</Button>
        </li>

    
 }
 

function FormAddFriend(){
  return <form className='form-add-friend'>
    <label>👭 Friend name</label>
    <input type="text" />
  <label>🎆 Image URL</label>
    <input type="text" />
    <Button>Add</Button>


  </form>

}
function FormSplitBill(){
  return <form className='form-split-bill'>
    <h2>Split a bill with</h2>
    <label> 💰 Bill value</label>
    <input type="text" />
    <label> 🙅 Your expense</label>
    <input type="text" />
    <label> 👭 X's expense</label>
    <input type="text" disabled  />
    <label>😛 Who's playing the bill</label>
    <select>
      <option value="user" key="">You</option>
      <option value="friend" key="">X</option>
    </select>

    <Button>Split Bill</Button>
  </form>
}


export default App;
