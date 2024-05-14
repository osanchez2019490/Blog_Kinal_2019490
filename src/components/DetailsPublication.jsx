import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { publicationById, commentPost, commentPut, commentDelete } from '../service/api';
import CommentBox from '../components/comment/CommentsBox';
import { NavbarDocument } from '../components/navbars/Navbar';


export const DetailsPublication = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [publication, setPublication] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchPublicationDetails = async () => {
      const result = await publicationById(id);
      console.log('Publication details:', result);
      if (!result.error) {
        setPublication(result.data.publications);

        setComments(result.data.publications.comment || []);
      }
    };

    fetchPublicationDetails();
  }, [id]);

  const handleAddComment = async (text) => {
    const result = await commentPost({ text });
    console.log('Add comment result:', result);
    if (!result.error) {
      setComments([...comments, result.data]);
    }
  };

  const handleUpdateComment = async (commentId, newText) => {
    const result = await commentPut(commentId, { text: newText });
    console.log('Update comment result:', result);
    if (!result.error) {
      setComments(comments.map(comment => comment.id === commentId ? result.data : comment));
    }
  };

  const handleDeleteComment = async (commentId) => {
    const result = await commentDelete(commentId);
    console.log('Delete comment result:', result);
    if (!result.error) {
      setComments(comments.filter(comment => comment.id !== commentId));
    }
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  console.log('Comments:', comments);


  return (
    <div className="container mt-5" >
      <div className="row">
        <div className="col-md-8 ms-auto">
          {publication ? (
            <div className="text-center">
              <div className="card bg-light">
                <div className="card-body">
                  <h2 className="mb-4">{publication.title}</h2>
                  <img src={publication.urlImage} alt="Publication" className="img-fluid rounded mb-4" style={{ width: '100%', height: 'auto' }} />
                  <p className="lead">{publication.text}</p>
                  <a href={publication.urlProyect} className="btn btn-primary mb-4">GitHub Project</a>
                  <h2 className="mb-4">Author: {publication.author}</h2>
                </div>
              </div>
              <CommentBox
                comments={comments}
                onAddComment={handleAddComment}
                onUpdateComment={handleUpdateComment}
                onDeleteComment={handleDeleteComment}
              />
              <button className="btn btn-secondary mt-4" onClick={handleGoBack}>Go back</button>
            </div>
          ) : (
            <div className="text-center">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}
        </div>
        <div className="col-md-2">
          <NavbarDocument />
        </div>
      </div>
    </div>
  );
};


export default DetailsPublication;