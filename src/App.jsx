import { Typography } from "@material-ui/core"
import { createTheme, ThemeProvider } from "@material-ui/core/styles"

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#8E05C2",
    },
  },
  typography: {
    h1: {
      fontFamily: "'Lobster'",
    },
  },
})

const App = () => {
  return <ThemeProvider theme={theme}></ThemeProvider>
}

export default App
