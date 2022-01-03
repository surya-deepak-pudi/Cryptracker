import redirect from "./redirect"
import useAuth from "./useAuth"
import usePath from "./usePath"

const PrivateRoute = ({ path, children }) => {
  const currentPath = usePath()
  const isAuthenticated = useAuth()
  if (currentPath === path) {
    if (isAuthenticated) {
      return children
    } else {
      redirect("/")
    }
  }
  return null
}

export default PrivateRoute
