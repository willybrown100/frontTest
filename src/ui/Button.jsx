import React, { Children } from 'react'

export default function Button({ children,className }) {
  return <button className={` $
  ${className} bg-btn p-2 rounded-md px-4 text-white font-semibold`}>{children}</button>;
}
