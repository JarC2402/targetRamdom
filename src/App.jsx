import { useState, useEffect } from 'react'
import './App2.css'
import users from './Data/users.json'
function App() {
  const [count, setCount] = useState(0)
  const colors = [ "#6D6875", "#B5838D", "#E5989B", "#7E9680", "#C73866", "#FFB4A2", "#79616F", "#EAB595", "#EAB524", "#C73823" ]
  const ramdomIndex = Math.floor(Math.random() * colors.length)
  const [index, setIndex] = useState(ramdomIndex)
  let getUsers = [users[ramdomIndex].name];
  const allNames = getUsers.map((names, indexx) => names.title + ' ' + names.first + ' ' + names.last);
  let getLocation = [users[ramdomIndex].location];
  const allLocation = getLocation.map((addres, indexx) =>addres.country+ ' ' + addres.city);
  useEffect( () => {
    document.body.style = `background-color: ${colors[ramdomIndex]}`
    }, [index])
    const changeIndex = () => {
    const newRandom = Math.floor(Math.random() * colors.length);
    setIndex(newRandom);
  };
  return (
    <div className="App App2" style={{color: colors[ramdomIndex]}}>
     <div className='user_card'>
      <h2>{allNames}</h2>
      <img src={users[ramdomIndex].picture.large}></img>
      <div className='info_card'>
      <p><i className='bx bx-envelope'></i>{users[ramdomIndex].email}</p>
      <p><i className='bx bx-phone' ></i>{users[ramdomIndex].phone}</p>
      <p><i className='bx bx-map' ></i>{allLocation}</p>
      </div>
     </div>
     <i className='bx bx-transfer' onClick={changeIndex}></i>
    </div>
  )
}
export default App