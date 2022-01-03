import { Select, MenuItem, FormControl, InputLabel } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    marginTop: theme.spacing(2),
  },
}))

const SelectInput = ({
  name,
  value,
  handleChange,
  label,
  placeholder,
  type,
  defaultValue,
  options,
  ...props
}) => {
  const classes = useStyles()
  placeholder = placeholder || name
  return (
    <FormControl className={classes.formControl}>
      <InputLabel shrink={true}>{name}</InputLabel>
      <Select
        value={value}
        onChange={(e) => handleChange(name, e.target.value)}
        {...props}
      >
        {options.map(({ value, label }) => {
          return (
            <MenuItem value={value} key={label}>
              {label}
            </MenuItem>
          )
        })}
      </Select>
    </FormControl>
  )
}

export default SelectInput
