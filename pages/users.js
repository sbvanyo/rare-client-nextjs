import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import getSingleUser from '../api/userData';

// import getUsers from '../api/userData';

// function UserTable() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = await getUsers();
//         setUsers(data);
//       } catch (error) {
//         console.error('Error fetching user data: ', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="userTable">
//       <h1>Users</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>First Name</th>
//             <th>Last Name</th>
//             <th>Email</th>
//             <th>Bio</th>
//             <th>Username</th>
//             <th>Created On</th>
//             <th>Active</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((user) => (
//             <tr key={user.id}>
//               <td>{user.id}</td>
//               <td>{user.first_name}</td>
//               <td>{user.last_name}</td>
//               <td>{user.email}</td>
//               <td>{user.bio}</td>
//               <td>{user.username}</td>
//               <td>{user.created_on}</td>
//               <td>{user.active}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default UserTable;

function UserTable({ token }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getSingleUser(token);
        setUser(userData);
      } catch (error) {
        console.error('Error fetching user data: ', error);
      }
    };

    if (token) {
      fetchUser();
    }
  }, [token]);

  // We are using `user` instead of `users` since dealing with a single user

  return (
    <div className="userTable">
      <h1>Your Profile</h1>
      {user ? (
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
          </tbody>
        </table>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

UserTable.propTypes = {
  token: PropTypes.string.isRequired,
};

export default UserTable;
