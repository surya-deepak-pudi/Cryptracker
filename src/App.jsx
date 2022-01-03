import { useState, Suspense, lazy } from "react"
import { createTheme, ThemeProvider } from "@material-ui/core/styles"
import { Paper, CircularProgress } from "@material-ui/core"
import NavBar from "./components/NavBar"
import Landing from "./pages/Landing"
import Route from "./router/Route.js"
import Router from "./router/Router.js"
import { DarkContext } from "./context/context"

const CryptoTracker = lazy(() => {
  return import("./pages/CryptoTracker")
})
const Login = lazy(() => import("./pages/Login"))
const Charts = lazy(() => import("./pages/Charts.jsx"))

const LoanCaluculator = lazy(() => {
  return import("./pages/DepositCalculator")
})

const App = () => {
  const [darkMode, setDarkMode] = useState(false)

  const theme = createTheme({
    palette: {
      type: darkMode ? "dark" : "light",
      primary: {
        main: "#212121",
      },
      secondary: {
        main: "#b71c1c",
      },
    },
    typography: {
      h1: {
        fontFamily: "Lobster",
      },
    },
  })
  const paperStyle = {
    minHeight: "100vh",
    minWidth: "100vw",
    borderRadius: "0%",
    overflow: "hidden",
  }
  return (
    <DarkContext.Provider value={darkMode}>
      <ThemeProvider theme={theme}>
        <Paper style={paperStyle}>
          <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
          <Router failBack="">
            <Route path="/">
              <Landing></Landing>
            </Route>
            <Route path="/crypto">
              <Suspense fallback={<CircularProgress />}>
                <CryptoTracker></CryptoTracker>
              </Suspense>
            </Route>
            <Route path="/login">
              <Suspense fallback={<CircularProgress />}>
                <Login />
              </Suspense>
            </Route>
            <Route path="/loans">
              <Suspense fallback={<CircularProgress />}>
                <LoanCaluculator />
              </Suspense>
            </Route>
            <Route path="/charts">
              <Suspense fallback={<CircularProgress />}>
                <Charts />
              </Suspense>
            </Route>
          </Router>
        </Paper>
      </ThemeProvider>
    </DarkContext.Provider>
  )
}

export default App
