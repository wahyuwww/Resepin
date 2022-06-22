import React from 'react'

const Button = ({className,title}) => {
  return (
    <button className={className} >
      {title}
    </button>
  );
}

export default Button