import usePath from "./usePath"

const Route = ({ path, children }) => {
  const currentPath = usePath()
  return currentPath === path ? children : null
}

export default Route
