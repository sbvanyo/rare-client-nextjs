/* eslint-disable object-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
const getPostComments = (postID) =>
  new Promise((resolve, reject) => {
    fetch(`http://localhost:8088/comment/${postID}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(Object.values(data)))
      .catch(reject);
  });

// For Testing Get All Comments
const getAllComments = () =>
  new Promise((resolve, reject) => {
    fetch('http://localhost:8088/comment/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(Object.values(data)))
      .catch(reject);
  });

const deleteComment = (id) =>
  new Promise((resolve, reject) => {
    fetch(`http://localhost:8088/comment/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(Object.values(data)))
      .catch(reject);
  });

const createComment = (payload) =>
  new Promise((resolve, reject) => {
    fetch('http://localhost:8088/comment', {
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

export { getPostComments, deleteComment, getAllComments, createComment };
