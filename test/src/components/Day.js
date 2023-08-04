import React from "react";
import { useDrop } from "react-dnd";
import dayjs from "dayjs";
function Day({ day, onDrop }) {
  const [{ isOver }, drop] = useDrop({
    accept: "TASK",
    drop: (item, monitor) => {
      const offset = monitor.getClientOffset();
      if (offset) {
        const newDay = day < 10 ? "0" + day.toString() : day.toString();
        const dayDate = dayjs(`2023-08-${newDay}`).format("YYYY-MM-DD");
        onDrop(item.id, dayDate, offset.x - 50, offset.y - 20);
      }
    },
  });
  return (
    <div ref={drop} className={isOver ? "select-day" : ""}>
      {isOver ? "" : day}
    </div>
  );
}

export default Day;
