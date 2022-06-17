import React, {useState} from 'react'

import AddResults from './components/AddResults'
import UserList from './components/UserList'

function App() {
  const [userList, setUserList] = useState([])

  function addUserHandler(uNumber) {
    setUserList((prevUserList) => {
      return [...prevUserList, {enteredNumber: uNumber}]
    })
  } 

  return (
    <div>
      <AddResults onAddResults={addUserHandler}/>
      <UserList users={userList}/>
    </div>
  );
}

export default App;
