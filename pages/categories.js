import React, { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { Button } from 'react-bootstrap';
import { getCategories } from '../api/category';
import CategoryCard from '../components/cards/categoryCard';
import Sheep from '../components/Secret/Sheep';

function CategoryList() {
  // Set a state for categories
  const [categories, setCatgories] = useState([]);

  // create a function that makes the API call to get all the categories
  const getAllTheCategories = () => {
    getCategories().then((data) => setCatgories(data));
  };

  // make the call to the API to get all the categories on component render
  useEffect(() => {
    getAllTheCategories();
  }, []);

  /*  localeCompare is a string comparison function that compares two strings and returns a value indicating their relative order. In this case, it sorts the categories based on their label property in alphabetical order. */
  const sortedCategories = categories.slice().sort((a, b) => a.label.localeCompare(b.label));

  return (
    <>
      <Sheep />
      <div id="categoryContainer">
        <h1 className="title">categories</h1>
        <div id="categoryCardList">
          {/* map over sorted categories here using CategoryCard component */}
          {sortedCategories.map((category) => (
            <CategoryCard key={category.id} categoryObj={category} onUpdate={getAllTheCategories} />
          ))}
        </div>
        {/* <Link passHref href="/category/new">
          <Button id="addCategoryBtn">add a category</Button>
        </Link> */}
      </div>
    </>
  );
}

export default CategoryList;
