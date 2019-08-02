type Props = {
  setDateToggle(arg1: string[]): void;
  dateToggle: string[];
};

import React, { useState, useEffect } from "react";
import DateFnsUtils from "@date-io/date-fns";
import {
  DatePicker,
  TimePicker,
  DateTimePicker,
  MuiPickersUtilsProvider
} from "@material-ui/pickers";

import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";

const defaultMaterialTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#022"
    }
  }
});

function App({ setDateToggle }: any) {
  const [selectedDate, handleDateChange] = useState(new Date());
  useEffect(() => {
    const newDate = `${selectedDate.getFullYear()}-${selectedDate.getMonth()}-${selectedDate.getDay()}`;
    setDateToggle(newDate);
  });

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <ThemeProvider theme={defaultMaterialTheme}>
        <DatePicker
          value={selectedDate}
          onChange={(e: any) => handleDateChange(e)}
        />
      </ThemeProvider>
    </MuiPickersUtilsProvider>
  );
}

const DatesToggle: React.FunctionComponent<Props> = ({
  setDateToggle,
  dateToggle
}) => (
  <>
    <App setDateToggle={setDateToggle} />
    <App setDateToggle={setDateToggle} />
  </>
);

{
  /* <select onChange={e => setDateToggle(e.target.value)}>
    <option>all</option>
    {options.map((option, index) => (
      <option key={index}>{option}</option>
    ))}
  </select> */
}

export default DatesToggle;
