import { Typography, Paper, Box } from "@material-ui/core"
import Select from "../input/select"
import Form from "../input/form"
import Input from "../input/input"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import TableHead from "@material-ui/core/TableHead"
import TableRow from "@material-ui/core/TableRow"
import { useState } from "react"
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  tableContianer: {
    margin: theme.spacing(1),
    width: 700,
    maxHeight: 440,
  },
  container: {
    margin: theme.spacing(2),
  },
  minInput: {
    minWidth: 100,
  },
  tableCell: {
    width: "5%",
  },
}))

const Crypto = () => {
  const classes = useStyles()
  const [logs, setLog] = useState([])
  const taskOptions = [
    { label: "", value: "" },
    { label: "Buy", value: "Buy" },
    { label: "Sell", value: "Sell" },
  ]
  const coinsOptions = [
    { label: "", value: "" },
    { label: "SHIB", value: "SHIB" },
    { label: "BTC", value: "BTC" },
    { label: "DOGE", value: "DOGE" },
  ]
  const headers = ["S.no.", "Date", "Task", "Coin", "Price", "Quantity"]
  return (
    <Box component="div" className={classes.container}>
      <Typography variant="h4" component="h2">
        Crypto
      </Typography>
      <Form
        name="CryptoLog"
        handleSubmit={(values) => {
          values = {
            ...values,
            Money: values.Price * values.Quantity,
            "S.no.": logs.length + 1,
          }
          setLog([...logs, values])
        }}
      >
        <Input name="Date" type="date"></Input>
        <Select
          name="Task"
          options={taskOptions}
          disableShrink={false}
          className={classes.minInput}
        ></Select>
        <Select
          name="Coin"
          options={coinsOptions}
          disableShrink={false}
          className={classes.minInput}
        ></Select>
        <Input name="Price" type="number"></Input>
        <Input name="Quantity" type="number"></Input>
      </Form>
      <>
        <TableContainer component={Paper} className={classes.tableContianer}>
          <Table stickyHeader={true}>
            <TableHead>
              <TableRow>
                {headers.map((head,id) => {
                  
                  return (
                    <TableCell className={classes.tableCell} align="right">
                      {head}
                    </TableCell>
                  )
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              {logs.map((log) => {
                return (
                  <TableRow key={log["S.no."]}>
                    {headers.map((head) => {
                      return (
                        <TableCell align="right" key={head + log["S.no."]}>
                          {log[head]}
                        </TableCell>
                      )
                    })}
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </>
    </Box>
  )
}

export default Crypto
