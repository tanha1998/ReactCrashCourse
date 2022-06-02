import React from 'react'
import { Link } from 'react-router-dom'
import './About.scss'
export const About = () => {
  return (
    <div>
      <Link to="/">
        <span>go back</span>
      </Link>
      <h3>Design by HaNguyen</h3>
    </div>
  )
}
