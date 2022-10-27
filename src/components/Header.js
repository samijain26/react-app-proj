import React from 'react'

export default function Header({category}) {
  return (
    <div>
      <h1 className="text-center">
        Top Stories from {category.toUpperCase()}
      </h1>
    </div>
  );
}
