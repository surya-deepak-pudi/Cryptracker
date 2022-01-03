import React, { Component, useContext } from "react"
// import logo from "./logo.svg"
// import "./App.css"
import * as am4core from "@amcharts/amcharts4/core"
import * as am4charts from "@amcharts/amcharts4/charts"
import am4themes_material from "@amcharts/amcharts4/themes/material"
import am4themes_animated from "@amcharts/amcharts4/themes/animated"
import data from "./data.js"
import { DarkContext } from "../context/context"
import { dark } from "@material-ui/core/styles/createPalette"

am4core.useTheme(am4themes_animated)
function am4themes_myTheme(target) {
  if (target instanceof am4charts.Axis) {
    target.background.fill = am4core.color("#DCCCA3")
  }

  if (target instanceof am4charts.AxisRenderer) {
    target.minLabelPosition = 0.1
    target.maxLabelPosition = 0.9
  }
  if (target instanceof am4charts.Column) {
    target.color = "red"
  }
}
am4core.useTheme(am4themes_myTheme)

class App extends Component {
  componentDidMount() {
    let chart = am4core.create("chartdiv", am4charts.XYChart)

    chart.paddingRight = 100
    console.log()

    // let visits = 10
    // for (let i = 1; i < 366; i++) {
    //   visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10)
    //   data.push({ date: new Date(2018, 0, i), name: "name" + i, value: visits })
    // }
    // console.log(data)

    chart.data = data

    let dateAxis = chart.xAxes.push(new am4charts.DateAxis())
    dateAxis.renderer.grid.template.location = 0

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis())
    valueAxis.tooltip.disabled = false
    valueAxis.renderer.grid.disabled = true
    valueAxis.renderer.minWidth = 35

    let series = chart.series.push(new am4charts.LineSeries())

    series.dataFields.dateX = "date"
    series.dataFields.valueY = "value"

    series.tooltipText = "{valueY.value}"
    chart.cursor = new am4charts.XYCursor()

    let scrollbarX = new am4charts.XYChartScrollbar()
    scrollbarX.series.push(series)
    chart.scrollbarX = scrollbarX

    this.chart = chart
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose()
    }
  }

  render() {
    return (
      <>
        <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
        <HighChart></HighChart>
      </>
    )
  }
}

const HighChart = () => {
  const darkMode = useContext(DarkContext)
  return <>High and mode is {"" + darkMode}</>
}

export default App
