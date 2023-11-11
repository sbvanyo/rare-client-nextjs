const getPosts = () => new Promise((resolve, reject) => {
  fetch('http://localhost:8088/posts', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const getSinglePost = (id) => new Promise((resolve, reject) => {
  fetch(`http://localhost:8088/posts/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export { getPosts, getSinglePost };
