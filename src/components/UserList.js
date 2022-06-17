import React from 'react';

function UserList(props) {
  const randomNumber  = Math.floor(Math.random() * 6) + 1;
  

  return (
    <ul>
      {props.users.map((user) => (
        <li>
            {user.enteredNumber == randomNumber ? <text>you are winner!</text>: <text>you are looser!</text>}
        </li>
      ))}
    </ul>
  )
}

export default UserList