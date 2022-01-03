import React from "react"
import redirect from "./redirect"
import "./link.css"

const Link = ({ href, children }) => {
  const handleChange = (e) => {
    e.preventDefault()
    redirect(href)
  }
  return (
    <a href={href} onClick={handleChange}>
      {children}
    </a>
  )
}

export default Link
