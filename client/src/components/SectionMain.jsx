import { useDrop } from "react-dnd";
import "../task.css";
// eslint-disable-next-line react/prop-types
function SectionMain() {
  const [, drop] = useDrop(() => ({
    accept: "task",
    drop: (item, monitor) => {
      // Function called when an item is dropped.
      const offset = monitor.getSourceClientOffset();
      if (offset) {
        const x = offset.x;
        const y = offset.y;
        console.log("Dropped at coordinates:", x, y);
      }
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));
  const addItemToSection = (id) => {
    console.log("..../", id);
  };
  return (
    <section ref={drop} className="board-info-bar">
      <div className="board-controls">
        <h3>{`Section`}</h3>
      </div>
    </section>
  );
}

export default SectionMain;
