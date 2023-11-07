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

export default getPosts;
