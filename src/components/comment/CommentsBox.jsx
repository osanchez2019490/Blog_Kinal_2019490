import React, { useState } from 'react';
import Comment from './Comment';
import CommentForm from './CommentForm';

const CommentBox = ({ comments, onAddComment, onUpdateComment, onDeleteComment }) => {
    const [newCommentText, setNewCommentText] = useState('');
    const [isAdding, setIsAdding] = useState(false);

    const handleAddComment = () => {
        if (newCommentText.trim() !== '') {
            onAddComment(newCommentText);
            setNewCommentText('');
        }
    };

    return (
        <div className="mt-4">
            <h4>Comments</h4>
            <div className="mb-3">
                {comments.map(comment => (
                    <Comment
                        key={comment._id}
                        comment={comment}
                        onUpdate={(newText) => onUpdateComment(comment._id, newText)}
                        onDelete={() => onDeleteComment(comment._id)}
                    />
                ))}
            </div>
            <div className="card mb-3">
                <div className="card-body">
                    <h5>Add a Comment</h5>
                    <CommentForm
                        initialValue={newCommentText}
                        onSubmit={handleAddComment}
                        onCancel={() => setIsAdding(false)}
                    />
                </div>
            </div>
        </div>
    );
};

export default CommentBox;