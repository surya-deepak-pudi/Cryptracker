import { useSelector } from "react-redux"

const useAuth = () => {
  const auth = useSelector((state) => state.auth)
  return auth.id ? true : false
}

export default useAuth
