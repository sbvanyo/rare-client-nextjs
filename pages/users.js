import React, { useEffect, useState } from 'react';
import getUsers from '../api/userData';

function UserTable() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUsers();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching user data: ', error);
      }
    };

    fetchData();
  }, []);
  console.warn(users);

  return (
    <div className="userTable">
      <h1>Users</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Bio</th>
            <th>Username</th>
            <th>Created On</th>
            <th>Active</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
              <td>{user.bio}</td>
              <td>{user.username}</td>
              <td>{user.created_on}</td>
              <td>{user.active}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;
