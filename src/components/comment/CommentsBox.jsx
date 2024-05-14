import React, { useState } from 'react';
import Comment from './Comment';
import CommentForm from './CommentForm';

const CommentBox = ({ comments, onAddComment, onUpdateComment, onDeleteComment }) => {
    const [newCommentText, setNewCommentText] = useState('');

    const handleAddComment = () => {
        if (newCommentText.trim() !== '') {
            onAddComment(newCommentText);
            setNewCommentText('');
        }
    };

    return (
        <div className="card mb-3">
            <div className="card-body">
                {isEditing ? (
                    <CommentForm
                        initialValue={editedText}
                        onSubmit={handleSave}
                        onCancel={() => setIsEditing(false)}
                    />
                ) : (
                    <>
                        <p className="card-text">{editedText}</p>
                        <div className="d-flex">
                            <button className="btn btn-primary me-2" onClick={handleEdit}>Edit</button>
                            <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};


export default CommentBox;