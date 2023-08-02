/* eslint-disable react/prop-types */
import { useDrop } from "react-dnd";

const CalendarDay = ({ hour, dayDate, onDrop }) => {
  const [, drop] = useDrop({
    accept: "TASK",
    drop: (item, monitor) => {
      // Retrieve the position of the drop
      const offset = monitor.getClientOffset();
      if (offset) {
        // Here, you can use the offset.x and offset.y to set the position of the dropped task.
        // You can use this information to position the task within the calendar day.
        onDrop(item.id, dayDate, offset.x - 50, offset.y - 40, hour);
      }
    },
  });

  return (
    <div ref={drop} className="calendar-day">
      <h3>{`${dayDate} ${hour}`}</h3>
    </div>
  );
};

export default CalendarDay;
