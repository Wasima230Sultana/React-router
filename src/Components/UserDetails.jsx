import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetails = () => {
    const user = useLoaderData()
    // console.log(user)
    const {website, name} = user;
    return (
        <div>
            <h3>User details</h3>
            <p>Website : {website}</p>
            <p>Name : {name}</p>
        </div>
    );
};

export default UserDetails;