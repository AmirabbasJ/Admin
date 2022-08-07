import React from "react";
import Card from "../../UI/Card/Card";
import { ChartCreator } from "../ChartCreator/ChartCreator";
import { useEffect, useRef } from "react";
import { getTextsOf } from "../../../Texts/Texts";
import classes from "./Chart.module.css";
const Chart = props => {
  const { type } = props;
  const types = { provider: "Chart", type };
  const chartData = getTextsOf(types);

  const { height } = chartData;
  const { header, footer } = chartData.text;

  useEffect(() => {
    ChartCreator(chart.current, type);
  });
  const chart = useRef(null);

  return (
    <React.Fragment>
      <Card header={header} footer={footer}>
        <div className={classes["Chart"]}>
          <canvas height={height} ref={chart} />
        </div>
      </Card>
    </React.Fragment>
  );
};

export default Chart;
