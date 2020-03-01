import React, { DragEvent } from 'react';

type Props = {
  children: JSX.Element;
  dragData: string;
};

function Draggable({ children, dragData }: Props) {
  const handleDragStart = (event: DragEvent, dragData: string): void => {
    event.stopPropagation();
    event.dataTransfer.dropEffect = 'move';
    event.dataTransfer?.setData('text/plain', dragData);
  };

  return (
    <div
      draggable
      onDragStart={event => {
        handleDragStart(event, dragData);
      }}
    >
      {children}
    </div>
  );
}

export default Draggable;
