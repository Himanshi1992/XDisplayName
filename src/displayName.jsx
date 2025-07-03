import React, { useState } from 'react';
import './displayName.css'

const DisplayForm = () => {
const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState ('');
const [fullName, setFullName] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName.trim() && lastName.trim()) {
        setFullName(`${firstName} ${lastName}`);
    }
};

return (
<div>
    <p><strong>Full Name Display</strong></p>
    <form onSubmit={handleSubmit}>
    First Name: <input type = "text" placeholder = "First Name" value={firstName} required 
    onChange={(e) => setFirstName(e.target.value)}/>
    <br/>
    Last Name: <input type = "text" placeholder = "Last Name" value={lastName} required 
    onChange={(e) => setLastName(e.target.value)}/>
    <br/>
    <button type="submit">
        Submit
    </button>
    </form>
    {fullName && (<p>Full Name: {fullName}</p>)}

</div>
);
};
export default DisplayForm;

