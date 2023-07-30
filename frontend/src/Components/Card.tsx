import React from 'react';
import { useDrag, DragSourceMonitor } from 'react-dnd';
import { ItemTypes } from './ItemTypes'; // Assuming ItemTypes is defined somewhere with a constant 'pet'

interface CardProps {
  id: string;
  name: string;
}

export const Card: React.FC<CardProps> = ({ id, name }) => {
  const [{ isDragging }, dragRef] = useDrag({
    type: ItemTypes.pet,
    item: { id, name },
    collect: (monitor: DragSourceMonitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div className='pet-card' ref={dragRef}>
      {name}
      {isDragging && '😱'}
    </div>
  );
};
