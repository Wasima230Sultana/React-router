import React from 'react';
import { useLoaderData } from 'react-router';

const Users = () => {
    const users = useLoaderData();
    console.log(users)
    return (
        <div>
            <h3>This is users page</h3>
        </div>
    );
};

export default Users;