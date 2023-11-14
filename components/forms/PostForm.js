import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import {
  FloatingLabel,
  Form,
  Button,
} from 'react-bootstrap';
import Link from 'next/link';
import { getSingleUser } from '../../api/userData';
import { createPost, updatePost } from '../../api/post';
import getAllTags from '../../api/tags';

const initialState = {
  title: '',
  content: '',
  image_url: '',
  category_id: '',
  approved: '',
  tags: '',
};

function PostForm({ obj, token }) {
  const [user, setUser] = useState();
  const [formInput, setFormInput] = useState(initialState);
  const [tags, setTags] = useState([]);
  const router = useRouter();

  //   useEffect(() => {
  //     getAllTags().then(setTags);
  //     // getSingleUser(token === user.id).then(setUser);
  //   }, []);

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

    getAllTags().then(setTags);
  }, [token]);

  console.warn(user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.id) {
      updatePost(formInput).then(() => router.push(`/post/${obj.id}`));
    } else {
      const payload = { ...formInput, uid: user.uid };
      createPost(payload).then(({ name }) => {
        const patchPayload = { id: name };
        updatePost(patchPayload).then(() => {
          router.push('/post');
        });
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h1 className="text-white mt-5">{obj.id ? 'Update' : 'Create'} Post</h1>

      {/* post title */}
      <FloatingLabel controlId="floatingInputGrid" label="Post Title">
        <Form.Control
          type="text"
          placeholder="Enter Post Title"
          name="title"
          value={formInput.title}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* user image */}
      <Form.Group className="mb-3">
        <Form.Label>Image URL</Form.Label>
        <div className="d-flex align-items-center">
          <Form.Control
            type="url"
            onChange={handleChange}
            className="me-3"
          />
          {formInput.image_url && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={formInput.image_url}
            alt="No Img"
            style={{ height: '250px', width: '250px', borderRadius: '50%' }}
          />
          )}
        </div>
      </Form.Group>

      {/* post body */}
      <FloatingLabel controlId="FloatingTextarea" label="Post Content" className="mb-3 text-black">
        <textarea
          className="form-control"
          style={{ height: '400px' }}
          type="text"
          placeholder="Enter Post Body"
          name="content"
          value={formInput.content}
          onChange={handleChange}
        />
      </FloatingLabel>
      <br />

      <Form>
        <option>Select Tags</option>
        {
            tags.map((tag) => (
              <Form.Check
                inline
                aria-label="Tags"
                className="mb-3"
                type="checkbox"
                key={tag.id}
                value={tag.id}
                checked={formInput.tags}
                onChange={handleChange}
              >
                {tag.label}
              </Form.Check>
            ))
          }
      </Form>

      <Button variant="outline-dark" type="submit">{obj.id ? 'Update' : 'Create'} Post</Button>
      <Link passHref href={`../../post/${obj.id}`}>
        <Button variant="outline-dark">Cancel</Button>
      </Link>
    </Form>
  );
}

PostForm.propTypes = {
  obj: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
    image_url: PropTypes.string,
    category_id: PropTypes.string,
    approved: PropTypes.string,
    tags: PropTypes.string,
    id: PropTypes.string,
  }),
  token: PropTypes.string.isRequired,
};

PostForm.defaultProps = {
  obj: initialState,
};

export default PostForm;
