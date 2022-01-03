import { Typography, makeStyles } from "@material-ui/core"
import { useState } from "react"
import { Box } from "@material-ui/core"

import Form from "../input/form"
import Input from "../input/input"

const useStyles = makeStyles((theme) => ({
  container: {
    margin: theme.spacing(2),
  },
  result: {
    fontSize: 20,
  },
}))

const DepositCalculator = () => {
  const [total, setTotal] = useState()
  const classes = useStyles()
  const caluculate = ({
    Principle,
    Interest,
    Period,
    CompoundingPeriod,
    StartDate,
  }) => {
    console.log(total)
    Principle = parseInt(Principle)
    Interest = parseInt(Interest)
    Period = parseInt(Period)
    CompoundingPeriod = parseInt(CompoundingPeriod)

    let CPI = Interest / 100 / (12 / CompoundingPeriod)

    const intrestConstant = 1 + CPI

    let iterativeCount = (Period * 12) / CompoundingPeriod

    for (let i = 0; i < iterativeCount; i++) {
      Principle = intrestConstant * Principle
      Principle = Math.round((Principle + Number.EPSILON) * 100) / 100
    }
    setTotal(Principle)
  }
  return (
    <Box component="div" className={classes.container}>
      <Typography variant="h4" component="h2">
        Deposit Caluculator
      </Typography>
      <Form
        name=""
        handleSubmit={(values) => {
          caluculate(values)
        }}
      >
        <Input name="Principle" type="number" required></Input>
        <Input name="Interest" type="number" required={true}></Input>
        <Input name="Period" type="number" required={true}></Input>
        <Input
          name="CompoundingPeriod"
          type="number"
          disabled="true"
          defaultValue="3"
          required={true}
        ></Input>
      </Form>
      {total && (
        <>
          <p className={classes.result}>Total amount is: {total}</p>
        </>
      )}
    </Box>
  )
}

export default DepositCalculator
