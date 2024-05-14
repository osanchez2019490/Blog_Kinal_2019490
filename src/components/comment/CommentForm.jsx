import React, { useState } from 'react';
import {Input as InputComponent} from '../Input.jsx';
const CommentForm = ({ initialValue = '', onSubmit, onCancel }) => {
    const [text, setText] = useState(initialValue);

    const handleChange = (event) => {
        setText(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(text);
        setText('');
    };

    const handleCancel = () => {
        onCancel();
        setText('');
    };

    return (
        <div className="card p-3">
            <InputComponent
                label="Your Comment"
                value={text}
                onChangeHandler={handleChange}
                type="text"
                textarea={true}
            />
            <div className="mt-3">
                <button className="btn btn-primary me-2" onClick={handleSubmit}>Submit</button>
                <button className="btn btn-secondary" onClick={handleCancel}>Cancel</button>
            </div>
        </div>
    );
};


export default CommentForm;