import React from 'react'
import { Link } from 'react-router-dom'

export default function Logo() {
  return (
    <Link to="/">
    <div>
        <img src='/images/logo.png'alt='logo'/>
    </div>
    </Link>
  )
}
