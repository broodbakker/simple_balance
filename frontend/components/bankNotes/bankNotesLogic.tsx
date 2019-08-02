import { DragDropContext, DropResult } from "react-beautiful-dnd";
import React, { useState, useEffect } from "react";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

import { Columns, BankNotes } from "../../interfaces";

const DATA_UPDATE_MUTATION = gql`
  mutation updateData(
    $date: String
    $price: Int
    $description: String
    $id: String
  ) {
    UpdateData(date: $date, price: $price, description: $description, id: $id) {
      id
    }
  }
`;

type Props = {
  bankNotes: BankNotes;
  totals: number[];
  columns: Columns;
  titles: string[];
  children: (
    tablebankNotes: BankNotes,
    tableColumns: Columns,
    onDragEnd: (result: DropResult) => void,
    tableTotal: number[],
    tableTitles: string[]
  ) => JSX.Element;
};

//mutation input data
const updateBankNotes: React.FunctionComponent<Props> = props => {
  return (
    <Mutation mutation={DATA_UPDATE_MUTATION}>
      {(updateData: any) => (
        <BankNotesLogic {...props} updateData={updateData} />
      )}
    </Mutation>
  );
};

type PropsTable = {
  bankNotes: BankNotes;
  totals: number[];
  columns: Columns;
  titles: string[];
  updateData: any;
  children: (
    tablebankNotes: BankNotes,
    tableColumns: Columns,
    onDragEnd: (result: DropResult) => void,
    tableTotal: number[],
    tableTitles: string[]
  ) => JSX.Element;
};

const BankNotesLogic: React.FunctionComponent<PropsTable> = ({
  children,
  bankNotes,
  totals,
  columns,
  titles,
  updateData
}) => {
  const [tablebankNotes, setData] = useState(bankNotes);
  const [tableColumns, setColumns] = useState(columns);
  const [tableTotal, setTotal] = useState(totals);
  const [tableTitles, setTitles] = useState(titles);

  useEffect(() => {
    setData(bankNotes);
    setColumns(columns);
    setTotal(totals);
    setTitles(titles);
  }, [bankNotes, totals, columns, titles]);

  const onDragEnd = ({ destination, source, draggableId }: DropResult) => {
    if (!destination) return;
    // if dragged column is not moved
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    if (source.droppableId === destination.droppableId) {
      const newColumn = dragInsideColumn(
        tableColumns,
        source,
        destination,
        draggableId
      );
      setColumns(newColumn);
      return;
    }

    const newColumn = dragOutsideColumn(
      tableColumns,
      source,
      destination,
      draggableId
    );

    setColumns(newColumn);
  };

  const dragOutsideColumn = (
    tableColumns: Columns,
    source: { droppableId: string; index: number },
    { droppableId, index }: { droppableId: string; index: number },
    draggableId: string
  ) => {
    const columnDataIdStart = tableColumns[source.droppableId];
    const newColumnDataIdStart = Array.from(columnDataIdStart);
    const columnDataIdEnd = tableColumns[droppableId];
    newColumnDataIdStart.splice(source.index, 1);
    const newColumnDataIdEnd = Array.from(columnDataIdEnd);
    newColumnDataIdEnd.splice(index, 0, draggableId);
    updateData({ variables: { id: draggableId, description: droppableId } });
    return {
      ...tableColumns,
      [source.droppableId]: newColumnDataIdStart,
      [droppableId]: newColumnDataIdEnd
    };
  };

  const dragInsideColumn = (
    tableColumns: Columns,
    source: { droppableId: string; index: number },
    { droppableId, index }: { droppableId: string; index: number },
    draggableId: string
  ) => {
    const columnDataIdStart = tableColumns[droppableId];
    const newColumnDataIdStart = Array.from(columnDataIdStart);
    newColumnDataIdStart.splice(source.index, 1);
    newColumnDataIdStart.splice(index, 0, draggableId);
    return {
      ...tableColumns,
      [source.droppableId]: newColumnDataIdStart
    };
  };
  return (
    <>
      {children(
        tablebankNotes,
        tableColumns,
        onDragEnd,
        tableTotal,
        tableTitles
      )}
    </>
  );
};

export default updateBankNotes;
