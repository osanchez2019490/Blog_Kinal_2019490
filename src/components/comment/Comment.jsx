import React, { useState } from 'react';
import CommentForm from './CommentForm';

const Comment = ({ comment, onUpdate, onDelete }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(comment.text);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        onUpdate(editedText);
        setIsEditing(false);
    };

    const handleDelete = () => {
        onDelete();
    };

    return (
        <div className="card mb-3">
            <div className="card-body">
                {isEditing ? (
                    <CommentForm
                        value={editedText}
                        onChange={setEditedText}
                        onSubmit={handleSave}
                        onCancel={() => setIsEditing(false)}
                    />
                ) : (
                    <>
                        <p className="card-text">{comment.text}</p>
                        <div>
                            <button className="btn btn-primary me-2" onClick={handleEdit}>Edit</button>
                            <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};


export default Comment;
