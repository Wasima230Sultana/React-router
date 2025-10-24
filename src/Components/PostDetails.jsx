import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const PostDetails = () => {
    const post = useLoaderData();
    const navigate = useNavigate();
    return (
        <div>
            <h3>Post Details</h3>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <button onClick={() => navigate(-1)}>GO Back</button>
        </div>
    );
};

export default PostDetails;