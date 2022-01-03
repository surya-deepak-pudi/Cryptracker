import { TextField } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { useEffect } from "react"

const useStyles = makeStyles({
  root: {
    margin: "1rem",
  },
  label: {
    display: "none",
  },
})
const Input = ({
  name,
  value,
  handleChange,
  label,
  placeholder,
  type,
  defaultValue,
  ...props
}) => {
  const classes = useStyles()

  placeholder = placeholder || name
  label = label || name
  useEffect(() => {
    handleChange(name, defaultValue)
  }, [])
  return (
    <TextField
      className={classes.root}
      type={type}
      placeholder={placeholder}
      label={name}
      value={value}
      InputLabelProps={{ shrink: true }}
      onChangeCapture={(e) => {
        e.preventDefault()
        handleChange(name, e.target.value)
      }}
      {...props}
    ></TextField>
  )
}

export default Input
