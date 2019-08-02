import React from "react";
import { Draggable, DraggableProvided } from "react-beautiful-dnd";
import styled from "styled-components";
import { BankNote } from "../../interfaces";

type BoardItemStylesProps = {
  isDragging: boolean;
};

const TaskContainer = styled.div<BoardItemStylesProps>`
  border: red 1px solid;
  padding: 0.2em 0;
  display: flex;
  justify-content: center;
  margin-bottom: 0.2em;
  border-radius: 0.2em;
`;

type Props = {
  data: BankNote;
  index: number;
};

const Task: React.FunctionComponent<Props> = ({ data, index }) => (
  <Draggable draggableId={data.id} index={index} key={data.id}>
    {(provided: DraggableProvided) => (
      <div
        {...provided.dragHandleProps}
        {...provided.draggableProps}
        ref={provided.innerRef}
      >
        <div>
          {data.date} €{data.price},-
        </div>
        {provided.placeholder}
      </div>
    )}
  </Draggable>
);

export default Task;
