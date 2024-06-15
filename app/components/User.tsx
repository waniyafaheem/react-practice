import React from 'react';

interface UserType extends React.HTMLAttributes<HTMLDivElement> {
    id: string;
    name: string;
    email: string;
    phone: string;
}

// Extend HTML Attributes:

// The UserType interface extends React.HTMLAttributes<HTMLDivElement>. This allows the User component to accept any props that are valid for a <div> element, such as className, style, onClick, etc.
// Destructure rest:

// Destructure rest from the props in the function parameters. This contains any additional props passed to the component that are not explicitly listed in the UserType interface.
// Spread rest:

// Use the spread operator {...rest} inside the <div> element to pass down any additional HTML attributes to the <div>.
const User: React.FC<UserType> = ({ id, name, email, phone, ...rest }) => {
  return (
    <div className='border border-black rounded-md bg-slate-50 h-[250px]' {...rest}>
      <h1>{name}</h1>
      <p>{email}</p>
      <p>{phone}</p>
    </div>
  );
}

export default User;