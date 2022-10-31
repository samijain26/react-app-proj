import React from 'react'

export default function Header({category}) {
  return (
    <div className='container'>
      <h2 className="text-center mt-4 ">
        Top Stories :  {category.toUpperCase()}
      </h2>
    </div>
  );
}
