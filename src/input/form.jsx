import { Children, cloneElement, useState } from "react"
import { Button } from "@material-ui/core"

const Form = ({ children, name, handleSubmit }) => {
  let initialState = {}
  children.map((child) => {
    initialState = {
      ...initialState,
      [child.props.name]: child.props.defaultValue || "",
    }
  })
  const [formValue, setFormValue] = useState(initialState)
  const handleChange = (name, val) => {
    setFormValue({ ...formValue, [name]: val })
  }
  return (
    <form
      name={name}
      onSubmit={(e) => {
        e.preventDefault()
        handleSubmit(formValue)
      }}
    >
      {Children.map(children, (child) => {
        return cloneElement(
          child,
          { value: formValue[child.props.name], handleChange },
          null
        )
      })}
      <div>
        <Button type="submit">Submit</Button>
      </div>
    </form>
  )
}

export default Form
