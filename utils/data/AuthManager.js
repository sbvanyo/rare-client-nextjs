export const loginUser = (user) => fetch('http://localhost:8088/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  body: JSON.stringify({
    username: user.username,
    password: user.password,
  }),
}).then((res) => res.json());

export const registerUser = (newUser) => fetch('http://localhost:8088/register', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  body: JSON.stringify(newUser),
}).then((res) => res.json());
