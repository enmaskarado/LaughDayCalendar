import * as React from "react";
import { TextField } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import axios from "axios";
function App() {
  // Set the min and max dates using dayjs
  type datesLimits = {
    minDate: string;
    maxDate: string;
  };
  type datesOfForm = {
    userDate: datesLimits;
    name: string
  };
  const [userdates, setUserdates] = React.useState<datesOfForm>({
    userDate: {
      minDate: "20/07/2023",
      maxDate: "28/07/2023",
    },
    name :'KLLL'
  });
  const minDate = dayjs().add(-1,'year'); // Replace '1 year' with your desired min date offset
  const maxDate = dayjs().add(1,'year'); // Replace '1 year' with your desired max date offset
  const [selectedDate, setSelectedDate] = React.useState(null);

  const handleDateChange = (date) => {
    //setSelectedDate(date);
  };
  const onSave =()=>{
    const test = {
      userDate: {
        minDate: "01/06/2022",
        maxDate: "08/07/2024",
      },
      name :'KL1'
    }
    axios
      .post("http://localhost:5001/saveData", test)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  const fetchData = () => {
    axios.get('http://localhost:5001/getData')
    .then((response) => {
    setUserdates(response.data);
    })
    .catch((error) => {
    console.error(error);
    });
    };
  React.useEffect(()=>{

  },[userdates])
  return (
    <>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Select Date"
        value={selectedDate}
        onChange={handleDateChange}
        minDate={ userdates.userDate?dayjs(userdates.userDate.minDate): minDate}
        maxDate={ userdates.userDate?dayjs(userdates.userDate.maxDate): maxDate}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
    <button onClick={async()=>{
      await onSave()
      await fetchData()
    }}>
      save
    </button>
    <pre>{JSON.stringify(userdates, null, 2)}</pre>
    </>
  );
}

export default App;
