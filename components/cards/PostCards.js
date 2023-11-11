import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Card } from 'react-bootstrap';

function PostCard({ postObj }) {
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={postObj.image_url} alt={postObj.title} style={{ height: '300px' }} />
      <br />
      <Card.Body>
        <h2>
          <Link href={`post/${postObj.id}`}>
            {postObj.title}
          </Link>
        </h2>
        <p className="card-text"><small className="text-body-secondary ">Created By: {postObj.user.first_name} {postObj.user.last_name}</small></p>
        <p className="card-text text-truncate truncate">{postObj.content}</p>
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
    user: PropTypes.string,
    id: PropTypes.string,
  }),
};

PostCard.defaultProps = {
  postObj: {
    title: 'Title',
  },
};

export default PostCard;
