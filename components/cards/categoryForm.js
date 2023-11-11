/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Form, FloatingLabel, Button } from 'react-bootstrap';
import { updateCategory } from '../../api/category';

const initialState = {
  label: '',
};

function CategoryForm({ categoryObj, onUpdate }) {
  const [formInput, setFormInput] = useState(initialState);

  useEffect(() => {
    if (categoryObj.id) setFormInput(categoryObj);
  }, [categoryObj]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateCategory(categoryObj.id, formInput)
      .then(() => {
        onUpdate(); // Calls the onUpdate function passed from CategoryCard
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <FloatingLabel controlId="floatingInput" label="Edit label" className="mb-3">
          <Form.Control
            type="text"
            placeholder="Edit label"
            name="label"
            value={formInput.label}
            onChange={handleChange}
          />
        </FloatingLabel>
        <Button variant="primary" type="submit">Submit</Button>
      </Form>
    </>
  );
}

CategoryForm.propTypes = {
  categoryObj: PropTypes.shape({
    id: PropTypes.number,
    label: PropTypes.string,
  }),
  onUpdate: PropTypes.func.isRequired,
};

CategoryForm.defaultProps = {
  categoryObj: initialState,
};

export default CategoryForm;
