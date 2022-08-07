import { Chart } from 'react-chartjs-2';
import * as DataTypes from '../ChartData/Data'

export const ChartCreator = (element,type) => {

  return new Chart(element, DataTypes[type]);
  
};

