const apiURL = 'http://localhost:8088';

const getAllTags = () => new Promise((resolve, reject) => {
  fetch(`${apiURL}/tags`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export default getAllTags;
