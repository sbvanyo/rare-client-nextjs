/* eslint-disable @next/next/no-img-element */
import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { deleteCategory } from '../../api/category';

function CategoryCard({ categoryObj, onUpdate }) {
  const deleteThisCategory = () => {
    if (window.confirm(`Delete ${categoryObj.label}?`)) {
      deleteCategory(categoryObj.id).then(() => onUpdate());
    }
  };

  return (
    <Card className="categoryCard">
      <Card.Body>
        <div id="categoryBody">
          <Card.Title className="cardTitle">{categoryObj.label}</Card.Title>
          <div id="categoryBtnGroup">
            {/* DYNAMIC LINK TO EDIT THE category DETAILS  */}
            <Link href={`/category/edit/${categoryObj.id}`} passHref>
              <Button variant="info">EDIT</Button>
            </Link>
            <Button variant="danger" onClick={deleteThisCategory} className="m-2">
              DELETE
            </Button>
          </div>
        </div>
      </Card.Body>
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
