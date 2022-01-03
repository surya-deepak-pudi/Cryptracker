import React, { useState, useEffect } from "react"

import usePath from "./usePath"
import error404 from "../assets/404Error.jpg"
import { Paper } from "@material-ui/core"

const styles = {
  paperContainer: {
    width: "80vw",
    height: "80vh",
    backgroundImage: `url(${error404})`,
    backgroundSize: "cover",
  },
}

const failback = () => {
  return <Paper style={styles.paperContainer}></Paper>
}
const Router = ({ children }) => {
  let routes = children.map((child) => {
    return child.props.path
  })
  let currentPath = usePath()
  if (routes.includes(currentPath)) {
    return <div>{children}</div>
  }
  return failback()
}

export default Router
