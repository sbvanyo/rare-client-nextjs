// import { clientCredentials } from '../utils/client';

// This API call returns data for ALL users in the USERS table:
// const getUsers = async () => {
//   const response = await fetch('http://localhost:8088/users', {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });
//   const users = await response.json();
//   return users;
// };

// export default getUsers;

// const getCurrentUser = async (token) => {
//   const response = await fetch
// }

const apiUrl = 'http://localhost:8088'; // Update with your actual API endpoint

const getSingleUser = async (token) => {
  try {
    const response = await fetch(`${apiUrl}/users/${token}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching user data: ', error);
    return null;
  }
};

export default getSingleUser;
