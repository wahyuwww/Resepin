import React from 'react'

const Button = ({className,title}) => {
  return (
    <button className={className} type="button">
      {title}
    </button>
  );
}

export default Button