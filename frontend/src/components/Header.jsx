import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
      <Link to={`/`}> 
        <h2 className='text-3xl text-purple-600'>
          Strapi React Blog      
        </h2>
      </Link>
  );
}