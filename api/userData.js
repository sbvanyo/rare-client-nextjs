// import { clientCredentials } from '../utils/client';

const getUsers = async () => {
  const response = await fetch('http://localhost:8088/users', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const users = await response.json();
  return users;
};

export default getUsers;
