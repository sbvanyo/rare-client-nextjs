/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Modal } from 'react-bootstrap';
// import Link from 'next/link';
import { deleteCategory } from '../../api/category';
import CategoryForm from './categoryForm';

function CategoryCard({ categoryObj, onUpdate }) {
  // State to control modal visibility
  const [showModal, setShowModal] = useState(false);

  const deleteThisCategory = () => {
    if (window.confirm(`Delete ${categoryObj.label}?`)) {
      deleteCategory(categoryObj.id).then(() => onUpdate());
    }
  };

  const updateThisCategory = () => {
    setShowModal(true); // Open modal
  };

  return (
    <Card className="categoryCard">
      <Card.Body>
        <div id="categoryBody">
          <Card.Title className="cardTitle">{categoryObj.label}</Card.Title>
          <div id="categoryBtnGroup">
            {/* DYNAMIC LINK TO EDIT THE category DETAILS  */}
            {/* <Link href={`/category/edit/${categoryObj.id}`} passHref>
              <Button variant="info">EDIT</Button>
            </Link> */}
            <Button variant="info" onClick={updateThisCategory} className="m-2">
              EDIT
            </Button>
            <Button variant="danger" onClick={deleteThisCategory} className="m-2">
              DELETE
            </Button>
          </div>
        </div>
      </Card.Body>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CategoryForm
            categoryObj={categoryObj}
            onUpdate={() => {
              onUpdate();
              setShowModal(false); // Close the modal after updating
            }}
          />
        </Modal.Body>
      </Modal>
    </Card>
  );
}

CategoryCard.propTypes = {
  categoryObj: PropTypes.shape({
    id: PropTypes.number,
    label: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default CategoryCard;
