import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

function PostCard({ postObj }) {
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={postObj.image_url} alt={postObj.title} style={{ height: '300px' }} />
      <br />
      <Card.Body>
        <h2>{postObj.title}</h2>
        <br />
        <p className="card-text text-truncate">{postObj.content}</p>
        <p className="card-text"><small className="text-body-secondary ">Published: {postObj.publication_date}</small></p>
      </Card.Body>
    </Card>
  );
}

PostCard.propTypes = {
  postObj: PropTypes.shape({
    title: PropTypes.string,
    image_url: PropTypes.string,
    content: PropTypes.string,
    publication_date: PropTypes.string,
  }),
};

PostCard.defaultProps = {
  postObj: {
    title: 'Title',
  },
};

export default PostCard;
