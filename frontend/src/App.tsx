import * as React from 'react';
import { TextField } from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from 'dayjs';
function App() {
  // Set the min and max dates using dayjs
  type datesLimits = {
    minDate: string
    maxDate: string
  }
  type datesOfForm= {
    userDate : datesLimits
  }
  const [userdates,setUserdates] = React.useState<datesOfForm>({
    userDate:{
      "minDate": "20/07/2023",
      "maxDate": "28/07/2023"
    }
  })
  const minDate = dayjs(userdates.userDate.minDate, "DD/MM/YYYY"); // Replace '1 year' with your desired min date offset
  const maxDate = dayjs(userdates.userDate.maxDate, "DD/MM/YYYY"); // Replace '1 year' with your desired max date offset
  const [selectedDate, setSelectedDate] = React.useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Select Date"
        value={selectedDate}
        onChange={handleDateChange}
        minDate={minDate}
        maxDate={maxDate}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}

export default App;
