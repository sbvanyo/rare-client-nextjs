// users.js
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { getSingleUser, updateSingleUser } from '../api/userData';
import UpdateUserModal from '../components/modals/updateUserModal';
import Sheep from '../components/Secret/Sheep';

function UserTable({ token }) {
  const [user, setUser] = useState(null);
  const [showUpdateModal, setShowUpdateModal] = useState(false);

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

  console.warn(user);

  const handleUpdate = async (updatedUser) => {
    try {
      await updateSingleUser(user.id, updatedUser);
      const updatedUserData = await getSingleUser(token);
      setUser(updatedUserData);

      setShowUpdateModal(false);
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  return (
    <div className="userTable">
      <h1>Your Profile</h1>
      <Button type="button" id="userUpdateBtn" onClick={() => setShowUpdateModal(true)}>
        Update User
      </Button>
      <Sheep />

      {user && (
        <>
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

          <UpdateUserModal
            user={user}
            onUpdate={handleUpdate}
            onCancel={() => setShowUpdateModal(false)}
            showUpdateModal={showUpdateModal}
          />
        </>
      )}
    </div>
  );
}

UserTable.propTypes = {
  token: PropTypes.string.isRequired,
};

export default UserTable;

// Below code is if we want to pull the entire user database and display it on the users page:
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
