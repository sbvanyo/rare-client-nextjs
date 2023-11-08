import React, { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { Button } from 'react-bootstrap';
import { getCategories } from '../api/category';
import CategoryCard from '../components/cards/categoryCard';

function CategoryList() {
  // Set a state for categories
  const [categories, setCatgories] = useState([]);

  // create a function that makes the API call to get all the categories
  const getAllTheCategories = () => {
    getCategories().then(setCatgories);
  };

  // make the call to the API to get all the categories on component render
  useEffect(() => {
    getAllTheCategories();
  }, []);

  return (
    <div id="categoryContainer">
      <h1 className="title">categories</h1>
      <div id="categoryCardList">
        {/* map over categories here using CategoryCard component */}
        {categories.map((category) => (
          <CategoryCard key={category.id} categoryObj={category} onUpdate={getAllTheCategories} />
        ))}
      </div>
      {/* <Link passHref href="/category/new">
        <Button id="addNeighborhoodBtn">add a neighborhood</Button>
      </Link> */}
    </div>
  );
}

export default CategoryList;
