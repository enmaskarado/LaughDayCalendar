import { useState } from "react";
import "../calendar.css";
import DraggableTask from "./DraggableTask";
import { v4 as uuidv4 } from "uuid";
import CalendarDay from "./CalendarDay";
import axios from "axios";
import dayjs from "dayjs";
const config = {
  headers: {
    "Content-Type": "application/json",
  },
};
function Calendar() {
  const [taskRead, setTaskRead] = useState({
    id: 1,
    x: 0,
    y: 0,
    name: "read harry potter",
    day: "",
    hour: "",
  });

  const handleDrop = (taskId, dayDate, x, y, hour) => {
    setTaskRead({
      ...taskRead,
      day: dayDate,
      x,
      y,
      hour,
    });
  };
  const saveTask = async () => {
    try {
      const body = JSON.stringify({
        rrule: taskRead.name,
        start_date: dayjs(taskRead.day).format("YYYY-MM-DD"),
        start_time: dayjs(`${taskRead.day} ${taskRead.hour}`).format(
          "YYYY-MM-DD hh:mm"
        ),
        end_date: dayjs(taskRead.day).format("YYYY-MM-DD"),
        end_time: dayjs(`${taskRead.day} ${taskRead.hour}`)
          .add(1, "hour")
          .format("YYYY-MM-DD hh:mm"),
        idCalendar: "1",
      });
      const respuesta = await axios.post(
        `http://localhost:5000/events`,
        body,
        config
      );
      console.log("LLLLLLLLLLLLLLLLLLLLLLLLLl");
      console.log(respuesta);
      console.log("LLLLLLLLLLLLLLLLLLLLLLLLLl");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="container">
      <div
        key={`${taskRead.id}-${taskRead.x}-${taskRead.y}`}
        style={{
          position: "absolute",
          left: taskRead.x,
          top: taskRead.y,
        }}
      >
        <DraggableTask className="taskRead" task={taskRead} />
      </div>
      <div
        style={{
          position: "absolute",
          left: "500px",
          top: "50px",
        }}
      >
        <button
          onClick={() => {
            saveTask();
          }}
        >
          SAVE
        </button>
      </div>
      <div className="calendar">
        <table>
          <thead>
            <tr>
              <th>Hours</th>
              <th>Mon</th>
              <th>Tue</th>
              <th>Wed</th>
              <th>Thu</th>
              <th>Fri</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>05:00</td>
              <td key={`${uuidv4()}`}>
                <CalendarDay
                  hour={"05:00"}
                  dayDate="2023-07-31"
                  onDrop={handleDrop}
                />
              </td>
              <td key={`${uuidv4()}`}>
                <CalendarDay
                  hour={"05:00"}
                  dayDate="2023-08-01"
                  onDrop={handleDrop}
                />
              </td>
              <td key={`${uuidv4()}`}>
                <CalendarDay
                  hour={"05:00"}
                  dayDate="2023-08-02"
                  onDrop={handleDrop}
                />
              </td>
              <td key={`${uuidv4()}`}>
                <CalendarDay
                  hour={"05:00"}
                  dayDate="2023-08-03"
                  onDrop={handleDrop}
                />
              </td>
              <td key={`${uuidv4()}`}>
                <CalendarDay
                  hour={"07:00"}
                  dayDate="2023-08-04"
                  onDrop={handleDrop}
                />
              </td>
            </tr>
            <tr>
              <td>06:00</td>
              <td key={`${uuidv4()}`}>
                <CalendarDay
                  hour={"06:00"}
                  dayDate="2023-07-31"
                  onDrop={handleDrop}
                />
              </td>
              <td key={`${uuidv4()}`}>
                <CalendarDay
                  hour={"06:00"}
                  dayDate="2023-08-01"
                  onDrop={handleDrop}
                />
              </td>
              <td key={`${uuidv4()}`}>
                <CalendarDay
                  hour={"06:00"}
                  dayDate="2023-08-02"
                  onDrop={handleDrop}
                />
              </td>
              <td key={`${uuidv4()}`}>
                <CalendarDay
                  hour={"06:00"}
                  dayDate="2023-08-03"
                  onDrop={handleDrop}
                />
              </td>
              <td key={`${uuidv4()}`}>
                <CalendarDay
                  hour={"07:00"}
                  dayDate="2023-08-04"
                  onDrop={handleDrop}
                />
              </td>
            </tr>
            <tr>
              <td>07:00</td>
              <td key={`${uuidv4()}`}>
                <CalendarDay
                  hour={"07:00"}
                  dayDate="2023-07-31"
                  onDrop={handleDrop}
                />
              </td>
              <td key={`${uuidv4()}`}>
                <CalendarDay
                  hour={"07:00"}
                  dayDate="2023-08-01"
                  onDrop={handleDrop}
                />
              </td>
              <td key={`${uuidv4()}`}>
                <CalendarDay
                  hour={"07:00"}
                  dayDate="2023-08-02"
                  onDrop={handleDrop}
                />
              </td>
              <td key={`${uuidv4()}`}>
                <CalendarDay
                  hour={"07:00"}
                  dayDate="2023-08-03"
                  onDrop={handleDrop}
                />
              </td>
              <td key={`${uuidv4()}`}>
                <CalendarDay
                  hour={"07:00"}
                  dayDate="2023-08-04"
                  onDrop={handleDrop}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Calendar;
