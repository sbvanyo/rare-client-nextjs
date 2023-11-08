const getCategories = () => new Promise((resolve, reject) => {
  fetch('http://localhost:8088/categories', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const getSingleCategory = (id) => new Promise((resolve, reject) => {
  fetch(`http://localhost:8088/categories/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const deleteCategory = (id) => new Promise((resolve, reject) => {
  fetch(`http://localhost:8088/categories/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve((data)))
    .catch(reject);
});

const createCategory = (payload) => new Promise((resolve, reject) => {
  fetch('http://localhost:8088/categories', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// const updateCategory = (payload) => new Promise((resolve, reject) => {
//   fetch(`http://localhost:8088/categories/${payload.id}`, {
//     method: 'PATCH',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(payload),
//   })
//     .then((response) => response.json())
//     .then((data) => resolve(data))
//     .catch(reject);
// });

export {
  getCategories,
  getSingleCategory,
  createCategory,
  deleteCategory,
  // updateCategory,
};