import React from "react";

function Users(props) {
  return (
    <ul className="list-group">
      {props.users.map((user) => (
        <li key={user.id} className="list-group-item list-group-item-action
        d-flex justify-content-between align-items-center">
          <div>
            <h5>{user.first_name} </h5>
            <p>{user.email} </p>
          </div>
          <img src={user.avatar} alt={user.first_name+user.last_name} style={{borderRadius:'50%'}} />
        </li>
      ))}
    </ul>
  );
}

export default Users;