/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { getSinglePost } from '../../api/post';
import { getPostComments } from '../../api/commentData';
import Sheep from '../../components/Secret/Sheep';
// import getPostTags from '../../api/postTags';

export default function ViewPost() {
  const [postDetails, setPostDetails] = useState({});
  //   const [postTags, setPostTags] = useState([]);
  const [comments, setComments] = useState([]);
  const [show, setShowComments] = useState(false);
  // const [showCreateComments, setShowCreateComments] = useState(false);
  const router = useRouter();

  const { id } = router.query;

  useEffect(() => {
    getSinglePost(id).then(setPostDetails);
    getPostComments(id).then(setComments);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  console.warn(postDetails);
  console.warn(comments);

  const handleCloseComments = () => setShowComments(false);
  const handleShowComments = () => setShowComments(true);
  // const handleCloseCreateComments = () => setShowCreateComments(false);
  // const handleShowCreateComments = () => setShowCreateComments(true);

  return (
    <>
      <Sheep />
      <div className="mt-5 d-flex flex-wrap">
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="single_img" src={postDetails.image_url} alt={postDetails.title} />
        </div>
        <div className="text-white ms-5 details">
          <h3>{postDetails.title}</h3>
          <p>{postDetails.content}</p>
          <div>
            Tags:
            <div className="tags">
              {postDetails.tags?.map((tag) => (
                <p className="card-text tag">
                  <small className="text-body-secondary ">{tag.label}</small>
                </p>
              ))}
            </div>
          </div>
          <br />
          <p className="card-text">
            <small className="text-body-secondary ">Published: {postDetails.publication_date}</small>
          </p>
        </div>
      </div>
      <div>
        <Button variant="primary" onClick={handleShowComments}>
          View Comments
        </Button>

        <Modal show={show} onHide={handleCloseComments}>
          <Modal.Header closeButton>
            <Modal.Title>Post Comments</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {comments?.map((comment) => (
              <div key={comment.id}>
                <p className="card-text">
                  <small className="text-body-secondary">Username: {comment.user?.username}</small>
                  <small className="text-body-secondary"> | Comment: {comment?.content}</small>
                  <hr />
                </p>
              </div>
            ))}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseComments}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      {/* <div>
        <Button variant="primary" onClick={handleShowCreateComments}>
          Create A Comment
        </Button>

        <Modal show={showCreateComments} onHide={handleCloseCreateComments}>
          <Modal.Header closeButton>
            <Modal.Title>Create Comment</Modal.Title>
          </Modal.Header>
          <Modal.Body>Hello</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseCreateComments}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div> */}
    </>
  );
}
